import HeroIntro from "@/components/hero/HeroIntro";
import StoryChapter from "@/components/story/StoryChapter";
import ProjectsShowcase from "@/components/projects/ProjectsShowcase";
import SkillsSection from "@/components/skills/SkillsSection";
import JourneyTimeline from "@/components/journey/JourneyTimeline";
import AchievementsSection from "@/components/achievements/AchievementsSection";
import TestimonialCarousel from "@/components/testimonials/TestimonialCarousel";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <section className="relative w-full h-screen snap-center">
        <HeroIntro />
      </section>
      
      <StoryChapter 
        index={1} 
        title="The Journey" 
        content="I've been building for the web for over a decade. What started as simple HTML pages has evolved into a passion for crafting immersive, interactive digital experiences." 
      />
      
      <StoryChapter 
        index={2} 
        title="The Vision" 
        content="My goal is to bridge the gap between design and engineering. I believe the best applications feel less like software and more like magic." 
      />
      
      <SkillsSection />

      <ProjectsShowcase />

      <JourneyTimeline />
      
      <AchievementsSection />
      
      <TestimonialCarousel />
    </div>
  );
}
