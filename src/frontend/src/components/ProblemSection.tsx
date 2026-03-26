import {
  ArrowRight,
  CheckCircle,
  Clock,
  HelpCircle,
  StickyNote,
} from "lucide-react";
import { motion } from "motion/react";

const beforeCards = [
  {
    icon: Clock,
    label: "Wasted hours",
    sub: "Building from scratch every week",
    color: "text-rose-500",
    bg: "bg-rose-50 border-rose-200",
  },
  {
    icon: StickyNote,
    label: "Scattered notes",
    sub: "Post-its, spreadsheets, memory",
    color: "text-orange-500",
    bg: "bg-orange-50 border-orange-200",
  },
  {
    icon: HelpCircle,
    label: "What did I teach?",
    sub: "Guessing what each group did",
    color: "text-amber-500",
    bg: "bg-amber-50 border-amber-200",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Section background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/60 to-secondary/40 -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest font-body font-semibold text-primary mb-5">
            The problem
          </p>
          <p className="font-display text-2xl md:text-3xl leading-snug text-foreground">
            As a Pilates instructor, you spend too much time{" "}
            <span className="text-muted-foreground">
              preparing classes from scratch, searching for exercises and trying
              to remember what you did last week with each group.
            </span>{" "}
            There's a better way.
          </p>
        </motion.div>

        {/* Before → After visual */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Before cards */}
          {beforeCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border ${
                card.bg
              } w-36 text-center shadow-xs`}
            >
              <card.icon className={`w-6 h-6 ${card.color}`} />
              <span className="font-body font-semibold text-xs text-foreground">
                {card.label}
              </span>
              <span className="font-body text-xs text-muted-foreground leading-tight">
                {card.sub}
              </span>
            </motion.div>
          ))}

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex-shrink-0"
          >
            <ArrowRight className="w-8 h-8 text-muted-foreground/50" />
          </motion.div>

          {/* After card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-sage/40 bg-accent/60 w-40 text-center shadow-sage-glow"
          >
            <CheckCircle className="w-7 h-7 text-primary" />
            <span className="font-body font-bold text-sm text-foreground">
              Mouing
            </span>
            <span className="font-body text-xs text-muted-foreground leading-tight">
              Class ready in minutes
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
