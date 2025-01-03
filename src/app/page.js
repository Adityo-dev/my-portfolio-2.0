import Image from "next/image";
// import components
import Hero from "@/components/home/hero/Hero";
import AboutMe from "@/components/home/aboutMe/AboutMe";
import FeatureWork from "@/components/home/featureWork/FeatureWork";
import Services from "@/components/home/services/Services";
import LatestArticle from "@/components/home/latestArticle/LatestArticle";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <FeatureWork />
      <Services />
      <LatestArticle />
    </div>
  );
}
