import Link from 'next/link';
import {
  Home as HomeIcon, Target, UserCheck, Terminal, Clock, ShieldCheck,
  CalendarDays, Cpu, MapPin, LineChart, ArrowRight, Brain,
  Compass, MessageCircle, Rocket, PlayCircle, MonitorPlay, Focus
} from 'lucide-react';

// 🔍 SEO — Ana sayfa metadata (en kritik sayfa)
export const metadata = {
  title: 'Algoritmik — Çocuklar İçin Birebir Kodlama ve Teknoloji Eğitimi | İzmir & Online',
  description: '9-17 yaş arası çocuklar için evde veya online birebir özel kodlama, yazılım ve robotik eğitimi. Scratch, Python, C#, Arduino, Unity dersleri. İzmir yüz yüze ve Türkiye geneli online eğitim.',
  alternates: {
    canonical: 'https://algoritmik.com',
  },
  openGraph: {
    title: 'Algoritmik — Çocuklar İçin Birebir Kodlama Eğitimi',
    description: '9-17 yaş arası çocuklar için evde veya online birebir kodlama, yazılım ve robotik eğitimi.',
    url: 'https://algoritmik.com',
  },
};

// 🔍 SEO — JSON-LD Yapısal Veri (Google Zengin Sonuçlar / Rich Snippets)
function HomeJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. LocalBusiness — Google Haritalar ve arama sonuçlarında işletme bilgisi
      {
        '@type': 'LocalBusiness',
        '@id': 'https://algoritmik.com/#business',
        name: 'Algoritmik — Birebir Kodlama Eğitimi',
        description: '9-17 yaş arası çocuklar için evde veya online birebir kodlama, yazılım ve robotik eğitimi.',
        url: 'https://algoritmik.com',
        telephone: '+905377848942',
        email: 'merhaba@algoritmik.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'İzmir',
          addressCountry: 'TR',
        },
        areaServed: [
          { '@type': 'City', name: 'İzmir' },
          { '@type': 'Country', name: 'Türkiye' },
        ],
        priceRange: '₺₺',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '20:00',
        },
      },
      // 2. WebSite — Google arama kutusunda site adı görünmesi için
      {
        '@type': 'WebSite',
        '@id': 'https://algoritmik.com/#website',
        url: 'https://algoritmik.com',
        name: 'Algoritmik',
        description: 'Çocuklar için birebir kodlama ve teknoloji eğitimi',
        publisher: { '@id': 'https://algoritmik.com/#business' },
        inLanguage: 'tr-TR',
      },
      // 3. EducationalOrganization — Eğitim kurumu olarak tanınma
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://algoritmik.com/#organization',
        name: 'Algoritmik',
        url: 'https://algoritmik.com',
        description: 'Çocuklar için birebir özel kodlama, yazılım ve robotik eğitimi veren bağımsız eğitim platformu.',
        areaServed: 'Türkiye',
        teaches: ['Yazılım', 'Kodlama', 'Robotik', 'Python', 'Scratch', 'C#', 'Arduino', 'Unity'],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Home() {
  const ozellikler = [
    { icon: HomeIcon, baslik: "Evde veya Online Eğitim", metin: "Trafikte ve yollarda vakit kaybetmeyin! Çocuğunuz ister evinizin güvenli ortamında, ister online platformda eğitim alsın." },
    { icon: Target, baslik: "Birebir Özel Odak", metin: "Kalabalık sınıfların ve standart müfredatların aksine, tamamen çocuğunuzun öğrenme hızına ve ilgisine göre şekillenen dersler." },
    { icon: UserCheck, baslik: "Tek Eğitmen, Güçlü Bağ", metin: "Sürekli değişen kadrolar yerine, öğrencinin gelişimini ilk günden itibaren bizzat takip eden ve veliyle doğrudan iletişim kuran eğitim modeli." },
    { icon: Terminal, baslik: "Uygulamalı Projeler", metin: "Sıkıcı teoriler değil; yaşa uygun dillerle klavye başında ve robotik donanımlarla anında pratiğe dökülen eğlenceli süreçler." },
  ];

  const isleyisAdimlari = [
    { icon: Clock, baslik: "1.5 Saatlik Verimli Seanslar", metin: "Her dersimiz 1 saat 20 dakika aktif konu anlatımı/uygulama ve 10 dakikalık dinlenme molası olmak üzere toplam 1.5 saat sürer." },
    { icon: ShieldCheck, baslik: "Aynı Gün Ücretsiz İptal Esnekliği", metin: "Çocuğunuz o gün kendini iyi hissetmiyorsa veya acil bir işiniz çıkarsa, dersi gün içinde dahi hiçbir kesinti veya ek ücret ödemeden iptal edebilirsiniz." },
    { icon: CalendarDays, baslik: "Bize Özel Esnek Program", metin: "Ders günleri ve saatleri sabit bir kalıba sıkıştırılmaz; çocuğunuzun okul ve diğer sosyal aktivitelerine göre karşılıklı esneklikle belirlenir." },
    { icon: Cpu, baslik: "Teori ve Pratik Dengesi", metin: "Öğrenilen hiçbir teorik bilgi havada kalmaz. Öğrencilerim, gördükleri her yeni konuyu anında klavye başında kodlayarak pratiğe ve projeye dökerler." },
    { icon: MapPin, baslik: "Mekan Bağımsız Eğitim", metin: "Dilerseniz İzmir içindeki adresinizde yüz yüze ev konforunda, dilerseniz Türkiye'nin her yerinden online platformlarda eğitime katılabilirsiniz." },
    { icon: LineChart, baslik: "Konu Sonu Veli Raporlaması", metin: "Anlamlı konu bütünlükleri tamamlandığında velilere, öğrencinin kavrama düzeyi ve gelişimi hakkında net bir ilerleme raporu sunuyorum." }
  ];

  const kayitAdimlari = [
    {
      icon: Compass,
      baslik: "1. Eğitim Felsefemi Keşfedin",
      metin: "Öncelikle web sitemdeki diğer sayfaları inceleyerek eğitim yaklaşımım ve velilerimin tecrübeleri hakkında şeffaf bir şekilde fikir edinebilirsiniz. Eğitim felsefemi görmeniz, kafanızdaki tüm soru işaretlerini giderecektir."
    },
    {
      icon: MessageCircle,
      baslik: "2. Ücretsiz Ön Görüşme",
      metin: "İncelemelerinizden sonra WhatsApp üzerinden bana ulaşarak 40 dakikalık ücretsiz online tanışma görüşmesi talep edebilirsiniz. Bu görüşmede ders işlemeyiz; öğrencinin hedeflerini ve sizin beklentilerinizi konuşuruz."
    },
    {
      icon: Rocket,
      baslik: "3. Rotayı Çizip Başlayalım",
      metin: "Ön görüşme sonucunda mutabık kalırsak, öğrenciye en uygun gün ve saatleri birlikte belirleriz. Ardından evinizin konforunda veya online platformda özel eğitim serüvenimize resmi olarak başlarız."
    }
  ];

  return (
    <main className="flex flex-col w-full bg-brand-bg">
      <HomeJsonLd />
      {/* 1. HERO BÖLÜMÜ */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-slate-100 px-4">
        <div className="max-w-4xl mx-auto text-center z-10">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark tracking-tight mb-6">
            <span className="text-brand-blue">Algoritmik</span> ile <br className="hidden md:block" />
            algoritmanın ritmini yakala!
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            9-17 yaş arası çocuklar için evinizin konforunda veya online olarak sunulan, tamamen öğrenciye özel birebir yazılım ve teknoloji eğitimleri.
          </p>
          <div className="flex justify-center">
            <Link href="/egitimlerimiz" className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-white font-bold rounded-xl shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-all">
              Eğitimlerimi Keşfet
            </Link>
          </div>
        </div>
      </section>

      {/* 2. NEDEN ÖZEL DERS BÖLÜMÜ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Neden Özel Ders?</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>

          {/* Özellikler Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ozellikler.map((ozellik, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-md border-t-4 border-transparent hover:border-brand-blue transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
                <div className="mb-6 bg-slate-50 text-brand-blue w-20 h-20 flex items-center justify-center rounded-full group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-amber-400 transition-all duration-300">
                  <ozellik.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">{ozellik.baslik}</h3>
                <p className="text-slate-600 leading-relaxed">{ozellik.metin}</p>
              </div>
            ))}
          </div>

          {/* DENEYİMLER SAYFASINA YÖNLENDİRME (Video Odaklı) */}
          <div className="mt-16 bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 text-brand-gold/10 transform rotate-12 transition-transform duration-700 group-hover:rotate-0">
              <PlayCircle size={180} />
            </div>

            <div className="mb-8 md:mb-0 md:pr-8 text-center md:text-left relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
                Peki Bu Model Gerçekten İşe Yarıyor mu?
              </h3>
              <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
                Özel dersin teorik faydalarını okudunuz. Şimdi birebir eğitim verdiğim öğrencilerimin ve velilerimin bu süreci nasıl deneyimlediğini doğrudan kendi videolarından izleyin.
              </p>
            </div>

            <div className="flex-shrink-0 relative z-10">
              <Link
                href="/deneyimler"
                className="group/btn flex items-center px-8 py-4 bg-white border-2 border-brand-gold text-brand-dark font-bold rounded-xl hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-md hover:shadow-brand-gold/40"
              >
                <PlayCircle className="mr-2 w-5 h-5 text-amber-500 group-hover/btn:text-white transition-colors" />
                Veli Videolarını İzle
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </section>



      {/* 3. NEDEN KODLAMA BÖLÜMÜ */}
      <section className="py-24 px-4 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Brain className="w-10 h-10 text-amber-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Neden Kodlama Eğitimi?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Kodlama sadece bir beceri değil; çocuğunuzun gelecekte karşılaşacağı problemleri çözme biçimini şekillendiren bir zihin egzersizidir. Bu eğitimi neden alması gerektiğine dair tüm sorularınızın cevabı burada.
          </p>
          <Link href="/neden-yazilim" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-white font-bold rounded-xl hover:scale-105 transition-all text-lg shadow-lg">
            Nedenlerini Keşfedin <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* 4. İŞLEYİŞ ADIMLARI BÖLÜMÜ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Eğitim Süreci Nasıl İşliyor?</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isleyisAdimlari.map((adim, index) => (
              <div key={index} className="group bg-slate-50 p-6 rounded-xl border border-slate-100 hover:bg-blue-50 hover:border-brand-blue/20 transition-all duration-300">
                <div className="mb-5 text-brand-blue bg-white w-14 h-14 flex items-center justify-center rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                  <adim.icon size={28} strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{adim.baslik}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{adim.metin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KAYIT ADIMLARI BÖLÜMÜ */}
      <section className="w-full bg-slate-50 py-24 px-4 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Eğitim Sürecine Nasıl Başlıyoruz?</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Sağlam bir temel atmak ve birbirimizi daha iyi tanımak için kayıt sürecini şeffaf, bilinçli ve adım adım ilerleyen bir yapıya bağladım.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {kayitAdimlari.map((adim, index) => (
              <div key={index} className="relative bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-brand-gold/50 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center z-10 hover:-translate-y-2">

                <div className="absolute top-4 right-6 text-slate-100 font-extrabold text-6xl select-none z-0">
                  {index + 1}
                </div>

                <div className="relative z-10 w-16 h-16 bg-brand-blue/10 text-brand-blue flex items-center justify-center rounded-2xl mb-6">
                  <adim.icon size={32} strokeWidth={2} />
                </div>

                <h3 className="relative z-10 text-xl font-bold text-brand-dark mb-4">{adim.baslik}</h3>
                <p className="relative z-10 text-slate-600 leading-relaxed text-sm">{adim.metin}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="https://wa.me/905377848942?text=Merhaba,%20sitenizi%20inceledim%20ve%2040%20dakikalık%20ücretsiz%20online%20tanışma%20görüşmesi%20için%20talep%20oluşturmak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg shadow-[#25D366]/30 hover:bg-[#128C7E] hover:scale-105 transition-all text-lg"
            >
              <MessageCircle className="mr-3 w-6 h-6" /> İnceledim, Görüşme Talep Ediyorum
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}