import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { WhyInvest } from "@/components/home/WhyInvest";
import { Services } from "@/components/home/Services";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { DemoProjects } from "@/components/home/DemoProjects";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyInvest />
      <Services />
      <FeaturedProjects />
      <DemoProjects />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
