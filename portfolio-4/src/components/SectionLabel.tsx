import ThinRule from './ThinRule';

interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="mb-10">
      <p className="caption-label mb-3">{text}</p>
      <ThinRule />
    </div>
  );
}
