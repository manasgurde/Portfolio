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
        content="My journey began with a curiosity for technology and problem-solving. Over time, I transitioned from learning programming fundamentals to building full-stack applications, AI-powered tools, and scalable web platforms. Each project has strengthened my passion for creating intelligent systems that solve real-world challenges and deliver meaningful user experiences." 
      />
      
      <StoryChapter 
        index={2} 
        title="The Vision" 
        content="I envision a future where intelligent software empowers people to work smarter, create faster, and solve problems more effectively. My goal is to build AI-powered products, automation systems, and scalable SaaS solutions that generate measurable impact and bridge the gap between innovation and practicality." 
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
