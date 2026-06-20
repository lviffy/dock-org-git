'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { projects, impactMetrics, executionLens, Project } from '@/lib/data/impact-content';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { 
  ArrowRight, 
  MapPin, 
  User, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Activity, 
  Settings, 
  Layers, 
  Cpu, 
  ChevronRight,
  Send,
  Calendar
} from 'lucide-react';

export default function ImpactPage() {
  const [activeTab, setActiveTab] = useState(projects[0].id);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.substring(1);
      if (projects.some((p) => p.id === hashId)) {
        setActiveTab(hashId);
        // Scroll to tab switcher or header
        const el = document.getElementById('project-showcase');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const activeProject = projects.find((p) => p.id === activeTab) || projects[0];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background:
              'radial-gradient(60% 50% at 80% 20%, rgba(46,91,154,0.55) 0%, rgba(2,6,54,0) 60%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.24em] uppercase text-tertiary mb-6">
            Impact Showcase
          </p>
          <h1 className="text-[2.3rem] md:text-[3.7rem] leading-[1.05] tracking-tight font-heading font-bold max-w-4xl">
            Campaign systems that convert complexity into measurable electoral outcomes.
          </h1>
          <p className="mt-7 max-w-3xl text-[1.03rem] md:text-[1.2rem] leading-8 text-white/80">
            Civic Knowledge showcases selected achievements, impact stories, and democratic outcomes. 
            Below are detailed case studies of campaign strategies, organizational structures, and measurable impacts delivered by Dock Consulting.
          </p>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="border-b border-slate-100 bg-white" aria-label="Impact statistics">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid grid-cols-2 gap-y-8 gap-x-4 text-center md:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:divide-slate-100">
            {impactMetrics.map((metric, i) => (
              <div key={metric.label} className="px-2">
                <p className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Switcher Navigation */}
      <section id="project-showcase" className="bg-slate-50/50 border-b border-slate-100 sticky top-[88px] z-40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-none">
            {projects.map((project) => {
              const isActive = project.id === activeTab;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveTab(project.id)}
                  className={`flex-none rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                    isActive
                      ? 'bg-primary border-primary text-white shadow-sm'
                      : 'bg-white border-slate-200 text-secondary hover:border-primary/50'
                  }`}
                >
                  {project.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Project Details */}
      <section className="bg-white py-14 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal key={activeProject.id}>
            <div className="grid gap-12 lg:grid-cols-[1fr_2.2fr]">
              {/* Project Sidebar Info */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-100 bg-slate-50/30 p-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-secondary">{activeProject.title}</h2>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{activeProject.intro}</p>
                  </div>

                  <div className="border-t border-slate-100 pt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <User className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Client / Partner</p>
                        <p className="text-sm font-semibold text-secondary">{activeProject.client}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MapPin className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Region</p>
                        <p className="text-sm font-semibold text-secondary">{activeProject.region}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Left Side Small Metrics Summary */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6 space-y-5">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Result Metrics
                  </h3>
                  <div className="space-y-4">
                    {activeProject.metrics.map((metric) => (
                      <div key={metric.label} className="border-b border-slate-100/60 pb-3 last:border-0 last:pb-0">
                        <p className="text-2xl font-heading font-bold text-primary">{metric.value}</p>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Main Details Content */}
              <div className="space-y-10">
                {/* Context & Challenge */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="h-[2px] w-8 bg-primary" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Context</h3>
                  </div>
                  <p className="text-[1.05rem] leading-8 text-slate-700">{activeProject.context}</p>

                  <div className="grid gap-6 md:grid-cols-2 mt-6">
                    <div className="rounded-2xl border border-slate-100 p-6 bg-slate-50/20">
                      <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-secondary mb-4">
                        <AlertCircle className="h-4 w-4 text-primary shrink-0" />
                        Key Challenges
                      </h4>
                      <ul className="space-y-3">
                        {activeProject.challenges.map((c, idx) => (
                          <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {activeProject.commandArchitecture && (
                      <div className="rounded-2xl border border-slate-100 p-6 bg-slate-50/20">
                        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-secondary mb-4">
                          <Layers className="h-4 w-4 text-primary shrink-0" />
                          Command Architecture
                        </h4>
                        <ul className="space-y-3">
                          {activeProject.commandArchitecture.map((arch, idx) => (
                            <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              {arch}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Sub-constituecies (For Telangana Parliamentary) */}
                {activeProject.subConstituencies && (
                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                      <span className="h-[2px] w-8 bg-primary" />
                      <h3 className="text-xs font-bold uppercase tracking-widest text-primary">Constituency Execution</h3>
                    </div>

                    <div className="space-y-8">
                      {activeProject.subConstituencies.map((sub, idx) => (
                        <div key={idx} className="rounded-2xl border border-slate-100 p-6 md:p-8 space-y-6 hover:border-primary/20 transition-all duration-300">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-slate-100 pb-4">
                            <div>
                              <h4 className="text-lg font-heading font-bold text-secondary">{sub.name}</h4>
                              <p className="text-xs text-primary font-bold uppercase tracking-wider mt-1">{sub.slogan}</p>
                            </div>
                            <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              Outcome Achieved
                            </span>
                          </div>

                          <div className="grid gap-6 md:grid-cols-2">
                            <div>
                              <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Strategy & Action</h5>
                              <ul className="space-y-2">
                                {sub.strategy.map((item, idy) => (
                                  <li key={idy} className="flex gap-2 text-sm text-slate-600">
                                    <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {sub.diagnostics && (
                              <div>
                                <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Diagnostics & Control</h5>
                                <ul className="space-y-2">
                                  {sub.diagnostics.map((item, idy) => (
                                    <li key={idy} className="flex gap-2 text-sm text-slate-600">
                                      <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          <div className="rounded-xl bg-slate-50/50 p-4 border border-slate-100">
                            <p className="text-sm font-semibold text-secondary">Constituency Result:</p>
                            <p className="text-sm text-slate-700 mt-1">{sub.outcome}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tracks / Phases (For YSRCP and Puducherry) */}
                {activeProject.tracks && (
                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                      <span className="h-[2px] w-8 bg-primary" />
                      <h3 className="text-xs font-bold uppercase tracking-widest text-primary">Strategic Tracks & Phases</h3>
                    </div>

                    <div className="relative border-l border-slate-100 pl-6 ml-3 space-y-8">
                      {activeProject.tracks.map((track, idx) => (
                        <div key={idx} className="relative group">
                          {/* Dot marker */}
                          <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-primary/40 bg-white text-primary group-hover:scale-125 transition-transform duration-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          </span>
                          <h4 className="text-base font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                            {track.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">{track.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cadre restructuring (For YSRCP) */}
                {activeProject.cadreFramework && (
                  <div className="space-y-6 border-t border-slate-100 pt-8">
                    <div className="flex items-center gap-3">
                      <span className="h-[2px] w-8 bg-primary" />
                      <h3 className="text-xs font-bold uppercase tracking-widest text-primary">
                        {activeProject.cadreFramework.title}
                      </h3>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                      {activeProject.cadreFramework.steps.map((step, idx) => (
                        <div key={idx} className="rounded-xl border border-slate-100 p-4 bg-white hover:border-primary/30 transition-all duration-300">
                          <span className="text-xs font-bold text-primary tracking-wide">0{idx + 1} {step.name}</span>
                          <p className="text-xs text-slate-600 mt-1">{step.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl border border-dashed border-slate-200 p-5 bg-slate-50/20">
                      <p className="text-sm font-semibold text-secondary">Framework Outcome:</p>
                      <p className="text-sm text-slate-700 mt-1">{activeProject.cadreFramework.outcome}</p>
                    </div>
                  </div>
                )}

                {/* Pillars (For Graduate MLC) */}
                {activeProject.pillars && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="h-[2px] w-8 bg-primary" />
                      <h3 className="text-xs font-bold uppercase tracking-widest text-primary">Core Strategy Pillars</h3>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                      {activeProject.pillars.map((pillar, idx) => (
                        <div key={idx} className="rounded-2xl border border-slate-100 p-5 bg-slate-50/10 hover:shadow-md transition-shadow">
                          <h4 className="text-sm font-bold text-secondary mb-3 flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px]">
                              {idx + 1}
                            </span>
                            {pillar.title}
                          </h4>
                          <ul className="space-y-2">
                            {pillar.bullets.map((b, idy) => (
                              <li key={idy} className="flex gap-2 text-xs leading-relaxed text-slate-600">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sprint Plan (For Graduate MLC) */}
                {activeProject.sprintPlan && (
                  <div className="space-y-6 border-t border-slate-100 pt-8">
                    <div className="flex items-center gap-3">
                      <span className="h-[2px] w-8 bg-primary" />
                      <h3 className="text-xs font-bold uppercase tracking-widest text-primary">30-Day Sprint Execution</h3>
                    </div>

                    <div className="space-y-4">
                      {activeProject.sprintPlan.map((sprint, idx) => (
                        <div key={idx} className="grid md:grid-cols-[140px_1fr] gap-3 items-start border border-slate-100 rounded-xl p-4 bg-slate-50/20">
                          <div className="flex items-center gap-2 shrink-0">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="text-sm font-bold text-secondary uppercase tracking-wider">{sprint.timeline}</span>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-secondary">{sprint.objective}</h4>
                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">{sprint.details}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {activeProject.adaptation && (
                      <div className="rounded-xl border border-dashed border-slate-200 p-4 bg-slate-50/10">
                        <p className="text-xs font-bold text-secondary">Sprint Adaptation:</p>
                        <p className="text-xs text-slate-600 mt-1">{activeProject.adaptation}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Project Outcome Summary Banner */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Final Project Outcome</p>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-primary leading-relaxed">
                    {activeProject.finalOutcome}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Execution Lens Anchors */}
      <section className="bg-slate-50 border-t border-slate-100 py-14 md:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Execution Lens"
            title="Four operating anchors that keep campaigns measurable"
            subtitle="Dock Consulting applies these principles systematically to convert political complexity into strategic clarity."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {executionLens.map((lens, i) => {
              const icons = [Cpu, Settings, Activity, Layers];
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={lens.title} delay={i * 120}>
                  <div className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:shadow-md h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </div>
                    <h3 className="mt-6 text-[1.2rem] font-heading font-semibold leading-snug text-secondary">
                      {lens.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {lens.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-primary py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready to be our next success story?</h2>
          <p className="mt-5 text-white/80 max-w-xl mx-auto text-sm leading-relaxed">
            Partner with us to deploy disciplined ground execution systems, campaign strategy, and political intelligence.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-tertiary text-white px-6 py-3 rounded-full text-xs font-bold tracking-wide hover:bg-tertiary/90 transition-colors shadow-sm"
            >
              Get in Touch
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
