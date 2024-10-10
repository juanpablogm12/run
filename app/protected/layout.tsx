import { Sidebar } from "@/components/ui/sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full ">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
}
