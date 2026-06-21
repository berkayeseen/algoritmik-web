// 🔍 SEO — Deneyimler sayfası metadata tanımı
// Client component'lerde metadata export edilemediği için ayrı layout kullanılır.
export const metadata = {
  title: 'Veli Deneyimleri ve Referanslar — Birebir Eğitimde Gerçek Sonuçlar',
  description: 'Algoritmik birebir kodlama eğitiminde velilerimizin deneyimleri, video referansları ve derslerimizden kareler. Gerçek veliler, gerçek sonuçlar.',
  alternates: {
    canonical: 'https://algoritmik.com/deneyimler',
  },
  openGraph: {
    title: 'Veli Deneyimleri ve Referanslar — Algoritmik',
    description: 'Birebir kodlama eğitiminde velilerimizin deneyimleri ve video referansları.',
    url: 'https://algoritmik.com/deneyimler',
  },
};

export default function DeneyimlerLayout({ children }) {
  return children;
}
