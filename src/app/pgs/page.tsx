"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { MapPin, Star, Filter, Heart, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pgsData } from "@/data/pgs";

function PGsContent() {
  const searchParams = useSearchParams();
  const roomTypeParam = searchParams.get("type") || "all";
  const locationParam = searchParams.get("location") || "";
  const prefParam = searchParams.get("pref") || "";

  const [activeTab, setActiveTab] = useState(roomTypeParam);
  const [searchLocation, setSearchLocation] = useState(locationParam);
  const [roommatePref, setRoommatePref] = useState(prefParam);

  const filteredPGs = useMemo(() => {
    return pgsData.filter((pg) => {
      // Basic text search on location
      const locationMatch = searchLocation === "" || 
        pg.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
        pg.name.toLowerCase().includes(searchLocation.toLowerCase());
      
      // Strict match for type if not "all"
      let typeMatch = true;
      if (activeTab !== "all") {
        if (activeTab === "single") {
          typeMatch = pg.type.toLowerCase().includes("single") || pg.type.toLowerCase().includes("boys") || pg.type.toLowerCase().includes("girls"); // Mock logic
        } else if (activeTab === "shared" || activeTab === "double") {
          typeMatch = pg.type.toLowerCase().includes("co-ed") || pg.type.toLowerCase().includes("boys") || pg.type.toLowerCase().includes("girls"); // Mock logic
        }
      }

      return locationMatch && typeMatch;
    });
  }, [activeTab, searchLocation]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                PGs in Ranchi ({filteredPGs.length})
              </h1>
              <p className="text-slate-600">Find your ideal stay from our curated properties.</p>
            </div>
            
            <div className="flex items-center gap-2">
               <div className="relative">
                 <input 
                   type="text" 
                   placeholder="Search location..." 
                   className="pl-4 pr-10 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500 w-full md:w-64"
                   value={searchLocation}
                   onChange={(e) => setSearchLocation(e.target.value)}
                 />
                 <MapPin className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
               </div>
               <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-700 font-medium whitespace-nowrap">
                 <Filter className="w-4 h-4" /> Filters
               </button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 pb-4 mb-6">
             {["all", "single", "double", "shared"].map(tab => (
               <button 
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                   activeTab === tab ? "bg-blue-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                 }`}
               >
                 <span className="capitalize">{tab}</span> Room
               </button>
             ))}
             
             {roommatePref && (
               <div className="flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors bg-purple-100 text-purple-700 border border-purple-200">
                 <span>Pref: <span className="capitalize">{roommatePref}</span></span>
                 <button onClick={() => setRoommatePref("")} className="ml-1 hover:text-purple-900">&times;</button>
               </div>
             )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPGs.map((pg) => (
              <Link href={`/pgs/${pg.id}`} key={pg.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={pg.image} 
                    alt={pg.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 text-white flex gap-2">
                    <button className="p-1.5 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors" onClick={(e) => { e.preventDefault(); }}>
                       <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute top-3 left-3 flex gap-1">
                     <span className="bg-emerald-500 text-white px-2 py-0.5 rounded-md text-xs font-bold shadow-sm">
                       Verified
                     </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-base font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors uppercase">{pg.type} PG</h3>
                    <span className="flex items-center gap-1 text-sm font-bold text-slate-700 bg-amber-50 px-1.5 py-0.5 rounded text-amber-600">
                      <Star className="w-3 h-3 fill-amber-500" /> {pg.rating}
                    </span>
                  </div>
                  
                  <h4 className="text-slate-800 font-medium text-sm line-clamp-1 mb-1">{pg.name}</h4>
                  
                  <div className="flex items-center text-slate-500 text-xs mb-3">
                    <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                    <span className="line-clamp-1">{pg.location}</span>
                  </div>

                  <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-0.5">Starts From</span>
                      <div className="flex items-baseline text-blue-600 font-bold">
                        <span className="text-sm mr-0.5">₹</span>
                        <span className="text-lg">{pg.price}</span>
                        <span className="text-xs text-slate-500 font-normal ml-0.5">/mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPGs.length === 0 && (
            <div className="py-20 text-center">
               <h3 className="text-xl font-bold text-slate-900 mb-2">No Properties Found</h3>
               <p className="text-slate-500">We couldn't find any PGs matching your search criteria. Try adjusting your filters.</p>
               <button onClick={() => { setActiveTab('all'); setSearchLocation(''); }} className="mt-4 text-blue-600 font-medium hover:underline">Clear Filters</button>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function PGsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Properties...</div>}>
      <PGsContent />
    </Suspense>
  );
}
