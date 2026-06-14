type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: Props) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold uppercase tracking-[0.32em] text-primary">
          <span className="inline-block w-6 h-[1.5px] bg-primary/70" />
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-3xl font-heading font-bold tracking-tight text-secondary sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 leading-relaxed text-slate-600">{subtitle}</p>}
    </div>
  );
}
