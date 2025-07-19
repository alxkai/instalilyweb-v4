import { FullWidthCTA } from '@/components/layout/full-width-cta';
import { Footer } from '@/components/layout/footer';
import { Nav } from '@/components/layout/nav';

export default function BookADemoPage() {
  return (
    <>
      <div className="bg-[#181818] py-4">
        <div className="max-w-7xl mx-auto">
          <Nav />
        </div>
      </div>
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-semibold text-black mb-6">
            Book a Demo
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Learn how InstaLILY’s Autonomous AI can work for your enterprise. Simply find a convenient time on the calendar below, and one of our specialists will get in touch.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24">
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
      <Footer />
    </>
  );
} 