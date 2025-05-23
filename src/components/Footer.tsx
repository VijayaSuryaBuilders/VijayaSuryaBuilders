import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="h-20 w-auto r-2"
              />{" "}
            </div>
            <p className="mb-6">
              Building with Integrity, Delivering Excellence since 1980.
              Licensed with KPWD as Class-III Contractor.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-block py-2 px-4 bg-white text-primary font-bebas tracking-wider 
              text-xl uppercase transition-transform duration-300 
              shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-1 hover:translate-y-1 
              hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]"
            >
              Back to Top
            </button>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-bebas text-xl tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#strengths" className="hover:underline">
                  Our Strengths
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-bebas text-xl tracking-wider mb-4">
              Contact Info
            </h3>
            <address className="not-italic space-y-2">
              <p>First Floor 1-T-17/942, Dhanya Complex</p>
              <p>Near City Bus Stand, Udupi - 576101</p>
              <p>Karnataka, India</p>
              <p className="pt-2">
                <span className="font-medium">Phone:</span> 0824 2001211
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                vijayasuryabuilders13@gmail.com
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p>
            &copy; {currentYear} Vijayasurya Builders & Developers Pvt Ltd. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
