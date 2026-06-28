'use client';

import Link from 'next/link';
import { ArrowRight, FileText, Settings, Database } from 'lucide-react';
import Reveal from '@/components/Reveal';

const visionPoints = [
  {
    n: '01',
    title: 'Legislative Procedure',
    description: 'Understanding how laws are drafted, committees function, budgets are shaped, and authority is exercised in practice.',
    Icon: FileText,
    shapeClass: 'rounded-t-[4rem] rounded-b-2xl pt-14 pb-8 px-6 sm:px-8',
  },
  {
    n: '02',
    title: 'Administrative Design',
    description: 'Unpacking the complex structures of public administration, execution frameworks, and authority limitations.',
    Icon: Settings,
    shapeClass: 'rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl p-8 pt-10 pb-10',
  },
  {
    n: '03',
    title: 'Fiscal Architecture',
    description: 'Analyzing budget execution, fiscal responsibility, and public resources allocation mechanisms.',
    Icon: Database,
    shapeClass: 'rounded-b-[4rem] rounded-t-2xl pt-8 pb-14 px-6 sm:px-8',
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32 border-b border-slate-100">
      {/* Background soft gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-neutral/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary/[0.02] blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Row: Typography and Structural Gap */}
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.85fr] items-stretch">
          
          {/* Left Column - Philosophy Text */}
          <div className="flex flex-col justify-center">
            <Reveal delay={0}>
              <div className="mb-6 flex items-center gap-3.5">
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-tertiary animate-pulse" />
                  <span className="h-[1px] w-8 bg-gradient-to-r from-tertiary to-transparent" />
                </div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.35em] text-tertiary">Core Philosophy</p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] tracking-tight text-primary font-bold">
                Democracy does not run on sentiment. <br className="hidden sm:inline" />
                It runs on <span className="relative inline-block font-playfair italic font-normal bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent pb-1">structure.</span>
              </h3>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 text-[0.98rem] md:text-[1.05rem] leading-[1.8] text-slate-600">
                Across campuses, civil society, and party ecosystems, engagement is rising—but structured understanding of <span className="font-semibold text-primary">legislative design</span>, <span className="font-semibold text-primary">fiscal process</span>, and <span className="font-semibold text-primary">administrative architecture</span> remains uneven. When discourse detaches from structure, <span className="font-semibold text-primary">accountability</span> becomes personality-driven rather than process-driven.
              </p>
            </Reveal>
          </div>

          {/* Right Column - The Structural Gap Card */}
          <Reveal delay={300} className="flex h-full">
            <div className="w-full rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-2xl rounded-br-2xl border border-slate-900 bg-gradient-to-br from-primary via-slate-950 to-primary p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden group hover:border-secondary/40 hover:shadow-[0_20px_40px_rgba(2,6,54,0.25)] transition-all duration-500 min-h-[260px]">
              {/* SVG Blueprint Grid Background */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="card-grid-gap" width="28" height="28" patternUnits="userSpaceOnUse">
                      <path d="M 28 0 L 0 0 0 28" fill="none" stroke="white" strokeWidth="0.75" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#card-grid-gap)" />
                </svg>
              </div>
              {/* Glowing radial background */}
              <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-secondary/20 blur-3xl group-hover:scale-150 transition-transform duration-1000 ease-in-out pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-[10px] font-bold text-white tracking-wider uppercase border border-white/10">
                  The Structural Gap
                </span>
                <p className="mt-5 text-sm md:text-[0.95rem] leading-[1.75] text-slate-300 font-light">
                  DOCK exists to strengthen structural understanding in public life. Our objective is a cultural shift: investing in a generation that values <span className="text-white font-medium underline decoration-tertiary/60 decoration-2 underline-offset-4">structure as much as outcome</span>, ensuring advocacy aligns with constitutional frameworks.
                </p>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Bottom Row: The Three Pillars Grid */}
        <div className="mt-16 md:mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visionPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 100 + 400}>
              <div className={`group relative flex flex-col justify-between h-full border border-slate-100 bg-neutral/20 backdrop-blur-sm shadow-[0_8px_30px_rgba(13,21,36,0.01)] transition-all duration-500 hover:bg-white hover:border-slate-200 hover:shadow-[0_20px_45px_rgba(13,21,36,0.06)] ${point.shapeClass}`}>
                
                {/* Watermark Number */}
                <span className="absolute right-8 bottom-6 text-6xl font-heading font-black tracking-tight text-slate-200/30 select-none pointer-events-none group-hover:text-tertiary/10 transition-colors duration-500">
                  {point.n}
                </span>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Icon Wrap */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-200/80 text-slate-500 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                      <point.Icon className="h-5.5 w-5.5 stroke-[1.5] transition-transform duration-500 group-hover:rotate-[8deg]" />
                    </div>

                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">
                      Pillar {point.n}
                    </p>
                    
                    <h4 className="mt-2 font-heading text-[1.2rem] font-bold tracking-tight text-primary group-hover:text-tertiary transition-colors duration-300">
                      {point.title}
                    </h4>
                    
                    <p className="mt-3 text-[0.88rem] leading-[1.65] text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
                      {point.description}
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* Centered CTA Link */}
        <div className="mt-14 text-center">
          <Reveal delay={800}>
            <Link
              href="/about"
              className="group/link inline-flex items-center gap-3 rounded-full border border-slate-200 px-6 py-3 text-xs font-bold tracking-widest uppercase text-primary transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-sm"
            >
              <span>Learn more about us</span>
              <span className="flex items-center justify-center bg-primary/5 text-primary rounded-full w-6 h-6 group-hover/link:bg-primary group-hover/link:text-white transition-all duration-300">
                <ArrowRight className="h-3 w-3 stroke-[2.5] transition-transform duration-300 group-hover/link:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
