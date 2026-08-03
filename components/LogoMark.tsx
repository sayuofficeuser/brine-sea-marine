import Image from "next/image";

export default function LogoMark({ size = 52 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.png"
        alt="Brine Sea Marine Solutions"
        width={size}
        height={size}
        className="object-contain rounded-lg"
      />
    </div>
  );
}