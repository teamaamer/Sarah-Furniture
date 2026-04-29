'use client';

import { useEffect } from 'react';

export default function FacebookFeed() {
  useEffect(() => {
    if (document.getElementById('facebook-jssdk')) {
      // SDK already loaded — re-parse any new fb-page elements
      if (typeof window !== 'undefined' && (window as any).FB) {
        (window as any).FB.XFBML.parse();
      }
      return;
    }

    if (!document.getElementById('fb-root')) {
      const fbRoot = document.createElement('div');
      fbRoot.id = 'fb-root';
      document.body.prepend(fbRoot);
    }

    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0';
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text + CTA */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Stay Connected
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-5">
              See Our Latest Updates
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Follow our latest showroom arrivals, offers, and updates directly from our Facebook page.
            </p>
            <a
              href="https://www.facebook.com/SarahFurniturejax/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              Follow us on Facebook
            </a>
          </div>

          {/* Right: Facebook Page Plugin */}
          <div className="flex justify-center lg:justify-end overflow-hidden">
            <div
              className="fb-page rounded-xl overflow-hidden shadow-lg w-full"
              data-href="https://www.facebook.com/SarahFurniturejax/"
              data-tabs="timeline"
              data-width="500"
              data-height="600"
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
