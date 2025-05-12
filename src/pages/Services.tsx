
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';
import {
  Code,
  Database,
  Fingerprint,
  Monitor,
  Cpu,
  Server,
  Zap,
  Shield
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-10 w-10 text-neon-cyan" />,
      title: "UI/UX Design",
      description: "Creating immersive, futuristic interfaces that push the boundaries of digital experiences.",
      features: ["Intuitive Navigation", "Visual Storytelling", "Interactive Prototyping", "Usability Testing"]
    },
    {
      icon: <Code className="h-10 w-10 text-neon-red" />,
      title: "Web Development",
      description: "Building cutting-edge websites and applications with the latest technologies.",
      features: ["Responsive Design", "Performance Optimization", "Dynamic Interactions", "API Integration"]
    },
    {
      icon: <Cpu className="h-10 w-10 text-neon-purple" />,
      title: "Digital Innovation",
      description: "Exploring emerging technologies to create next-generation digital products.",
      features: ["AR/VR Experiences", "AI Integration", "IoT Solutions", "Blockchain Applications"]
    },
    {
      icon: <Zap className="h-10 w-10 text-neon-cyan" />,
      title: "Tech Consulting",
      description: "Strategic guidance to help businesses leverage technology for growth.",
      features: ["Digital Transformation", "Technology Roadmapping", "System Architecture", "Process Automation"]
    },
    {
      icon: <Server className="h-10 w-10 text-neon-red" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services for modern digital operations.",
      features: ["Cloud Migration", "Serverless Architecture", "DevOps Implementation", "Performance Monitoring"]
    },
    {
      icon: <Shield className="h-10 w-10 text-neon-purple" />,
      title: "Cybersecurity",
      description: "Protecting digital assets with advanced security measures and protocols.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Threat Detection"]
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into understanding your vision, goals, and challenges."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our team develops a comprehensive plan tailored to your specific needs."
    },
    {
      number: "03",
      title: "Creation",
      description: "We bring ideas to life through iterative development and design."
    },
    {
      number: "04",
      title: "Implementation",
      description: "Your solution is deployed with precision and care."
    },
    {
      number: "05",
      title: "Evolution",
      description: "We continuously improve and optimize based on performance and feedback."
    }
  ];

  return (
    <>
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,42,109,0.15)_0,rgba(0,0,0,0)_70%)]"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6"
          >
            Our <span className="neon-text-red">Services</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl text-gray-300 mb-8">
              Cutting-edge solutions to transform your digital presence and drive technological innovation.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="cyber-card group"
              >
                <div className="p-6">
                  <div className="mb-4 flex justify-between items-start">
                    <div className="p-3 bg-cyber-darker rounded-lg border border-neon-cyan/20 group-hover:border-neon-cyan transition-colors duration-300">
                      {service.icon}
                    </div>
                    
                    <div className="w-12 h-12 flex items-center justify-center border border-gray-700 rounded-full group-hover:border-neon-cyan transition-colors duration-300">
                      <span className="font-orbitron text-gray-400 group-hover:text-neon-cyan transition-colors duration-300">0{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-orbitron font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-5">{service.description}</p>
                  
                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 bg-neon-cyan mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 px-4 bg-cyber-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-orbitron font-bold mb-4"
            >
              Our <span className="neon-text-cyan">Process</span>
            </motion.h2>
            <div className="w-24 h-1 bg-neon-cyan mx-auto"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-cyber-light -translate-x-1/2"></div>
            
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12 last:mb-0`}
              >
                <div className="md:w-1/2"></div>
                
                <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-cyber-dark border-4 border-neon-cyan flex items-center justify-center shadow-[0_0_10px_theme(colors.neon.cyan)]">
                    <span className="font-orbitron font-bold text-neon-cyan">{step.number}</span>
                  </div>
                </div>
                
                <div className={`md:w-1/2 bg-cyber-darker p-6 rounded-lg border border-neon-cyan/30 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="md:hidden flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyber-dark border-2 border-neon-cyan flex items-center justify-center mr-4">
                      <span className="font-orbitron font-bold text-neon-cyan text-sm">{step.number}</span>
                    </div>
                    <h3 className="font-orbitron font-bold text-xl">{step.title}</h3>
                  </div>
                  
                  <div className="hidden md:block">
                    <h3 className="font-orbitron font-bold text-xl mb-3">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(155,135,245,0.15)_0,rgba(0,0,0,0)_70%)]"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto bg-cyber-dark border border-neon-purple/30 rounded-lg p-8 text-center">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-orbitron font-bold mb-4"
            >
              Ready to <span className="neon-text-purple">Transform</span> Your Digital Experience?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 mb-8"
            >
              Let's discuss how our services can help you achieve your goals and stand out in the digital landscape.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/contact" className="cyber-button text-white">
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
