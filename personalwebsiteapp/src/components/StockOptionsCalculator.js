import React from 'react';

function StockOptionsCalculator() {
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
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl p-8 border border-white/20">
            <h1 className="text-3xl font-bold text-white mb-6 text-center">Stock Options Calculator</h1>
            <div className="text-white text-center">
              <p className="mb-4">Coming soon...</p>
              <p>This calculator will help you understand and evaluate your stock options.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockOptionsCalculator; 