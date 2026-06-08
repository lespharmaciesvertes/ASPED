import Image from 'next/image';

export default function Logo({
  withText = true,
  useImage = true,
  light = false,
}: {
  withText?: boolean;
  useImage?: boolean;
  light?: boolean;
}) {
  return (
    <span className="flex items-center gap-2.5">
      {useImage ? (
        <span
          className={`grid h-11 w-11 place-items-center overflow-hidden rounded-xl ${
            light ? 'bg-white p-1 shadow-sm' : ''
          }`}
        >
          <Image
            src="/logo-apsed.png"
            alt="Logo APSED"
            width={44}
            height={44}
            className="h-full w-full object-contain"
            priority
          />
        </span>
      ) : (
        <span className="grid h-9 w-9 place-items-center rounded-lg brand-gradient font-display text-lg text-white shadow-sm">
          A
        </span>
      )}
      {withText && (
        <span
          className={`font-display text-2xl tracking-tight ${light ? 'text-white' : 'text-ink'}`}
        >
          APSED
        </span>
      )}
    </span>
  );
}
