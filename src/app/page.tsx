import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedPGs from "@/components/FeaturedPGs";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <FeaturedPGs />
        <HowItWorks />
        
        {/* Owner CTA Section */}
        <section className="py-24 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/login_bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Are you a PG Owner?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of owners who trust RoomMate. Fill your rooms faster, manage bookings easily, and grow your business with our tailored platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/owners/register" className="bg-white text-blue-600 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors w-full sm:w-auto text-center shadow-lg hover:shadow-xl">
                List Your Property
              </a>
              <a href="/owners" className="bg-blue-700 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-blue-800 border border-blue-500 transition-colors w-full sm:w-auto text-center">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
