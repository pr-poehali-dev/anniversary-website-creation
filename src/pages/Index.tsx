import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import PhotoGallery from "@/components/PhotoGallery";
import Counter from "@/components/Counter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <HeroSection />
      <Counter />
      <Timeline />
      <PhotoGallery />
    </div>
  );
};

export default Index;
