import { Layout } from '../components/Layout';
import { Features } from '../components/sections/Features';
import { Hero } from '../components/sections/Hero';
import { ModernCTA } from '../components/sections/ModernCTA';
import { TechStack } from '../components/sections/TechStack';

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <TechStack />
      <ModernCTA />
    </Layout>
  );
};
