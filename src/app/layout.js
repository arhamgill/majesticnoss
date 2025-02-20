import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import localFont from 'next/font/local';
import Global from '@/components/Global';
import './globals.css';

export const metadata = {
  title: 'Bentolio',
  description:
    'Bentolio is a clean and customizable portfolio template built on Bento Grids, perfect for showcasing your work.',
};

const seasonsReg = localFont({
  src: '../../public/fonts/Fontspring-DEMO-theseasons-reg.otf',
  variable: '--font-seasons-reg',
});

const seasonsBd = localFont({
  src: '../../public/fonts/Fontspring-DEMO-theseasons-bd.otf',
  variable: '--font-seasons-bd',
});

const seasonsIt = localFont({
  src: '../../public/fonts/Fontspring-DEMO-theseasons-it.otf',
  variable: '--font-seasons-it',
});

const seasonsLt = localFont({
  src: '../../public/fonts/Fontspring-DEMO-theseasons-lt.otf',
  variable: '--font-seasons-lt',
});

const seasonsMd = localFont({
  src: '../../public/fonts/Fontspring-DEMO-theseasons-bdit.otf',
  variable: '--font-seasons-bdit',
});

const seasonsSbd = localFont({
  src: '../../public/fonts/Fontspring-DEMO-theseasons-ltit.otf',
  variable: '--font-seasons-ltit',
});

const fontHeading = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = DM_Sans({
  weight: ['300', '500'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='hide-scrollbar'>
      <body
        className={` ${seasonsReg.variable} ${seasonsBd.variable} ${seasonsIt.variable} ${seasonsLt.variable} ${seasonsMd.variable} ${seasonsSbd.variable} ${fontHeading.variable} ${fontBody.variable} antialiased`}
      >
        <Global />
        {children}
      </body>
    </html>
  );
}
