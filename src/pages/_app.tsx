import SideNav from '@/components/SideNav/SideNav';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {Quicksand } from 'next/font/google';

const quickSand = Quicksand({
  weight: ['400','600','700'],
  style:['normal'],
  subsets:['latin'] 
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section className={`${quickSand.className} siteContainer`}>
      <aside>
        <SideNav />
      </aside>
      <main>
        <Component {...pageProps} />
      </main>
    </section>
  )
};
