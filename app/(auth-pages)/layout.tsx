import { NavbarLogin } from "@/components/ui/navbar-login";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col items-center">
    <NavbarLogin/>
    <div className="max-w-7xl flex flex-col gap-12 items-start p-4 " >{children}</div>
    </div>
  );
}
