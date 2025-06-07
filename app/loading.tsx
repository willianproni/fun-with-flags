import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col m-auto items-center">
      <Image
        className="mb-4 animate-spin"
        src="/loading.svg"
        alt="loading view screen"
        width={36}
        height={36}
      />
      <span>Loading...</span>
    </div>
  );
}
