import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "CONTACT NUMBERS",
      details: ["0824 2001211", "+91 8123301133", "+91 6366113131"],
    },
    {
      icon: Mail,
      title: "EMAIL ADDRESS",
      details: [
        "vijayasuryabuilders13@gmail.com",
        "www.vijayasuryabuilders.com",
      ],
    },
    {
      icon: MapPin,
      title: "OFFICE ADDRESS",
      details: [
        "First Floor 1-T-17/942,",
        "Dhanya Complex, Lalbagh,",
        "Mangaluru - 575003",
      ],
    },
  ];

  return (
    <section id="contact" ref={ref} className="section py-20 concrete-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="brutalist-title text-4xl md:text-6xl mb-4">
            LEAVE YOUR REQUEST
          </h2>
          <div className="w-24 h-1 bg-teal mx-auto mb-6"></div>
          <p className="brutalist-text text-lg max-w-3xl mx-auto">
            Ready to start your construction project? Get in touch with us for a
            consultation and detailed project estimate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="brutalist-card p-8">
              <h3 className="brutalist-heading text-2xl mb-6">
                GET IN TOUCH FOR WORK
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const { name, phone, message } = formData;
                  if (!name || !phone || !message) {
                    toast({
                      title: "Missing Fields",
                      description:
                        "Please fill in all required fields before sending.",
                    });
                    return;
                  }

                  const text = `Hi, I'm ${name} (${phone}). ${message}`;
                  const encodedMsg = encodeURIComponent(text);
                  const whatsappUrl = `https://wa.me/917411145428?text=${encodedMsg}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="brutalist-text text-sm uppercase tracking-wider block mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-black focus:border-brutalist-teal transition-colors duration-200 brutalist-text"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="brutalist-text text-sm uppercase tracking-wider block mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-black focus:border-brutalist-teal transition-colors duration-200 brutalist-text"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="brutalist-text text-sm uppercase tracking-wider block mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border-2 border-black focus:border-brutalist-teal transition-colors duration-200 brutalist-text"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="brutalist-text text-sm uppercase tracking-wider block mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-4 border-2 border-black focus:border-brutalist-teal transition-colors duration-200 brutalist-text resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="brutalist-button w-full flex items-center justify-center gap-3 px-6 py-3 transition-all group"
                >
                  <span className="text-xl font-semibold tracking-wide">
                    SEND MESSAGE ON WHATSAPP
                  </span>
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="brutalist-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="brutalist-heading text-lg mb-3">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="brutalist-text">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Key Contact */}
              <motion.div
                className="brutalist-card-b p-6 text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6  text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg mb-2 text-white">KEY CONTACT</h4>
                    <p className="text-white font-semibold mb-2">
                      Mr. Nithin Suvarna
                    </p>
                    <p className="text-white text-sm">Managing Director</p>
                    <p className="text-amber-500 font-bebas text-lg mt-2">
                      +91 6366113131
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                className="brutalist-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="brutalist-heading text-lg mb-3">
                      BUSINESS HOURS
                    </h4>
                    <div className="space-y-1 brutalist-text">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
