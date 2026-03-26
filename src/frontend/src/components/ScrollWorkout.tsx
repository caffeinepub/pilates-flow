import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const POSES = [
  {
    id: 1,
    name: "Mountain Pose",
    subtitle: "Grounding & Posture",
    description:
      "Begin in stillness. Stand tall with feet hip-width apart, arms relaxed. Feel the ground beneath you as you lengthen through the crown of your head.",
    cue: "Breathe deep. Feel rooted.",
  },
  {
    id: 2,
    name: "Forward Fold",
    subtitle: "Spine Release & Hamstrings",
    description:
      "Hinge forward from the hips, letting the upper body melt toward the floor. Release tension in the back body, soften the knees if needed.",
    cue: "Let gravity do the work.",
  },
  {
    id: 3,
    name: "Plank Hold",
    subtitle: "Core Strength & Stability",
    description:
      "Press into the floor with straight arms. Engage your core, glutes, and inner thighs. Create a long diagonal line from crown to heels.",
    cue: "Hollow the belly. Hold steady.",
  },
  {
    id: 4,
    name: "Downward Dog",
    subtitle: "Full Body Stretch",
    description:
      "From plank, lift the hips high into an inverted V. Press the chest toward the thighs, pedal the heels, and spread the fingers wide.",
    cue: "Lengthen the spine. Breathe.",
  },
  {
    id: 5,
    name: "Bridge Pose",
    subtitle: "Hip Flexors & Glutes",
    description:
      "Lie on your back with knees bent. Press the feet into the mat and lift the hips toward the ceiling, creating a bridge with the body.",
    cue: "Squeeze and lift. Hold the peak.",
  },
  {
    id: 6,
    name: "Roll-Up Stretch",
    subtitle: "Spinal Articulation",
    description:
      "Seated with legs extended, inhale to lengthen the spine and exhale to reach forward. Articulate through each vertebra for full spinal mobility.",
    cue: "Reach beyond your limits.",
  },
];

const STROKE = "oklch(0.55 0.055 145)";
const SW = 7;
const COMMON_PROPS = {
  stroke: STROKE,
  strokeWidth: SW,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

function MountainPose() {
  return (
    <g {...COMMON_PROPS}>
      <circle
        cx="100"
        cy="38"
        r="22"
        fill="oklch(0.88 0.03 145)"
        stroke={STROKE}
        strokeWidth={SW}
      />
      <line x1="100" y1="60" x2="100" y2="175" />
      <path d="M100,95 Q88,128 76,158" />
      <path d="M100,95 Q112,128 124,158" />
      <line x1="100" y1="175" x2="83" y2="285" />
      <line x1="100" y1="175" x2="117" y2="285" />
      <line x1="83" y1="285" x2="65" y2="285" />
      <line x1="117" y1="285" x2="135" y2="285" />
    </g>
  );
}

function ForwardFold() {
  return (
    <g {...COMMON_PROPS}>
      <circle
        cx="168"
        cy="182"
        r="22"
        fill="oklch(0.88 0.03 145)"
        stroke={STROKE}
        strokeWidth={SW}
      />
      <path d="M100,185 Q134,168 148,162" />
      <path d="M148,162 L168,160" />
      <path d="M148,162 L140,215" />
      <path d="M148,162 L168,215" />
      <line x1="100" y1="185" x2="83" y2="285" />
      <line x1="100" y1="185" x2="117" y2="285" />
      <line x1="83" y1="285" x2="65" y2="285" />
      <line x1="117" y1="285" x2="135" y2="285" />
    </g>
  );
}

function PlankPose() {
  return (
    <g {...COMMON_PROPS}>
      <circle
        cx="38"
        cy="195"
        r="20"
        fill="oklch(0.88 0.03 145)"
        stroke={STROKE}
        strokeWidth={SW}
      />
      <line x1="58" y1="200" x2="168" y2="200" />
      <line x1="70" y1="200" x2="70" y2="248" />
      <line x1="100" y1="200" x2="100" y2="248" />
      <line x1="55" y1="248" x2="115" y2="248" />
      <line x1="168" y1="200" x2="160" y2="248" />
      <line x1="180" y1="248" x2="148" y2="248" />
    </g>
  );
}

function DownwardDog() {
  return (
    <g {...COMMON_PROPS}>
      <circle
        cx="60"
        cy="205"
        r="20"
        fill="oklch(0.88 0.03 145)"
        stroke={STROKE}
        strokeWidth={SW}
      />
      <path d="M75,195 Q90,155 105,128" />
      <path d="M105,128 Q125,150 148,192" />
      <line x1="75" y1="195" x2="55" y2="250" />
      <line x1="65" y1="250" x2="43" y2="250" />
      <line x1="148" y1="192" x2="155" y2="250" />
      <line x1="148" y1="250" x2="168" y2="250" />
    </g>
  );
}

function BridgePose() {
  return (
    <g {...COMMON_PROPS}>
      <circle
        cx="38"
        cy="235"
        r="20"
        fill="oklch(0.88 0.03 145)"
        stroke={STROKE}
        strokeWidth={SW}
      />
      <path d="M56,240 Q95,245 118,200" />
      <path d="M118,200 Q132,240 148,255" />
      <line x1="56" y1="240" x2="56" y2="258" />
      <line x1="148" y1="255" x2="162" y2="258" />
      <line x1="40" y1="258" x2="75" y2="258" />
      <line x1="148" y1="258" x2="178" y2="258" />
      <line x1="56" y1="240" x2="38" y2="250" />
      <line x1="56" y1="240" x2="74" y2="250" />
    </g>
  );
}

function RollUpPose() {
  return (
    <g {...COMMON_PROPS}>
      <circle
        cx="155"
        cy="185"
        r="20"
        fill="oklch(0.88 0.03 145)"
        stroke={STROKE}
        strokeWidth={SW}
      />
      <path d="M100,230 Q128,208 138,192" />
      <path d="M138,192 L148,182" />
      <path d="M138,192 L128,172" />
      <path d="M138,192 L158,172" />
      <line x1="100" y1="240" x2="178" y2="248" />
      <line x1="178" y1="240" x2="178" y2="258" />
      <line x1="168" y1="258" x2="192" y2="258" />
      <line x1="30" y1="248" x2="105" y2="248" />
    </g>
  );
}

const PoseComponents = [
  MountainPose,
  ForwardFold,
  PlankPose,
  DownwardDog,
  BridgePose,
  RollUpPose,
];

export default function ScrollWorkout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [poseIndex, setPoseIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrolled = -rect.top;
      const scrollable = sectionHeight - windowHeight;
      const p = Math.max(0, Math.min(1, scrolled / scrollable));
      setProgress(p);
      const idx = Math.min(POSES.length - 1, Math.floor(p * POSES.length));
      setPoseIndex(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CurrentPose = PoseComponents[poseIndex];
  const pose = POSES[poseIndex];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative"
      style={{ height: "600vh" }}
    >
      {/* Sticky workout panel */}
      <div className="sticky top-0 h-screen flex flex-col">
        {/* Section heading */}
        <div className="bg-background pt-20 pb-4 text-center flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-xs tracking-widest uppercase text-sage font-semibold">
              Interactive Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
              Scroll-Driven Workout
            </h2>
            <p className="font-body text-muted-foreground mt-2 text-sm">
              Scroll down to move through each exercise
            </p>
          </motion.div>
        </div>

        {/* Main workout area */}
        <div className="flex-1 bg-background flex items-stretch overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 w-full flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 w-full items-center">
              {/* Left: Step info */}
              <div className="flex gap-6">
                {/* Vertical stepper */}
                <div className="flex flex-col items-center gap-0 py-2">
                  {POSES.map((p, i) => (
                    <div key={p.id} className="flex flex-col items-center">
                      <button
                        type="button"
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-body text-sm font-semibold transition-all duration-500 border-2 ${
                          i === poseIndex
                            ? "bg-sage border-sage text-primary-foreground scale-110 shadow-card"
                            : i < poseIndex
                              ? "bg-sage/20 border-sage text-sage"
                              : "bg-background border-border text-muted-foreground"
                        }`}
                        onClick={() => {
                          if (!sectionRef.current) return;
                          const section = sectionRef.current;
                          const sectionHeight = section.offsetHeight;
                          const windowHeight = window.innerHeight;
                          const scrollable = sectionHeight - windowHeight;
                          const targetProgress = i / POSES.length + 0.01;
                          window.scrollTo({
                            top:
                              section.offsetTop + scrollable * targetProgress,
                            behavior: "smooth",
                          });
                        }}
                        data-ocid={`workout.button.${i + 1}`}
                        aria-label={`Go to ${p.name}`}
                      >
                        {i < poseIndex ? (
                          <svg
                            viewBox="0 0 16 16"
                            className="w-4 h-4"
                            aria-hidden="true"
                          >
                            <title>Completed</title>
                            <path
                              d="M3 8l4 4 6-6"
                              stroke="oklch(0.58 0.05 145)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              fill="none"
                            />
                          </svg>
                        ) : (
                          p.id
                        )}
                      </button>
                      {i < POSES.length - 1 && (
                        <div
                          className={`w-0.5 h-8 transition-colors duration-500 ${
                            i < poseIndex ? "bg-sage" : "bg-border"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Pose info */}
                <div className="flex-1 py-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={poseIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="font-body text-xs tracking-widest uppercase text-sage font-semibold">
                        Step {pose.id} of {POSES.length}
                      </span>
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 leading-tight">
                        {pose.name}
                      </h3>
                      <p className="font-body text-sage font-medium mt-1">
                        {pose.subtitle}
                      </p>
                      <p className="font-body text-muted-foreground mt-4 leading-relaxed text-sm md:text-base max-w-sm">
                        {pose.description}
                      </p>
                      <div className="mt-6 flex items-center gap-3">
                        <div className="w-8 h-0.5 bg-sage" />
                        <span className="font-body text-sm italic text-muted-foreground">
                          {pose.cue}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Progress bar */}
                  <div className="mt-8 max-w-xs">
                    <div className="flex justify-between font-body text-xs text-muted-foreground mb-2">
                      <span>Progress</span>
                      <span>{Math.round(progress * 100)}%</span>
                    </div>
                    <div className="h-1.5 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-sage transition-all duration-300 rounded-full"
                        style={{ width: `${progress * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: SVG Figure */}
              <div className="flex justify-center items-center">
                <div className="relative">
                  {/* Background circle */}
                  <div
                    className="absolute inset-0 rounded-full bg-sage/8"
                    style={{ transform: "scale(1.15)" }}
                  />
                  <div
                    className="relative rounded-full bg-sage/5 border border-sage/20 flex items-center justify-center"
                    style={{ width: 340, height: 340 }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={poseIndex}
                        initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 1.05, rotate: 3 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <svg
                          viewBox="0 0 200 310"
                          width="280"
                          height="280"
                          role="img"
                          aria-label={`${pose.name} pilates pose illustration`}
                        >
                          <title>{pose.name} pilates pose illustration</title>
                          <CurrentPose />
                        </svg>
                      </motion.div>
                    </AnimatePresence>

                    {/* Pose name label */}
                    <div className="absolute bottom-6 left-0 right-0 text-center">
                      <span className="font-body text-xs font-semibold tracking-widest uppercase text-sage/70">
                        {pose.name}
                      </span>
                    </div>
                  </div>

                  {/* Decorative dots */}
                  <div
                    className="absolute -top-3 -right-3 w-12 h-12 grid grid-cols-3 gap-1"
                    aria-hidden="true"
                  >
                    {["a", "b", "c", "d", "e", "f", "g", "h", "i"].map((k) => (
                      <div
                        key={k}
                        className="w-1.5 h-1.5 rounded-full bg-sage/30"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress strip */}
        <div className="h-1 bg-border flex-shrink-0">
          <div
            className="h-full bg-sage transition-all duration-150"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
