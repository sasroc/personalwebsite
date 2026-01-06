import React from 'react';
import { ArrowLeft, Zap, Settings, Eye, Save, Palette, TrendingUp, TrendingDown, Target, BarChart3, Calculator } from 'lucide-react';

function OptionsCalculator() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_100%)]"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => window.location.href = '/'}
            className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </button>

          <div className="backdrop-blur-xl bg-white/5 rounded-3xl shadow-2xl p-8 border border-white/10">
            {/* App Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/30">
                <img
                  src="/assets/images/optionscalculator2.png"
                  alt="Options P&L Calculator Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Options P&L Calculator</h1>
                <p className="text-emerald-300 text-lg font-medium mb-2">
                  Fast, Visual Options Contract Calculations
                </p>
                <p className="text-gray-300 max-w-2xl">
                  Calculate your option contract values instantly. Enter your fill price and see exactly what your position will be worth at any percentage gain or loss. No complicated formulas, no spreadsheets — just the numbers you need.
                </p>
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl p-6 border border-emerald-500/30 mb-10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Available on the App Store</h3>
                  <p className="text-gray-400">Download now for iOS devices</p>
                </div>
                <a
                  href="https://apps.apple.com/us/app/options-calculator-p-l/id6740692498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>Download on App Store</span>
                </a>
              </div>
            </div>

            {/* Why Traders Love It */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </span>
                Why Traders Love It
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FeatureCard
                  icon={<Zap className="w-6 h-6" />}
                  title="Instant Calculations"
                  description="Results update in real-time as you type"
                  color="emerald"
                />
                <FeatureCard
                  icon={<Settings className="w-6 h-6" />}
                  title="Fully Customizable"
                  description="Add your own percentage targets for gains and losses"
                  color="teal"
                />
                <FeatureCard
                  icon={<Eye className="w-6 h-6" />}
                  title="Visual Clarity"
                  description="Green cards for profits, red for losses — see scenarios at a glance"
                  color="green"
                />
                <FeatureCard
                  icon={<Save className="w-6 h-6" />}
                  title="Save Your Presets"
                  description="Custom percentages are remembered between sessions"
                  color="cyan"
                />
                <FeatureCard
                  icon={<Palette className="w-6 h-6" />}
                  title="Clean, Modern Design"
                  description="Beautiful dark interface easy on the eyes during long trading sessions"
                  color="blue"
                />
              </div>
            </div>

            {/* Perfect For Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center mr-3">
                  <Target className="w-5 h-5 text-teal-400" />
                </span>
                Perfect For
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Day Traders</h3>
                    <p className="text-gray-400 text-sm">Monitoring option positions in real-time</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Swing Traders</h3>
                    <p className="text-gray-400 text-sm">Setting profit targets and stop losses</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Investors</h3>
                    <p className="text-gray-400 text-sm">Evaluating potential outcomes before entering a trade</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Anyone</h3>
                    <p className="text-gray-400 text-sm">Who wants quick "what if" calculations on options</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3">
                  <Calculator className="w-5 h-5 text-green-400" />
                </span>
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StepCard
                  number="1"
                  title="Enter Fill Price"
                  description="Input your option contract fill price"
                />
                <StepCard
                  number="2"
                  title="View Calculations"
                  description="See calculated values at your preset percentages"
                />
                <StepCard
                  number="3"
                  title="Customize Targets"
                  description="Tap settings to add custom percentage targets (+5%, -15%, +50%)"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl border border-emerald-500/20">
              <h3 className="text-2xl font-bold text-white mb-2">Skip the Mental Math</h3>
              <p className="text-gray-300 mb-6">Make faster, more confident trading decisions with Options P&L Calculator</p>
              <a
                href="https://apps.apple.com/us/app/options-calculator-p-l/id6740692498"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Get it on the App Store
              </a>
              <div className="mt-6">
                <a
                  href="/optionscalculator/privacy"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description, color }) {
  const colorClasses = {
    emerald: 'from-emerald-500/20 to-emerald-600/20 text-emerald-400',
    teal: 'from-teal-500/20 to-teal-600/20 text-teal-400',
    green: 'from-green-500/20 to-green-600/20 text-green-400',
    cyan: 'from-cyan-500/20 to-cyan-600/20 text-cyan-400',
    blue: 'from-blue-500/20 to-blue-600/20 text-blue-400',
  };

  return (
    <div className="p-5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

// Step Card Component
function StepCard({ number, title, description }) {
  return (
    <div className="relative p-6 bg-white/5 rounded-xl border border-white/10">
      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
        {number}
      </div>
      <div className="pt-4">
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default OptionsCalculator;

