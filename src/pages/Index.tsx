import Hero from "@/components/Hero";
import About from "@/components/About";
import TrainingFormats from "@/components/TrainingFormats";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <TrainingFormats />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
