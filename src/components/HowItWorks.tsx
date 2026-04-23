import React from "react";
import { Search, Map, Home, HeartHandshake } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-blue-600" />,
      title: "Search",
      description: "Find PGs that match your exact preferences, budget, and location using our smart filters.",
      color: "bg-blue-50 border-blue-100",
      delay: "0",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />,
      title: "Connect",
      description: "Directly chat or call with verified PG owners securely through our platform.",
      color: "bg-emerald-50 border-emerald-100",
      delay: "100",
    },
    {
      icon: <Map className="w-6 h-6 text-amber-600" />,
      title: "Visit & Decide",
      description: "Schedule a physical visit or take a virtual tour to ensure the place is right for you.",
      color: "bg-amber-50 border-amber-100",
      delay: "200",
    },
    {
      icon: <Home className="w-6 h-6 text-purple-600" />,
      title: "Move In",
      description: "Pay securely online, generate rental agreements, and move into your new home.",
      color: "bg-purple-50 border-purple-100",
      delay: "300",
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p className="text-lg text-slate-600">
            Finding your perfect accommodation has never been easier. Follow these simple steps to move into your new home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-full z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className={`w-16 h-16 rounded-2xl ${step.color} border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-[260px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
