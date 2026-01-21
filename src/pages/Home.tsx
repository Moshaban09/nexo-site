import {
  Comparison,
  FAQ,
  Features,
  Hero,
  HowItWorks,
  Layout,
  StatsBanner,
  Templates
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
      <StatsBanner />
    </Layout>
  );
};
