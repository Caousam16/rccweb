import {
  ClipboardCheck,
  FilePenLine,
  Wrench,
  ShieldCheck,
  Clock3,
  Users,
  FileCheck2,
  ChevronRight,
  Zap,
} from "lucide-react";

type ApproachStep = {
  phase: string;
  title: string;
  desc: string;
  icon: React.ElementType;
};

interface ApproachSectionProps {
  steps?: ApproachStep[];
}

const defaultSteps: ApproachStep[] = [
  {
    phase: "01",
    title: "Audit & Assess",
    desc: "Comprehensive on-site spatial evaluation and system requirement gathering to establish a clear path forward.",
    icon: ClipboardCheck,
  },
  {
    phase: "02",
    title: "Custom Engineering",
    desc: "Blueprint rendering, schematic design, and structural integration mapping tailored to your facility.",
    icon: FilePenLine,
  },
  {
    phase: "03",
    title: "Precision Deployment",
    desc: "Rigorous physical installation, component termination, and clean pathway cabling by certified technicians.",
    icon: Wrench,
  },
  {
    phase: "04",
    title: "Commission & Handover",
    desc: "Strict end-to-end signal testing, system verification, documentation delivery, and operational training.",
    icon: ShieldCheck,
  },
];

const trustPoints = [
  {
    title: "Built for Reliability",
    desc: "Quality you can depend on.",
    icon: ShieldCheck,
  },
  {
    title: "Delivered On Time",
    desc: "Schedules we stand behind.",
    icon: Clock3,
  },
  {
    title: "Expert Professionals",
    desc: "Veterans. Experienced. Focused.",
    icon: Users,
  },
  {
    title: "Complete Transparency",
    desc: "Clear communication at every step.",
    icon: FileCheck2,
  },
];

export default function ApproachSection({
  steps = defaultSteps,
}: ApproachSectionProps) {
  const visibleSteps = steps.length ? steps : defaultSteps;

  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-[5%]">
      {/* Background Sharp Graphic Accents */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-40">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        {/* Loud Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 border-2 border-blue-600 bg-blue-50 px-4 py-1.5 shadow-[4px_4px_0px_0px_rgba(37,99,235,1)]">
            <Zap className="h-4 w-4 text-blue-600 fill-blue-600" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-600">
              Our Framework
            </span>
          </div>
          <h2 className="mt-6 text-4xl font-black uppercase tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Precision <span className="text-blue-600 underline decoration-blue-600 decoration-4 underline-offset-8">Execution</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative mt-20 lg:mt-28">
          {/* Desktop Connecting Arrows - Sharp & Loud */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[12%] right-[12%] top-12 hidden lg:block"
          >
            <div className="flex items-center justify-between">
              {visibleSteps.slice(0, -1).map((_, index) => (
                <div key={index} className="flex flex-1 items-center">
                  <div className="h-1 w-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.8)]" />
                  <ChevronRight className="h-8 w-8 -ml-2 shrink-0 text-blue-600 stroke-[3]" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {visibleSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="group relative border-4 border-slate-900 bg-white p-7 text-left transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(37,99,235,1)]"
                >
                  {/* Phase Badge */}
                  <div className="flex items-center justify-between">
                    <span className="border-2 border-slate-900 bg-blue-600 px-3 py-1 text-lg font-black text-white shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                      PHASE {step.phase}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center border-2 border-slate-900 bg-blue-50 group-hover:bg-blue-600 transition-colors duration-200">
                      <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-200" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-2xl font-black uppercase text-slate-900">
                    {step.title}
                  </h3>

                  <div className="mt-3 h-1.5 w-12 bg-blue-600" />

                  {/* Description */}
                  <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-600">
                    {step.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-16 border-4 border-slate-900 bg-blue-600 shadow-[10px_10px_0px_0px_rgba(15,23,42,1)]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className={`flex items-center gap-4 p-6 text-white ${
                    index !== trustPoints.length - 1
                      ? "border-b-4 border-slate-900 lg:border-b-0 lg:border-r-4"
                      : ""
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-slate-900 bg-white shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
                    <Icon className="h-7 w-7 text-blue-600" strokeWidth={2.5} />
                  </div>

                  <div>
                    <h4 className="text-base font-black uppercase text-white tracking-wide">
                      {point.title}
                    </h4>
                    <p className="mt-0.5 text-xs font-bold text-blue-100">
                      {point.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}