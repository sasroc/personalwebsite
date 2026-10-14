import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

function CurbPrivacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0a0518] to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_100%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px]" />
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
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-purple-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
                <p className="text-amber-300 mt-0.5">CURB — Exterior Home Redesign</p>
              </div>
            </div>

            <p className="text-gray-400 mb-10 text-sm">Last updated: October 14, 2026</p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
                <p>
                  CURB ("the App", "we", "our") is an iOS app that turns a photo of the outside of your house into an AI-generated redesign, along with an estimated materials list. This Privacy Policy explains what information we collect, how we use it, who we share it with, and the choices you have. By using CURB, you agree to the practices described here.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
                <ul className="space-y-3 mt-2">
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Account Information.</span> CURB uses Sign in with Apple. We receive an account identifier and the email address Apple shares with us. If you choose "Hide My Email", that is a private relay address. We use these to create and identify your account.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">House Photos.</span> When you start a render, the photo you took or picked is sent to our server and passed to OpenAI to generate your redesign. We do not save your original photo on our servers. The finished render is held briefly so the App can download it. It is deleted once the App confirms it received the render, and never kept longer than 48 hours.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Project & Design Choices.</span> We store the projects you create, such as a name and type ("front", "backyard"). We also store the options you pick for each render: the elements to change, color preferences, and any note you type. We keep render details (version number, status, timestamps) and the materials and cost estimates generated for each render. This lets you see your project history, compare versions, and make adjustments.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Usage Counts.</span> We track how many renders you have used in the current period to enforce your plan's monthly allowance.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Subscription & Purchase Data.</span> Apple processes all purchases. We use RevenueCat to check your subscription or lifetime purchase status. RevenueCat receives your account identifier and purchase receipt data. No payment card information ever reaches us.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Stored on Your Device.</span> Your photos and finished renders are saved locally on your iPhone. They are not uploaded anywhere except for the render request described above.
                    </div>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">What We Don't Do</h2>
                <ul className="space-y-2">
                  {[
                    'We do not sell your personal information.',
                    'We do not show ads or use advertising SDKs.',
                    'We do not track you across other apps or websites.',
                    'We do not use your photos to train AI models.',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h2>
                <ul className="space-y-2">
                  {[
                    'To sign you in and maintain your account',
                    'To generate your redesigns and materials estimates',
                    'To save your projects and version history',
                    'To verify your plan and enforce render allowances',
                    'To diagnose failures and keep the service running reliably',
                    'To respond to support requests',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">AI Processing by OpenAI</h2>
                <p className="mb-3">
                  CURB's redesigns and materials estimates are produced by OpenAI's API. Each time you start a render, your house photo and design choices are sent to OpenAI. The App asks for your permission before it sends anything for the first time.
                </p>
                <p>
                  OpenAI processes this data on our behalf to return your result. Under OpenAI's API data policies, data sent through the API is not used to train OpenAI's models by default. OpenAI may keep it for a limited period to monitor for abuse. See OpenAI's privacy policy for details.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Third-Party Services</h2>
                <p className="mb-3">CURB relies on these services, each governed by its own privacy policy:</p>
                <ul className="space-y-2">
                  {[
                    ['Sign in with Apple', 'Sign-in'],
                    ['Google Firebase Authentication', 'Account management'],
                    ['OpenAI API', 'AI image generation and materials estimates'],
                    ['RevenueCat', 'Subscription and purchase status'],
                    ['Railway', 'Backend hosting and database'],
                    ['Apple App Store', 'Payment processing'],
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
                <p className="mb-3">
                  We keep your account information and project history for as long as your account is active. You can delete your account at any time in the App under Account → Delete account. This permanently removes your account, projects, design choices, render history, and materials estimates from our database. It also deletes your sign-in account and revokes CURB's access to your Apple ID.
                </p>
                <p>
                  Deleting your account does not cancel an active App Store subscription. Cancel it in your iPhone's Settings → Apple ID → Subscriptions. Photos and renders saved on your device are deleted when you uninstall the App.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Your Rights</h2>
                <p>
                  Depending on where you live, you may have the right to access, correct, delete, or receive a copy of your personal information. You can delete your data at any time from inside the App. For any other request, email us at the address below and we will respond within a reasonable time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Children's Privacy</h2>
                <p>
                  CURB is not directed to children under 13, and we do not knowingly collect personal information from them. If you believe a child has given us personal information, contact us and we will delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Security</h2>
                <p>
                  All data between the App and our servers is encrypted in transit (HTTPS/TLS), and every request is authenticated. Image data is held on our servers only as briefly as described above.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. When we do, we will change the "Last updated" date above, and we will tell you about material changes in the App. If you keep using CURB after changes take effect, you accept the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
                <p className="mb-2">Questions or requests about your data? Reach us at:</p>
                <a
                  href="mailto:rsassanimarketing@gmail.com"
                  className="text-amber-400 hover:text-amber-300 transition-colors"
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

export default CurbPrivacy;
