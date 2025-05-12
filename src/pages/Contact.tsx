
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../components/ParticlesBackground';
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    { 
      icon: <Mail className="h-6 w-6 text-neon-cyan" />, 
      title: "Email Us", 
      details: "info@reborndesign.com",
      action: "mailto:info@reborndesign.com"
    },
    { 
      icon: <Phone className="h-6 w-6 text-neon-red" />, 
      title: "Call Us", 
      details: "+1 (888) 123-4567",
      action: "tel:+18881234567"
    },
    { 
      icon: <MapPin className="h-6 w-6 text-neon-purple" />, 
      title: "Visit Us", 
      details: "Neo Tokyo, Sector 7, Digital District",
      action: "#"
    },
  ];

  return (
    <>
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(155,135,245,0.15)_0,rgba(0,0,0,0)_70%)]"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6"
          >
            Contact <span className="neon-text-purple">Us</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl text-gray-300 mb-8">
              Have a project in mind or want to learn more? Let's connect and explore the possibilities.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((item, index) => (
              <motion.a
                href={item.action}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="cyber-card p-6 text-center group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyber-darker border border-gray-700 mb-4 group-hover:border-neon-cyan transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-orbitron font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.details}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-cyber-dark border border-neon-cyan/20 rounded-lg p-8 backdrop-blur-sm"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-2">Get In Touch</h2>
                <p className="text-gray-400">Fill out the form below and we'll get back to you shortly</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-orbitron text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-darker border border-neon-cyan/30 rounded-md px-4 py-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors duration-300 outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-orbitron text-sm">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-darker border border-neon-cyan/30 rounded-md px-4 py-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors duration-300 outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-orbitron text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-cyber-darker border border-neon-cyan/30 rounded-md px-4 py-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors duration-300 outline-none"
                    placeholder="Enter subject"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-orbitron text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-cyber-darker border border-neon-cyan/30 rounded-md px-4 py-3 text-white focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors duration-300 outline-none resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <div className="text-center md:text-right">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cyber-button text-white flex items-center justify-center mx-auto md:ml-auto md:mr-0 min-w-[160px]"
                  >
                    {isSubmitting ? (
                      <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    ) : (
                      <Send className="h-4 w-4 mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 px-4 bg-cyber-dark">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden border border-neon-purple/30 shadow-[0_0_20px_rgba(155,135,245,0.2)]"
            >
              <div className="aspect-[16/9] bg-cyber-darker relative">
                {/* Placeholder for a map - in a real project, you'd use Google Maps or another map service */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-cyber-dark inline-flex items-center justify-center w-16 h-16 rounded-full border border-neon-purple mb-4">
                      <MapPin className="h-8 w-8 text-neon-purple" />
                    </div>
                    <h3 className="font-orbitron text-xl font-bold">REBORN DESIGN</h3>
                    <p className="text-gray-400 mt-2">Neo Tokyo, Sector 7, Digital District</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.15)_0,rgba(0,0,0,0)_70%)]"></div>
                <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px]"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
