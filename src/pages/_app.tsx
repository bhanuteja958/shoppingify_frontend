import SideNav from '@/components/SideNav/SideNav';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400','500','700'],
  style:['normal'],
  subsets:['latin'] 
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section className={poppins.className}>
      <aside>
        <SideNav />
      </aside>
      <main>
        <Component {...pageProps} />
      </main>
      <aside>
        
      </aside>
    </section>
  )
};
