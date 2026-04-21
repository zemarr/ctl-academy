'use client';

import Script from 'next/script';
import { useState } from 'react';

interface WorkshopTicketProps {
  eventId: string;
}

export default function WorkshopTicket({ eventId }: WorkshopTicketProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const buttonId = `eb-trigger-${eventId}`;

  const initEventbrite = () => {
    if (window.EBWidgets) {
      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: eventId,
        modal: true,
        modalTriggerElementId: buttonId,
        onOrderComplete: () => {
          console.log('Order successful! Energy is flowing.');
          // Optional: window.location.href = '/thank-you';
        },
      });
      setIsLoaded(true);
    }
  };

  return (
    <div className="max-w-md border border-neutral-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-2xl font-semibold mb-2">Find Your Voice Workshop</h3>
      <p className="text-neutral-600 mb-6 italic">
        A movement-based experience for storytelling and vocal clarity.
      </p>

      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-neutral-500 uppercase tracking-widest">Pricing</p>
          <p className="text-xl font-bold">£25 - £30</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-neutral-500 uppercase tracking-widest">Date</p>
          <p className="font-medium text-neutral-800">May 16, 2026</p>
        </div>
      </div>

      {/* The Script: Loads once, then triggers initEventbrite */}
      <Script
        src="https://www.eventbrite.com/static/widgets/eb_widgets.js"
        onReady={initEventbrite} // onReady ensures it works even if you navigate back to this page
      />

      <button
        id={buttonId}
        disabled={!isLoaded}
        className={`w-full py-4 rounded-xl font-bold text-white transition-all transform active:scale-95 ${isLoaded
          ? 'bg-black hover:bg-neutral-800 cursor-pointer'
          : 'bg-neutral-300 cursor-not-allowed'
          }`}
      >
        {isLoaded ? 'Reserve My Spot' : 'Preparing Checkout...'}
      </button>

      <p className="text-center text-xs text-neutral-400 mt-4">
        Secure checkout powered by Eventbrite
      </p>
    </div>
  );
}