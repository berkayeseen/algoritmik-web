import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ⚡ next/font ile font yükleme — CLS ve LCP iyileştirmesi
// Font dosyaları build anında indirilir, harici ağ isteği yapılmaz.
// 'display: swap' ile metin anında görünür, font yüklenince değişir.
const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
});

// 🔍 SEO — Kapsamlı metadata yapılandırması
export const metadata = {
  title: {
    default: 'Algoritmik — Birebir Kodlama ve Teknoloji Eğitimi',
    template: '%s | Algoritmik',
  },
  description: '10-15 yaş arası çocuklar için evde veya online, tamamen birebir ve öğrenciye özel yazılım, kodlama ve robotik eğitimleri. İzmir ve Türkiye geneli.',
  keywords: ['kodlama eğitimi', 'çocuklar için yazılım', 'birebir özel ders', 'robotik eğitim', 'İzmir kodlama kursu', 'online kodlama', 'scratch eğitimi', 'python eğitimi'],
  authors: [{ name: 'Algoritmik' }],
  creator: 'Algoritmik',
  metadataBase: new URL('https://algoritmik.com'),
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Algoritmik',
    title: 'Algoritmik — Birebir Kodlama ve Teknoloji Eğitimi',
    description: '10-15 yaş arası çocuklar için evde veya online, tamamen birebir yazılım ve teknoloji eğitimleri.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Algoritmik Kodlama Eğitimi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Algoritmik — Birebir Kodlama ve Teknoloji Eğitimi',
    description: '10-15 yaş arası çocuklar için birebir yazılım ve teknoloji eğitimleri.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// ⚡ Viewport yapılandırması — Mobil uyumluluk ve tema rengi
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1A3C6E',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-900`}>
        <Navbar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}