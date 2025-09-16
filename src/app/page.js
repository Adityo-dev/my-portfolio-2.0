// import components
import AboutMe from "@/components/aboutMe/AboutMe";
import ContactSection from "@/components/contact/Contact";
import FeatureWork from "@/components/projects/FeatureWork";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <FeatureWork />
      <Services />
      <ContactSection />
    </>
  );
}
