import Link from 'next/link';
import { egitimler } from '@/data/egitimler';
import { ArrowRight, Sparkles, UserCog, Route, GraduationCap, MapPin, Monitor, Clock, AlertCircle, CheckCircle2, Percent, Code, MonitorPlay, Focus } from 'lucide-react';

export const metadata = {
  title: 'Yazılım ve Kodlama Eğitimleri — Scratch, Python, C#, Arduino, Unity',
  description: 'Çocuğunuzun yaşına ve ilgi alanına göre kişiselleştirilen birebir kodlama eğitimleri. Scratch, Python, C#, Arduino, HTML/CSS, Unity ve MIT App Inventor. İzmir yüz yüze ve Türkiye geneli online.',
  alternates: {
    canonical: 'https://algoritmik.com/egitimlerimiz',
  },
  openGraph: {
    title: 'Yazılım ve Kodlama Eğitimleri — 10 Farklı Kurs',
    description: 'Çocuğunuzun yaşına ve ilgi alanına göre kişiselleştirilen birebir kodlama eğitimleri.',
    url: 'https://algoritmik.com/egitimlerimiz',
  },
};

export default function EgitimlerListesi() {
  const gruplar = {
    temel: {
      baslik: "Temel Seviye Eğitimler",
      slugs: ["scratch-kodlamaya-giris", "construct-oyun", "mit-app-inventor", "temel-python"]
    },
    orta: {
      baslik: "Orta Seviye Eğitimler",
      slugs: ["html-css-web", "c-sharp-gorsel", "arduino-robotik-giris"]
    },
    ileri: {
      baslik: "İleri Seviye Eğitimler",
      slugs: ["arduino-robotik-projeler", "python-pygame", "unity-oyun-gelistirme"]
    }
  };

  const getEgitimBySlug = (slug) => egitimler.find(e => e.slug === slug);

  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      
      {/* 1. HERO BÖLÜMÜ (Bireysel Eğitmen Vurgusu) */}
      <section className="bg-brand-dark text-white pt-24 pb-40 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-gold text-sm font-semibold mb-8 backdrop-blur-sm">
                <Sparkles size={16} /> Kişiye Özel Rehberlik
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Standartlara <br /> Sığmayan <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
                  Eğitimler.
                </span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Aşağıdaki içerikler sabit bir müfredat değil; öğrencinin yaşına, ilgisine ve hızına göre tamamen <strong className="text-white">benim rehberliğimde</strong> şekillenen bir kodlama serüvenidir.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-200">
                <div className="w-14 h-14 bg-brand-gold/20 rounded-2xl flex items-center justify-center mb-6">
                  <UserCog className="text-brand-gold w-7 h-7" />
                </div>
                <h2 className="text-xl font-bold mb-3 text-white">Uyarlanabilir Zorluk</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  İçerikleri, öğrencinin öğrenme hızına ve potansiyeline göre bizzat ayarlıyorum. Kazanımlar her zaman eksiksizdir, izlenen yol öğrenciye özeldir.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-200">
                <div className="w-14 h-14 bg-brand-gold/20 rounded-2xl flex items-center justify-center mb-6">
                  <Route className="text-brand-gold w-7 h-7" />
                </div>
                <h2 className="text-xl font-bold mb-3 text-white">Esnek Yol Haritası</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  İsterseniz tek bir eğitimi seçerek başlayabilir; isterseniz kolaydan zora doğru planladığım uzun soluklu bir serüvene katılabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EĞİTİM MODELLERİ (Yüz Yüze vs Online) */}
      <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Yüz Yüze Eğitim Kartı */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 flex-shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-dark">Yüz Yüze Eğitim</h2>
                <span className="text-sm font-semibold text-amber-500">Sadece İzmir İçi Merkez İlçeler</span>
              </div>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Öğrencinin kendi çalışma ortamında, odak kaybı yaşamadan yan yana işlediğimiz eğitim modelidir. Donanım ve yazılım eğitimlerinin tamamı bu modelde uygulanabilir.
            </p>
            <ul className="space-y-4 mt-auto">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">İzmir'in ana merkez ilçelerinde (<strong>Balçova, Karabağlar, Buca, Gaziemir, Konak, Karşıyaka, Bayraklı, Bornova</strong>) verilir.</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Derslerimiz net <strong>1 saat 20 dakika</strong> sürer. Kırkıncı dakikada verilen <strong>10 dakikalık mola</strong> ile toplam süre 1.5 saati bulur.</span>
              </li>
              <li className="flex items-start gap-3">
                <Code className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Eğitim sadece dinleme üzerine kurulu değildir. <strong>Öğrenci benimle eş zamanlı kod yazar.</strong> Yanlış yaptığında veya takıldığında anında müdahale ederek doğru mantığı kavramasını sağlarım.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Listelenen eğitimlerin (Arduino donanım dahil) <strong>tamamı</strong> uygulanabilir.</span>
              </li>
            </ul>
          </div>

          {/* Online Eğitim Kartı */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-brand-blue/20 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl z-10">
              Tüm Türkiye
            </div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue flex-shrink-0">
                <Monitor size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-dark">Online Eğitim</h2>
                <span className="text-sm font-semibold text-brand-blue">Uzaktan Etkileşimli</span>
              </div>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed relative z-10">
              Klasik ve yüzeysel online eğitimlerle karıştırılmaması gereken, <strong>tamamen birebir</strong> çalıştığımız modeldir. Öğrenci kendi ekranını paylaşır; ben attığı her adımı anlık olarak takip eder, hataları üzerinde detaylıca konuşur ve sürekli kontrolüm altında ilerlemesini sağlarım.
            </p>
            <ul className="space-y-4 mt-auto relative z-10">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Derslerimiz net <strong>1 saat 20 dakika</strong> sürer. Kırkıncı dakikada verilen <strong>10 dakikalık mola</strong> ile toplam süre 1.5 saati bulur. İlk dersimizde ise gerekli kurulumlar yapılır, bağlantı test edilir ve öğrencinin sürece alışması sağlandığı için bu ilk ders <strong>normalden daha uzun sürer</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <Code className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">Online eğitimde de süreç sadece dinlemekle geçmez. <strong>Öğrenci kendi bilgisayarında kod yazar.</strong> Ben ekranını izler, onu bekler ve takıldığı yerlerde anında müdahale ederim.</span>
              </li>
              <li className="flex items-start gap-3 bg-red-50 p-3 rounded-xl border border-red-100">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-red-800">
                  Sadece fiziksel devre kurmayı gerektirdiği için <strong>Arduino projeleri</strong> online ortamda verilmemektedir.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 2.5. NEDEN BİZİM ONLİNE EĞİTİMİMİZ FARKLI? */}
      <section className="max-w-7xl mx-auto px-4 mb-24 relative z-20">
        <div className="bg-brand-dark rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sıradan Online Eğitimleri Unutun!</h2>
              <div className="w-16 h-1.5 bg-brand-gold rounded-full mb-6"></div>
              <p className="text-slate-300 leading-relaxed text-lg">
                Online eğitimin verimsiz olduğu algısını yıkmak için buradayım. Kalabalık sınıflarda öğrencilerin kaybolduğu, hocanın sadece slayt okuduğu o eski sistemleri tamamen rafa kaldırıyoruz.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-4 text-brand-gold">
                  <MonitorPlay size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Çift Monitör ile Tam Takip</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Derslerimde her zaman çift monitör kullanırım. Bir ekranımda kendi materyallerim açıkken, diğer ekranımdan <strong>saniye saniye sadece öğrencinin bilgisayar ekranını</strong> canlı olarak izlerim.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center mb-4 text-blue-400">
                  <Focus size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Adım Adım Birebir Müdahale</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Öğrenci sınıftaki diğer kişileri beklemek zorunda kalmaz. Kodu yazarken hata yaptığında veya tıkandığında bunu anında görür, bekletmeden müdahale eder ve hatanın mantığını o an birlikte tartışırız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EĞİTİM KARTLARI (Gruplar) */}
      <section className="max-w-7xl mx-auto px-4 relative z-20 space-y-24">
        {Object.entries(gruplar).map(([key, grup]) => (
          <div key={key}>
            <h2 className="text-3xl font-bold text-brand-dark mb-12 flex items-center gap-3 border-b border-slate-200 pb-4">
              <GraduationCap className="text-brand-gold" /> {grup.baslik}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {grup.slugs.map((slug) => {
                const egitim = getEgitimBySlug(slug);
                if (!egitim) return null;
                
                // Arduino dersleri için küçük bir online uyarı rozeti
                const isArduino = slug.includes('arduino');

                return (
                  <div 
                    key={egitim.slug} 
                    className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:border-brand-gold/50 hover:shadow-2xl transition-all duration-200 ease-in-out flex flex-col hover:-translate-y-2 relative"
                    style={{ willChange: 'transform, box-shadow' }}
                  >
                    {/* Arduino Uyarı Rozeti */}
                    {isArduino && (
                      <div className="absolute -top-3 -right-3 bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full border border-red-200 shadow-sm flex items-center gap-1">
                        <AlertCircle size={12} /> Sadece Yüz Yüze
                      </div>
                    )}

                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-brand-blue group-hover:bg-brand-gold group-hover:text-white transition-colors duration-200">
                      <Sparkles size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">{egitim.baslik}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                      {egitim.amaci.substring(0, 100)}...
                    </p>
                    
                    <Link 
                      href={`/egitimlerimiz/${egitim.slug}`} 
                      className="inline-flex items-center justify-center py-4 px-6 bg-brand-gold text-white font-bold rounded-xl hover:bg-brand-dark transition-all duration-200 shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/40"
                    >
                      Eğitimi İncele <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}