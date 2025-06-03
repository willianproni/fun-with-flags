import Image from "next/image";

type SectionProps = {
  title: string;
  value: string | number;
  icon: string;
};

const Section = ({ title, value, icon }: SectionProps) => {
  return (
    <div className="flex items-center gap-4 border rounded p-4">
      <Image src={icon} alt="section icon" width={36} height={36} />
      <div className="flex flex-col">
        <span className="font-semibold">{title}:</span>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default Section;
