import Script from "next/script";

export const metadata = {
  title: "Restaurant POS | ABS Software for Canada United States(US) Europe",
  description:
    "ABS POS delivers powerful, easy-to-use point of sale solutions designed to streamline operations, increase efficiency, and maximize profits for hospitality businesses.",
  keywords: "",
  authors: [{ name: "Awaiken" }],
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        {/* Bootstrap CSS */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        {/* SlickNav CSS */}
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        {/* Swiper CSS */}
        <link href="/css/swiper-bundle.min.css" rel="stylesheet" />
        {/* Font Awesome CDN */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"
        />
        {/* Animate CSS */}
        <link href="/css/animate.css" rel="stylesheet" />
        {/* Magnific Popup CSS */}
        <link href="/css/magnific-popup.css" rel="stylesheet" />
        {/* Mouse Cursor CSS */}
        <link href="/css/mousecursor.css" rel="stylesheet" />
        {/* Custom CSS */}
        <link href="/css/custom.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />
        {/* Responsive 2 CSS */}
        <link href="/css/responsive2.css" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}

        {/* jQuery - must load first */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />

        {/* All plugins and function.js loaded in order via single chain */}
        <Script
          id="load-all-scripts"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var scripts = [
                  '/js/bootstrap.min.js',
                  '/js/validator.min.js',
                  '/js/jquery.slicknav.js',
                  '/js/swiper-bundle.min.js',
                  '/js/jquery.waypoints.min.js',
                  '/js/jquery.counterup.min.js',
                  '/js/jquery.magnific-popup.min.js',
                  '/js/SmoothScroll.js',
                  '/js/parallaxie.js',
                  '/js/gsap.min.js',
                  '/js/magiccursor.js',
                  '/js/SplitText.min.js',
                  '/js/ScrollTrigger.min.js',
                  '/js/jquery.mb.YTPlayer.min.js',
                  '/js/wow.min.js',
                  '/js/function.js'
                ];
                var index = 0;
                function loadNext() {
                  if (index >= scripts.length) {
                    // All scripts loaded — trigger preloader fadeout
                    if (window.jQuery) {
                      jQuery(".preloader").fadeOut(600);
                    }
                    return;
                  }
                  var s = document.createElement('script');
                  s.src = scripts[index];
                  s.onload = function() {
                    index++;
                    loadNext();
                  };
                  s.onerror = function() {
                    index++;
                    loadNext();
                  };
                  document.body.appendChild(s);
                }
                loadNext();
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
