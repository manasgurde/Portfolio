import HeroIntro from "@/components/hero/HeroIntro";
import StoryChapter from "@/components/story/StoryChapter";
import ProjectsShowcase from "@/components/projects/ProjectsShowcase";
import SkillsSection from "@/components/skills/SkillsSection";
import JourneyTimeline from "@/components/journey/JourneyTimeline";
import AchievementsSection from "@/components/achievements/AchievementsSection";
import TestimonialCarousel from "@/components/testimonials/TestimonialCarousel";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <section className="relative w-full h-screen snap-center">
        <HeroIntro />
      </section>
      
      <StoryChapter 
        index={1} 
        title="The Journey" 
        content="I am a motivated Full Stack Developer and AI enthusiast, currently pursuing my B.Tech in Computer Science. My passion lies in building intelligent, scalable web applications that solve real-world problems." 
      />
      
      <StoryChapter 
        index={2} 
        title="The Vision" 
        content="From machine learning algorithms to responsive React frontends, I strive to bridge the gap between complex AI logic and user-centric software design. I believe in writing code that is not only robust, but magical to interact with." 
      />
      
      <SkillsSection />

      <ProjectsShowcase />

      <JourneyTimeline />
      
      <AchievementsSection />

      <ContactSection />
    </div>
  );
}
