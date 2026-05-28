import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

function RoomiTerms() {
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
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Service</h1>
                <p className="text-blue-300 mt-0.5">Roomi — AI Room Designer</p>
              </div>
            </div>

            <p className="text-gray-400 mb-10 text-sm">Last updated: May 28, 2026</p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Acceptance of Terms</h2>
                <p>
                  By downloading, installing, or using Roomi ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the App. These Terms form a binding agreement between you and Rocco Sassani ("we", "us", "our").
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Description of Service</h2>
                <p>
                  Roomi is an iOS application that uses artificial intelligence to generate redesigned room visualizations from photos you provide. Generated images are concept visualizations only and do not represent actual renovation outcomes, quotes, or guarantees of any kind.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Eligibility</h2>
                <p>
                  You must be at least 13 years of age to use Roomi. By using the App you represent that you meet this requirement. If you are under 18, you represent that a parent or guardian has reviewed and agreed to these Terms on your behalf.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Subscriptions & Purchases</h2>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Free Tier.</span> New users receive one complimentary AI design after completing onboarding.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Roomi Pro Monthly.</span> A recurring monthly subscription billed through your Apple ID. Your subscription automatically renews unless cancelled at least 24 hours before the end of the current period.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Roomi Pro Lifetime.</span> A one-time purchase granting permanent access to all Pro features for the life of the App.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Billing & Cancellation.</span> All billing is handled by Apple. To cancel a subscription, visit your Apple ID subscription settings. Refunds are subject to Apple's refund policy.
                    </div>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">User Content & License</h2>
                <p className="mb-3">
                  You retain ownership of any photos you upload ("User Content"). By uploading photos to Roomi, you grant us a limited, non-exclusive license to transmit and process those photos solely for the purpose of generating your AI design. We do not claim ownership of your photos and do not store them after processing is complete.
                </p>
                <p>
                  You represent that you have the right to submit any content you upload — including that it does not infringe any third-party intellectual property rights or violate any applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Prohibited Uses</h2>
                <p className="mb-3">You agree not to:</p>
                <ul className="space-y-2">
                  {[
                    'Upload content that is illegal, harmful, or violates third-party rights',
                    'Attempt to reverse-engineer, decompile, or circumvent the App\'s security measures',
                    'Use the App to generate content in bulk for resale or commercial redistribution without our written consent',
                    'Share, sell, or transfer your account credentials to another person',
                    'Use the App in any manner that could damage, disable, or impair our servers or services',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Intellectual Property</h2>
                <p>
                  All App content, branding, code, and design (excluding User Content) are owned by or licensed to us. You may not reproduce, distribute, or create derivative works of the App without our prior written permission. AI-generated designs produced by the App may be used by you for personal, non-commercial purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Disclaimer of Warranties</h2>
                <p>
                  THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE EXPRESSLY DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, AND NON-INFRINGEMENT. AI-GENERATED DESIGNS ARE CREATIVE VISUALIZATIONS AND MAY NOT REFLECT ACTUAL ROOM DIMENSIONS, MATERIALS, OR COSTS.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h2>
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your account at our discretion, including for violations of these Terms. Upon termination, your right to use the App ceases immediately. Provisions that by their nature should survive termination will do so.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Changes to Terms</h2>
                <p>
                  We may update these Terms from time to time. We will notify you of material changes via the App. Continued use of the App after changes take effect constitutes your acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the State of New York, United States, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
                <p className="mb-2">Questions about these Terms? Contact us at:</p>
                <a
                  href="mailto:rsassanimarketing@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
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

export default RoomiTerms;
