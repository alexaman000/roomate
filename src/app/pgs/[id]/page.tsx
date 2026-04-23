"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Star, MapPin, Wifi, Utensils, Wind, Shield, CheckCircle2, ChevronRight, Share, Heart, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import { pgsData } from "@/data/pgs";

export default function PGDetailsPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  const basePg = pgsData.find(p => p.id.toString() === params?.id?.toString()) || pgsData[0];
  const parsedBasePrice = parseInt(basePg.price.replace(/,/g, ''));
  
  // Mock Data
  const pg = {
    ...basePg,
    description: `Experience premium living at its finest. ${basePg.name} offers fully furnished rooms with top-notch amenities, situated in the heart of Ranchi. Perfect for students and working professionals.`,
    price: {
      single: parsedBasePrice * 1.5,
      double: parsedBasePrice,
      shared: parsedBasePrice * 0.8
    },
    images: [
      "/images/room_1.png",
      "/images/room_2.png",
      "/images/login_bg.png",
      "/images/room_1.png"
    ],
    facilities: [
      { icon: <Wifi className="w-5 h-5" />, name: "High-Speed WiFi", desc: "100Mbps unlimited" },
      { icon: <Utensils className="w-5 h-5" />, name: "Nutritious Food", desc: "Breakfast & Dinner" },
      { icon: <Wind className="w-5 h-5" />, name: "Air Conditioning", desc: "In all rooms" },
      { icon: <Shield className="w-5 h-5" />, name: "24/7 Security", desc: "CCTV & Guards" },
      { icon: <CheckCircle2 className="w-5 h-5" />, name: "Housekeeping", desc: "Daily cleaning" },
      { icon: <CheckCircle2 className="w-5 h-5" />, name: "Power Backup", desc: "100% backup" }
    ],
    reviewsList: [
      { id: 1, user: "Rohan Sharma", rating: 5, date: "2 weeks ago", text: "Amazing place to stay! The food is great and the WiFi is super fast." },
      { id: 2, user: "Karan Singh", rating: 4, date: "1 month ago", text: "Rooms are very clean. The management is responsive to any issues." }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
          
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between mb-6 text-sm">
            <div className="flex items-center text-slate-500 space-x-2">
              <Link href="/pgs" className="hover:text-blue-600 transition-colors">PGs in Ranchi</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={`/pgs?location=${encodeURIComponent(basePg.location)}`} className="hover:text-blue-600 transition-colors">{basePg.location.split(',')[0]}</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900 font-medium">{pg.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-medium transition-colors">
                <Share className="w-4 h-4" /> Share
              </button>
              <button className="flex items-center gap-1.5 text-rose-500 hover:text-rose-600 font-medium transition-colors">
                <Heart className="w-4 h-4" fill="currentColor" /> Save
              </button>
            </div>
          </div>

          {/* Title & basic info */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{pg.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center text-amber-500 font-bold bg-amber-50 px-2 py-1 rounded-md">
                <Star className="w-4 h-4 fill-amber-500 mr-1" />
                {pg.rating} <span className="text-slate-500 font-normal ml-1">({pg.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-slate-400" />
                {pg.location}
                <a href={`https://maps.google.com/?q=${encodeURIComponent(pg.location)}`} target="_blank" rel="noreferrer" className="ml-2 text-blue-600 hover:underline font-medium text-xs">
                  View on Map
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-emerald-600 font-medium">Verified Property</span>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-10 h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-sm">
            <div className="col-span-1 md:col-span-2 h-full">
              <img src={pg.images[0]} alt="Room Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" />
            </div>
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-2 h-full">
              {pg.images.slice(1).map((img, i) => (
                <div key={i} className={`relative h-full ${i === 2 ? 'block md:hidden lg:block' : ''}`}>
                  <img src={img} alt={`Gallery image ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" />
                  {i === 2 && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-colors">
                      <span className="text-white font-semibold text-lg">+12 Photos</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
             
            {/* Left Column: Details */}
             <div className="col-span-1 lg:col-span-2">
               
               {/* Tabs */}
               <div className="flex space-x-8 border-b border-slate-200 mb-8 overflow-x-auto">
                 {['overview', 'facilities', 'reviews'].map((tab) => (
                   <button 
                     key={tab}
                     onClick={() => setActiveTab(tab)}
                     className={`pb-4 text-sm font-semibold capitalize whitespace-nowrap whitespace-nowrap transition-colors ${
                       activeTab === tab 
                         ? 'text-blue-600 border-b-2 border-blue-600' 
                         : 'text-slate-500 hover:text-slate-900'
                     }`}
                   >
                     {tab}
                   </button>
                 ))}
               </div>

               {/* Overview Section */}
               <section className={activeTab === 'overview' ? 'block' : 'hidden'}>
                 <div className="mb-10">
                   <h2 className="text-xl font-bold text-slate-900 mb-4">About this PG</h2>
                   <p className="text-slate-600 leading-relaxed max-w-3xl">{pg.description}</p>
                 </div>

                 <div className="mb-10">
                   <h2 className="text-xl font-bold text-slate-900 mb-4">Location Map</h2>
                   <iframe 
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(pg.location)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                      width="100%" 
                      height="300" 
                      style={{border:0}} 
                      loading="lazy" 
                      className="rounded-2xl border border-slate-100 shadow-sm"
                   ></iframe>
                 </div>

                 <div className="mb-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                   <h3 className="text-lg font-bold text-slate-900 mb-4">PG Rules & Info</h3>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600">
                     <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> 1 month notice period</li>
                     <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> 1 month security deposit</li>
                     <li className="flex items-center gap-2"><AlertCircle className="w-4 h-4 text-slate-400" /> No smoking inside rooms</li>
                     <li className="flex items-center gap-2"><AlertCircle className="w-4 h-4 text-slate-400" /> Visitors allowed in common area</li>
                   </ul>
                 </div>
               </section>

               {/* Facilities Section */}
               <section className={activeTab === 'overview' || activeTab === 'facilities' ? 'block mb-10' : 'hidden'}>
                 <h2 className="text-xl font-bold text-slate-900 mb-6">Facilities & Amenities</h2>
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                   {pg.facilities.map((fac, i) => (
                     <div key={i} className="flex gap-4">
                       <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 text-blue-600 flex-shrink-0">
                         {fac.icon}
                       </div>
                       <div>
                         <h4 className="font-semibold text-slate-900">{fac.name}</h4>
                         <p className="text-xs text-slate-500 mt-1">{fac.desc}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </section>

               {/* Reviews Section */}
               <section className={activeTab === 'overview' || activeTab === 'reviews' ? 'block' : 'hidden'}>
                 <div className="flex items-center justify-between mb-6">
                   <h2 className="text-xl font-bold text-slate-900">Tenant Reviews</h2>
                   <button className="text-blue-600 font-medium text-sm hover:underline">View all 124 reviews</button>
                 </div>
                 
                 <div className="space-y-6">
                   {pg.reviewsList.map((review) => (
                     <div key={review.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                       <div className="flex justify-between items-start mb-4">
                         <div>
                           <h4 className="font-bold text-slate-900">{review.user}</h4>
                           <p className="text-xs text-slate-500 mt-1">{review.date}</p>
                         </div>
                         <div className="flex">
                           {[...Array(5)].map((_, i) => (
                             <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-100 text-slate-200'}`} />
                           ))}
                         </div>
                       </div>
                       <p className="text-slate-600">{review.text}</p>
                     </div>
                   ))}
                 </div>
               </section>
               
             </div>

            {/* Right Column: Sticky Booking Widget */}
            <div className="col-span-1">
              <div className="sticky top-28 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 p-6">
                
                <h3 className="text-lg font-bold text-slate-900 mb-6">Select Room Type</h3>
                
                {/* Room Types */}
                <div className="space-y-4 mb-8">
                  <label className="flex items-center justify-between p-4 rounded-xl border-2 border-blue-600 bg-blue-50 cursor-pointer transition-all">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="room" className="w-5 h-5 text-blue-600" defaultChecked />
                      <div>
                        <p className="font-bold text-slate-900">Single Room</p>
                        <p className="text-xs text-slate-500">Private room</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-600">₹{pg.price.single}</p>
                      <p className="text-xs text-slate-500">/month</p>
                    </div>
                  </label>
                  
                  <label className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-blue-400 cursor-pointer transition-all">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="room" className="w-5 h-5" />
                      <div>
                        <p className="font-bold text-slate-900">Double Sharing</p>
                        <p className="text-xs text-slate-500">2 beds</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">₹{pg.price.double}</p>
                      <p className="text-xs text-slate-500">/month</p>
                    </div>
                  </label>

                  <label className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-blue-400 cursor-pointer transition-all">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="room" className="w-5 h-5" />
                      <div>
                        <p className="font-bold text-slate-900">Triple Sharing</p>
                        <p className="text-xs text-slate-500">3 beds</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900">₹{pg.price.shared}</p>
                      <p className="text-xs text-slate-500">/month</p>
                    </div>
                  </label>
                </div>

                <div className="space-y-3 mb-6 p-4 bg-slate-50 rounded-xl">
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Monthly Rent</span>
                    <span className="font-medium text-slate-900">₹15,000</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Security Deposit (Refundable)</span>
                    <span className="font-medium text-slate-900">₹15,000</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex justify-between">
                    <span className="font-bold text-slate-900">Amount to Pay</span>
                    <span className="font-bold text-blue-600 text-lg">₹30,000</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="/checkout" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex justify-center items-center gap-2">
                    Proceed to Payment
                  </Link>
                  <a href={`https://wa.me/918210330277?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(pg.name)}`} target="_blank" rel="noreferrer" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3.5 rounded-xl transition-all flex justify-center items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.347-.272.271-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    WhatsApp Owner
                  </a>
                </div>
                
                {/* Inquiry Form */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-3 text-sm flex justify-between items-center">
                    Request Details 
                    <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">Call: 8210330277</span>
                  </h4>
                  <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Request sent! The owner will contact you shortly.'); }}>
                    <div>
                      <input type="text" className="w-full border border-slate-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-sm" placeholder="Your Name" required />
                    </div>
                    <div>
                      <input type="tel" className="w-full border border-slate-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 text-sm" placeholder="Phone Number" required />
                    </div>
                    <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-lg transition-colors text-sm">
                      Send Request
                    </button>
                  </form>
                </div>
                
                <p className="text-center text-xs text-slate-500 mt-4">
                  You won't be charged yet.
                </p>

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
