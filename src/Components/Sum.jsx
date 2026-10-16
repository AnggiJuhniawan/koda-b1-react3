/**
 * Component untuk menjumlahkan dua angka
 * @param {number} a - Angka Pertama
 * @param {number} b - Angka Kedua
 * @returns {number} Hasil penjumlahan
 */

export function Sum({ a, b }) {
  return (
    <p>
      {a} + {b} = {a + b}
    </p>
  );
}

/**
 * @typeof {import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
 *  variant?: "dark" | "light",
 * children?: import("react").ReactNode
 * }} ButtonProps
 *
 * Komponen Button reusable dengan variant dark dan light
 *
 * @param {ButtonProps} props - Props tombol
 * @returns {import("react").ReactElement}
 */
export default function Button({
  children,
  variant = "dark",
  className = "",
  type = "button",
  ...rest
}) {
  const base = "rounded-lg px-5 py-2.5 font-semibold";
  const theme =
    variant === "light"
      ? "border border-slate-300 bg-white text-slate-900"
      : "bg-slate-950 text-white";
  return (
    <button type={type} className={`${base} ${theme} ${className}`} {...rest}>
      {children}
    </button>
  );
}
