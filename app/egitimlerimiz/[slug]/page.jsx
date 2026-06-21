import { notFound } from 'next/navigation';
import { egitimler } from '@/data/egitimler';
import { CheckCircle2, BookOpenText, Target, LayoutDashboard, AlertCircle } from 'lucide-react';

// 🔍 SEO — Dinamik metadata oluşturma
// Her eğitim sayfası için benzersiz title, description ve canonical URL üretir.
// Google her eğitimi ayrı bir sayfa olarak indeksler.
export async function generateMetadata({ params }) {
  const egitim = egitimler.find((e) => e.slug === params.slug);
  if (!egitim) return {};

  return {
    title: `${egitim.baslik} — Birebir Özel Eğitim`,
    description: `${egitim.amaci} ${egitim.baslik} eğitimi hakkında detaylı bilgi, müfredat ve kazanımlar.`,
    alternates: {
      canonical: `https://algoritmik.com/egitimlerimiz/${egitim.slug}`,
    },
    openGraph: {
      title: `${egitim.baslik} | Algoritmik Eğitim`,
      description: egitim.amaci,
      url: `https://algoritmik.com/egitimlerimiz/${egitim.slug}`,
    },
  };
}

// 🔍 SEO — Build anında tüm eğitim slug'larını statik olarak üretir.
// Sayfa ilk ziyarette anında yüklenir (SSG).
export async function generateStaticParams() {
  return egitimler.map((egitim) => ({
    slug: egitim.slug,
  }));
}

// 🔍 SEO — Course Schema (JSON-LD)
// Google'da "Kurs" zengin sonuçları olarak görünmesini sağlar.
function CourseJsonLd({ egitim }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: egitim.baslik,
    description: egitim.amaci,
    url: `https://algoritmik.com/egitimlerimiz/${egitim.slug}`,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Algoritmik',
      url: 'https://algoritmik.com',
    },
    educationalLevel: egitim.onKosu ? 'İleri Seviye' : 'Başlangıç',
    teaches: egitim.konular.map((k) => k.baslik).join(', '),
    inLanguage: 'tr',
    courseMode: ['Yüz yüze', 'Online'],
    // BreadcrumbList — Google arama sonuçlarında navigasyon yolu gösterir
    hasPart: egitim.konular.map((konu) => ({
      '@type': 'CourseModule',
      name: konu.baslik,
      description: konu.detay,
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: 'https://algoritmik.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Eğitimlerimiz',
        item: 'https://algoritmik.com/egitimlerimiz',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: egitim.baslik,
        item: `https://algoritmik.com/egitimlerimiz/${egitim.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}

export default function EgitimDetay({ params }) {
  const egitim = egitimler.find((e) => e.slug === params.slug);
  if (!egitim) notFound();

  return (
    <main className="min-h-screen bg-white">
      <CourseJsonLd egitim={egitim} />

      {/* 1. HERO BÖLÜMÜ */}
      <section className="py-20 bg-brand-dark text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-400 font-bold tracking-widest uppercase text-xs mb-3 block">Eğitim Detayı</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">{egitim.baslik}</h1>
          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* BİLGİLENDİRME KUTULARI */}
      {(egitim.ozelNot || egitim.onKosu) && (
        <section className="px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-4">
            
            {/* Başlangıç Seviyesi Notu (Mavi) */}
            {egitim.ozelNot && (
              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 flex items-center gap-4">
                <div className="bg-sky-100 p-2 rounded-full flex-shrink-0">
                  <LayoutDashboard className="text-sky-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sky-900">Eğitim Başlangıç Bilgisi</h4>
                  <p className="text-sky-800 text-sm">{egitim.ozelNot}</p>
                </div>
              </div>
            )}

            {/* Ön Koşul Uyarısı (Sarı) */}
            {egitim.onKosu && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-center gap-4">
                <div className="bg-amber-100 p-2 rounded-full flex-shrink-0">
                  <AlertCircle className="text-amber-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-amber-900">Eğitim Ön Koşulu</h4>
                  <p className="text-amber-800 text-sm">
                    Bu eğitime başlamadan önce <strong>{egitim.onKosu}</strong> eğitimini tamamlamış olmanız önerilir.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 2. GİRİŞ BÖLÜMÜ */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 text-amber-500">
                <Target size={22} />
                <h2 className="text-lg font-bold text-brand-dark uppercase tracking-wide">Eğitimin Amacı</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">{egitim.amaci}</p>
            </div>
            <div className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 text-amber-500">
                <BookOpenText size={22} />
                <h2 className="text-lg font-bold text-brand-dark uppercase tracking-wide">Eğitim Hakkında</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">{egitim.uzunAciklama}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MÜFREDAT & KAZANIMLAR */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12 text-brand-dark justify-center">
            <LayoutDashboard size={24} className="text-amber-500" />
            <h2 className="text-2xl font-bold">Müfredat ve Kazanımlar</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-bold text-lg mb-6 text-brand-blue border-b border-blue-100 pb-2">Konu Başlıkları</h3>
              <div className="space-y-6">
                {egitim.konular.map((konu, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-dark">{konu.baslik}</h4>
                      <p className="text-sm text-slate-600">{konu.detay}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 text-brand-blue border-b border-blue-100 pb-2">Kazanımlar</h3>
              <div className="space-y-4">
                {egitim.kazanimlar.map((kazanim, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="text-amber-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium">{kazanim}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}