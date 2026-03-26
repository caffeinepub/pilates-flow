import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const exercises = [
  {
    name: "The Hundred",
    focus: "Core",
    difficulty: "Intermediate",
    description:
      "Classic warm-up that builds core strength and breathing control.",
  },
  {
    name: "Roll Up",
    focus: "Flexibility",
    difficulty: "Intermediate",
    description: "Slow spinal articulation that stretches the entire back.",
  },
  {
    name: "Single Leg Circle",
    focus: "Hip Mobility",
    difficulty: "Beginner",
    description: "Opens the hip joint and improves stability.",
  },
  {
    name: "Swan",
    focus: "Back Extension",
    difficulty: "Intermediate",
    description: "Strengthens the spine extensors and opens the chest.",
  },
  {
    name: "Side Kick Series",
    focus: "Legs & Glutes",
    difficulty: "Beginner",
    description: "Targets outer hips and glutes with controlled leg swings.",
  },
  {
    name: "Teaser",
    focus: "Full Body",
    difficulty: "Advanced",
    description: "The ultimate core challenge combining balance and strength.",
  },
];

const difficultyStyles: Record<string, string> = {
  Beginner: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Intermediate: "bg-amber-50 text-amber-700 border-amber-200",
  Advanced: "bg-rose-50 text-rose-600 border-rose-200",
};

export default function ExerciseLibrarySection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background -z-10"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest font-body font-semibold text-primary mb-4">
            Exercise Library
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            A taste of what's inside
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            From a library of hundreds of Pilates exercises, beautifully
            organized.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise, i) => (
            <motion.div
              key={exercise.name}
              data-ocid={`exercise.item.${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 32px oklch(0.56 0.06 148 / 0.12)",
              }}
              className="bg-card border border-border rounded-2xl p-6 shadow-sm transition-shadow duration-300 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display font-semibold text-lg text-foreground leading-snug">
                  {exercise.name}
                </h3>
                <span
                  className={`shrink-0 text-xs font-body font-medium px-2.5 py-1 rounded-full border ${
                    difficultyStyles[exercise.difficulty]
                  }`}
                >
                  {exercise.difficulty}
                </span>
              </div>

              <Badge
                variant="secondary"
                className="self-start text-xs font-body bg-sage/10 text-primary border-0 rounded-full"
              >
                {exercise.focus}
              </Badge>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {exercise.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
