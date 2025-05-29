import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import LinkButton from './components/LinkButton';
import Footer from './components/Footer';
import StockOptionsCalculator from './components/StockOptionsCalculator';
import ContactButton from './components/ContactButton';
import './App.css';

// Instagram SVG Icon Component
const InstagramIcon = () => (
  <svg 
    className="w-6 h-6" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

function Home() {
  const links = [
    {
      label: 'X',
      url: 'https://x.com/roccoscalps',
      icon: 'https://x.com/favicon.ico',
      iconPosition: 'right'
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/rocco.sassani/',
      icon: <InstagramIcon />,
      iconPosition: 'right'
    },
    {
      label: 'Join Stockhours',
      url: 'https://whop.com/checkout/plan_PerlflI4qicw2/?a=myocardialpoignancy3998&d2c=true',
      icon: '/assets/images/clocklogo copy.PNG',
      iconPosition: 'right'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content container */}
      <div className="relative min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl p-8 border border-white/20 relative">
            <ContactButton email="rsassanimarketing@gmail.com" />
            <Profile
              name="Rocco Sassani"
              profilePicture="/assets/images/pfp.JPEG"
            />
            
            <div className="flex flex-col items-center space-y-4">
              {links.map((link, index) => (
                <LinkButton
                  key={index}
                  label={link.label}
                  url={link.url}
                  icon={link.icon}
                  iconPosition={link.iconPosition}
                />
              ))}
              <LinkButton
                label="Stock Options Calculator"
                url="/stockoptionscalculator"
                icon="/assets/images/StockOptionsLogo.jpg"
                iconPosition="right"
              />
            </div>

            <Footer />
          </div>
        </div>
      </div>
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
