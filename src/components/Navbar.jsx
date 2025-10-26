import React from 'react';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-[Poppins] text-black text-xl font-extrabold tracking-tight">Hostifye</a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8 text-black">
          <a href="#home" className="hover:opacity-70 transition-opacity">Home</a>
          <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
          <a href="#pricing" className="hover:opacity-70 transition-opacity">Pricing</a>
          <a href="#dashboard" className="hover:opacity-70 transition-opacity">Dashboard</a>
          <a href="#support" className="hover:opacity-70 transition-opacity">Support</a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="#faqs"
            className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Search FAQs"
          >
            <Search className="w-5 h-5" />
          </a>
          <a
            href="/signup"
            className="px-4 py-2 rounded-md bg-black text-white hover:shadow-md transition-all"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="px-4 py-2 rounded-md border border-gray-300 text-black hover:bg-gray-100 transition-colors"
          >
            Login
          </a>
        </div>

        {/* Mobile menu trigger (collapsible nav) */}
        <details className="md:hidden w-full">
          <summary className="list-none cursor-pointer flex items-center justify-between py-2">
            <span className="text-black">Menu</span>
            <span className="text-gray-500">≡</span>
          </summary>
          <div className="flex flex-col space-y-2 pb-4">
            <a href="#home" className="py-2 text-black">Home</a>
            <a href="#services" className="py-2 text-black">Services</a>
            <a href="#pricing" className="py-2 text-black">Pricing</a>
            <a href="#dashboard" className="py-2 text-black">Dashboard</a>
            <a href="#support" className="py-2 text-black">Support</a>
            <div className="flex items-center gap-2 pt-2">
              <a href="/signup" className="flex-1 px-4 py-2 rounded-md bg-black text-white text-center">Sign Up</a>
              <a href="/login" className="flex-1 px-4 py-2 rounded-md border border-gray-300 text-center">Login</a>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
};

export default Navbar;