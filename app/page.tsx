import HomeContactForm from "@/components/contact-form/HomeCantactForm";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CommunityHubPreview from "@/components/ui/CommunityHubPreview";
import Hero from "@/components/ui/Hero";
import MinistryExpressions from "@/components/ui/MinistryExpressions";
import MissionVision from "@/components/ui/MissionVision";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#120E0B] text-white selection:bg-[#FFCC00] selection:text-[#120E0B] relative overflow-hidden">
      {/* Background Neon Ambient Glows & Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top Gold Halo Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#FFCC00]/15 via-[#D4A359]/5 to-transparent blur-[150px] rounded-full" />
        
        {/* Side Ambient Lights */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#D4A359]/10 blur-[140px] rounded-full" />
        <div className="absolute top-2/3 -right-40 w-96 h-96 bg-[#FFCC00]/10 blur-[140px] rounded-full" />

        {/* Subtle Futuristic Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 space-y-12">
          <Hero />
          <MissionVision />
          <MinistryExpressions />
          <CommunityHubPreview />
          <HomeContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}