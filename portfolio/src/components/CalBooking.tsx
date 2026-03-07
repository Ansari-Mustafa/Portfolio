'use client';

import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

export default function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'personal-connect' });
      cal('floatingButton', {
        calLink: 'mustafa-ansari/personal-connect',
        config: {
          layout: 'month_view',
          useSlotsViewOnSmallScreen: 'true',
          theme: 'auto',
        },
        buttonText: 'Book a Meeting',
        hideButtonIcon: false,
        buttonColor: '#ff6a36',
      });
      cal('ui', {
        cssVarsPerTheme: { light: { 'cal-brand': '#4e4e4e' }, dark: { 'cal-brand': '#ff6a36' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return null;
}
