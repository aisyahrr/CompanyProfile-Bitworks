import React from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";


const Footer = () => {
  return (
    <footer className="mt-10 bg-white w-full h-auto py-10 px-6 font-Primary">
      <div className="grid grid-cols-4 w-auto mx-10">
        {/* Hubungi Kami */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-sans font-bold pb-2">Product</h2>
            <p className="font-normal py-1">Web Company Profile</p>
            <p className="font-normal py-1">Sistem POS</p>
            <p className="font-normal py-1">Web-design</p>
            <p className="font-normal py-1">Content</p>
            <p className="font-normal py-1">Aplikasi Mobile</p>
          </div>
        </div>

        {/* Shopping With Urban Attire */}
        <div className="flex flex-col gap-4">
        <div>
            <h2 className="font-sans font-bold pb-2">Use Cases</h2>
            <p className="font-normal py-1">Web-designers</p>
            <p className="font-normal py-1">UMKM</p>
            <p className="font-normal py-1">Edukasi</p>
            <p className="font-normal py-1">Startup</p>
        </div>
        </div>

        {/* Customer Care */}
        <div className="flex flex-col gap-4">
          <div>
          <h1 className="font-sans font-bold pb-2">Resources</h1>
            <p className="font-normal py-1">Academy</p>
            <p className="font-normal py-1">Blog</p>
            <p className="font-normal py-1">Themes</p>
            <p className="font-normal py-1">Hosting</p>
            <p className="font-normal py-1">Developers</p>
            <p className="font-normal py-1">Support</p>
            <p className="font-normal py-1">FAQ</p>
          </div>
        </div>

        {/* Information */}
        <div className="flex flex-col gap-4">
           <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
            <p className="text-sm text-gray-600 mb-4">
                Subscribe untuk tips digital marketing & teknologi terbaru.
            </p>

            <form className="flex items-center gap-2">
                <input
                type="email"
                placeholder="Enter your email Address"
                className="w-full px-4 py-2 bg-gray-100 text-sm border border-gray-300 rounded-l-md focus:outline-none"
                />
                <button
                type="submit"
                className="px-4 py-2 border border-black rounded-sm hover:bg-black hover:text-white transition"
                >
                Subscribe
                </button>
            </form>
        </div>

      </div>
    <div className="flex justify-between mt-10 px-6">
      <h1 className="justify-between text-center items-center font-sans text-slate-400">
        © 2025 Bitworks.
      </h1>
      <div className="flex gap-4">
        <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-pink-500 transition text-xl" />
        </a>
        <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <LuLinkedin className="hover:text-blue-600 transition text-xl" />
        </a>
        <a href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-gray-700 transition text-xl" />
        </a>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
