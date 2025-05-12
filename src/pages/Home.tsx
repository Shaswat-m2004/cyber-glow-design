
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Server, Zap } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "FUTURE OF DESIGN";
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index]);
  
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-neon-cyan" />,
      title: "Cutting-edge Design",
      description: "Pushing the boundaries of visual aesthetics with futuristic interfaces."
    },
    {
      icon: <Cpu className="h-8 w-8 text-neon-red" />,
      title: "Tech Innovation",
      description: "Embracing the latest technologies to create immersive digital experiences."
    },
    {
      icon: <Server className="h-8 w-8 text-neon-purple" />,
      title: "Robust Architecture",
      description: "Building scalable and secure systems for tomorrow's digital challenges."
    }
  ];
  
  return (
    <>
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cyber-darker opacity-80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,42,109,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-extrabold mb-6">
              <span className="neon-text-red">REBORN</span>{" "}
              <span className="block mt-2 text-white typing-text">{text}</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Pioneering the digital frontier with futuristic design and cutting-edge technology solutions for the next generation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services" className="cyber-button text-white">
                Explore Services
              </Link>
              <Link to="/contact" className="relative px-6 py-2 font-orbitron text-sm tracking-wider border border-neon-cyan text-neon-cyan rounded-md hover:bg-neon-cyan/10 transition-all duration-300">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-cyber-dark relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
              <span className="text-neon-cyan">FUTURE</span> TECHNOLOGIES
            </h2>
            <div className="w-24 h-1 bg-neon-red mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="cyber-card p-6 flex flex-col items-center text-center"
              >
                <div className="mb-4 rounded-full p-3 bg-cyber-darker border border-neon-cyan/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <Link to="/services" className="mt-auto text-neon-cyan font-medium flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyber-darker to-cyber-dark relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(155,135,245,0.15)_0,rgba(0,0,0,0)_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-cyber-dark border border-neon-purple/30 rounded-lg p-8 md:p-12 max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-orbitron font-bold mb-4"
            >
              Ready to <span className="neon-text-purple">Revolutionize</span> Your Digital Presence?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Join the future of design and technology. Let's create something extraordinary together.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/contact" className="cyber-button text-white">
                Start Your Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
