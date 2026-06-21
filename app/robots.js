// 🔍 SEO — robots.txt yapılandırması
// Arama motorlarına hangi sayfaların taranacağını ve sitemap konumunu bildirir.
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://algoritmik.com/sitemap.xml',
  };
}
