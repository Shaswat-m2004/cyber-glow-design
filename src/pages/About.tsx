
import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '../components/ParticlesBackground';
import { CircuitBoard, Code, Cpu, Database, Fingerprint, Monitor } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Nexus",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=600&auto=format&fit=crop",
      icon: <Monitor className="h-5 w-5 text-neon-cyan" />,
    },
    {
      name: "Zara Quantum",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
      icon: <Code className="h-5 w-5 text-neon-red" />,
    },
    {
      name: "Theo Cipher",
      role: "UX Architect",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600&auto=format&fit=crop",
      icon: <Fingerprint className="h-5 w-5 text-neon-purple" />,
    },
    {
      name: "Nova Binary",
      role: "Tech Innovator",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      icon: <Cpu className="h-5 w-5 text-neon-cyan" />,
    },
  ];

  const stats = [
    { value: "10+", label: "Years of Innovation" },
    { value: "200+", label: "Projects Completed" },
    { value: "50+", label: "Tech Professionals" },
    { value: "15+", label: "Industry Awards" },
  ];

  return (
    <>
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(5,217,232,0.15)_0,rgba(0,0,0,0)_70%)]"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6"
          >
            About <span className="neon-text-cyan">Us</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl text-gray-300 mb-8">
              Pioneers of digital innovation, creating futuristic solutions that bridge imagination and technology.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 px-4 bg-cyber-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-orbitron font-bold mb-6"
              >
                Our <span className="neon-text-red">Story</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 text-gray-300"
              >
                <p>
                  Founded in 2015, REBORN DESIGN emerged from a vision to revolutionize the digital landscape with cutting-edge design and technology solutions. We began as a small team of tech enthusiasts and creative minds, united by our passion for innovation and futuristic aesthetics.
                </p>
                <p>
                  Today, we've evolved into a leading digital studio, pushing the boundaries of what's possible in UI/UX design, web development, and digital innovation. Our work spans across industries, from tech startups to global enterprises, helping businesses transform their digital presence.
                </p>
                <p>
                  At REBORN, we don't just follow trends—we create them. Our approach combines technological expertise with artistic vision, resulting in digital experiences that are not just functional but truly memorable.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="aspect-video overflow-hidden rounded-lg border border-neon-red/30 shadow-[0_0_15px_rgba(255,42,109,0.3)]">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=3000" 
                  alt="Reborn Design Workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-cyber-dark border border-neon-cyan p-3 rounded-lg">
                <CircuitBoard className="h-10 w-10 text-neon-cyan animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cyber-dark border border-neon-purple/20 rounded-lg p-6 text-center hover:border-neon-purple transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-neon-purple mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-orbitron font-bold mb-4"
            >
              Meet Our <span className="neon-text-cyan">Team</span>
            </motion.h2>
            <div className="w-24 h-1 bg-neon-cyan mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="cyber-card overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-transparent to-transparent"></div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-orbitron font-bold text-lg">{member.name}</h3>
                    {member.icon}
                  </div>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 px-4 bg-cyber-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-orbitron font-bold mb-4"
            >
              Our Core <span className="neon-text-red">Values</span>
            </motion.h2>
            <div className="w-24 h-1 bg-neon-red mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-cyber-darker border-l-4 border-neon-cyan p-6 rounded-r-lg"
            >
              <h3 className="font-orbitron font-semibold text-xl mb-3">Innovation</h3>
              <p className="text-gray-400">
                We constantly push boundaries and explore new frontiers in design and technology to deliver cutting-edge solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-cyber-darker border-l-4 border-neon-red p-6 rounded-r-lg"
            >
              <h3 className="font-orbitron font-semibold text-xl mb-3">Excellence</h3>
              <p className="text-gray-400">
                We commit to delivering the highest quality in everything we create, with meticulous attention to detail.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-cyber-darker border-l-4 border-neon-purple p-6 rounded-r-lg"
            >
              <h3 className="font-orbitron font-semibold text-xl mb-3">Collaboration</h3>
              <p className="text-gray-400">
                We believe in the power of combining diverse perspectives to create solutions that transcend expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
