import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StockOptionsCalculator from './components/StockOptionsCalculator';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { ExternalLink, Twitter, Instagram, Mail, Clock } from 'lucide-react';

// Satisfying Click Sound Function
const playSatisfyingClick = () => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    // Create a pleasing click sound
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.05);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, audioContext.currentTime);
    filter.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.05);

    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  } catch (error) {
    // Silently fail if Web Audio API is not supported
    console.log('Audio not supported');
  }
};

// Add click sounds to all interactive elements
const addClickSounds = () => {
  const handleClick = (e) => {
    // Only play sound for user interactions, not programmatic clicks
    if (e.isTrusted) {
      playSatisfyingClick();
    }
  };

  // Add event listeners to all interactive elements
  const interactiveElements = document.querySelectorAll('button, a, [role="button"], input[type="submit"], input[type="button"]');
  interactiveElements.forEach(element => {
    element.addEventListener('click', handleClick);
  });

  // Cleanup function
  return () => {
    interactiveElements.forEach(element => {
      element.removeEventListener('click', handleClick);
    });
  };
};

// Futuristic Background Component
const FuturisticBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>

    {/* Animated grid pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

    {/* Floating orbs */}
    <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
    <div className="absolute top-3/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
    <div className="absolute bottom-1/4 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float animation-delay-4000"></div>

    {/* Animated particles */}
    <div className="absolute inset-0">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse-slow opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  </div>
);

// Hero Section Component
const HeroSection = () => (
  <div className="min-h-screen flex items-center justify-center px-4 relative">
    {/* Space background image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70 brightness-110"
      style={{
        backgroundImage: `url('/assets/images/space1.png')`,
      }}
    />
    {/* Overlay to ensure text readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/20 to-slate-950/50"></div>

    <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
      {/* Profile Avatar */}
      <div className="relative mx-auto w-32 h-32 mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-glow blur-lg opacity-75"></div>
        <Avatar className="w-32 h-32 relative border-4 border-white/20 shadow-2xl">
          <AvatarImage src="/assets/images/pfp.JPEG" alt="Rocco Sassani" />
          <AvatarFallback>RS</AvatarFallback>
        </Avatar>
      </div>

      {/* Name and Title */}
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-slide-up leading-tight">
          Rocco Sassani
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-blue-200 font-light tracking-wide animate-slide-up animation-delay-200 px-4">
          Software Developer & Stock Options Trader
        </p>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto animate-slide-up animation-delay-400 px-4">
          Building the future of AI-powered solutions and financial technology
        </p>
      </div>

      {/* CTA Button */}
      <div className="pt-8 animate-slide-up animation-delay-600">
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          <Mail className="w-5 h-5 mr-2" />
          Get In Touch
        </Button>
      </div>
    </div>
  </div>
);

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      title: "Stock Options Calculator",
      description: "Advanced financial tool for options trading analysis and strategy optimization",
      image: "/assets/images/StockOptionsLogo.jpg",
      url: "/stockoptionscalculator",
      local: true,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "QuickFixAI",
      description: "AI-powered home maintenance advisor providing detailed repair guides and solutions for common household issues",
      image: "/assets/images/logo2.png",
      url: "https://quickfixai.net",
      local: false,
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "ClaraAI",
      description: "Always on your screen, seamless AI integration. Level up your productivity. Waitlist spots available now",
      image: "/assets/images/claraailogo4.png",
      url: "https://claraai.net",
      local: false,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Innovative solutions at the intersection of technology and finance
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm p-2 mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  <img
                    src={project.image}
                    alt={`${project.title} logo`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <CardTitle className="text-white text-xl group-hover:text-blue-300 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 mb-6">
                  {project.description}
                </CardDescription>
                <button
                  className="w-full flex items-center justify-center px-6 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
                  onClick={() => {
                    if (project.local) {
                      window.location.href = project.url;
                    } else {
                      window.open(project.url, '_blank');
                    }
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span className="text-white font-medium group-hover:text-blue-100 transition-colors">Explore Project</span>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stockhours Section Component
const StockhoursSection = () => (
  <section className="py-16 md:py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm p-3 border border-white/20">
            <img
              src="/assets/images/clocklogo copy.PNG"
              alt="Stockhours logo"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent mb-6">
          Join Stockhours Team
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Become a profitable trader and learn from industry professionals.
          Join our community of successful traders and master the art of stock options trading.
        </p>

        <Button
          size="lg"
          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
          onClick={() => window.open('https://whop.com/stock-hours/?a=myocardialpoignancy3998', '_blank')}
        >
          <Clock className="w-5 h-5 mr-2" />
          Join Stockhours Team
        </Button>
      </div>
    </div>
  </section>
);

// Social Links Section Component
const SocialSection = () => {
  const socialLinks = [
    {
      name: "X (Twitter)",
      url: "https://x.com/roccoscalps",
      icon: <Twitter className="w-6 h-6" />,
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/rocco.sassani/",
      icon: <Instagram className="w-6 h-6" />,
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-12 md:mb-16">
          Connect With Me
        </h2>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-lg mx-auto">
          {socialLinks.map((link, index) => (
            <Button
                  key={index}
              variant="outline"
              size="lg"
              className="h-20 bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 group"
              onClick={() => window.open(link.url, '_blank')}
            >
              <div className={`group-hover:scale-110 transition-transform duration-300 ${link.color}`}>
                {link.image ? (
                  <img
                    src={link.image}
                    alt={`${link.name} logo`}
                    className="w-8 h-8 object-contain text-gray-400"
                  />
                ) : (
                  <span className="text-gray-400">{link.icon}</span>
                )}
              </div>
              <span className="ml-3 text-white font-medium">{link.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => (
  <section id="contact" className="py-16 md:py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-6 md:mb-8">
        Let's Build Something Amazing
      </h2>
      <p className="text-lg sm:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
        Ready to collaborate on the next generation of AI and fintech solutions?
      </p>

      <Card className="bg-white/5 backdrop-blur-xl border-white/10 max-w-md mx-auto">
        <CardContent className="p-6 md:p-8">
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 md:py-6 text-base md:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            onClick={() => window.location.href = 'mailto:rsassanimarketing@gmail.com'}
          >
            <Mail className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">rsassanimarketing@gmail.com</span>
            <span className="sm:hidden">Email Me</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  </section>
);

// Main Home Component
function Home() {
  useEffect(() => {
    // Add satisfying click sounds to all interactive elements
    const cleanup = addClickSounds();

    // Cleanup on unmount
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <FuturisticBackground />
      <HeroSection />
      <ProjectsSection />
      <SocialSection />
      <StockhoursSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm md:text-base text-gray-400 px-4">
            © 2025 Rocco Sassani. Building the future, one line of code at a time.
          </p>
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
      </Routes>
    </Router>
  );
}

export default App;
