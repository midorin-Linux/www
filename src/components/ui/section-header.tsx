export function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-xl font-bold tracking-tight mb-6 flex items-center gap-3">
      <span className="h-px flex-1 bg-border" />
      <span>{title}</span>
      <span className="h-px flex-1 bg-border" />
    </h2>
  );
}
