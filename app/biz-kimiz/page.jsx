export const metadata = {
    title: 'Biz Kimiz | Algoritmik',
    description: 'Algoritmik kurs merkezinin hikayesi, misyonu ve vizyonu.',
  };
  
  export default function BizKimiz() {
    const degerler = [
      { baslik: "Çocuk Odaklılık", metin: "Her öğrencinin öğrenme hızına ve ilgi alanına saygı duyuyoruz." },
      { baslik: "Yenilikçilik", metin: "Müfredatımızı teknolojinin son trendlerine göre sürekli güncelliyoruz." },
      { baslik: "Pratiklik", metin: "Ezberci değil, üreten ve deneyimleyen bir eğitim modeli uyguluyoruz." },
    ];
  
    return (
      <main className="min-h-screen bg-brand-bg pb-20">
        {/* Üst Bölüm (Hero) */}
        <section className="bg-brand-blue py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Biz Kimiz?</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Geleceğin mühendislerini, yazılımcılarını ve teknoloji liderlerini yetiştirme tutkusuyla yola çıktık.
          </p>
        </section>
  
        {/* Hikaye Bölümü */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-brand-dark">Hikayemiz</h2>
              <div className="w-16 h-1 bg-brand-gold rounded-full"></div>
              <p className="text-slate-600 leading-relaxed text-lg">
                [Buraya kurs merkezinin kuruluş hikayesi, eğitmenlerin arka planı ve eğitim felsefesi eklenecek. Örneğin; yıllarca yetişkinlere ve çocuklara eğitim vermiş uzmanların, sadece teorik değil, tamamen proje odaklı bir merkez kurma hayali...]
              </p>
              <blockquote className="border-l-4 border-brand-gold pl-6 py-2 mt-8 bg-white p-4 rounded-r-lg shadow-sm font-medium text-slate-800 italic">
                "Teknolojiyi anlamak ve yönetmek artık bir seçenek değil, bir zorunluluk. Biz ezberletmiyoruz, inşa etmeyi öğretiyoruz."
                <span className="block mt-2 text-sm text-slate-500 font-normal">— Kurucu / Eğitmen</span>
              </blockquote>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-96 bg-slate-200">
              <img src="/api/placeholder/800/600" alt="Sınıf içi eğitim görseli" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
  
        {/* Misyon & Vizyon */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-blue text-white p-10 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-brand-gold">Misyonumuz</h3>
              <p className="leading-relaxed opacity-90 text-lg">
                10-15 yaş arasındaki gençleri dijital dünyanın pasif tüketicileri olmaktan çıkarıp, kodlama ve tasarımla kendi projelerini üreten aktif yaratıcılar haline getirmek.
              </p>
            </div>
            <div className="bg-brand-gold text-brand-dark p-10 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
              <p className="leading-relaxed font-medium text-lg">
                Bölgenin en güvenilir ve yenilikçi teknoloji eğitim merkezi olmak; donanımlı, problem çözme yeteneği yüksek ve özgüvenli nesiller yetiştirmek.
              </p>
            </div>
          </div>
        </section>
  
        {/* Değerlerimiz */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Değerlerimiz</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {degerler.map((deger, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm text-center border border-slate-100">
                <h4 className="text-xl font-bold text-brand-dark mb-3">{deger.baslik}</h4>
                <p className="text-slate-600">{deger.metin}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }