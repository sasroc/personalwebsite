import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StockOptionsCalculator from './components/StockOptionsCalculator';
import OptionsCalculator from './components/OptionsCalculator';
import OptionsCalculatorPrivacy from './components/OptionsCalculatorPrivacy';
import RoomiPrivacy from './components/RoomiPrivacy';
import RoomiTerms from './components/RoomiTerms';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Twitter, Instagram, Mail, Clock, ArrowUpRight, Zap } from 'lucide-react';
import { database } from './firebase';
import { ref, onValue } from 'firebase/database';

// ── Audio ─────────────────────────────────────────────────────────────────────
const playSatisfyingClick = () => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.05);
    osc.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.1);
  } catch {}
};

const addClickSounds = () => {
  const handle = (e) => { if (e.isTrusted) playSatisfyingClick(); };
  const els = document.querySelectorAll('button, a, [role="button"]');
  els.forEach(el => el.addEventListener('click', handle));
  return () => els.forEach(el => el.removeEventListener('click', handle));
};

// ── Scroll reveal ─────────────────────────────────────────────────────────────
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);
    return () => { clearTimeout(t); observer.disconnect(); };
  }, []);
};

// ── Typewriter ────────────────────────────────────────────────────────────────
const TypewriterText = ({ texts }) => {
  const [idx, setIdx] = useState(0);
  const [vis, setVis] = useState(true);
  useEffect(() => {
    const id = setInterval(() => {
      setVis(false);
      setTimeout(() => { setIdx(i => (i + 1) % texts.length); setVis(true); }, 350);
    }, 2800);
    return () => clearInterval(id);
  }, [texts.length]);
  return (
    <span style={{
      display: 'inline-block',
      transition: 'opacity 0.35s ease, transform 0.35s ease',
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(-6px)',
    }}>
      {texts[idx]}
    </span>
  );
};

// ── Navbar ────────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <nav className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-bold text-xl tracking-tight text-white hover:text-blue-300 transition-colors duration-200"
        >
          RS
        </button>
        <div className="hidden md:flex items-center gap-8">
          {[['Projects', 'projects'], ['Community', 'community'], ['Connect', 'social']].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </div>
        <Button
          size="sm"
          className="bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm rounded-full px-5 text-sm font-medium transition-all duration-200 hover:scale-105"
          onClick={() => scrollTo('contact')}
        >
          Get In Touch
        </Button>
      </div>
    </nav>
  );
};

// ── Background ────────────────────────────────────────────────────────────────
const FuturisticBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#050d1f] to-slate-950" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />

    {/* Aurora clouds */}
    <div className="absolute top-0 left-1/3 w-[500px] h-[700px] bg-blue-600/10 rounded-full blur-[120px] animate-aurora" />
    <div className="absolute top-0 right-1/4 w-[400px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-aurora" style={{ animationDelay: '3s' }} />
    <div className="absolute top-1/2 left-0 w-[300px] h-[500px] bg-cyan-600/8 rounded-full blur-[100px] animate-aurora" style={{ animationDelay: '6s' }} />

    {/* Floating orbs */}
    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-float" />
    <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl animate-float animation-delay-2000" />
    <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl animate-float animation-delay-4000" />

    {/* Stars */}
    <div className="absolute inset-0">
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse-slow"
          style={{
            width: i % 7 === 0 ? '2px' : '1px',
            height: i % 7 === 0 ? '2px' : '1px',
            backgroundColor: ['#93c5fd', '#e9d5ff', '#a5f3fc', '#bfdbfe', '#f0abfc'][i % 5],
            left: `${(i * 13.7 + 7) % 100}%`,
            top: `${(i * 19.3 + 5) % 100}%`,
            opacity: 0.2 + (i % 5) * 0.08,
            animationDelay: `${(i * 0.29) % 4}s`,
            animationDuration: `${2.5 + (i % 4)}s`,
          }}
        />
      ))}
    </div>
  </div>
);

// ── Hero ──────────────────────────────────────────────────────────────────────
const HeroSection = () => {
  const roles = ['Software Developer', 'Stock Options Trader', 'AI Builder', 'Fintech Innovator'];
  const stats = [
    { v: '5+', l: 'Projects Built' },
    { v: 'iOS', l: 'App Store' },
    { v: '5+', l: 'Yrs Trading' },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
        style={{ backgroundImage: "url('/assets/images/space1.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/10 to-slate-950/90" />

      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
        {/* Avatar */}
        <div className="relative mx-auto w-32 h-32 mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-70 animate-glow" />
          <Avatar className="w-32 h-32 relative border-2 border-white/25 shadow-2xl shadow-blue-500/25">
            <AvatarImage src="/assets/images/pfp.JPEG" alt="Rocco Sassani" />
            <AvatarFallback className="bg-slate-800 text-white text-2xl font-bold">RS</AvatarFallback>
          </Avatar>
        </div>

        {/* Name */}
        <div className="space-y-3">
          <h1 className="shimmer-heading text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] font-bold leading-tight tracking-tight">
            Rocco Sassani
          </h1>
          <p className="text-xl sm:text-2xl text-blue-200 font-light tracking-wide animate-slide-up animation-delay-200">
            <TypewriterText texts={roles} />
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto animate-slide-up animation-delay-400 leading-relaxed">
            Building the future of AI-powered solutions and financial technology
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-10 sm:gap-16 animate-slide-up animation-delay-600 pt-2">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{s.v}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1 uppercase tracking-widest">{s.l}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4 animate-slide-up animation-delay-800">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-10 py-5 text-lg font-semibold rounded-full shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 border border-white/10"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
        </div>

        {/* Spotify */}
        <div className="animate-slide-up animation-delay-800 max-w-sm mx-auto w-full">
          <SpotifyNowPlaying />
        </div>
      </div>

    </div>
  );
};

// ── Projects ──────────────────────────────────────────────────────────────────
const ProjectsSection = () => {
  const projects = [
    {
      title: 'TradeBetter',
      description: 'Comprehensive day trading journal for options traders. Track, analyze, and visualize your trading performance with detailed analytics and interactive dashboards.',
      image: '/assets/images/2.png',
      url: 'https://tradebetter.net/',
      local: false,
      glowColor: 'rgba(59,130,246,0.22)',
      imageScale: 2.2,
      featured: true,
      tag: 'Web App',
    },
    {
      title: 'Stock Options Calculator',
      description: 'Advanced financial tool for options trading analysis and strategy optimization.',
      image: '/assets/images/StockOptionsLogo.jpg',
      url: '/stockoptionscalculator',
      local: true,
      glowColor: 'rgba(16,185,129,0.22)',
      tag: 'Desktop Tool',
    },
    {
      title: 'Options P&L Calculator',
      description: 'Real-time options calculator with customizable profit/loss targets. Visual P&L scenarios at a glance — iOS app for traders.',
      image: '/assets/images/optionscalculator2.png',
      url: '/optionscalculator',
      local: true,
      glowColor: 'rgba(20,184,166,0.22)',
      tag: 'iOS App',
    },
    {
      title: 'QuickFixAI',
      description: 'AI-powered home maintenance advisor providing detailed repair guides and solutions for common household issues.',
      image: '/assets/images/logo2.png',
      url: 'https://quickfixai.net',
      local: false,
      glowColor: 'rgba(249,115,22,0.22)',
      tag: 'AI Tool',
    },
    {
      title: 'ClaraAI',
      description: 'Always on your screen, seamless AI integration. Level up your productivity. Waitlist spots available now.',
      image: '/assets/images/claraailogo4.png',
      url: 'https://claraai.net',
      local: false,
      glowColor: 'rgba(168,85,247,0.22)',
      tag: 'AI Assistant',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">What I've Built</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Innovative solutions at the intersection of technology and finance
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="reveal"
              style={{
                transitionDelay: `${index * 0.08}s`,
                '--card-glow': project.glowColor,
              }}
            >
              <Card
                className="project-card h-full bg-white/5 backdrop-blur-xl border-white/10 transition-all duration-400 hover:scale-[1.02] hover:bg-white/10 cursor-pointer group"
                onClick={() => {
                  if (project.local) window.location.href = project.url;
                  else window.open(project.url, '_blank');
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl backdrop-blur-sm p-2 group-hover:scale-110 transition-transform duration-300 border border-white/20 bg-white/10">
                      {project.imageScale ? (
                        <div
                          className="w-full h-full rounded-lg"
                          aria-label={`${project.title} logo`}
                          style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: `${project.imageScale * 100}%`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={`${project.title} logo`}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      )}
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                      project.featured
                        ? 'text-blue-300 bg-blue-500/10 border-blue-500/25'
                        : 'text-gray-400 bg-white/5 border-white/10'
                    }`}>
                      {project.featured ? 'Featured' : project.tag}
                    </span>
                  </div>
                  <CardTitle className="text-white text-xl group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex items-center text-sm text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
                    <span>Explore Project</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Spotify ───────────────────────────────────────────────────────────────────
const SpotifyBars = () => (
  <div className="flex items-end gap-[2px] h-3" style={{ transformOrigin: 'bottom' }}>
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="w-[3px] bg-green-400 rounded-full origin-bottom"
        style={{
          animation: 'spotifyBar 0.7s ease-in-out infinite alternate',
          animationDelay: `${i * 0.18}s`,
          height: '100%',
        }}
      />
    ))}
  </div>
);

const SpotifyNowPlaying = () => {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const trackRef = ref(database, 'spotify/nowPlaying');
    const unsub = onValue(trackRef, (snap) => setTrack(snap.val()));
    return () => unsub();
  }, []);

  if (!track?.title) return null;

  return (
    <a
      href={track.songUrl || 'https://open.spotify.com'}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:border-green-500/30 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:scale-[1.01] w-full"
    >
      {/* Album art */}
      {track.albumArt && (
        <div className="relative flex-shrink-0">
          <img
            src={track.albumArt}
            alt={track.album}
            className="w-14 h-14 rounded-xl shadow-lg object-cover"
          />
          {track.isPlaying && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            </div>
          )}
        </div>
      )}

      {/* Track info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          {track.isPlaying ? (
            <div className="flex items-center gap-1.5">
              <SpotifyBars />
              <span className="text-xs text-green-400 font-medium">Now Playing</span>
            </div>
          ) : (
            <span className="text-xs text-gray-500 font-medium">Last Played</span>
          )}
        </div>
        <p className="text-white font-semibold text-sm truncate leading-tight">{track.title}</p>
        <p className="text-gray-400 text-xs truncate mt-0.5">{track.artist}</p>
      </div>

      {/* Spotify logo */}
      <svg
        className="flex-shrink-0 w-5 h-5 text-green-400 opacity-60 group-hover:opacity-100 transition-opacity"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    </a>
  );
};

// ── Social ────────────────────────────────────────────────────────────────────
const SocialSection = () => {
  const links = [
    {
      name: 'X (Twitter)',
      url: 'https://x.com/roccoscalps',
      icon: <Twitter className="w-7 h-7" />,
      desc: 'Trading insights & updates',
      hover: 'hover:bg-blue-500/10 hover:border-blue-400/40 hover:shadow-blue-500/20',
      iconColor: 'text-blue-400',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rocco.sassani/',
      icon: <Instagram className="w-7 h-7" />,
      desc: 'Behind the scenes',
      hover: 'hover:bg-pink-500/10 hover:border-pink-400/40 hover:shadow-pink-500/20',
      iconColor: 'text-pink-400',
    },
  ];

  return (
    <section id="social" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="reveal mb-14">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-300 text-sm font-medium">Social</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Connect With Me
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => window.open(link.url, '_blank')}
              className={`reveal group flex flex-col items-center p-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${link.hover}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`${link.iconColor} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {link.icon}
              </div>
              <span className="text-white font-semibold text-lg">{link.name}</span>
              <span className="text-gray-500 text-sm mt-1">{link.desc}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Stockhours ────────────────────────────────────────────────────────────────
const StockhoursSection = () => (
  <section id="community" className="py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="reveal relative overflow-hidden bg-gradient-to-br from-green-950/40 to-emerald-950/20 backdrop-blur-xl border border-green-500/15 rounded-3xl p-10 md:p-14">
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-green-500/10 backdrop-blur-sm p-3 border border-green-500/20">
              <img
                src="/assets/images/clocklogo copy.PNG"
                alt="Stockhours logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent mb-4">
            Join Stockhours Team
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Become a profitable trader and learn from industry professionals.
            Join our community of successful traders and master the art of stock options trading.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-10 py-5 text-lg font-semibold rounded-full shadow-2xl shadow-green-500/25 hover:shadow-green-500/45 hover:scale-105 transition-all duration-300 border border-green-500/20"
            onClick={() => window.open('https://whop.com/stock-hours/?a=myocardialpoignancy3998', '_blank')}
          >
            <Clock className="w-5 h-5 mr-2" />
            Join Stockhours Team
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// ── Contact ───────────────────────────────────────────────────────────────────
const ContactSection = () => (
  <section id="contact" className="py-24 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <div className="reveal mb-12">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
          <span className="text-cyan-300 text-sm font-medium">Let's Talk</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
          Let's Build Something Amazing
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Ready to collaborate on the next generation of AI and fintech solutions?
        </p>
      </div>

      <div className="reveal max-w-md mx-auto" style={{ transitionDelay: '0.15s' }}>
        <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-5 text-base font-semibold rounded-xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/45 hover:scale-[1.02] transition-all duration-300"
              onClick={() => window.location.href = 'mailto:rsassanimarketing@gmail.com'}
            >
              <span className="hidden sm:inline">rsassanimarketing@gmail.com</span>
              <span className="sm:hidden">Email Me</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ── Home ──────────────────────────────────────────────────────────────────────
function Home() {
  useScrollReveal();
  useEffect(() => { return addClickSounds(); }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <FuturisticBackground />
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SocialSection />
      <StockhoursSection />
      <ContactSection />

      <footer className="py-8 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Rocco Sassani. Building the future, one line of code at a time.
          </p>
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <span>Made with</span>
            <span className="text-red-400/80">♥</span>
            <span>& React</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stockoptionscalculator" element={<StockOptionsCalculator />} />
        <Route path="/optionscalculator" element={<OptionsCalculator />} />
        <Route path="/optionscalculator/privacy" element={<OptionsCalculatorPrivacy />} />
        <Route path="/Roomi/privacy" element={<RoomiPrivacy />} />
        <Route path="/Roomi/terms" element={<RoomiTerms />} />
      </Routes>
    </Router>
  );
}

export default App;
