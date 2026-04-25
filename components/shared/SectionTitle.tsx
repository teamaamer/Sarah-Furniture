interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 tracking-tight leading-tight">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg lg:text-xl font-light leading-relaxed">{subtitle}</p>}
    </div>
  );
}
