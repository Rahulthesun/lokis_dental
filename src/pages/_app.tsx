import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QN0LRPV6RG"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QN0LRPV6RG', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
