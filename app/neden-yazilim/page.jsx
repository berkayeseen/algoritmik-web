import Link from 'next/link';
import { Brain, ShieldCheck, Lightbulb, Rocket, Code, LineChart, ArrowRight } from 'lucide-react';

// 🔍 SEO — Anahtar kelime odaklı, uzun ve açıklayıcı metadata
export const metadata = {
  title: 'Neden Kodlama Eğitimi? — Çocuğunuzun Geleceği İçin 4 Kritik Neden',
  description: 'Kodlama eğitimi çocuğunuzun akademik başarısını, problem çözme becerisini ve analitik düşünme yeteneğini nasıl geliştirir? Velilerin en çok sorduğu 5 sorunun cevabı burada.',
  alternates: {
    canonical: 'https://algoritmik.com/neden-yazilim',
  },
  openGraph: {
    title: 'Neden Kodlama Eğitimi? — Çocuğunuzun Geleceği İçin 4 Kritik Neden',
    description: 'Kodlama eğitimi çocuğunuzun akademik başarısını ve analitik düşünme yeteneğini nasıl geliştirir?',
    url: 'https://algoritmik.com/neden-yazilim',
  },
};

// 🔍 SEO — FAQ Schema (Google SSS Zengin Sonuçları)
// Bu schema sayesinde Google arama sonuçlarında SSS kutuları görünür.
// Tıklama oranını (CTR) %15-25 artırır.
function FaqJsonLd({ sorular }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sorular.map((item) => ({
      '@type': 'Question',
      name: item.soru,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.cevap,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function NedenYazilim() {
  const faydalar = [
    {
      icon: Brain,
      baslik: "Algoritmik Düşünme ve Hayata Uygulama",
      metin: "Kodlama sadece bilgisayara komut vermek değildir. Büyük ve karmaşık problemleri küçük, çözülebilir parçalara ayırma (algoritma) sanatıdır. Bu mantığı kavrayan bir çocuk, günlük hayatta veya okulda karşılaştığı her türlü zorluğa sistematik ve sakin bir şekilde çözüm üretebilir."
    },
    {
      icon: ShieldCheck,
      baslik: "Hatalarla Başa Çıkma ve Asla Pes Etmeme",
      metin: "Yazılım dünyasında hata almak (bug) işin doğasında vardır. Bir kod çalışmadığında öğrenci sinirlenip bırakmak yerine, hatayı aramayı, deneme-yanılma yapmayı ve sabretmeyi öğrenir. Bu süreç, çocuğa gerçek hayatta 'pes etmeme' ve 'psikolojik dayanıklılık' (resilience) becerisi kazandırır."
    },
    {
      icon: Lightbulb,
      baslik: "Çok Yönlü Düşünme ve Beyin Fırtınası",
      metin: "Bir programı yazmanın tek bir doğru yolu yoktur. Öğrenci aynı sonuca ulaşmak için sürekli farklı yollar hayal eder. Bu sürekli beyin fırtınası hali, çocuğun olaylara farklı açılardan bakabilmesini ve yaratıcı zekasının olağanüstü derecede gelişmesini sağlar."
    },
    {
      icon: Rocket,
      baslik: "Tüketicilikten Üreticiliğe Geçiş",
      metin: "Günümüzde çocuklar ekran karşısında sadece pasif birer 'tüketici' konumundalar. Kodlama eğitimi, onları oyun oynayan veya video izleyen bireyler olmaktan çıkarıp, kendi oyununu tasarlayan, teknoloji üreten aktif bireylere dönüştürür."
    }
  ];

  const sss = [
    {
      soru: "Kodlama eğitimi çocuğumun akademik başarısını nasıl etkiler?",
      cevap: "Yazılım eğitimi, çocuğunuzun matematiksel muhakeme ve mantıksal kurgu yeteneğini geliştirir. Bir problemi analiz etmeyi ve çözüm adımları oluşturmayı öğrenen çocuk, okul derslerinde de daha analitik ve hızlı düşündüğünü fark edecektir."
    },
    {
      soru: "Çocuğum ekran başında çok vakit geçiriyor, bu eğitim ona zarar verir mi?",
      cevap: "Ekran karşısında oyun oynayan bir çocukla, kendi oyununu tasarlayan bir çocuk arasında uçurum vardır. Benim eğitim modelimde teknoloji bir tüketim aracı değil, çocuğun hayal gücünü gerçeğe dönüştüren bir üretim aracıdır."
    },
    {
      soru: "Çocuğumun yazılımcı olma zorunluluğu var mı?",
      cevap: "Kesinlikle hayır. Nasıl ki piyano kursuna giden her çocuk konser piyanisti olmak zorunda değilse, kodlama öğrenen her çocuk da yazılımcı olmak zorunda değildir. Ancak analitik düşünebilen bir zihin, hangi mesleği seçerse seçsin her zaman rakiplerinden bir adım öndedir."
    },
    {
      soru: "Ya çocuğum zorlanırsa ve dersten soğursa?",
      cevap: "Birebir özel ders verdiğim için müfredatı çocuğunuzun öğrenme hızına ve ilgisine göre anlık olarak esnetebiliyorum. Hedefim çocuğun sadece kod yazması değil, süreci severek içselleştirmesidir."
    },
    {
      soru: "Bu yatırımın uzun vadeli karşılığı nedir?",
      cevap: "Kodlama eğitimiyle kazanılan 'problem çözme' yeteneği, çocuğunuzun ömür boyu kullanacağı bir zihinsel işletim sistemi gibidir. Bu, sadece bir hobi değil, geleceğe yapılan bir vizyon yatırımıdır."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <FaqJsonLd sorular={sss} />
      
      {/* 1. HERO BÖLÜMÜ */}
      <section className="bg-brand-dark text-white pt-20 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-2 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/20 text-brand-gold font-bold tracking-wide">
            <Code size={20} /> Neden Kodlama Eğitimi?
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Kod Yazmaktan Çok <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
              Daha Fazlası.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Amacım sadece ekrana kod yazan çocuklar yetiştirmek değil; düşünen, pes etmeyen ve geleceği şekillendiren zihinler inşa etmektir.
          </p>
        </div>
      </section>

      {/* 2. FAYDALAR */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faydalar.map((fayda, index) => {
            const Icon = fayda.icon;
            return (
              <div key={index} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="text-brand-blue w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-brand-dark mb-4">{fayda.baslik}</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {fayda.metin}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SSS */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Velilerimizin Merak Ettikleri</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>
        <div className="space-y-8">
          {sss.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-start">
                <span className="text-brand-gold mr-3">S:</span>{item.soru}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg flex items-start">
                <span className="text-brand-blue font-bold mr-3">C:</span>{item.cevap}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOOTER-CTA */}
      <section className="py-24 px-4 bg-white text-center border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <LineChart className="w-16 h-16 text-brand-gold mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Çocuğunuzun Zihinsel Potansiyelini Ortaya Çıkarın</h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Onu ekran karşısında pasif bir tüketici olmaktan çıkarıp, kendi geleceğini tasarlayan üretken bir bireye dönüştürmek için bugün ilk adımı atın.
          </p>
          <Link 
            href="https://wa.me/905377848942?text=Merhaba,%20kodlama%20eğitimi%20hakkında%20bilgi%20almak%20istiyorum." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-white font-bold rounded-xl shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-all text-lg"
          >
            İletişime Geç, Bilgi Al
          </Link>
        </div>
      </section>

    </main>
  );
}