import { egitimler } from '@/data/egitimler';

// 🔍 SEO — Dinamik sitemap.xml oluşturma
// Tüm sayfaların arama motorları tarafından keşfedilmesini sağlar.
// Eğitim detay sayfaları otomatik olarak data/egitimler.js'ten çekilir.
export default function sitemap() {
  const baseUrl = 'https://algoritmik.com';

  // Statik sayfalar
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/egitimlerimiz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/deneyimler`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/neden-yazilim`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ben-kimim`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Dinamik eğitim detay sayfaları (data/egitimler.js'ten otomatik oluşturulur)
  const egitimPages = egitimler.map((egitim) => ({
    url: `${baseUrl}/egitimlerimiz/${egitim.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...egitimPages];
}
