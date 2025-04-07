import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/hero";
import ProjectStudy from "@/components/project-study";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ProjectStudy />
      <Experience />
      <AboutMe />
    </>
  );
}
