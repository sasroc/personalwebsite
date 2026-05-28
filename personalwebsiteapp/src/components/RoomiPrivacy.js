import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

function RoomiPrivacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0a0518] to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_100%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative min-h-screen py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => window.history.back()}
            className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back
          </button>

          <div className="backdrop-blur-xl bg-white/5 rounded-3xl shadow-2xl p-8 md:p-12 border border-white/10">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
                <p className="text-purple-300 mt-0.5">Roomi — AI Room Designer</p>
              </div>
            </div>

            <p className="text-gray-400 mb-10 text-sm">Last updated: May 28, 2026</p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
                <p>
                  Roomi ("the App", "we", "our") is an AI-powered room redesign application for iOS. This Privacy Policy describes what information we collect, how we use it, and your choices regarding your data. By using Roomi, you agree to the practices described here.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
                <ul className="space-y-3 mt-2">
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Account Information.</span> When you sign in with Google or Apple, we receive your name and email address to create and identify your account.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Room Photos.</span> Photos you upload are transmitted to our backend server solely to generate AI redesigns via OpenAI's API. We do not store your photos on our servers beyond the duration of the API request.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Subscription & Purchase Data.</span> In-app purchases are processed by Apple. We use RevenueCat to manage subscription status. RevenueCat may receive a pseudonymous user identifier and purchase receipt data. No payment card information passes through our systems.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Design History.</span> Your generated designs are stored locally on your device only. We do not store or have access to your design history.
                    </div>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h2>
                <ul className="space-y-2">
                  {[
                    'To authenticate you and maintain your account',
                    'To process your room photos and return AI-generated designs',
                    'To manage and verify your subscription status',
                    'To respond to support requests',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Third-Party Services</h2>
                <p className="mb-3">Roomi uses the following third-party services, each governed by their own privacy policies:</p>
                <ul className="space-y-2">
                  {[
                    ['Google Sign-In', 'Authentication'],
                    ['Sign in with Apple', 'Authentication'],
                    ['OpenAI API', 'AI image generation'],
                    ['RevenueCat', 'Subscription management'],
                    ['Railway', 'Backend hosting'],
                  ].map(([name, role]) => (
                    <li key={name} className="flex gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                      <span><span className="text-white font-medium">{name}</span> — {role}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Data Retention & Deletion</h2>
                <p>
                  Account information is retained as long as your account is active. You may delete your account at any time from within the App settings, which removes your account data from our systems. Design history stored locally on your device can be deleted by uninstalling the App.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Children's Privacy</h2>
                <p>
                  Roomi is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Security</h2>
                <p>
                  We use industry-standard measures to protect data in transit (HTTPS/TLS). Images uploaded for processing are not persisted on our servers after the AI response is returned.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy periodically. Material changes will be communicated within the App. Continued use after changes take effect constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
                <p className="mb-2">Questions or concerns about this policy? Reach us at:</p>
                <a
                  href="mailto:sassanirocco@gmail.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  sassanirocco@gmail.com
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomiPrivacy;
