import { motion } from 'framer-motion';
import { Download, Star, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fadeIn } from '../../lib/animations';
import { fetchProjectStats, type ProjectStats } from '../../lib/stats';

const CountUp = ({ value, duration = 2 }: { value: number, duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        if (start === end) return;

        let totalMiliseconds = duration * 1000;
        let incrementTime = (totalMiliseconds / end);

        let timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [value, duration]);

    return <span>{count}</span>;
};

export const StatsBanner = () => {
    const [stats, setStats] = useState<ProjectStats>({
        stars: 0,
        downloads: 0,
        setupTime: '< 25s'
    });

    useEffect(() => {
        fetchProjectStats().then(setStats);
    }, []);

    const formatDownloads = (num: number) => {
        if (num >= 1000) {
            return <span><CountUp value={Math.floor(num/1000)} />.{Math.floor((num%1000)/100)}K+</span>;
        }
        return <CountUp value={num} />;
    };

    const statItems = [
        {
            label: "Downloads",
            value: formatDownloads(stats.downloads),
            icon: Download,
            color: "text-blue-400",
            bg: "bg-blue-500/10"
        },
        {
            label: "GitHub Stars",
            value: <CountUp value={stats.stars} />,
            icon: Star,
            color: "text-yellow-400",
            bg: "bg-yellow-500/10"
        },
        {
            label: "Setup Time",
            value: stats.setupTime,
            icon: Zap,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10"
        }
    ];

    return (
        <section className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {statItems.map((item, idx) => (
                        <motion.div
                            key={item.label}
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className={`p-3 rounded-2xl ${item.bg} ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10`}>
                                <item.icon size={24} />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                                {item.value}
                            </div>
                            <div className="text-sm font-medium text-neutral-500 uppercase tracking-widest">
                                {item.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
