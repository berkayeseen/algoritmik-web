import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Marka */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Algoritmik.</h2>
            <p className="text-sm text-slate-300">
              "Algoritmik ile algoritmanın ritmini yakala!"
            </p>
            <p className="mt-4 text-sm text-slate-400">
              10–15 yaş arası çocuklar için tasarlanmış, geleceğin teknoloji becerilerini kazandıran modern kurs merkezi.
            </p>
          </div>

          {/* Linkler */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-brand-gold transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/biz-kimiz" className="hover:text-brand-gold transition-colors">Biz Kimiz</Link></li>
              <li><Link href="/egitimlerimiz" className="hover:text-brand-gold transition-colors">Eğitimlerimiz</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>📍 Teknoloji Vadisi, İzmir / Türkiye</li>
              <li>📞 +90 (555) 123 45 67</li>
              <li>✉️ merhaba@algoritmik.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Algoritmik. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}