export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#FFD700] mb-10">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-400 text-center mb-16">
          Last Updated: July 29, 2025
        </p>

        <div className="space-y-10 text-lg leading-relaxed text-gray-200">
          <section>
            <h2 className="text-2xl text-[#FFD700] font-semibold mb-2">1. Information We Collect</h2>
            <p>We collect personal information like name, email, phone, and address during orders. We also collect technical data like IP address, device info, and browser activity.</p>
          </section>

          <section>
            <h2 className="text-2xl text-[#FFD700] font-semibold mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside">
              <li>To process and ship orders</li>
              <li>Send confirmations & updates</li>
              <li>Improve your browsing experience</li>
              <li>Send promotional offers (if opted in)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-[#FFD700] font-semibold mb-2">3. Sharing of Information</h2>
            <p>We never sell your data. We only share it with trusted services like shipping providers, payment gateways, and analytics tools. Legal obligations may require sharing in rare cases.</p>
          </section>

          <section>
            <h2 className="text-2xl text-[#FFD700] font-semibold mb-2">4. Your Privacy Choices</h2>
            <p>You can opt out of marketing emails, disable cookies in your browser, or request deletion of your data by contacting us.</p>
          </section>

          <section>
            <h2 className="text-2xl text-[#FFD700] font-semibold mb-2">5. Data Security</h2>
            <p>We use SSL, encryption, and secure payment providers to keep your data safe from unauthorized access.</p>
          </section>

          <section>
            <h2 className="text-2xl text-[#FFD700] font-semibold mb-2">6. Cookies</h2>
            <p>Cookies help enhance your experience. You can choose to disable them via browser settings.</p>
          </section>

          <section>
            <h2 className="text-2xl text-[#FFD700] font-semibold mb-2">7. Third-Party Links</h2>
            <p>We may link to external sites. We're not responsible for their privacy policies.</p>
          </section>

          <section>
            <h2 className="text-2xl text-[#FFD700] font-semibold mb-2">8. Children’s Privacy</h2>
            <p>We do not knowingly collect data from anyone under 13. If we have, contact us and we’ll delete it.</p>
          </section>

          <section>
            <h2 className="text-2xl text-[#FFD700] font-semibold mb-2">9. Updates to This Policy</h2>
            <p>This page may change from time to time. We’ll always post the latest version here.</p>
          </section>

          <section>
            <h2 className="text-2xl text-[#FFD700] font-semibold mb-2">10. Contact Us</h2>
            <p>
              📧 <a href="mailto:support@sonnetsoflove.shop" className="text-[#FFD700] underline">support@sonnetsoflove.shop</a><br />
              🌐 <a href="https://sonnetsoflove.shop" className="text-[#FFD700] underline" target="_blank" rel="noopener noreferrer">sonnetsoflove.shop</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
