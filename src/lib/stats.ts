export interface ProjectStats {
  stars: number;
  downloads: number;
  setupTime: string;
}

const CACHE_KEY = 'nexo-stats-cache-v3';
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

interface CacheData {
  stats: ProjectStats;
  timestamp: number;
}

export async function fetchProjectStats(): Promise<ProjectStats> {
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    const data: CacheData = JSON.parse(cached);
    if (Date.now() - data.timestamp < CACHE_TTL) {
      return data.stats;
    }
  }

  try {
    const [githubRes, npmRes] = await Promise.all([
      fetch('https://api.github.com/repos/Moshaban09/create-nexo'),
      fetch('https://api.npmjs.org/downloads/point/last-month/create-nexo')
    ]);

    const githubData = await githubRes.json();
    const npmData = await npmRes.json();

    const stats: ProjectStats = {
      stars: githubData.stargazers_count ?? 0,
      downloads: npmData.downloads ?? 0,
      setupTime: '< 25s'
    };

    localStorage.setItem(CACHE_KEY, JSON.stringify({
      stats,
      timestamp: Date.now()
    }));

    return stats;
  } catch (error) {
    console.error('Failed to fetch stats:', error);
    return {
      stars: 0,
      downloads: 0,
      setupTime: '< 2s'
    };
  }
}
