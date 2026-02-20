type BurgerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Burger({ open, setOpen }: BurgerProps) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="relative w-8 h-8 flex flex-col justify-between items-center p-1 cursor-pointer"
      aria-label="Menu"
    >
      {/* obere Linie */}
      <span
        className={`block h-0.5 w-full bg-custom-beige-100 rounded transition-all duration-300 ease-in-out
          ${open ? "rotate-45 translate-y-3" : ""}`}
      />
      {/* mittlere Linie */}
      <span
        className={`block h-0.5 w-full bg-custom-beige-100 rounded transition-all duration-300 ease-in-out
          ${open ? "scale-x-0" : ""}`}
      />
      {/* untere Linie */}
      <span
        className={`block h-0.5 w-full bg-custom-beige-100 rounded transition-all duration-300 ease-in-out
          ${open ? "-rotate-45 -translate-y-3" : ""}`}
      />
    </button>
  );
}
