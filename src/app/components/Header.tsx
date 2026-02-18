"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 w-full flex items-start justify-end z-30 p-8 pointer-events-none">
      <nav className="flex gap-6 text-base font-bodymono pointer-events-auto" style={{ color: "#97989B" }}>
        <Link href="/" className="flex flex-col items-center gap-0.5">
          <span>who</span>
          {pathname === "/" && (
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "currentColor",
              }}
            />
          )}
        </Link>
        <Link href="/musings" className="flex flex-col items-center gap-0.5">
          <span>musings</span>
          {pathname === "/musings" && (
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "currentColor",
              }}
            />
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
