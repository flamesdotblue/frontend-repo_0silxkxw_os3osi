import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm text-black">
          <div className="col-span-2 md:col-span-2">
            <div className="font-[Poppins] text-xl font-extrabold">Hostifye</div>
            <p className="mt-2 text-gray-700">Affordable innovation at cost-covering pricing.</p>
            <div className="flex items-center gap-3 mt-4 text-gray-700">
              <a href="https://twitter.com" aria-label="Twitter" className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" aria-label="GitHub" className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://discord.com" aria-label="Discord" className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="font-semibold mb-2">Company</div>
            <ul className="space-y-2 text-gray-700">
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/roadmap" className="hover:underline">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-2">Resources</div>
            <ul className="space-y-2 text-gray-700">
              <li><a href="/docs" className="hover:underline">Docs</a></li>
              <li><a href="/support" className="hover:underline">Support</a></li>
              <li><a href="/status" className="hover:underline">Status</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-2">Legal</div>
            <ul className="space-y-2 text-gray-700">
              <li><a href="/privacy" className="hover:underline">Privacy</a></li>
              <li><a href="/terms" className="hover:underline">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-gray-700">
          <div>Contact: <a href="mailto:hello@hostifye.com" className="underline">hello@hostifye.com</a> · Live chat</div>
          <div className="text-gray-600">© {new Date().getFullYear()} Hostifye Inc. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;