import {
    Comparison,
    FAQ,
    Features,
    Hero,
    HowItWorks,
    Layout,
    StatsBanner
} from "..";

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Comparison />
      <FAQ />
      <StatsBanner />
    </Layout>
  );
};
