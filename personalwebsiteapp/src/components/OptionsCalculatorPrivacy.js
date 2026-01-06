import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

function OptionsCalculatorPrivacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_100%)]"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative min-h-screen py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => window.location.href = '/optionscalculator'}
            className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Options P&L Calculator
          </button>

          <div className="backdrop-blur-xl bg-white/5 rounded-3xl shadow-2xl p-8 md:p-12 border border-white/10">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
                <p className="text-emerald-300">Options P&L Calculator</p>
              </div>
            </div>

            {/* Last Updated */}
            <p className="text-gray-400 mb-8">Last updated: January 6, 2026</p>

            {/* Content */}
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
                <p>
                  Options P&L Calculator ("the App") is committed to protecting your privacy. This Privacy Policy explains our practices regarding data collection and usage.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Data Collection</h2>
                <p className="mb-4">
                  <strong className="text-emerald-400">We do not collect any personal data.</strong>
                </p>
                <p>
                  The App operates entirely on your device. We do not collect, store, transmit, or share any personal information, usage data, analytics, or any other data whatsoever.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Data Storage</h2>
                <p>
                  Any data you enter into the App (such as contract prices or custom percentage targets) is stored locally on your device only. This data never leaves your device and is not accessible to us or any third parties.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Third-Party Services</h2>
                <p>
                  The App does not integrate with any third-party analytics, advertising, or tracking services. We do not share any information with third parties because we do not collect any information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Children's Privacy</h2>
                <p>
                  The App does not collect personal information from anyone, including children under the age of 13.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <a 
                  href="mailto:rsassanimarketing@gmail.com" 
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  rsassanimarketing@gmail.com
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionsCalculatorPrivacy;

