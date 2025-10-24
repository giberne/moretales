import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NavigationCards from "@/components/NavigationCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white">
        <Hero />
        <NavigationCards />
        <Footer />
      </main>
    </>
  );
}
