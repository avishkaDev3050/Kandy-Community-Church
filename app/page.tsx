import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CommunityHubPreview from "@/components/ui/CommunityHubPreview";
import Hero from "@/components/ui/Hero";
import MinistryExpressions from "@/components/ui/MinistryExpressions";
import MissionVision from "@/components/ui/MissionVision";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MissionVision />
        <MinistryExpressions />
        <CommunityHubPreview />
        <Footer />
      </main>
    </div>
  );
}