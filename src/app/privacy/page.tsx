import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { AboutHero } from "@/components/layout/about-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | InstaLILY AI",
  openGraph: {
    title: "Privacy Policy | InstaLILY AI"
  }
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fdfff7]">
      <div className="sticky top-0 z-50 w-full">
        <div className="w-full max-w-[1340px] mx-auto pt-4">
          <Nav />
        </div>
      </div>
      
      <main className="-mt-[90px]">
        <AboutHero
          title="Privacy Policy"
          description="How we collect, use, and protect your personal information."
        />
        <section className="bg-[#fdfff7] py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">Revised 11/22/24</p>

              <p className="mb-8">At InstaLILY, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and share information about you when you use our Services.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
              <p>InstaLILY collects the following personal information from its customers (i.e., merchants) and shoppers using the AI Shopping Assistant.</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Merchant and User Details</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Store Hash, Store Website URL, User email:</strong> Used for identifying a user for the specific store and configuring analytics reports.</li>
                <li><strong>Product Catalog Information, Descriptions, Pricing:</strong> Used to surface relevant product discovery options for storefront shoppers.</li>
                <li><strong>Store Pages Content:</strong> Used to help answer relevant FAQ options for storefront shoppers.</li>
                <li><strong>Browser Cookies:</strong> Used to find current customer information and obtain personalized product and order information.</li>
                <li><strong>Conversational History:</strong> Stored for feedback and documentation to improve our assistant.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide, maintain, and improve our Services.</li>
                <li>Process transactions and send related information.</li>
                <li>Communicate with you, including sending updates, security alerts, and support messages.</li>
                <li>Analyze usage and activity trends to improve our Services.</li>
                <li>Personalize your experience and deliver relevant content and advertisements.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing Your Information</h2>
              <p>InstaLILY does not share any data gathered through search usage or any other information shared by the customers. Data collected from one store is not shared with another.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
              <p>We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Choices</h2>
              <p><strong>Accessing, Updating, or Deleting Your Information:</strong> You have the right to access, update, or delete your personal information.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
              <p>Store products and pages data are retained for customer service for the AI Shopping assistant. After uninstalling the application, the data will be automatically deleted. No shopper IP address is stored and identifiable.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. Your continued use of the Services after the changes take effect signifies your acceptance of the revised Privacy Policy.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our handling of your data, please contact us at:</p>
              <div className="mt-4">
                <p>InstaLILY<br />
                433 Broadway, New York, NY 10013<br />
                Email: info@instalily.ai</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 