import Image from "next/image";

export const NotFlags = () => {
  return (
    <div className="flex flex-row items-center gap-4 m-auto">
      <Image
        src="/not-flags.svg"
        alt="image no country found"
        width={72}
        height={72}
      />
      <div className="flex flex-col">
      <span className="text-3xl">No country found</span>
      <span className="text-3xl">for your search</span>
    </div>
    </div>
  );
};
