import { ShieldCheck, Compass, Sparkles, BookOpen, Layers } from 'lucide-react';

const commitments = [
  {
    title: 'Institutional Clarity',
    text: 'Ensuring public life is process-driven rather than personality-driven, focusing on administrative design.',
    Icon: ShieldCheck,
  },
  {
    title: 'Democratic Integrity',
    text: 'Preserving procedural democracy and structural rules of governance at all levels.',
    Icon: Compass,
  },
  {
    title: 'Merit-Based Leadership',
    text: 'Fostering leaders with a deep understanding of legislative, administrative, and fiscal systems.',
    Icon: Sparkles,
  },
  {
    title: 'Structural Thinking',
    text: 'Prioritizing legislative procedure, administrative design, fiscal architecture, and constitutional limitation.',
    Icon: Layers,
  },
  {
    title: 'Credibility Before Scale',
    text: 'Prioritizing depth, serious research, and process replication over visibility or rapid growth.',
    Icon: BookOpen,
  },
];

export default function CommitmentsSection() {
  return (
    <>
      {/* Desktop/Tablet Grid View */}
      <div className="mt-12 hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {commitments.map((item) => (
          <div
            key={item.title}
            className="group bg-white border border-[#E4E8F0] rounded-2xl p-7 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 min-h-[220px]"
          >
            <div className="w-11 h-11 rounded-xl bg-[#F0F4FF] border border-[#D8E0F0] flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
              <item.Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
            </div>
            <div className="mt-5">
              <h3 className="text-[1.15rem] font-bold tracking-tight text-[#0D1524] leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.9rem] leading-[1.7] text-[#445166]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slidable Cards View */}
      <div
        className="mt-8 -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 sm:hidden"
        aria-label="Our commitments — swipe to explore"
      >
        {commitments.map((item) => (
          <div
            key={item.title}
            className="group relative flex shrink-0 w-[78vw] snap-start flex-col justify-between rounded-2xl border border-[#E4E8F0] bg-white p-6 min-h-[200px]"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F0F4FF] border border-[#D8E0F0] flex items-center justify-center shrink-0">
                <item.Icon className="h-4.5 w-4.5 text-primary" strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 text-[1.05rem] font-bold tracking-tight text-[#0D1524] leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.85rem] leading-[1.65] text-[#445166]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-[10px] text-slate-400 uppercase tracking-wider sm:hidden">
        Swipe to explore our commitments →
      </p>
    </>
  );
}
