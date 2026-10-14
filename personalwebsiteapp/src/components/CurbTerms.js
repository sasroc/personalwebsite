import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

function CurbTerms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0a0518] to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_100%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />
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
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">Terms of Service</h1>
                <p className="text-amber-300 mt-0.5">CURB — Exterior Home Redesign</p>
              </div>
            </div>

            <p className="text-gray-400 mb-10 text-sm">Last updated: October 14, 2026</p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Acceptance of Terms</h2>
                <p className="mb-3">
                  By downloading, installing, or using CURB ("the App"), you agree to these Terms of Service ("Terms"). If you do not agree, do not use the App. These Terms are a binding agreement between you and Rocco Sassani ("we", "us", "our").
                </p>
                <p>
                  These Terms apply alongside Apple's Licensed Application End User License Agreement (the "Standard EULA"). If the two conflict, these Terms control to the extent the Standard EULA allows. Our{' '}
                  <Link to="/curb/privacy" className="text-amber-400 hover:text-amber-300 transition-colors">Privacy Policy</Link>{' '}
                  explains how we handle your data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Description of Service</h2>
                <p>
                  CURB is an iOS app that uses artificial intelligence to generate redesigned visualizations of the outside of your house from a photo you provide, along with an estimated materials list and cost range. You must create an account to use the App, using Sign in with Apple, Google, or an email address and password. You are responsible for keeping your account credentials secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Renders Are Visualizations, Not Plans or Quotes</h2>
                <p>
                  Renders are AI-generated concept images. They may not accurately show your home's dimensions, structure, materials, colors, lighting, or surroundings. Materials lists and cost estimates are rough, automatically generated approximations. They are not contractor quotes, bids, or professional advice. Actual costs vary widely by location, contractor, and site conditions. Always consult qualified professionals before you buy materials or start work. Check local building codes, permit requirements, and HOA rules before making any change to your property.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Eligibility</h2>
                <p>
                  You must be at least 13 years old to use CURB. If you are under 18, you confirm that a parent or guardian has reviewed and agreed to these Terms for you.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Plans, Purchases & Render Allowances</h2>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Monthly.</span> An auto-renewing monthly subscription billed to your Apple ID. Payment is charged when you confirm the purchase. It renews automatically at the same price each month unless you cancel at least 24 hours before the current period ends. Your account is charged for renewal within 24 hours before the period ends.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Lifetime.</span> A one-time, non-renewing purchase. It includes a monthly render allowance for as long as CURB is offered. It is not a subscription and is never billed again.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Render Allowances.</span> Each plan includes the number of renders per month shown in the App when you buy. Allowances reset on the 1st of each month, and unused renders do not roll over. A render that fails does not count against your allowance. Comparing versions, viewing materials lists, and sharing never use a render. If we change allowances for new purchases, your plan keeps what it included when you bought it.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-white font-medium">Billing, Cancellation & Refunds.</span> Apple handles all billing. To manage or cancel a subscription, go to Settings → Apple ID → Subscriptions on your iPhone, or tap "Manage subscription" in the App. Deleting the App or your CURB account does not cancel a subscription. Apple's refund policies govern all refunds. You can restore past purchases on a new device with "Restore purchase".
                    </div>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Your Photos & License</h2>
                <p className="mb-3">
                  You keep ownership of the photos you submit ("User Content"). By submitting a photo, you give us a limited, non-exclusive license to send and process it, including through our AI provider OpenAI, solely to generate your render and materials estimate. We do not claim ownership of your photos, and we do not keep them after processing, as described in our Privacy Policy.
                </p>
                <p>
                  You confirm that you have the right to photograph and submit the property shown. Your submissions must not infringe anyone else's rights or break any law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Prohibited Uses</h2>
                <p className="mb-3">You agree not to:</p>
                <ul className="space-y-2">
                  {[
                    'Submit images that are illegal, harmful, or violate anyone else\'s rights, including privacy rights',
                    'Submit images of people, or use CURB for anything other than visualizing changes to a property',
                    'Use renders to misrepresent a property, for example in a real estate listing presented as its actual condition',
                    'Attempt to reverse-engineer, decompile, or get around the App\'s security measures or render limits',
                    'Automate requests or generate renders in bulk for resale without our written permission',
                    'Share, sell, or transfer your account to another person',
                    'Use the App in any way that could damage, disable, or overload our servers or services',
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
                  We own or license all App content, branding, code, and design, excluding User Content. You may not copy, distribute, or create derivative works of the App without our written permission. You may use renders and materials lists the App generates for you for personal purposes. That includes sharing them with family, friends, and contractors you are considering for the work.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Disclaimer of Warranties</h2>
                <p>
                  THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE EXPRESSLY DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT RENDERS WILL BE ACCURATE OR THAT MATERIALS LISTS OR COST ESTIMATES WILL MATCH REAL-WORLD PRODUCTS OR PRICES.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h2>
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP. THIS INCLUDES ANY DECISION, PURCHASE, OR PROPERTY WORK YOU UNDERTAKE BASED ON A RENDER OR ESTIMATE. OUR TOTAL LIABILITY FOR ANY CLAIM UNDER THESE TERMS WILL NOT EXCEED THE AMOUNT YOU PAID FOR THE APP IN THE 12 MONTHS BEFORE THE CLAIM.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Termination</h2>
                <p>
                  You can stop using CURB and delete your account at any time from inside the App. We may suspend or terminate your account if you violate these Terms. When your account ends, your right to use the App ends immediately. Provisions that by their nature should survive termination will do so.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Changes to Terms</h2>
                <p>
                  We may update these Terms from time to time. We will tell you about material changes in the App. If you keep using CURB after changes take effect, you accept the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the State of New York, United States, without regard to its conflict-of-law rules.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
                <p className="mb-2">Questions about these Terms? Contact us at:</p>
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

export default CurbTerms;
