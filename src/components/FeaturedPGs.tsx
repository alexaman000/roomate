import React from "react";
import Link from "next/link";
import { Star, MapPin, Wifi, Utensils, Wind, Shield, Heart } from "lucide-react";

export default function FeaturedPGs() {
  const pgs = [
    {
      id: 1,
      name: "Lalpur Premium Boys PG",
      location: "Lalpur, Ranchi",
      price: "6,500",
      rating: 4.8,
      reviews: 124,
      image: "/images/room_1.png",
      tags: ["WiFi", "Food", "AC", "Laundry"],
      mapUrl: "https://maps.google.com/?q=Lalpur,Ranchi"
    },
    {
      id: 2,
      name: "Kanke Road Girls Hostel",
      location: "Kanke Road, Ranchi",
      price: "7,000",
      rating: 4.5,
      reviews: 89,
      image: "/images/room_2.png",
      tags: ["WiFi", "Laundry", "Library", "Gym"],
      mapUrl: "https://maps.google.com/?q=Kanke+Road,Ranchi"
    },
    {
      id: 3,
      name: "Doranda Co-Living Space",
      location: "Doranda, Ranchi",
      price: "5,500",
      rating: 4.9,
      reviews: 210,
      image: "/images/login_bg.png",
      tags: ["AC", "Food", "WiFi", "Security"],
      mapUrl: "https://maps.google.com/?q=Doranda,Ranchi"
    }
  ];

  const getTagIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "wifi": return <Wifi className="w-3.5 h-3.5" />;
      case "food": return <Utensils className="w-3.5 h-3.5" />;
      case "ac": return <Wind className="w-3.5 h-3.5" />;
      case "security": return <Shield className="w-3.5 h-3.5" />;
      default: return null;
    }
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
              Featured <span className="text-blue-600">Properties</span>
            </h2>
            <p className="text-slate-600">Discover our most popular and highly-rated PGs.</p>
          </div>
          <Link href="/pgs" className="hidden sm:block text-blue-600 font-medium hover:text-blue-700 transition-colors">
            View all PGs &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pgs.map((pg) => (
            <div key={pg.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={pg.image} 
                  alt={pg.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <button className="h-8 w-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-rose-500 hover:bg-white transition-colors shadow-sm">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-xs font-semibold text-slate-900 flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    {pg.rating} <span className="text-slate-500 font-normal">({pg.reviews})</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">{pg.name}</h3>
                  <div className="flex items-center justify-between text-slate-500 text-sm">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span className="line-clamp-1">{pg.location}</span>
                    </div>
                    <a href={pg.mapUrl} target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline flex-shrink-0 ml-2">
                      View on Map
                    </a>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-4">
                  {pg.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1 bg-slate-50 text-slate-600 text-xs px-2.5 py-1.5 rounded-md border border-slate-100 font-medium">
                      {getTagIcon(tag)} {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-medium block mb-0.5">Starts from</span>
                    <div className="flex items-baseline text-blue-600 font-bold">
                      <span className="text-sm mr-0.5">₹</span>
                      <span className="text-xl">{pg.price}</span>
                      <span className="text-sm text-slate-500 font-normal ml-1">/mo</span>
                    </div>
                  </div>
                  <Link href={`/pgs/${pg.id}`} className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm inline-block text-center">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center sm:hidden">
          <Link href="/pgs" className="block w-full bg-blue-50 text-blue-600 font-medium py-3 rounded-xl hover:bg-blue-100 transition-colors text-center">
            View all PGs
          </Link>
        </div>
      </div>
    </section>
  );
}
