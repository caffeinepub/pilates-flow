import { BookOpen, CheckCircle2, History, Search } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: BookOpen,
    title: "Build classes in minutes",
    description:
      "Access a smart, searchable exercise library and assemble a full session in just a few clicks — no starting from scratch.",
    color: "bg-sage/15 text-primary",
  },
  {
    icon: Search,
    title: "Organize by level, focus or muscle group",
    description:
      "Tag and filter your sessions so the right class is always one search away, no matter how many groups you teach.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: History,
    title: "Never repeat the same class twice by accident",
    description:
      "Your full history is tracked per group. Mouing shows what you taught last week so you always bring something fresh.",
    color: "bg-rose-50 text-rose-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Section background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20 -z-10"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest font-body font-semibold text-primary mb-4">
            What Mouing does
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
            Everything you need, nothing you don't
          </h2>
        </motion.div>

        {/* Split layout: features left, mockup right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature cards */}
          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="flex gap-5 p-7 bg-card border border-border rounded-2xl shadow-card hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon circle */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                    feature.color
                  }`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* App mockup with browser chrome */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Glow behind mockup */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-sage/20 to-accent/30 blur-2xl"
            />

            {/* Browser chrome frame */}
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-hero">
              {/* Chrome header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/60 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-4">
                  <div className="bg-background/70 rounded-md px-3 py-1 text-xs text-muted-foreground font-body text-center">
                    app.mouing.com
                  </div>
                </div>
              </div>

              {/* App screenshot */}
              <img
                src="/assets/generated/app-mockup.dim_900x600.png"
                alt="Mouing app interface"
                className="w-full block"
                loading="lazy"
              />
            </div>

            {/* Feature highlight pills floating on mockup */}
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 left-6 bg-card border border-border rounded-xl px-4 py-2 shadow-card text-xs font-medium font-body text-foreground"
            >
              <CheckCircle2 className="inline w-4 h-4 text-primary mr-1.5" />
              Smart exercise library
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
