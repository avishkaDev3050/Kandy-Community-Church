"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Mail, Phone, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#142132] text-gray-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-xl border border-white/10">
                <Image
                  src="/logo.png"
                  alt="Kandy Community Church Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="text-white text-base font-medium tracking-wide">
                Kandy Community Church
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
              Transforming communities through the Gospel of Christ. Reach. Raise. Release.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase text-[#C59B27]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story & Beliefs
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="hover:text-white transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/community-hub" className="hover:text-white transition-colors">
                  Kingdom Community Hub
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors">
                  Support Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Sunday Gathering Details */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase text-[#C59B27]">
              Sunday Gathering
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-light">
              <li className="flex items-start gap-2.5">
                <Clock className="text-[#C59B27] shrink-0 mt-0.5" size={16} />
                <span>Every Sunday at 12:00 PM</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="text-[#C59B27] shrink-0 mt-0.5" size={16} />
                <span>26 Colombo St, Kandy, Sri Lanka</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase text-[#C59B27]">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-light">
              <li className="flex items-center gap-2.5">
                <Phone className="text-[#C59B27] shrink-0" size={16} />
                <span>Contact Church Leadership</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="text-[#C59B27] shrink-0" size={16} />
                <span>info@kandycommunitychurch.org</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Kandy Community Church. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-rose-500 fill-rose-500" /> for Kingdom Impact
          </p>
        </div>
      </div>
    </footer>
  );
}