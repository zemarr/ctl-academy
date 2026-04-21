'use client'; // This allows the use of onReady

import Script from 'next/script';

export default function EventbriteInitializer() {
  const eventId = process.env.NEXT_PUBLIC_EVENTBRITE_EVENT_ID;

  const initWidget = () => {
    if (window.EBWidgets && eventId) {
      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: eventId,
        modal: true,
        modalTriggerElementId: 'global-eventbrite-trigger',
      });
    }
  };

  return (
    <Script
      src="https://www.eventbrite.com/static/widgets/eb_widgets.js"
      strategy="afterInteractive"
      onReady={initWidget}
    />
  );
}