import Navbar from "@/components/layout/navbar";
import TopBar from "@/components/layout/top-bar";

export default function SiteHeader() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <TopBar />
        <Navbar />
      </header>
      <div className="h-[88px] lg:h-[136px]" aria-hidden="true" />
    </>
  );
}
