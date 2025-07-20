import { FullWidthCTA } from '@/components/layout/full-width-cta';
import { Footer } from '@/components/layout/footer';
import { Nav } from '@/components/layout/nav';
import Image from 'next/image';

export default function BookADemoPage() {
  return (
    <>
      <div className="min-h-screen bg-[#fdfff7]">
        <div className="sticky top-0 z-50 w-full">
          <div className="w-full max-w-[1340px] mx-auto pt-4">
            <Nav />
          </div>
        </div>
        
        <main className="-mt-[90px]">
          <section className="relative text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/bkd0.png"
                alt="Book a Demo Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 pt-36 pb-16 relative z-10">
              <div className="max-w-3xl">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  Book a Demo
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Learn how InstaLILY&apos;s Autonomous AI can work for your enterprise. Simply find a convenient time on the calendar below, and one of our specialists will get in touch.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#fdfff7] px-4 py-24">
            <div className="max-w-5xl mx-auto w-full">
              <div className="w-full h-[700px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3PkjeUl2AJmki-Ee99GBqjE60s5u2W1B9U_FyUcwLUYaoILAPo0DKwfd6YsxPUao1ZGJsw-657?gv=true"
                  style={{ border: 0 }}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  title="InstaLILY Calendar"
                />
              </div>
            </div>
          </section>

          <FullWidthCTA />
        </main>
        <Footer />
      </div>
    </>
  );
} 