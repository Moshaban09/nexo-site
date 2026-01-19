import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-transparent text-white selection:bg-blue-500/30 flex flex-col">
      <div className="fixed inset-0 z-0 bg-[url('/noise.png')] opacity-[0.03] base pointer-events-none mix-blend-overlay"></div>

      <Navbar />

      <main className="relative z-10 w-full flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};
