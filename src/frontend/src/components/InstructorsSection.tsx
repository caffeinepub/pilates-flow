import { Instagram, Linkedin } from "lucide-react";
import { motion } from "motion/react";

const instructors = [
  {
    name: "Elena Marchetti",
    title: "Lead Pilates Instructor & Studio Director",
    bio: "With over 12 years of classical pilates training in New York and London, Elena brings a rare depth of knowledge and warmth to every session. She is certified in both STOTT and Peak Pilates methodologies.",
    image: "/assets/generated/instructor-1.dim_400x400.jpg",
    specialties: ["Classical Pilates", "Reformer", "Pre/Postnatal"],
  },
  {
    name: "Sophia Chen",
    title: "Senior Instructor & Movement Coach",
    bio: "A former professional dancer, Sophia blends her background in contemporary dance with a holistic approach to movement. Her sessions are known for their creativity, precision, and transformative energy.",
    image: "/assets/generated/instructor-2.dim_400x400.jpg",
    specialties: ["Chair Pilates", "Athletic Training", "Mindful Movement"],
  },
];

export default function InstructorsSection() {
  return (
    <section
      id="studio"
      className="py-24"
      style={{ background: "oklch(0.96 0.012 85)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs tracking-widest uppercase text-sage font-semibold">
            The Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Meet Our Instructors
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            Our instructors are movement artists, educators, and guides who are
            deeply committed to your transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {instructors.map((instructor, i) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-card"
              data-ocid={`instructors.item.${i + 1}`}
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    aria-label={`${instructor.name} on Instagram`}
                    data-ocid={`instructors.button.${i + 1}`}
                  >
                    <Instagram size={14} />
                  </button>
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    aria-label={`${instructor.name} on LinkedIn`}
                    data-ocid={`instructors.button.${i + 1}`}
                  >
                    <Linkedin size={14} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {instructor.name}
                </h3>
                <p className="font-body text-sage text-sm font-medium mt-1">
                  {instructor.title}
                </p>
                <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
                  {instructor.bio}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {instructor.specialties.map((s) => (
                    <span
                      key={s}
                      className="font-body text-xs font-medium px-3 py-1 rounded-full bg-sage/10 text-sage border border-sage/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
