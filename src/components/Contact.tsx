import { InlineWidget } from "react-calendly";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Let's build something together
          </h2>
          <p className="text-lg text-gray-600">
            Interested in our games, ethical design consulting, or just want to chat? Grab a time on my calendar.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl shadow-brand-purple/5 overflow-hidden border border-gray-100 p-2 sm:p-4">
          <InlineWidget 
            url="https://calendly.com/deathwish/meeting" 
            styles={{
              height: '700px',
              width: '100%'
            }}
            pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '8B5CF6',
              textColor: '111827'
            }}
          />
        </div>
      </div>
    </section>
  );
}
