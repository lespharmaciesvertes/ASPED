import Image from 'next/image';

/**
 * Logo APSED.
 * - Si le fichier /logo-apsed.png est présent dans /public, il est utilisé.
 * - Sinon, repli sur un badge stylisé « A ».
 *
 * Pour activer le vrai logo : dépose le fichier dans public/logo-apsed.png
 * et passe la prop useImage à true.
 */
export default function Logo({
  withText = true,
  useImage = false,
  light = false,
}: {
  withText?: boolean;
  useImage?: boolean;
  light?: boolean;
}) {
  return (
    <span className="flex items-center gap-2">
      {useImage ? (
        <Image
          src="/logo-apsed.png"
          alt="Logo APSED"
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
          priority
        />
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
