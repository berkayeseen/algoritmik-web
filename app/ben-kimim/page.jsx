import Image from 'next/image';
import Link from 'next/link';
import { User, MessageCircle, Target, Code, HeartHandshake } from 'lucide-react';

export const metadata = {
  title: 'Eğitmen Profili — Çocuğunuzun Teknoloji Rehberi',
  description: 'Çocuğunuzun öğrenme hızına ve ilgisine özel birebir eğitim modeli sunan teknoloji rehberinizle tanışın.',
  alternates: {
    canonical: 'https://algoritmik.com/ben-kimim',
  },
  openGraph: {
    title: 'Eğitmen Profili — Çocuğunuzun Teknoloji Rehberi',
    description: 'Çocuğunuzun potansiyeline özel birebir eğitim modeli.',
    url: 'https://algoritmik.com/ben-kimim',
  },
};

// 🔍 SEO — Person Schema (Kişi Şeması)
// Google arama sonuçlarında eğitmen kimliğini yapısal olarak tanımlar.
function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['ProfilePage', 'Person'],
    name: 'Berkay Esen',
    jobTitle: 'Yazılım ve Teknoloji Eğitmeni',
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'Algoritmik',
    },
    url: 'https://algoritmik.com/ben-kimim',
    image: 'https://algoritmik.com/og-image.jpg',
    description: '10-15 yaş arası çocuklar için özel yazılım, kodlama ve robotik mentörü.',
    knowsAbout: ['Python', 'Scratch', 'Robotik', 'Yazılım', 'C#', 'Eğitim'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function BenKimim() {
  const degerler = [
    { 
      icon: Target, 
      baslik: "İlgi Alanlarından Beslenen Bir Müfredat", 
      metin: "Öğrenme sürecini çocuğunuzun sevdiği oyunlar ve merak ettiği konular üzerine inşa ediyoruz. Önceden ezberlenmiş kalıplar yerine, onun hızına ve ilgisine saygı duyan esnek bir rotada ilerliyoruz." 
    },
    { 
      icon: Code, 
      baslik: "Teori Değil, Pratik Üzerinden Öğrenme", 
      metin: "İlk dersten itibaren sadece dinleyen değil, klavyeye dokunan ve hata yapmaktan çekinmeyen bir yaklaşım benimsiyoruz. Kendi projelerimizi üretirken yazılımın mantığını ezberlemeden, yaşayarak kavrıyoruz." 
    },
    { 
      icon: HeartHandshake, 
      baslik: "Açık İletişim ve Sürekli Geri Bildirim", 
      metin: "Eğitim sürecini kapalı kapılar ardında bırakmıyoruz. 'Bugün neleri başardık, nerelerde zorlandık?' gibi süreçleri karmaşık raporlarla değil; sizinle her dersin sonunda samimi, anlaşılır ve şeffaf bir dille paylaşıyoruz." 
    },
  ];

  return (
    <main className="min-h-screen bg-brand-bg pb-20">
      <PersonJsonLd />
      
      {/* 1. HERO BÖLÜMÜ */}
      <section className="relative bg-brand-dark text-white pt-20 pb-32 px-4 text-center overflow-hidden">
        {/* Dekoratif Arka Plan Efektleri */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-blue/30 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-2 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/20 text-brand-gold font-bold tracking-wide">
            <User size={20} /> Eğitmeninizle Tanışın
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Çocuğunuzun Teknoloji <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
              Rehberiyle Tanışın.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            Amacım sadece kod yazmayı öğretmek değil; çocuğunuzun potansiyelini keşfetmesini, zorluklar karşısında pes etmemesini ve kendi projelerini üreterek özgüven kazanmasını sağlamak.
          </p>
        </div>
      </section>

      {/* 2. EĞİTMEN PROFİLİ (Kısa ve Öz Hikaye) */}
      <section className="max-w-6xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Görsel Alanı */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/20 to-brand-blue/10 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 ring-1 ring-slate-200">
                <Image 
                  src="/profil.jpeg" 
                  alt="Berkay Esen - Eğitmen Portresi" 
                  width={800}
                  height={1000}
                  priority={true}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-110"
                />
              </div>
            </div>

            {/* İçerik Alanı */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-brand-dark tracking-tight">Eğitim ve Kariyer Yolculuğum</h2>
                <div className="w-16 h-1.5 bg-brand-gold rounded-full mt-4"></div>
              </div>
              
              <div className="text-lg text-slate-600 leading-relaxed space-y-4">
                <p>
                  Merhaba ben <strong>Berkay Esen</strong>. Teknolojiye olan tutkum lise yıllarında, 2019 yılında <strong>Buca Zübeyde Hanım Mesleki ve Teknik Anadolu Lisesi</strong>'nde başladı. Robotik çalışmalarına ve kodlamaya ilk adımlarımı burada atarken, aynı zamanda okulun Robotik Kulübü Başkanlığını üstlendim ve çeşitli web projeleri geliştirdim.
                </p>
                <p>
                  Öğrencilik dönemimde <strong>Karabük Üniversitesi, Yıldız Teknik Üniversitesi, İYTE</strong> ve MEB'in düzenlediği <strong>Uluslararası Sivas Robotik Yarışması</strong> gibi birçok prestijli organizasyonda yarışarak sahada aktif tecrübe kazandım.
                </p>
                <p>
                  Akademik eğitimimde ilk olarak <strong>Yaşar Üniversitesi Bilgisayar Programcılığı</strong> bölümünden mezun oldum. Ardından DGS ile yine <strong>Yaşar Üniversitesi Yazılım Mühendisliği</strong> bölümüne yerleşerek mühendislik eğitimime adım attım.
                </p>
                <p>
                  Son 3 yıl boyunca özel bir kurumda çocuklar ve yetişkinlerle kodlama, tasarım ve robotik üzerine profesyonel olarak çalışma fırsatım oldu. Bu süreçte yüzlerce öğrencinin eğitim hayatına dokunurken, son 2 yılda da onlarca öğrenciyle birebir özel dersler yaparak onların bireysel gelişimlerine yakından rehberlik ettim.
                </p>
                <p className="font-semibold text-brand-blue pt-2 text-xl">
                  Şimdi ise tüm bu birikimimi <span className="text-brand-gold">Algoritmik</span> çatısı altında, tamamen çocuğunuzun potansiyeline odaklanan özel bir eğitim modeliyle sizlerle buluşturuyorum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EĞİTİM DEĞERLERİM (Sadeleştirilmiş Kartlar) */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Birlikte Nasıl Bir Yol İzliyoruz?</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {degerler.map((deger, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 rounded-3xl shadow-md border border-slate-100 hover:border-brand-blue/30 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group"
            >
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                <deger.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors">{deger.baslik}</h3>
              <p className="text-slate-600 leading-relaxed">{deger.metin}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOOTER-CTA (Harekete Geçirici Mesaj) */}
      <section className="max-w-4xl mx-auto px-4 pb-12 text-center">
        <div className="bg-brand-dark rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-brand-blue to-white pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Önce Tanışalım</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Çocuğunuzun geleceğine birlikte yön vermek için ilk adımı atalım. Beklentilerinizi konuşmak için 40 dakikalık ücretsiz tanışma görüşmesi talep edebilirsiniz.
            </p>
            <Link 
              href="https://wa.me/905377848942?text=Merhaba,%20sitenizi%20inceledim%20ve%20tanışma%20görüşmesi%20talep%20etmek%20istiyorum." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg shadow-[#25D366]/30 hover:bg-[#128C7E] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#25D366]/50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] text-lg"
            >
              <MessageCircle className="mr-3 w-6 h-6" /> WhatsApp&apos;tan İletişime Geç
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}