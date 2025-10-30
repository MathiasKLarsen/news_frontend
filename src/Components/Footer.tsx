"use client";

import { useState } from "react";
import ContactModal from "@/Components/ContactModal"; // Import Modal component

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="flex flex-col py-2 bg-black text-white">
      <section className="max-w-[1000px] px-5 md:px-0 md:gap-x-26 gap-y-10 mx-auto mb-10 flex justify-between flex-wrap">
        {/* First Column */}
        <div className="font-semibold">
          <h3 className="text-2xl mb-4">Nyheder</h3>
          <ul>
            <li>Seneste nyt</li>
            <li>Internationalt</li>
            <li>Sport</li>
            <li>Vejret</li>
            <button
              onClick={() => setIsModalOpen(true)} // Open the modal when clicked
              className="hover:text-gray-400 transition cursor-pointer"
            >
              <li>Contact</li>
            </button>
          </ul>
        </div>

        {/* Other Columns */}
        <div className="font-semibold">
          <h3 className="text-2xl font-semibold mb-4">Lorem, ipsum dolor.</h3>
          <p className="w-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            corporis voluptates quas sit non, qui et consequuntur? Molestiae,
            tempore minus?
          </p>
        </div>

        <div className="font-semibold">
          <h3 className="text-2xl font-semibold mb-4">Lorem, ipsum dolor.</h3>
          <p className="w-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            corporis voluptates quas sit non, qui et consequuntur? Molestiae,
            tempore minus?
          </p>
        </div>

        <div className="font-semibold">
          <h3 className="text-2xl font-semibold mb-4">Om NEWS</h3>
          <ul>
            <li>Nyt fra NEWS</li>
            <li>Job i NEWS</li>
            <li>Presse</li>
            <li>Vilkår på NEWS</li>
            <li>Etik og rettelser</li>
            <li>Privatlivspolitik</li>
          </ul>
        </div>
      </section>
      <section className="flex py-5 justify-center border-t-2">
        <p>copyright &copy; 2025 | TLF: 12 34 56 78</p>
      </section>

      {/* Modal Component */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
};

export default Footer;
