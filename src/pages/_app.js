import '../css/main.css';

// Changing fonts

import { Inter, Tinos } from 'next/font/google';
 
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})
 
export const tinos = Tinos({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

 


 
// export function MyApp2({ Component, pageProps }) {
//   return (
//     <main className={`${tinos.variable} font-sans`}>
//       <Component {...pageProps} />
//     </main>
// <style jsx global>{`
//         html {
//           font-family: ${tinos.style.fontFamily};
//         }
//       `}
// </style>
//   )
// }







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
