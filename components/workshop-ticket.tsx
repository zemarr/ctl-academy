'use client';

export default function WorkshopTicket() {
  return (
    <div className="w-full h-full md:px-12 px-8 md:py-20 py-12 bg-white/90 relative">
      <h3 className="md:text-3xl text-2xl font-bold mb-2 text-left">Let Your Voice Be Heard — A Communication and Confidence Workshop</h3>
      <p className="text-neutral-600 text-base text-left mb-6">
        You don't need to become someone else to be confident. <br />
        You just need the space to become more of who you already are.
      </p>

      <h4 className="text-xl font-medium mb-2 text-left">Workshop details</h4>
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex justify-between items-start gap-12">
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Date</p>
          <p className="font-semibold text-neutral-800">30th May, 2026</p>
        </div>
        <div className="flex justify-between items-start gap-12">
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Time</p>
          <p className="font-semibold text-neutral-800">11:00 AM - 02:00 PM</p>
        </div>
        <div className="flex justify-between items-start gap-12">
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Location</p>
          <p className="font-semibold text-neutral-800 text-right">1 Humphrey Repton Lane, Wembley Park, HA9 0GL</p>
        </div>
        <div className="flex justify-between items-start gap-12">
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Contact</p>
          <a href="tel:+4407532775681" target="_blank" className="font-semibold text-neutral-800 text-right">+447532775681</a>
          {/* <p className="font-semibold text-neutral-800 text-right">1 Humphrey Repton Lane, Wembley Park, HA9 0GL</p> */}
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-16">
        <div className="flex justify-between items-start gap-12">
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Tickets</p>
          <p className="font-semibold text-neutral-800"><span className="font-bold">£30</span></p>
        </div>
      </div>

      <div className="footer absolute bottom-0 left-0 w-full">
        <p className="text-center text-xs text-neutral-400 mb-4">
          Secure checkout powered by <span className="font-medium text-orange-500">Eventbrite</span>
        </p>
        <button
          id="global-eventbrite-trigger"
          className={`w-full bg-beige-dark hover:bg-beige-dark/60 hover:text-black text-black px-12 py-4 rounded-none font-semibold tracking-wide uppercase md:text-base text-sm transition-all duration-300
            }`}
        >
          SECURE YOUR SPOT
        </button>

      </div>
    </div>
  );
}