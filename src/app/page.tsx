import HeroBanner from "@/components/home/HeroBanner";
import FeaturedPosts from "@/components/home/FeaturedPosts";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import LatestPosts from "@/components/home/LatestPosts";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroBanner />

      <div className="relative">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-1/2 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

        <FeaturedPosts />
        <CategoriesGrid />
        <LatestPosts />

        {/* Community / CTA Section */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="bg-linear-to-b from-blue-600/10 to-transparent dark:from-blue-600/20 p-1 rounded-[3rem]">
              <div className="bg-white dark:bg-gray-900 rounded-[2.8rem] px-8 py-20 border border-gray-100 dark:border-white/5 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                  Ready to share your <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                    own story?
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join our community of 10,000+ writers and developers.
                  Share your insights, build your personal brand, and connect with peers.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-xl shadow-blue-500/40 hover:bg-blue-700 transition-all hover:-translate-y-1">
                    Start Writing Today
                  </button>
                  <button className="px-10 py-4 bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white rounded-2xl font-black hover:bg-gray-200 dark:hover:bg-white/10 transition-all">
                    View FAQ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
