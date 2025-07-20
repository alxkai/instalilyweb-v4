import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { AboutHero } from "@/components/layout/about-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | InstaLILY AI",
  openGraph: {
    title: "Terms of Service | InstaLILY AI"
  }
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fdfff7]">
      <div className="sticky top-0 z-[100] w-full">
        <div className="w-full max-w-[1340px] mx-auto sm:pt-4">
          <Nav />
        </div>
      </div>
      
      <main className="-mt-[90px]">
        <AboutHero
          title="Terms of Service"
          description="The terms and conditions governing your use of our services."
        />
        <section className="bg-[#fdfff7] py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">Welcome to InstaLILY! These Terms of Service ("Terms") govern your access to and use of our website and services (collectively, the "Services"). By accessing or using our Services, you agree to comply with and be bound by these Terms.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. SAAS Services and Support</h2>
              <p>InstaLILY will use commercially reasonable efforts to provide you with our Services. Additional services may be agreed upon through order forms, exhibits, and statements of work, and such additional services will also be deemed as "Services" under these Terms. InstaLILY will provide reasonable technical support services as described in Exhibit A.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Restrictions and Responsibilities</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code, object code, or underlying structure of the Services or any related software, documentation, or data ("Software").</li>
                <li>Modify, translate, or create derivative works based on the Services or Software.</li>
                <li>Use the Services or Software for timesharing or service bureau purposes or otherwise for the benefit of a third party.</li>
                <li>Remove any proprietary notices or labels.</li>
              </ul>
              <p>You may not export or re-export the Services or Software in violation of U.S. export control laws and regulations. You represent and warrant that you will use the Services only in compliance with our standard published policies and all applicable laws and regulations.</p>
              <p>You are responsible for obtaining and maintaining any equipment and ancillary services needed to connect to and use the Services. You are also responsible for maintaining the security of your account, passwords, and files, and for all uses of your account or equipment with or without your knowledge or consent.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Confidentiality and Proprietary Rights</h2>
              <p>Each party agrees to protect the other party&apos;s proprietary information with reasonable precautions and not to use or disclose such information except as necessary to perform under these Terms. Proprietary information includes non-public business, technical, or financial information.</p>
              <p>You retain all rights to your data ("Customer Data"). InstaLILY retains all rights to the Services, Software, and related intellectual property ("Company IP"). We may use anonymized data derived from your Customer Data for marketing, analytics, statistical, or research purposes.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payment of Fees</h2>
              <p>You agree to pay all applicable fees for the Services as described in any order form or statement of work. If your use of the Services exceeds the agreed capacity or otherwise incurs additional fees, you will be billed accordingly. InstaLILY reserves the right to change fees with 30 days&apos; notice.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Representations, Warranties, and Covenants</h2>
              <p>You represent, warrant, and covenant that you have the authority to enter into and comply with these Terms. You will not breach any agreements, violate any laws, or require third-party consents that would prevent you from fulfilling your obligations under these Terms.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Warranty and Disclaimer</h2>
              <p>InstaLILY will use commercially reasonable efforts to maintain the Services and minimize errors and interruptions. However, the Services are provided "as is," and we disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
              <p>In no event will InstaLILY be liable for indirect, special, punitive, or consequential damages. Our aggregate liability for any claims related to the Services will not exceed the fees paid by you in the 12 months preceding the claim.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Term and Termination</h2>
              <p>These Terms are effective until terminated by either party with 30 days&apos; notice. Either party may terminate for material breach if not cured within 15 days. Upon termination, your right to use the Services will cease, and you must return or destroy proprietary information.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Dispute Resolution</h2>
              <p>Any disputes will be resolved through binding arbitration administered by the American Arbitration Association in New York, NY. Each party waives the right to a jury trial.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Miscellaneous</h2>
              <p>These Terms constitute the complete agreement between the parties and supersede all prior agreements. The laws of New York govern these Terms. Notices must be in writing and are deemed received when delivered personally, electronically confirmed, or sent by recognized overnight delivery service.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Exhibit A: Support Terms</h2>
              <p>InstaLILY will provide technical support via email to Sumantro Das, VP of Product and Partnerships, at info@instalily.ai during weekdays from 9:00 am to 9:00 pm Eastern Time, excluding Federal Holidays. We will use commercially reasonable efforts to respond to support queries within one business day.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 