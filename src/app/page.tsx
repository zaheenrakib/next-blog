import HeroBanner from "@/components/home/HeroBanner";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroBanner />

      {/* Additional sections can be added here */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Featured Articles or other content */}
      </section>
    </main>
  );
}
