import HeroIntro from "@/components/hero/HeroIntro";
import StoryChapter from "@/components/story/StoryChapter";
import ProjectsShowcase from "@/components/projects/ProjectsShowcase";
import SkillsSection from "@/components/skills/SkillsSection";
import CurrentlyLearning from "@/components/skills/CurrentlyLearning";
import JourneyTimeline from "@/components/journey/JourneyTimeline";
import AchievementsSection from "@/components/achievements/AchievementsSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main className="w-full relative overflow-x-hidden">
      <section className="relative w-full h-screen">
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
        content="My vision is to build intelligent software products that combine AI and modern web technologies to solve real-world problems. I aim to specialize in AI-powered SaaS applications, automation systems, and developer tools that create measurable impact for businesses and users." 
      />
      
      <SkillsSection />
      
      <CurrentlyLearning />

      <ProjectsShowcase />

      <JourneyTimeline />
      
      <AchievementsSection />

      <ContactSection />
    </main>
  );
}
