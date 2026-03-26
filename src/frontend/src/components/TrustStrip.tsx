import { BadgeCheck, Sparkles, Users } from "lucide-react";
import { motion } from "motion/react";

const badges = [
  {
    icon: Users,
    text: "500+ instructors on waitlist",
  },
  {
    icon: BadgeCheck,
    text: "Built by Pilates professionals",
  },
  {
    icon: Sparkles,
    text: "Free during beta",
  },
];

export default function TrustStrip() {
  return (
    <section className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-2.5 bg-accent/60 border border-sage/25 rounded-full px-5 py-2.5 shadow-xs"
            >
              <badge.icon className="w-4 h-4 text-primary shrink-0" />
              <span className="font-body text-sm font-medium text-foreground">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
