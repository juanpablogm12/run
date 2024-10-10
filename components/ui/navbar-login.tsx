import Link from "next/link";
import HeaderAuth from "@/components/header-auth";

export const NavbarLogin = () => {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center	">
      <nav className="w-full flex flex-row-reverse justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
          <div className="flex gap-5 items-center font-semibold">
            <Link href={"/"}>RUN</Link>
          </div>
          <HeaderAuth />
        </div>
      </nav>
    </div>
  );
};
