"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Calendar, CreditCard, ChevronDown, Users } from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchLocation, setSearchLocation] = useState("");
  const [roommatePref, setRoommatePref] = useState("");

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 h-72 w-72 -translate-y-1/2 rounded-full bg-sky-50/50 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 font-sans">
            Find Your Perfect PG <span className="text-blue-600">Anywhere</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with verified PG owners. Safe stays. Better living.
          </p>
          <div className="inline-flex items-center justify-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span>Your comfort starts here.</span>
          </div>
        </div>

        {/* Search Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-3 md:p-4">
          <div className="flex space-x-4 mb-4 border-b border-slate-100 pb-3 px-2">
            {["Single", "Double", "Shared"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`text-sm font-medium py-1 px-3 rounded-full transition-colors ${
                  activeTab === tab.toLowerCase()
                    ? "bg-slate-100 text-slate-900"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab} Room
              </button>
            ))}
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-${(activeTab === 'double' || activeTab === 'shared') ? '5' : '4'} gap-4 items-center`}>
            {/* Location */}
            <div className="relative flex items-center p-2 rounded-xl border border-transparent hover:border-slate-200 transition-colors group cursor-text">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mr-3 group-hover:bg-blue-100 transition-colors">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-semibold text-slate-500 mb-0.5">Location</label>
                <input 
                  type="text" 
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="Where do you want to live?" 
                  className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                />
              </div>
            </div>

            {/* Move in Date */}
            <div className="relative flex items-center p-2 rounded-xl border border-transparent hover:border-slate-200 transition-colors group cursor-text border-t border-slate-100 md:border-t-0 md:border-l">
              <div className="p-2 bg-rose-50 rounded-lg text-rose-600 mr-3 group-hover:bg-rose-100 transition-colors">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-semibold text-slate-500 mb-0.5">Move in</label>
                <input 
                  type="text" 
                  placeholder="Select Date" 
                  className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:outline-none"
                  onFocus={(e) => e.target.type = 'date'}
                  onBlur={(e) => e.target.type = 'text'}
                />
              </div>
            </div>
            
            {/* Roommate Preference (Conditional) */}
            {(activeTab === 'double' || activeTab === 'shared') && (
              <div className="relative flex items-center p-2 rounded-xl border border-transparent hover:border-slate-200 transition-colors group cursor-pointer border-t border-slate-100 md:border-t-0 md:border-l">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-600 mr-3 group-hover:bg-purple-100 transition-colors">
                  <Users className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-slate-500 mb-0.5">Profession</label>
                  <select
                    className="w-full bg-transparent text-sm text-slate-900 outline-none cursor-pointer appearance-none"
                    value={roommatePref}
                    onChange={(e) => setRoommatePref(e.target.value)}
                  >
                    <option value="">Any</option>
                    <option value="student">Student</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>
              </div>
            )}

            {/* Budget */}
            <div className="relative flex items-center p-2 rounded-xl border border-transparent hover:border-slate-200 transition-colors group cursor-pointer border-t border-slate-100 md:border-t-0 md:border-l">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 mr-3 group-hover:bg-emerald-100 transition-colors">
                <CreditCard className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-semibold text-slate-500 mb-0.5">Budget</label>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-900">₹5k - ₹15k</span>
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="p-2 pt-4 md:pt-2">
              <Link href={`/pgs?location=${encodeURIComponent(searchLocation)}&type=${activeTab}&pref=${roommatePref}`} className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium flex items-center justify-center space-x-2 transition-all shadow-sm hover:shadow-md active:scale-[0.98]">
                <Search className="h-5 w-5" />
                <span>Search PGs</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
