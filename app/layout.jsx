import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Algoritmik',
  description: '10-15 yaş arası çocuklar için teknoloji kurs merkezi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="antialiased bg-slate-50 text-slate-900">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}