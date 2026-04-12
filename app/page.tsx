import Image from "next/image";
import Footer from "./pages/footer";
import Architecture from "./pages/architecture";

export default function Home() {
  return (
    <>
      <main>
        <Architecture />
      </main>
      <Footer />
    </>
  );
}
