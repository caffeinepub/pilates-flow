import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function HeroSection() {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-32 px-6 overflow-hidden">
      {/* Animated background gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-0 left-1/4 w-[700px] h-[600px] rounded-full bg-gradient-radial from-sage/20 via-accent/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full bg-gradient-radial from-primary/15 via-accent/5 to-transparent blur-3xl" />
        {/* Subtle dot pattern */}
        <svg
          role="presentation"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent/70 border border-sage/30 text-accent-foreground text-sm font-medium font-body px-4 py-1.5 rounded-full mb-7"
          >
            <span className="w-2 h-2 bg-sage rounded-full animate-pulse" />
            Now accepting early access
          </motion.div>

          <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight text-foreground mb-6">
            Plan your Pilates classes in{" "}
            <span className="text-sage italic">minutes</span>, not hours
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
            Mouing helps Pilates instructors create, organize and structure
            their classes — so you can focus on your students, not your notes.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button
              onClick={scrollToSignup}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-sage-dark px-8 py-6 text-base rounded-xl shadow-sage-glow"
              data-ocid="hero.primary_button"
            >
              Get early access
            </Button>
            <p className="text-muted-foreground text-sm">
              Free during beta · No credit card needed
            </p>
          </div>
        </motion.div>

        {/* Right column — real instructor image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex items-center justify-center"
        >
          <div className="relative w-full max-w-[420px]">
            {/* Glow ring behind image */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sage/30 to-accent/20 blur-2xl"
            />

            {/* Image container */}
            <div className="relative rounded-3xl overflow-hidden shadow-hero border border-sage/20">
              <img
                src="/assets/generated/hero-instructor.dim_800x700.png"
                alt="Pilates instructor planning classes"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Subtle gradient overlay at bottom for legibility */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Floating badge — top right */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-6 bg-card border border-border rounded-2xl px-4 py-2.5 shadow-card text-sm font-medium text-foreground font-body"
            >
              ✅ Class ready in 3 min
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{
                duration: 3.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-6 bg-card border border-border rounded-2xl px-4 py-2.5 shadow-card text-sm font-medium text-foreground font-body"
            >
              📚 150+ exercises
            </motion.div>

            {/* Third badge — mid left */}
            <motion.div
              animate={{ x: [-3, 3, -3] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 -left-10 -translate-y-1/2 bg-primary/10 border border-sage/30 rounded-2xl px-3 py-2 shadow-card text-xs font-medium text-foreground font-body"
            >
              🗓️ 8 groups tracked
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
