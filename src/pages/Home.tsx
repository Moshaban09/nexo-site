import {
  Comparison,
  FAQ,
  Features,
  Hero,
  HowItWorks,
  Layout,
  StatsBanner
} from "..";
import { Templates } from "../components/sections/Templates";

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Templates />
      <HowItWorks />
      <Comparison />
      <FAQ />
      <StatsBanner />
    </Layout>
  );
};
