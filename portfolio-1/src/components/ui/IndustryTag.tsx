import { Industry } from '@/types';
import { cn } from '@/lib/utils';

const industryColors: Record<Industry, string> = {
  industrial: 'text-industry-industrial bg-industry-industrial/10',
  healthcare: 'text-industry-healthcare bg-industry-healthcare/10',
  education: 'text-industry-education bg-industry-education/10',
  enterprise: 'text-industry-enterprise bg-industry-enterprise/10',
  hospitality: 'text-industry-hospitality bg-industry-hospitality/10',
  hr: 'text-industry-hr bg-industry-hr/10',
  fintech: 'text-industry-fintech bg-industry-fintech/10',
};

const industryLabels: Record<Industry, string> = {
  industrial: 'Industrial',
  healthcare: 'Healthcare',
  education: 'Education',
  enterprise: 'Enterprise',
  hospitality: 'Hospitality',
  hr: 'HR',
  fintech: 'Fintech',
};

export function IndustryTag({
  industry,
  className,
}: {
  industry: Industry;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider',
        industryColors[industry],
        className
      )}
    >
      {industryLabels[industry]}
    </span>
  );
}
