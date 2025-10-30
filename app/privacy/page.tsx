"use client";
import React from "react";

export default function PrivacyPage() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Privacy Policy
        </h1>

        <p className="mb-6 text-lg">
          <strong>Effective Date:</strong> October 30, 2025
        </p>

        <p className="mb-8 text-lg">
          Welcome to <strong>Aura Assets</strong> (“we,” “our,” “us”). Your
          privacy is extremely important to us. This Privacy Policy describes
          how we collect, use, disclose, and safeguard your personal
          information when you visit our website or use our real estate
          services in Texas, USA.
        </p>

        {/* 1. Information We Collect */}
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We collect several types of information to provide and improve our
          services:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>
            <strong>Personal Identification Information:</strong> Such as your
            full name, phone number, email address, and property preferences
            that you submit through our forms.
          </li>
          <li>
            <strong>Property-Related Information:</strong> If you list, sell, or
            inquire about a property, we may collect details related to your
            listing, offer, or purchase preferences.
          </li>
          <li>
            <strong>Technical Data:</strong> Including your IP address, browser
            type, device information, operating system, referral URLs, and
            general usage patterns.
          </li>
          <li>
            <strong>Cookies & Tracking Data:</strong> We use cookies and similar
            technologies (Google Analytics, Facebook Pixel, etc.) to understand
            how users interact with our website.
          </li>
        </ul>

        {/* 2. How We Use Information */}
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use your data to enhance your experience and provide accurate
          real estate services, including:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Responding to inquiries, scheduling property visits, or consultations.</li>
          <li>Personalizing your property search and recommendations.</li>
          <li>Sending updates about listings, offers, or services (only with consent).</li>
          <li>Improving website design, usability, and marketing effectiveness.</li>
          <li>Complying with legal obligations or protecting against fraud.</li>
        </ul>

        {/* 3. Cookies and Tracking */}
        <h2 className="text-2xl font-semibold mb-4">3. Cookies and Tracking Technologies</h2>
        <p className="mb-8">
          Cookies are small text files stored on your device to collect standard
          internet log and visitor behavior information. You can instruct your
          browser to refuse all cookies or to indicate when a cookie is being
          sent. However, some features of our site may not function properly if
          cookies are disabled.
        </p>

        {/* 4. Third-Party Services */}
        <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services and Integrations</h2>
        <p className="mb-4">
          We may use third-party services that collect, monitor, and analyze
          information to improve our website and communication, such as:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Google Analytics (website usage and visitor insights)</li>
          <li>Facebook Pixel or Meta Ads (marketing optimization)</li>
          <li>Email providers (sending property alerts or newsletters)</li>
          <li>Cloud hosting and data backup providers</li>
        </ul>
        <p className="mb-8">
          Each third-party service follows its own privacy policy regarding how
          it handles your information.
        </p>

        {/* 5. How We Share Information */}
        <h2 className="text-2xl font-semibold mb-4">5. How We Share Your Information</h2>
        <p className="mb-8">
          We do <strong>not</strong> sell, rent, or trade your personal data.
          Information may only be shared with:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Trusted partners assisting in real estate transactions.</li>
          <li>Service providers who process data on our behalf (under NDA).</li>
          <li>Government or legal authorities if required by law.</li>
        </ul>

        {/* 6. Data Retention */}
        <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
        <p className="mb-8">
          We retain your personal information only as long as necessary to
          fulfill the purposes outlined in this policy, or as required by law.
          When no longer needed, your data is securely deleted.
        </p>

        {/* 7. Data Security */}
        <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
        <p className="mb-8">
          We implement reasonable administrative, technical, and physical
          safeguards to protect your data against unauthorized access,
          alteration, disclosure, or destruction. However, no electronic
          transmission over the Internet can be guaranteed 100% secure.
        </p>

        {/* 8. Your Rights */}
        <h2 className="text-2xl font-semibold mb-4">8. Your Privacy Rights</h2>
        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>Access and obtain a copy of your personal data.</li>
          <li>Request correction or deletion of inaccurate data.</li>
          <li>Withdraw consent for marketing communications.</li>
          <li>
            Request that we stop using your data for certain purposes (subject
            to legal or contractual obligations).
          </li>
        </ul>

        {/* 9. Children's Privacy */}
        <h2 className="text-2xl font-semibold mb-4">9. SMS Communication</h2>
        <p className="mb-8">
          By providing your phone number, you agree to receive text messages from Maverick Realty regarding property offers, updates, and other related communications. You may opt out at any time by replying “STOP.”
        </p>

        {/* 10. International Data Transfers */}
        <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
        <p className="mb-8">
          As our operations are based in the United States, all data is stored
          and processed within the U.S. By using our website, you consent to
          this transfer and processing.
        </p>

        {/* 11. Policy Updates */}
        <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
        <p className="mb-8">
          We may update this Privacy Policy from time to time. Changes will be
          reflected on this page with an updated “Effective Date.” We encourage
          you to review it periodically.
        </p>

        {/* 12. Contact Us */}
        <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or how we handle your personal data, please contact us:
        </p>
        <div className="mt-4 border-l-4 border-blue-600 pl-4">
          <p>
            <strong>Aura Assets</strong>
            <br />
            📍 3101 NW 134th St, Apt 4, Opa-locka, FL 33054
            <br />
           {" "}
            <a
              href="mailto:privacy@auraassets.com"
              className="text-blue-600 underline"
            >
              ✉️ info@auraassetrealty.com
            </a>
            <br />
            📞 (469) 577-0265
          </p>
        </div>
      </div>
    </section>
  );
}
