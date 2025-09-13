// import components
import AboutMe from "@/components/home/aboutMe/AboutMe";
import ContactSection from "@/components/home/contact/Contact";
import FeatureWork from "@/components/home/featureWork/FeatureWork";
import Hero from "@/components/home/hero/Hero";
import LatestArticle from "@/components/home/latestArticle/LatestArticle";
import Services from "@/components/home/services/Services";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <AboutMe />
      <FeatureWork />
      <Services />
      <ContactSection />
      <LatestArticle />
    </div>
  );
}
