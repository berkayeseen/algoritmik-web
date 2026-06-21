import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-200 pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Dekoratif Arka Plan Işıkları */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Marka */}
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
              Algoritmik<span className="text-brand-gold">.</span>
            </h2>
            <p className="text-sm font-semibold text-brand-gold mb-4 uppercase tracking-wider">
              "Algoritmanın ritmini yakala!"
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              10–15 yaş arası çocuklar için tasarlanmış, öğrencinin potansiyeline ve hızına odaklanan birebir mentörlük ve teknoloji eğitim modeli.
            </p>
          </div>

          {/* Linkler */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-brand-gold rounded-full"></span> Hızlı Erişim
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">Ana Sayfa</Link></li>
              <li><Link href="/neden-yazilim" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">Neden Kodlama Eğitimi?</Link></li>
              <li><Link href="/egitimlerimiz" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">Eğitimlerimiz</Link></li>
              <li><Link href="/deneyimler" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">Deneyimler</Link></li>
              <li><Link href="/ben-kimim" className="hover:text-brand-gold hover:translate-x-1 transition-all inline-block">Ben Kimim</Link></li>
            </ul>
          </div>

          {/* İletişim & Sosyal Medya */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-4 h-1 bg-brand-blue rounded-full"></span> İletişim
            </h3>
            <ul className="space-y-3 text-sm text-slate-300 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-brand-gold">📍</span> İzmir, Türkiye (Yüz Yüze ve Online)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold">📞</span> +90 (537) 784 89 42
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold">✉️</span> merhaba@algoritmik.com
              </li>
            </ul>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Algoritmik. Tüm hakları saklıdır. Çocuğunuzun geleceği bizimle güvende.</p>
        </div>
      </div>
    </footer>
  );
}