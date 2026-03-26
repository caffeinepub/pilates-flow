import type { PilatesClass } from "@/backend.d";
import { Button } from "@/components/ui/button";
import { useActor } from "@/hooks/useActor";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";

const FALLBACK_CLASSES = [
  {
    name: "Mat Pilates",
    description:
      "The foundation of all pilates work. Using just a mat and your own body weight, you'll develop core strength, posture, and body awareness through classical pilates sequences.",
    duration_minutes: BigInt(60),
    image: "/assets/generated/class-mat.dim_600x400.jpg",
    level: "All Levels",
  },
  {
    name: "Reformer Pilates",
    description:
      "Experience the full benefits of the reformer machine. The spring-resistance system provides a unique workout that sculpts, lengthens, and strengthens the entire body with precision.",
    duration_minutes: BigInt(55),
    image: "/assets/generated/class-reformer.dim_600x400.jpg",
    level: "Intermediate",
  },
  {
    name: "Chair Pilates",
    description:
      "The Wunda Chair challenges your balance, coordination, and core stability in ways no other apparatus can. Ideal for athletes looking to elevate their cross-training.",
    duration_minutes: BigInt(50),
    image: "/assets/generated/class-chair.dim_600x400.jpg",
    level: "Advanced",
  },
];

export default function ClassesSection() {
  const { actor, isFetching } = useActor();
  const { data: backendClasses } = useQuery<PilatesClass[]>({
    queryKey: ["classes"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllClasses();
    },
    enabled: !!actor && !isFetching,
  });

  const classes = backendClasses?.length
    ? backendClasses.map((c, i) => ({
        ...c,
        image: FALLBACK_CLASSES[i % FALLBACK_CLASSES.length].image,
        level: FALLBACK_CLASSES[i % FALLBACK_CLASSES.length].level,
      }))
    : FALLBACK_CLASSES;

  return (
    <section id="classes" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-widest uppercase text-sage font-semibold">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Our Signature Classes
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            Each class is thoughtfully designed to meet you where you are — and
            take you further.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          data-ocid="classes.list"
        >
          {classes.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-lg transition-shadow duration-300"
              data-ocid={`classes.item.${i + 1}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={cls.image}
                  alt={cls.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="font-body text-xs font-semibold tracking-wide uppercase bg-background/90 text-sage px-3 py-1.5 rounded-full">
                    {cls.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="font-body text-xs bg-sage text-primary-foreground px-3 py-1.5 rounded-full font-medium">
                    {Number(cls.duration_minutes)} min
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {cls.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">
                  {cls.description}
                </p>
                <div className="mt-6">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-body text-sage hover:text-sage-dark font-semibold text-sm group/btn"
                    data-ocid={`classes.secondary_button.${i + 1}`}
                  >
                    Learn More
                    <span className="inline-block ml-1 group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
