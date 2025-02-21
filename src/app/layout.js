import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import localFont from 'next/font/local';
import Global from '@/components/Global';
import './globals.css';

export const metadata = {
  title: 'Nosayaba',
  description:
    'Nosa is a material scientist and engineer, spending 10+ years streamlining supply chains within several industries.',
};

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

const cinzelReg = localFont({
  src: '../../public/fonts/CinzelDecorative-Regular.ttf',
  variable: '--font-cinzelReg',
});

const cinzelBold = localFont({
  src: '../../public/fonts/CinzelDecorative-Bold.ttf',
  variable: '--font-cinzelBold',
});

const cinzelBlack = localFont({
  src: '../../public/fonts/CinzelDecorative-Black.ttf',
  variable: '--font-cinzelBlack',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='hide-scrollbar'>
      <body
        className={` ${cinzelReg.variable} ${cinzelBold.variable} ${cinzelBlack.variable} ${fontHeading.variable} ${fontBody.variable} antialiased`}
      >
        <Global />
        {children}
      </body>
    </html>
  );
}
