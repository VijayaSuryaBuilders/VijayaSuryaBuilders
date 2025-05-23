import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would handle the form submission here
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    // Reset submission state after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Call Us',
      details: [
        '0824 2001211',
        '+91 8123301133',
        '+91 6366113131 (Mr. Nithin Suvarna, MD)'
      ]
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email Us',
      details: [
        'vijayasuryabuilders13@gmail.com',
        'www.vijayasuryabuilders.com'
      ]
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Visit Us',
      details: [
        'First Floor 1-T-17/942, Dhanya Complex',
        'Near City Bus Stand, Udupi - 576101',
        'Karnataka, India'
      ]
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Working Hours',
      details: [
        'Monday - Saturday: 9:00 AM - 6:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  return (
    <section id="contact" ref={ref} className="section py-20 concrete-bg">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="section-heading">Contact Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Have a project in mind? Get in touch with us to discuss how we can bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="p-6 bg-white border-2 border-primary">
                    <div className="flex items-center mb-4">
                      <div className="mr-3 p-2 bg-primary text-white rounded-sm">
                        {info.icon}
                      </div>
                      <h3 className="font-bebas text-xl tracking-wider">{info.title}</h3>
                    </div>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-700">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="brutalist-card">
              <h3 className="subheading mb-6">Leave Your Request</h3>
              {formSubmitted ? (
                <div className="p-6 bg-green-50 border-2 border-green-500 text-center">
                  <p className="text-green-700 font-medium text-lg">Thank you for your message!</p>
                  <p className="text-green-600">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full p-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="brutalist-button w-full"
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;