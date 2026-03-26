import { Button } from "@/components/ui/button";

export default function Navbar() {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display font-bold text-xl text-foreground tracking-tight">
          Mouing
        </span>
        <Button
          onClick={scrollToSignup}
          className="bg-primary text-primary-foreground hover:bg-sage-dark text-sm px-5"
          data-ocid="nav.primary_button"
        >
          Get Early Access
        </Button>
      </div>
    </header>
  );
}
