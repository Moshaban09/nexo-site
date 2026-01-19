import {
  Comparison,
  FAQ,
  Features,
  Hero,
  HowItWorks,
  Layout,
  ModernCTA,
  Templates,
} from "..";

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Templates />
      <Comparison />
      <FAQ />
      <ModernCTA />
    </Layout>
  );
};
