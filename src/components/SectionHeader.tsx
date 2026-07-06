type SectionHeaderProps = {
  kicker: string;
  title: string;
  copy?: string;
  centered?: boolean;
};

export function SectionHeader({ kicker, title, copy, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : ''}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {copy && <p className={`section-copy ${centered ? 'mx-auto' : ''}`}>{copy}</p>}
    </div>
  );
}
