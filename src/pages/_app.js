import '../css/main.css';

// Changing fonts

import { Inter, Tinos } from 'next/font/google';
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const tinos = Tinos({
  subsets: ['latin'],
  display: 'swap',
})

import { tinos } from './fonts';
 
export default function Layout({ children }) {
  return (
    <html lang="en" className={tinos.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
import { inter } from './fonts';
 
export default function Page() {
  return (
    <>
      <h1 className={inter.className}>My page</h1>
      <h2 className={inter.className}>My page</h2>
      <h3 className={inter.className}>My page</h3>
      <h4 className={inter.className}>My page</h4>
      <h5 className={inter.className}>My page</h5>
      <h6 className={inter.className}>My page</h6>
    </>
  )
}




 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}







import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga4';

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
        if (GA_TRACKING_ID) {
            ReactGA.initialize(GA_TRACKING_ID);
        } else {
            console.error('Google Analytics tracking ID is not set');
        }

        const handleRouteChange = (url) => {
            if (GA_TRACKING_ID) {
                ReactGA.send({ hitType: 'pageview', page: url });
            }
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []); // Dependency array is empty

    return <Component {...pageProps} />;
}
