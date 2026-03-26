import ExerciseLibrarySection from "./components/ExerciseLibrarySection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PilatesMouseEffect from "./components/PilatesMouseEffect";
import ProblemSection from "./components/ProblemSection";
import SignupForm from "./components/SignupForm";
import TrustStrip from "./components/TrustStrip";
import WaveDivider from "./components/WaveDivider";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <PilatesMouseEffect />
      <Navbar />
      <main>
        <HeroSection />
        <WaveDivider />
        <ProblemSection />
        <WaveDivider flip />
        <FeaturesSection />
        <WaveDivider flip />
        <ExerciseLibrarySection />
        <TrustStrip />
        <WaveDivider />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
}
