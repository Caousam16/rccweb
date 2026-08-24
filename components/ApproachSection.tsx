import {
  ClipboardCheck,
  FilePenLine,
  Wrench,
  ShieldCheck,
  Clock3,
  Users,
  FileCheck2,
  ChevronRight,
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
    phase: "1",
    title: "Audit & Assess",
    desc: "Comprehensive on-site spatial evaluation and system requirement gathering to establish a clear path forward.",
    icon: ClipboardCheck,
  },
  {
    phase: "2",
    title: "Custom Engineering",
    desc: "Blueprint rendering, schematic design, and structural integration mapping tailored to your facility.",
    icon: FilePenLine,
  },
  {
    phase: "3",
    title: "Precision Deployment",
    desc: "Rigorous physical installation, component termination, and clean pathway cabling by certified technicians.",
    icon: Wrench,
  },
  {
    phase: "4",
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
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-[4%] xl:px-[6%]">
      <div className="mx-auto max-w-[1500px]">

          <p className="text-sm font-bold text-center uppercase tracking-[0.28em] text-blue-600">
            Our Framework
          </p>


        {/* Process */}
        <div className="relative mt-20 lg:mt-24">
          {/* Desktop connecting arrows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[14%] right-[14%] top-8 hidden lg:block"
          >
            <div className="flex items-center justify-between">
              {visibleSteps.slice(0, -1).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-1 items-center"
                >
                  <div className="h-px w-full bg-blue-500" />
                  <ChevronRight className="h-5 w-5 shrink-0 text-blue-600" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {visibleSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="group relative rounded-2xl border border-slate-100 bg-white px-7 pb-8 pt-14 text-center shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
                >
                  {/* Number */}
                  <div
                    className="absolute left-1/2 top-0 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2
                    items-center justify-center rounded-full border-[8px] border-white
                    bg-blue-600 text-3xl font-black text-white
                    shadow-[0_8px_20px_rgba(37,99,235,0.20)]"
                  >
                    {step.phase}
                  </div>

                  {/* Icon */}
                  <div className="mx-auto flex h-24 w-24 items-center justify-center">
                    <Icon
                      strokeWidth={1.8}
                      className="h-[76px] w-[76px] text-blue-700 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-extrabold tracking-tight text-[#0b1445]">
                    {step.title}
                  </h3>

                  {/* Accent */}
                  <div className="mx-auto mt-5 h-1 w-11 rounded-full bg-blue-600" />

                  {/* Description */}
                  <p className="mx-auto mt-5 max-w-[280px] text-sm leading-7 text-slate-600">
                    {step.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className={`flex items-center gap-4 px-6 py-5 ${
                    index !== trustPoints.length - 1
                      ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50">
                    <Icon
                      className="h-7 w-7 text-blue-600"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-blue-600">
                      {point.title}
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
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