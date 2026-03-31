import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Sparkles, Camera, MessageSquare, Globe, ArrowRight, Mail, Instagram, Linkedin, Twitter, Play, ChevronRight, Users, ShoppingBag, TrendingUp, MapPin, Share2, Mic, PenTool, Zap, ArrowLeft, Image as ImageIcon } from 'lucide-react';

// --- Types ---
type Page = 'home' | 'about' | 'services' | 'cases' | 'insights' | 'contact';

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: Page, setCurrentPage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string, id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Work', id: 'cases' },
    { label: 'Insights', id: 'insights' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass' : 'py-10'}`}>
      <div className="max-w-[1800px] mx-auto px-8 md:px-16 flex justify-between items-center">
        <div 
          className="text-3xl font-display font-bold cursor-pointer tracking-widest"
          onClick={() => setCurrentPage('home')}
        >
          VIRO
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-xs uppercase tracking-[0.2em] font-semibold transition-all hover:text-white ${currentPage === item.id ? 'text-white' : 'text-white/60'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-[60] p-12 flex flex-col justify-center gap-8"
          >
            <button className="absolute top-10 right-8" onClick={() => setIsOpen(false)}><X size={32} /></button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setCurrentPage(item.id); setIsOpen(false); }}
                className={`text-6xl font-display text-left uppercase ${currentPage === item.id ? 'text-white' : 'text-white/20'}`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setCurrentPage }: { setCurrentPage: (p: Page) => void }) => {
  return (
    <footer className="bg-black pt-40 pb-20 border-t border-white/5">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-40">
          <div className="md:col-span-6">
            <h2 className="text-6xl md:text-7xl font-display leading-[0.8] mb-12 tracking-tighter">
              VIRO MEDIA
            </h2>
            <p className="text-white/40 text-xl max-w-md font-sans">
              Redefining the digital landscape through the lens of artificial intelligence and artistic precision.
            </p>
            <p className="text-white/20 text-xs mt-4 font-sans uppercase tracking-widest">
              A subsidiary of Two Virtual Media
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-white/30 mb-10">Navigation</h4>
            <ul className="space-y-6 text-xl font-display uppercase">
              <li><button onClick={() => setCurrentPage('home')} className="hover:pl-4 transition-all duration-300">Home</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:pl-4 transition-all duration-300">About</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:pl-4 transition-all duration-300">Services</button></li>
              <li><button onClick={() => setCurrentPage('cases')} className="hover:pl-4 transition-all duration-300">Work</button></li>
              <li><button onClick={() => setCurrentPage('insights')} className="hover:pl-4 transition-all duration-300">Insights</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:pl-4 transition-all duration-300">Contact</button></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-8">
          <p className="text-white/20 text-[10px] uppercase tracking-widest">© 2026 VIRO MEDIA. All rights reserved.</p>
          <div className="flex gap-12 text-white/20 text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Page Components ---

const Home = ({ setCurrentPage, heroImg }: { setCurrentPage: (p: Page) => void, heroImg: string | null }) => {
  return (
    <div className="overflow-hidden">
      {/* Tech-Luxury Hero */}
      <section className="relative h-screen flex items-end pb-10 md:pb-16 justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImg ? (
            <div className="relative w-full h-full">
              <img 
                src={heroImg} 
                alt="Cyberpunk London" 
                className="w-full h-full object-cover opacity-100 transition-all duration-1000 scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ) : (
            <div className="w-full h-full fluid-gradient opacity-40" />
          )}
          {/* Tech Accents */}
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[150px] animate-pulse delay-1000" />
        </div>

        <div className="max-w-[1800px] mx-auto px-8 md:px-16 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-display leading-[0.8] mb-8 tracking-tighter drop-shadow-[0_0_15px_rgba(0,242,255,0.3)] glitch-text">
              Two Markets<span className="text-white/40">.</span> <br/> 
              <span className="text-gradient drop-shadow-[0_0_20px_rgba(0,242,255,0.4)]">One Language.</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center md:items-end gap-12">
              <p className="text-white text-base md:text-lg max-w-xl font-sans leading-relaxed drop-shadow-lg">
                We work with British brands entering China, and Chinese brands establishing themselves in the UK. Cross-border marketing without the translation loss.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button 
                  onClick={() => setCurrentPage('cases')}
                  className="px-10 py-5 bg-white text-black text-xs uppercase tracking-[0.4em] font-bold hover:bg-accent-secondary hover:text-black transition-all duration-500 rounded-full shadow-2xl glow-tech"
                >
                  View Work
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Bridge - Value Proposition */}
      <section className="py-40 bg-bg relative">
        <div className="max-w-[1800px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-5xl md:text-6xl font-display leading-[0.9] mb-12">
                We don’t just move brands <br/> across borders. <br/> 
                <span className="text-white/20 font-sans lowercase tracking-normal">We translate culture.</span>
              </h2>
              <div className="space-y-8 text-white/50 text-xl leading-relaxed font-sans max-w-2xl">
                <p>
                  Too often, brands treat international expansion as a logistical exercise. A website here, a social account there. But entering China—or the UK—demands something more nuanced: fluency in behaviour, humour, context, and trust.
                </p>
                <p>
                  Based in London, VIRO MEDIA exists to bridge that gap. We work with British brands navigating China’s distinct digital ecosystem, and Chinese brands building recognition and credibility in the UK. Two directions, one team, and a shared belief that great marketing should never feel foreign.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop" 
                  alt="UK Lifestyle - London Street" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 brightness-[0.9] contrast-[1.1]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers - Refined Cards */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://picsum.photos/seed/shanghai/1920/1080?blur=10" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-bg/60 backdrop-blur-sm" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-display mb-4">By the <span className="text-accent-secondary">Numbers</span></h2>
            <p className="text-xl md:text-2xl font-sans text-white/40 italic">Proven Results</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              { value: "10+", label: "Years working across UK-China corridors" },
              { value: "150+", label: "Campaigns delivered across WeChat, RedNote, Instagram, TikTok" },
              { value: "500+", label: "Influencers activated in both markets" },
              { value: "98%", label: "Client Retention Rate" },
              { value: "156%", label: "Average client ROI" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] min-h-[280px] p-12 glass rounded-[3rem] flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02] duration-500"
              >
                <h3 className="text-6xl md:text-7xl font-display text-accent mb-6 tracking-tighter">
                  {stat.value}
                </h3>
                <p className="text-sm md:text-base font-sans text-white/60 leading-relaxed max-w-[240px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do - Two Column Overview */}
      <section className="py-40 bg-bg">
        <div className="max-w-[1800px] mx-auto px-8 md:px-16">
          <div className="mb-32">
            <h2 className="text-5xl md:text-6xl font-display text-center">What We <span className="text-accent-secondary">Do</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Column 1: UK to China */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-16 rounded-[3rem] glass hover:bg-white/5 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <img 
                  src="https://flagcdn.com/w160/gb.png" 
                  alt="UK Flag" 
                  className="w-20 h-20 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-4xl md:text-5xl font-display mb-8">For UK brands <br/> entering China</h3>
              <p className="text-white/60 text-xl leading-relaxed mb-12 font-sans">
                We help you build presence across WeChat, RedNote, Douyin, and beyond. From strategy to content to KOL partnerships, we ensure your brand connects with Chinese consumers—without losing your identity.
              </p>
            </motion.div>

            {/* Column 2: China to UK */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-16 rounded-[3rem] glass hover:bg-white/5 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <img 
                  src="https://flagcdn.com/w160/cn.png" 
                  alt="China Flag" 
                  className="w-20 h-20 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-4xl md:text-5xl font-display mb-8">For Chinese brands <br/> entering the UK</h3>
              <p className="text-white/60 text-xl leading-relaxed mb-12 font-sans">
                We help you tell your story for a British audience. Through Western social platforms, PR, influencer campaigns, and brand positioning, we build the credibility and visibility you need to grow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
};

const About = () => {
  const kols = [
    { img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop&q=60" }, // Black woman
    { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60" }, // Black man
    { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60" }, // Diverse woman
    { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60" }, // White man
    { img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=800&auto=format&fit=crop&q=60" }, // East Asian woman
    { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60" }, // Middle Eastern man
    { img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60" }, // White woman
    { img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=60" }  // Diverse man
  ];

  return (
    <div className="pt-40 pb-20">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40"
        >
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-7xl font-display leading-[0.85] mb-12">
              Closing the <br/> Gap.
            </h1>
            <div className="space-y-8 text-white/60 text-xl md:text-2xl font-sans leading-relaxed max-w-4xl">
              <p>
                VIRO MEDIA was born from a simple observation: in cross-border marketing, the hardest gap to close isn’t geographical—it’s cultural.
              </p>
              <p>
                We’ve seen British brands invest heavily in China, only to find their messaging flattened by poor translation. We’ve seen Chinese brands arrive in the UK with impressive products, yet struggle to earn trust because the tone or format didn’t resonate.
              </p>
              <p>
                Our team is based in London and fluent in both markets—not just linguistically, but behaviourally. We understand the nuances of British understatement and the rhythm of Chinese social commerce. That duality allows us to work fluidly in both directions.
              </p>
              <p className="text-accent font-sans not-italic uppercase tracking-widest text-sm font-bold">
                We don’t claim to be the biggest agency. We aim to be the sharpest.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Approach */}
        <div className="mb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Strategy before platforms", 
                desc: "We start with research, audience insight, and competitive mapping—then build the channel plan around it." 
              },
              { 
                title: "Cultural fluency over translation", 
                desc: "Localisation isn’t a final step; it’s embedded in how we write, design, and plan campaigns from day one." 
              },
              { 
                title: "Measurable outcomes", 
                desc: "We focus on what matters to your business: brand lift, engagement quality, conversion, and long-term equity." 
              }
            ].map((item, i) => (
              <div key={i} className="p-16 glass rounded-[3rem] hover:glow-cyan transition-all duration-500 group">
                <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-bg transition-all">
                </div>
                <h3 className="text-3xl font-display mb-8 leading-tight">{item.title}</h3>
                <p className="text-white/40 text-lg leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Work With */}
        <div className="py-40 border-t border-white/5">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-display">Our Creator Network</h2>
            <p className="text-white/40 mt-8 max-w-4xl mx-auto font-sans text-lg">
              We empower brands through strategic creator partnerships. By blending deep audience insights with authentic storytelling, we manage end-to-end influencer campaigns that resonate with modern consumers and drive measurable brand growth.
            </p>
          </div>

          {/* Creator Marquee */}
          <div className="relative overflow-hidden py-20">
            <div className="flex whitespace-nowrap animate-marquee group">
              {[...kols, ...kols].map((kol, i) => (
                <div key={i} className="inline-block px-12 text-center group/item">
                  <div className="w-64 h-80 mb-6 overflow-hidden rounded-[2rem] glass group-hover/item:glow-cyan transition-all duration-500">
                    <img 
                      src={kol.img} 
                      alt="KOL" 
                      className="w-full h-full object-cover group-hover/item:scale-110 transition-all duration-1000 opacity-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-bg to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-bg to-transparent z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const chinaServices = [
    {
      title: "Market Entry Roadmap",
      desc: "A roadmap grounded in consumer research, competitor positioning, and channel prioritisation. We identify where your brand fits, what resonates, and how to launch with impact.",
      icon: <Globe size={32} />
    },
    {
      title: "Chinese Social Media",
      desc: "Native-language content, community engagement, and campaign management across WeChat, Weibo, RedNote, Douyin, and Bilibili.",
      icon: <MessageSquare size={32} />
    },
    {
      title: "KOL & KOC Partnerships",
      desc: "Access to a curated network of Chinese influencers—from top-tier celebrities to niche lifestyle creators. We handle casting, negotiation, and performance tracking.",
      icon: <Users size={32} />
    },
    {
      title: "E‑commerce & Mini Programs",
      desc: "From WeChat Mini Programs to Tmall and JD.com integrations, we help you sell where Chinese consumers already shop.",
      icon: <ShoppingBag size={32} />
    },
    {
      title: "Paid Advertising (PPC)",
      desc: "To scale your presence, you need a strategic paid media approach that puts your brand in front of the right people at the right moment.",
      icon: <TrendingUp size={32} />
    }
  ];

  const ukServices = [
    {
      title: "UK Entry & Positioning",
      desc: "Understanding British consumer behaviour, category landscapes, and cultural nuances. We help you define a brand narrative that feels native to the UK.",
      icon: <MapPin size={32} />
    },
    {
      title: "Western Social Media",
      desc: "Full-service content, community, and campaign execution on Instagram, TikTok, LinkedIn and Facebook tailored to UK sensibilities.",
      icon: <Share2 size={32} />
    },
    {
      title: "UK Influencer & PR",
      desc: "Relationships with British journalists, editors, and influencers across lifestyle, tech, food, and business media. We build credibility, not just visibility.",
      icon: <Mic size={32} />
    },
    {
      title: "Creative & Storytelling",
      desc: "We don’t translate your existing materials. We reinterpret your story for a British audience—adjusting tone, format, and visual language.",
      icon: <PenTool size={32} />
    },
    {
      title: "Paid Advertising (PPC)",
      desc: "To build momentum and scale your presence in the UK, a strategic paid media approach is essential on Western social platforms.",
      icon: <Zap size={32} />
    }
  ];

  return (
    <div className="pt-40 pb-20">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        <div className="mb-32">
          <h1 className="text-5xl md:text-7xl font-display leading-[0.85]">
            Our <span className="text-accent-secondary">Solutions.</span>
          </h1>
        </div>

        {/* UK to China Section */}
        <div className="mb-40">
          <div className="flex items-center gap-8 mb-20">
            <h2 className="text-4xl md:text-6xl font-display">For UK Brands <span className="text-accent">Entering China</span></h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chinaServices.map((s, i) => (
              <div key={i} className="p-12 glass rounded-[3rem] hover:glow-cyan transition-all duration-500 group">
                <div className="text-accent mb-8 group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
                <h3 className="text-3xl font-display mb-6 leading-tight">{s.title}</h3>
                <p className="text-white/40 text-lg leading-relaxed font-sans">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* China to UK Section */}
        <div className="mb-40">
          <div className="flex items-center gap-8 mb-20">
            <h2 className="text-4xl md:text-6xl font-display">For Chinese Brands <span className="text-accent-secondary">Entering the UK</span></h2>
            <div className="flex-1 h-px bg-gradient-to-r from-accent-secondary/50 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ukServices.map((s, i) => (
              <div key={i} className="p-12 glass rounded-[3rem] hover:glow-magenta transition-all duration-500 group">
                <div className="text-accent-secondary mb-8 group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
                <h3 className="text-3xl font-display mb-6 leading-tight">{s.title}</h3>
                <p className="text-white/40 text-lg leading-relaxed font-sans">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const industries = [
    { 
      id: 1,
      title: "Automotive", 
      client: "BYD",
      subtitle: "Building UK Credibility for a Chinese Automotive Leader",
      img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2672&auto=format&fit=crop",
      clickable: true,
      challenge: "BYD had established itself as a global leader in electric vehicles but was relatively unknown to UK consumers. The perception of Chinese automotive brands in the UK remained an obstacle.",
      approach: "We focused on shifting the conversation from “where the car is from” to “what the car offers.” Through a combination of targeted UK press outreach, influencer test drives, and a content series highlighting BYD’s technology heritage and sustainability credentials, we reframed the brand.",
      outcome: "Coverage in key automotive and business titles including Autocar, The Times, and TechRadar. Brand consideration among UK target audiences increased by 36% within six months. BYD’s UK launch was supported by a sustained lift in positive sentiment across social channels."
    },
    { 
      id: 2,
      title: "Hospitality", 
      client: "STAY Camden",
      subtitle: "A London Hotel, Curated for Chinese Travellers",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop",
      clickable: true,
      challenge: "STAY Camden offered a distinctive boutique experience in London but lacked visibility among high-value Chinese tourists and students, who increasingly prioritise independent hotels with local character.",
      approach: "We developed a RedNote-first strategy, creating visual narratives that positioned STAY Camden as a design-forward, culturally immersive base. Collaborations with UK-based Chinese lifestyle KOLs drove authentic, location‑focused content. We also optimised their WeChat presence with practical travel information and direct booking pathways.",
      outcome: "RedNote engagement tripled over the campaign period. Direct booking inquiries from Chinese travellers increased by 47%, with the hotel seeing a measurable rise in Chinese guest stays during peak travel seasons."
    },
    { 
      id: 3,
      title: "Food & Beverage", 
      client: "Endo CRG Group",
      subtitle: "Elevating High-End Japanese Dining for the Chinese Market",
      img: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=1200&auto=format&fit=crop",
      clickable: true,
      challenge: "Endo CRG Group wanted to strengthen visibility among Chinese diners and travellers visiting London.",
      approach: "We activated a China-focused strategy on Xiaohongshu (RED), organising curated influencer dining visits and generating authentic user-led content. Performance and audience insights across Chinese social media were continuously analysed to refine messaging and optimise reach.",
      outcome: "The campaign increased visibility among Chinese audiences in London, drove a strong uplift in RED user-generated content, and supported higher reservation interest from Chinese diners discovering the restaurants through social media."
    },
    { 
      id: 4,
      title: "E-commerce", 
      client: "Aliexpress",
      subtitle: "Engaging UK Shoppers Beyond the Transaction",
      img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&auto=format&fit=crop&q=60",
      clickable: true,
      challenge: "Aliexpress had strong awareness among UK consumers but was often perceived primarily as a low‑price marketplace. The goal was to build engagement around product discovery and brand storytelling.",
      approach: "We shifted content strategy on Instagram and TikTok from promotional to inspirational—highlighting niche products, seller stories, and seasonal trends in a format that felt native to British social media habits. Influencer partnerships focused on unboxing, styling, and creative use of products.",
      outcome: "Engagement rates on social content increased by 82% year‑on‑year. TikTok follower growth exceeded targets by 150%, with a measurable uptick in traffic to category pages."
    },
    { 
      id: 5, 
      title: "Beauty & Fashion", 
      client: "Natio", 
      subtitle: "Natio — E-commerce Entry & Brand Localization",
      img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop", 
      clickable: true,
      challenge: "Natio is one of Australia’s most iconic natural beauty brands, celebrated for its plant-based aromatherapy formulas. The brand sought to penetrate the Chinese market by capitalizing on the \"Clean Beauty\" trend, aiming to establish a robust e-commerce presence and build long-term brand equity among Gen Z and Millennial consumers.",
      approach: "We implemented a market-entry strategy that synchronized digital commerce with localized storytelling, focusing on high-intent platforms:\n\nCross-Border E-commerce Architecture: We managed the end-to-end launch and optimization of Natio’s Tmall Global flagship store, ensuring a seamless shopping experience integrated with local payment systems and data-driven inventory management.\n\n\"C-Beauty\" Content Localization: We redefined Natio’s \"Natural Australian\" vibe for the Chinese audience, pivoting from generic botanical messaging to \"High-Efficiency Plant Science.\" This included a heavy focus on hero products like the Rosewater Toner through viral \"educational\" content.\n\nPremium Influencer Marketing (RED): We executed a tiered KOL/KOC strategy exclusively on Xiaohongshu (RED), leveraging skincare experts for technical credibility and lifestyle influencers to showcase the brand’s \"effortless Aussie glow\" within aesthetic-driven communities.",
      outcome: "Rapid Market Penetration: Successfully launched the brand into the top tier of the Australian skincare category on Tmall Global within the first year of operation.\n\nViral Product Success: The flagship Rosewater series achieved \"Cult Status\" on Xiaohongshu, resulting in significant organic traffic and consistent month-on-month sales growth.\n\nSustainable Growth: Established a loyal Chinese customer base with a high repeat-purchase rate, successfully transitioning Natio from a \"souvenir brand\" to a daily skincare essential in the Chinese market."
    },
    { id: 6, title: "Technology", client: "", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=60", clickable: false },
    { 
      id: 7, 
      title: "Education", 
      client: "iQ Student Accommodation", 
      subtitle: "iQ Student Accommodation — Chinese Student Market Growth",
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop", 
      clickable: true,
      challenge: "iQ Student Accommodation is one of the UK's leading student housing providers. Seeking to capture the increasing demand for premium, secure, and community-focused living, iQ aimed to deepen brand trust and drive bookings among Chinese international students across key university hubs, including London, Manchester, and Glasgow.",
      approach: "We executed a comprehensive, year-round Chinese social media strategy centered on Xiaohongshu (RED) to build a seamless bridge between the brand and prospective tenants:\n\nMulti-Layered Content Ecosystem: We balanced professional brand messaging with authentic KOC (Key Opinion Consumer) \"room tours,\" showcasing iQ’s high-spec facilities, 24/7 security, and vibrant social spaces.\n\nSeasonal Campaign Alignment: We strategically timed high-impact content around the UK academic cycle—specifically during the peak application window and the critical \"re-booking\" season—using \"Senior Student Insights\" to address common relocation pain points.\n\nCommunity Management & Sentiment Shifting: By actively monitoring and engaging with real-time student conversations on RED, we transformed brand mentions into a trusted community resource, positioning iQ as the gold standard for luxury student living in the UK.",
      outcome: "Brand Dominance: The campaign achieved a significant surge in organic search volume and impressions on Xiaohongshu, establishing iQ as a top-of-mind brand for the Chinese audience.\n\nConversion Excellence: We successfully streamlined the \"discovery-to-booking\" funnel, driving a measurable increase in inquiries and early-bird reservations from the Chinese market.\n\nUGC Asset Growth: The initiative generated a wealth of high-quality User-Generated Content (UGC), creating a sustainable \"digital word-of-mouth\" effect that continues to influence incoming students."
    },
    { id: 8, title: "Real Estate", client: "", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop&q=60", clickable: false }
  ];

  const currentCase = selectedCase ? industries.find(i => i.id === selectedCase) : null;

  return (
    <div className="pt-40 pb-20 min-h-screen">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        <AnimatePresence mode="wait">
          {!selectedCase ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-32">
                <h1 className="text-5xl md:text-7xl font-display leading-[0.85]">
                  Selected <span className="text-accent-secondary">Work.</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {industries.map((ind) => (
                  <div 
                    key={ind.id}
                    onClick={() => ind.clickable && setSelectedCase(ind.id)}
                    className={`group relative aspect-[3/4] overflow-hidden rounded-[3rem] glass ${ind.clickable ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    <img 
                      src={ind.img} 
                      alt={ind.title} 
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-80"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                      <h3 className="text-4xl font-display mb-2 group-hover:text-accent transition-colors">{ind.title}</h3>
                      <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold">{ind.client}</p>
                      {ind.clickable && (
                        <div className="mt-6 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                          <span className="text-xs font-bold uppercase tracking-widest">View Case</span>
                          <ArrowRight size={14} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="detail"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <button 
                onClick={() => setSelectedCase(null)}
                className="flex items-center gap-4 text-accent mb-20 group hover:gap-6 transition-all"
              >
                <ArrowLeft size={24} />
                <span className="text-xs uppercase tracking-[0.5em] font-bold">Back to Portfolio</span>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                <div>
                  <span className="text-xs uppercase tracking-[0.5em] text-accent mb-6 block font-bold">{currentCase?.title}</span>
                  <h2 className="text-5xl md:text-7xl font-display mb-10 leading-tight">{currentCase?.subtitle}</h2>
                  
                  <div className="space-y-16">
                    <section>
                      <h4 className="text-accent text-xs uppercase tracking-widest font-bold mb-6">The Challenge</h4>
                      <p className="text-white/60 text-xl font-sans leading-relaxed">{currentCase?.challenge}</p>
                    </section>

                    <section>
                      <h4 className="text-accent text-xs uppercase tracking-widest font-bold mb-6">Our Approach</h4>
                      <p className="text-white/60 text-xl font-sans leading-relaxed">{currentCase?.approach}</p>
                    </section>

                    <section className="p-12 glass rounded-[3rem] glow-cyan">
                      <h4 className="text-accent text-xs uppercase tracking-widest font-bold mb-6">The Outcome</h4>
                      <p className="text-white text-2xl font-display leading-relaxed">{currentCase?.outcome}</p>
                    </section>
                  </div>
                </div>

                <div className="sticky top-40">
                  <div className="aspect-[3/4] rounded-[4rem] overflow-hidden glow-tech">
                    <img 
                      src={currentCase?.img} 
                      alt={currentCase?.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Insight = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const insights = [
    {
      id: 1,
      title: "When Consumption Meets Emotion — China's Shift from Price to \"Emotional Value\"",
      summary: "Chinese consumers aren't just asking \"is this worth the money\" anymore. They're asking \"does this feel right for me.\" Over 80% now make at least one emotional purchase every month — something bought to reward themselves, relieve stress, or simply feel good.",
      fullContent: `Something interesting is happening in China right now. Consumers aren't just asking "is this worth the money" anymore. They're asking "does this feel right for me."

According to Zhimeng Consulting's 2026 China Consumer Trends Report, over 80% of Chinese consumers make at least one "emotional purchase" every month — something bought not out of necessity, but to reward themselves, relieve stress, or simply feel good.

The numbers behind this are striking. iiMedia Research puts China's "emotional economy" at 2.3 trillion RMB in 2024, and projects it to hit 4.5 trillion by 2029. That's nearly doubling in five years.

So what's driving this shift?

NielsenIQ's 2026 report points to a fundamental change in how Chinese consumers think. People are moving away from chasing trends and towards what they call "relevant to me" consumption. 68% of shoppers say atmosphere matters in physical stores. 61% care about service. 54% are willing to pay a premium for quality.

Dr. Jiang Han from Pangu Think Tank puts it simply: "People aren't just buying products anymore. They're buying emotional comfort, identity, and social currency."

This isn't quite the same as the "self-reward" consumption we've seen before. That was about treating yourself. This is deeper — it's about using consumption to solve emotional needs in the moment.

Where is this showing up?

Three categories are growing fast:

Singles economy — with over 240 million single adults in China, there's massive demand for products and experiences designed for one. Solo dining, mini appliances, curated travel.

Pet economy — iiMedia projects pet spending to hit 930 billion RMB in 2026. Pets have moved from functional roles to family members. People are spending on fresh food, smart devices, even pet insurance.

Silver economy — Gen X (44-59) is becoming a key consumer group. They're financially stable, practical, and making household decisions. They'll pay for value, but they want real substance behind it.

What this means for brands

If you're a British brand looking at China, here's what matters:

Don't just talk about features. Ask yourself: what emotion does my product connect to? Comfort? Status? Belonging? The brands winning in 2026 are the ones that make people feel understood.

Your communication needs to shift from "here's why we're great" to "we get how you feel." The Chinese consumer isn't looking to be sold to. They're looking to be seen.

And don't chase short-term viral moments. Emotional consumption is about building a relationship over time. As Dr. Jiang puts it: "The brands that last are the ones that form a genuine emotional contract with consumers."

The bottom line? China's market in 2026 isn't just about price or even product quality anymore. It's about whether your brand can make someone feel something real.`
    },
    {
      id: 2,
      title: "UK Influencer Marketing in 2026 — From Transaction to Trust",
      summary: "One in four UK adults now says influencer recommendations affect their buying decisions. Among Gen Z, it's over half. But here's what's changed: smaller creators are outperforming the big names.",
      fullContent: `The UK influencer space has grown up.

Sprout Social's 2026 UK Influencer Marketing Guide shows that one in four UK adults now says influencer recommendations affect their buying decisions. Among Gen Z, it's over half. And 84% of Gen Z actively follow creator content.

This isn't a side channel anymore. It's central to how a huge chunk of the market discovers products.

Where are people spending time?

We Are Social and Meltwater's Digital 2026: UK report breaks down the platform landscape:

- TikTok leads in daily time spent — 1 hour 14 minutes on average
- YouTube follows closely at 1 hour per day
- Instagram sits at 46 minutes, still the preferred platform for millennials and Gen X
- WhatsApp is the most "liked" platform overall

Interestingly, Traackr's The Creator Advantage 2026 UK Report found that TikTok is the only platform where attention is still growing. Instagram sees higher creator engagement, but overall attention is slipping.

The creator shift: smaller is actually bigger

Here's a counterintuitive finding: mid-tier creators (10k-100k followers) are outperforming the big names. Across engagement, saves, shares, and total attention, they're beating the macro influencers.

This makes sense when you think about it. Smaller creators have tighter relationships with their audiences. Their content feels more real. And they're often deeply embedded in specific niches — which means more targeted reach.

The cost difference is significant too. Micro creators typically charge £400-£2,000 per post, while top-tier creators can ask for £4,000+. And 71% of creators are willing to discount for ongoing partnerships, which makes long-term relationships surprisingly cost-effective.

What UK consumers actually want from influencers

Sprout Social's research reveals that what matters most to UK consumers is honesty. They want content that feels "honest and unbiased." Aspirational content has its place, but it's not what builds trust.

Content preferences vary by generation:

- Gen Z leans toward TikTok content around fitness, gaming, and lifestyle
- Millennials and Gen X engage twice as much on Instagram as boomers (27% vs 15%)
- Across all ages, food and drink content ranks first for trust — 69% of consumers trust influencer recommendations in this category

What this means for brands

If you're a Chinese brand entering the UK, here's what the 2026 landscape tells us:

Think long-term, not one-off. The cost advantage of multi-post partnerships isn't just about budget — it's about authenticity. Creators who feature your brand over time feel more natural to their audiences.

Focus on the middle. Big names get attention, but mid-tier creators deliver better engagement and more targeted reach. They're often the smarter investment.

Don't skip the compliance work. ASA rules require clear #ad labelling, and both brands and creators share responsibility. Also, vet your partners. 50% of marketers now cite brand safety as their top concern in influencer work.

Match content to platform. What works on TikTok won't necessarily work on Instagram. TikTok thrives on fast, entertaining content. Instagram is better for visual storytelling. YouTube suits longer reviews and tutorials. LinkedIn works for B2B. Don't just repost the same thing everywhere.

The takeaway? UK influencer marketing in 2026 isn't about finding the biggest name. It's about finding the right partner — someone whose audience trusts them and whose values align with yours. As Sprout Social puts it: "Brands that build direct relationships with consumers, rather than relying solely on paid acquisition, will be better positioned for long-term success."`
    },
    {
      id: 3,
      title: "Chinese E-Commerce Platforms in the UK — From Price Miracle to Trust Economy",
      summary: "Seventy-five percent of UK consumers have used a Chinese e-commerce platform in the past year. Temu alone has gone from 43% awareness to 60% in two years. But here's the catch: 23% of users have cut back because of rising prices.",
      fullContent: `The numbers are in, and they're striking.

Omnisend's February 2026 survey of 4,000 UK consumers found that 75% have used at least one Chinese e-commerce platform — Temu, Shein, AliExpress, or TikTok Shop — in the past year. That's up from 62% in 2024.

But what's really interesting isn't just the penetration. It's how people are using these platforms.

In 2026, 32% of UK consumers shop on Temu monthly. 29% shop on Shein monthly. These aren't occasional discount destinations anymore. They're part of people's regular shopping routines.

Who's growing fastest?

Temu has had the sharpest rise — from 43% awareness in 2024 to 60% in 2026. Shein went from 42% to 54%. AliExpress continues to hold steady ground.

TikTok Shop is the one to watch. It's newer to the UK market, but its traction with younger audiences is growing fast.

What's notable is that these platforms aren't really competing with each other in a zero-sum way. They've collectively expanded the market for Chinese e-commerce in the UK.

But here's the catch

The Omnisend data also reveals what makes UK consumers pull back.

Among those who've reduced or stopped using Chinese platforms, the top reasons are:

- Prices going up (23%)
- Product quality issues (20%)
- Slower or unreliable delivery (12%)
- Unexpected shipping fees (12%)

This tells us something important. Low prices got people in the door. But keeping them requires more.

As Omnisend's e-commerce expert Marty Bauer puts it: "Cross-border shopping isn't disappearing, but consumers are less tolerant than they were a year ago. They still want savings, but not if it comes with uncertainty. Tariffs and rising costs have made transparency and predictability part of the value equation."

What consumers actually want now

The 2026 UK consumer wants to know:

- The real total price — not just the base cost, but everything included
- When it will actually arrive — and whether that promise holds
- What happens if something goes wrong — returns that don't feel like a battle

28% of consumers say they'd feel more confident buying if a platform clearly showed it was using UK-based warehouses or sellers. Logistics isn't just about speed anymore. It's about trust.

What this means for brands

Whether you're a Chinese brand operating in the UK or a British brand competing alongside these platforms, the implications are clear:

Predictability is a competitive advantage.
The platforms that succeed next won't just be the cheapest. They'll be the most reliable. Can you guarantee delivery windows? Can you show total price upfront? These aren't operational details — they're brand promises.

Content matters when prices converge.
AliExpress UK's shift toward storytelling and influencer content isn't just nice to have. When multiple platforms have similar prices, the one that tells better stories wins.

Total price transparency builds trust.
23% of consumers left because of hidden costs. Show everything upfront — shipping, duties, fees. It might seem risky, but consumers reward honesty.

Local warehouses send a signal.
Even if you can't stock locally yet, being clear about where products ship from and how long they'll take goes a long way.

The bottom line? Chinese e-commerce platforms have moved from niche to mainstream in the UK. But the next phase of competition won't be about who's cheapest. It'll be about who's most trusted.`
    },
    {
      id: 4,
      title: "The RedNote Playbook: What British Brands Get Wrong",
      summary: "Most British brands treat RedNote (Little Red Book) like Instagram—and that’s exactly where they lose their audience. RedNote is not a visual-first platform in the Western sense; it’s a search‑driven, intent‑heavy ecosystem.",
      fullContent: `Most British brands treat RedNote (Little Red Book) like Instagram—and that's exactly where they lose their audience.

We've sat through countless briefs where a brand says: "We want beautiful content. Visually stunning. Like what we do on Instagram." And we have to gently explain: that's not how this works.

RedNote isn't Instagram. It looks like it at first glance—a grid of curated images, a scroll of lifestyle content. But the user behaviour underneath is fundamentally different. On Instagram, people browse. On RedNote, people search.

Let's unpack what that means, where British brands go wrong, and how to build a campaign that actually delivers.

What RedNote Actually Is
RedNote started in 2013 as a community where Chinese shoppers shared overseas shopping tips. Twelve years on, it's evolved into something more powerful: a search engine for consumption.

Here's the data that matters. According to RedNote's own platform insights from 2025, the average user spends 70 minutes per day on the app. But here's what's interesting—a significant portion of that time is spent in the search bar, not just scrolling the feed.

Users come to RedNote with intent. They're researching a purchase. Comparing two products. Looking for honest reviews. Trying to decide if something is worth their money. The platform itself has leaned into this, positioning itself as the place where "real people share real experiences."

This is a fundamental shift from Western social platforms. Instagram is a discovery engine—you scroll, you see something, you maybe click. RedNote is a decision engine—you search, you research, you decide.

Mistake 1: Treating It Like a Visual Portfolio
The first mistake we see is brands using RedNote as a showcase for beautifully shot product photos.

They'll post high-production images—the kind that would perform well on Instagram or in a magazine. Professional lighting. Styled sets. Perfect compositions.
And then nothing happens.

Here's why: RedNote users don't trust perfection. They've been burned before by polished ads that promised one thing and delivered another. What they want is evidence. Proof that a product actually works, on a real person, in a real situation.

A 2024 study by RedNote's internal research team found that content with lower production value—think phone photos, natural lighting, unpolished framing—can outperform high-production content by up to 40% in engagement. Not because the photos are worse, but because they feel more real.

The content that wins on RedNote looks like something a friend would send you. It's honest. It includes flaws. It shows the product on day three, not just the first unboxing.
What to do instead: Rethink your content budget. Spend less on studio photography and more on getting products into the hands of real users who can document their actual experience. If your content feels like it belongs in a magazine, you're probably doing it wrong.

Mistake 3: Outsourcing to the Wrong Partners
The third mistake is choosing influencers based on follower count rather than content style.

We've seen this play out many times. A brand wants to launch on RedNote. They find an influencer with 500,000 followers. The content looks beautiful. They pay a premium. The campaign launches.

And then the engagement is flat.
Here's what happened: the influencer's audience followed them for a specific type of content—maybe fashion styling, maybe luxury travel, maybe something else entirely. A one-off product post felt out of place. The audience scrolled past.

The better approach is to prioritise relevance over reach. RedNote users are sophisticated. They follow creators who operate in specific niches. They trust those creators because they've built that trust over years of consistent content.

In our experience, campaigns that work with 10-20 micro-influencers (1,000-50,000 followers) who are genuinely embedded in a category consistently outperform campaigns that put all their budget into one or two big names. The engagement rates are higher. The content feels more authentic. And the cost-per-engagement is usually significantly lower.

What to do instead: Build a list of creators who already talk about your category—not just people with big follower counts. Look at their content. Does it feel real? Do they show the good and the bad? Are their audiences engaged in the comments? Then structure partnerships as long-term relationships, not one-off posts. Give creators the freedom to share genuine experiences, not just talking points.

How to Structure a Campaign That Actually Converts
So what does the right approach look like?
Step 1: Start with search intent
Before you produce anything, map the search landscape. What are the questions Chinese consumers are asking about your category? Use RedNote's search bar as your research tool. Type in keywords related to your product and see what auto-suggests. Look at the top posts. What formats are working? What questions are they answering?

Step 2: Build a content library around those questions
Create a content calendar organised by search intent, not just product features. One post answers "is this worth the price." Another compares your product to a competitor. Another shows how it holds up after six months of use. Another shares a clever use case your audience might not have thought of.

Step 3: Seed with the right creators
Identify 15-20 micro-influencers who already operate in your category. Their audiences are smaller but more engaged. Give them products early—before you need the content—and let them use them naturally. Ask for honest feedback, not just praise. The best campaigns let creators share both what they love and what took time to get used to.
Step 4: Amplify what works

Monitor engagement closely. When a post starts performing, consider putting paid media behind it. RedNote's advertising platform allows you to boost content that's already resonating organically. This is much more effective than starting with ads.

Step 5: Let good content live
One of the biggest differences between RedNote and Instagram is shelf life. On Instagram, a post peaks in 24-48 hours. On RedNote, useful content can continue driving traffic for months or even years. People search, find it, and share it. That means your content strategy should prioritise evergreen utility over timely trends.

What Success Looks Like
We ran a campaign for a British skincare brand in late 2025 that followed this playbook.
Instead of one big launch, we seeded products with 25 micro-influencers across three months. We asked them to document their real experience—including the two-week adjustment period when one user's skin reacted differently than expected. We created a library of search-optimised content around questions like "is this suitable for sensitive skin" and "how does it compare to French pharmacy brands."

The results: organic RedNote mentions increased by over 400% in six months. The brand now ranks on the first page for several key category searches. And most importantly, when they launched their WeChat Mini Program for direct sales, a significant portion of initial traffic came from users who had discovered them on RedNote months earlier.

That's the difference between treating RedNote like Instagram and treating it like what it actually is. Not a place to broadcast. A place to be found.

The Bottom Line
RedNote is not a visual-first platform. It's a search-driven, intent-heavy ecosystem where users come to research before they buy.

Stop treating it like Instagram. Stop spending your budget on studio photography that looks like an ad. Stop choosing influencers based on follower count. Start thinking about what questions your customers are asking. Build content that answers them. Partner with creators who your audience already trusts. Let them be honest.

The brands that figure this out aren't necessarily the biggest or the most famous. They're the ones that understand: on RedNote, usefulness beats polish. Every time.`
    }
  ];

  return (
    <div className="pt-40 pb-20 min-h-screen">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        <div className="mb-32">
          <h1 className="text-5xl md:text-7xl font-display leading-[0.85]">
            Industry <span className="text-accent-secondary">Insights.</span>
          </h1>
        </div>

        <div className="space-y-12">
          {insights.map((insight) => (
            <div key={insight.id} className="glass rounded-[3rem] overflow-hidden transition-all duration-500">
              <div 
                className="p-12 md:p-16 cursor-pointer group"
                onClick={() => setExpandedId(expandedId === insight.id ? null : insight.id)}
              >
                <div className="flex justify-between items-start gap-8">
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-5xl font-display mb-8 group-hover:text-accent transition-colors">{insight.title}</h2>
                    <p className="text-white/40 text-xl font-sans leading-relaxed max-w-4xl">
                      {insight.summary}
                    </p>
                  </div>
                  <div className={`mt-4 transition-transform duration-500 ${expandedId === insight.id ? 'rotate-180' : ''}`}>
                    <ChevronRight size={40} className="text-accent" />
                  </div>
                </div>
                
                <div className="mt-10 flex items-center gap-2 text-accent">
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {expandedId === insight.id ? 'Read Less' : 'Read More'}
                  </span>
                  <ArrowRight size={14} />
                </div>
              </div>

              <AnimatePresence>
                {expandedId === insight.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="px-12 md:px-16 pb-16 border-t border-white/5 pt-16">
                      <div className="max-w-4xl space-y-8">
                        {insight.fullContent.split('\n\n').map((para, i) => {
                          if (para.startsWith('-')) {
                            return (
                              <ul key={i} className="space-y-4 list-disc pl-6">
                                {para.split('\n').map((item, j) => (
                                  <li key={j} className="text-white/60 text-lg font-sans leading-relaxed">
                                    {item.replace(/^- /, '')}
                                  </li>
                                ))}
                              </ul>
                            );
                          }
                          return (
                            <p key={i} className="text-white/60 text-xl font-sans leading-relaxed">
                              {para}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-60 pb-40">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-7">
            <h1 className="text-5xl md:text-7xl font-display leading-[0.8] mb-20 tracking-tighter">
              Let's <br/> <span className="text-accent-secondary font-sans lowercase tracking-normal">Talk.</span>
            </h1>
            <p className="text-white/40 text-2xl font-sans leading-relaxed max-w-2xl mb-20">
              Whether you’re a British brand exploring China or a Chinese brand preparing for the UK, we’d like to understand your goals. We offer an initial consultation to discuss your market, your challenges, and how we can help—with no obligation.
            </p>
            <div className="space-y-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/30 mb-4">Location</p>
                <p className="text-2xl font-display text-accent">12 Hammersmith Grove, London W6 7AP</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/30 mb-4">Email</p>
                <p className="text-2xl font-display text-accent">info@viromedia.co.uk</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col justify-end">
            {submitted ? (
              <div className="text-center py-20 glass rounded-[2rem] glow-cyan">
                <h3 className="text-4xl font-display mb-6 text-accent">Inquiry Received</h3>
                <p className="text-white/40">We will respond within 24 hours.</p>
              </div>
            ) : (
              <form 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const message = formData.get('message');
                  const mailtoUrl = `mailto:info@viromedia.co.uk?subject=New Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                  window.location.href = mailtoUrl;
                  setSubmitted(true); 
                }} 
                className="space-y-12"
              >
                <input name="name" type="text" placeholder="NAME" required className="w-full bg-transparent border-b border-white/20 py-6 text-2xl font-display outline-none focus:border-accent transition-all" />
                <input name="email" type="email" placeholder="EMAIL" required className="w-full bg-transparent border-b border-white/20 py-6 text-2xl font-display outline-none focus:border-accent transition-all" />
                <textarea name="message" rows={4} placeholder="TELL US ABOUT YOUR PROJECT" required className="w-full bg-transparent border-b border-white/20 py-6 text-2xl font-display outline-none focus:border-accent transition-all resize-none" />
                <button type="submit" className="w-full py-8 bg-accent text-bg text-xs uppercase tracking-[0.5em] font-bold hover:glow-cyan transition-all duration-500 rounded-full">Send Inquiry</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [heroImg] = useState<string>("https://raw.githubusercontent.com/Song-Cao/aurora-craft-co/main/123.png");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} heroImg={heroImg} />}
            {currentPage === 'about' && <About />}
            {currentPage === 'services' && <Services />}
            {currentPage === 'cases' && <CaseStudies />}
            {currentPage === 'insights' && <Insight />}
            {currentPage === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
