"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, ShieldCheck, CreditCard, Wallet, Building, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (e: any) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert("Payment Successful! Your PG has been booked. Redirecting to home...");
      window.location.href = "/";
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          <div className="mb-8">
            <Link href="/pgs/1" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to PG Details
            </Link>
            <h1 className="text-3xl font-bold text-slate-900">Complete Your Booking</h1>
            <p className="text-slate-600 mt-2">Review your selection and process the secure payment.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Form & Payment */}
            <div className="col-span-1 lg:col-span-2 space-y-8">
              
              {/* Personal Details Form */}
              <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span>
                  Guest Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" value="Alex" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" value="Smith" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" value="alex@example.com" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all" defaultValue="+91 98765 43210" />
                  </div>
                </div>
              </section>

              {/* Payment Methods */}
              <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">2</span>
                  Payment Method
                </h2>
                
                <div className="space-y-4">
                  {/* UPI */}
                  <label className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'upi' ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-blue-600" />
                        <div className="flex items-center gap-2 text-slate-900 font-semibold">
                          <Wallet className="w-5 h-5 text-slate-500" /> UPI (GPay, PhonePe, Paytm)
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {/* Fake logos */}
                        <div className="w-8 h-5 bg-slate-200 rounded text-[8px] flex items-center justify-center font-bold text-slate-500">PAY</div>
                      </div>
                    </div>
                    {paymentMethod === 'upi' && (
                      <div className="mt-4 ml-8 pl-1">
                        <input type="text" placeholder="Enter your UPI ID (e.g. name@okhdfcbank)" className="w-full max-w-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm" />
                        <p className="text-xs text-slate-500 mt-2">A payment request will be sent to your UPI app.</p>
                      </div>
                    )}
                  </label>

                  {/* Credit/Debit Card */}
                  <label className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-blue-600" />
                        <div className="flex items-center gap-2 text-slate-900 font-semibold">
                          <CreditCard className="w-5 h-5 text-slate-500" /> Credit / Debit Card
                        </div>
                      </div>
                    </div>
                    {paymentMethod === 'card' && (
                      <div className="mt-4 ml-8 pl-1 space-y-4">
                        <input type="text" placeholder="Card Number" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm" />
                        <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="MM/YY" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm" />
                          <input type="text" placeholder="CVV" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm" />
                        </div>
                      </div>
                    )}
                  </label>

                  {/* Net Banking */}
                  <label className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'netbanking' ? 'border-blue-600 bg-blue-50/50' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="payment" value="netbanking" checked={paymentMethod === 'netbanking'} onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-blue-600" />
                        <div className="flex items-center gap-2 text-slate-900 font-semibold">
                          <Building className="w-5 h-5 text-slate-500" /> Net Banking
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </section>

            </div>

            {/* Right Column: Order Summary */}
            <div className="col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-24">
                
                {/* Header */}
                <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
                  <h3 className="font-bold text-lg mb-1">Booking Summary</h3>
                  <div className="flex items-center text-sm text-slate-400">
                    <MapPin className="w-3.5 h-3.5 mr-1" /> Koramangala Block 5, Bangalore
                  </div>
                </div>

                {/* PG Info */}
                <div className="p-6 flex gap-4 border-b border-slate-100">
                  <img src="/images/room_1.png" alt="Room" className="w-20 h-20 rounded-xl object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900">Sunrise Premium Co-living</h4>
                    <p className="text-sm text-slate-500 mt-1">Single Room (Private)</p>
                    <p className="text-sm font-medium text-slate-700 mt-2">Move in: 1st Nov 2024</p>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between text-slate-600">
                    <span>1 Month Rent</span>
                    <span className="font-medium text-slate-900">₹15,000</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Security Deposit (Refundable)</span>
                    <span className="font-medium text-slate-900">₹15,000</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Platform Fee</span>
                    <span className="font-medium text-slate-900">₹500</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>GST (18% on fee)</span>
                    <span className="font-medium text-slate-900">₹90</span>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <span className="font-bold text-slate-900">Total Amount</span>
                      <span className="font-bold text-blue-600 text-2xl">₹30,590</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 pt-0">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-emerald-50 p-3 rounded-lg text-emerald-700 border border-emerald-100">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                    Verified property. 100% secure payment with buyer protection.
                  </div>
                  <button onClick={handlePayment} disabled={isProcessing} className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-70 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 text-lg">
                    {isProcessing ? "Processing Securely..." : "Pay Now"} {!isProcessing && <ArrowRight className="w-5 h-5" />}
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
