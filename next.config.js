/** @type {import('next').NextConfig} */
const nextConfig = {
  // ──────────────────────────────────────────────────────
  // 🛡️ HTTP GÜVENLİK BAŞLIKLARI + ⚡ PERFORMANS ÖNBELLEĞİ
  // ──────────────────────────────────────────────────────
  async headers() {
    const isDev = process.env.NODE_ENV === 'development';

    // Tüm sayfalara uygulanan güvenlik başlıkları
    const securityHeaders = [
      // XSS Koruması — Hangi kaynakların yüklenebileceğini kısıtlar
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self'",
          `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""}`.trim(),
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "font-src 'self' https://fonts.gstatic.com",
          "img-src 'self' data: blob: https://images.unsplash.com https://*.unsplash.com https://img.youtube.com",
          "media-src 'self' https://www.w3schools.com",
          "frame-src 'self' https://www.youtube.com",
          "connect-src 'self'",
          "frame-ancestors 'none'",
          "base-uri 'self'",
          "form-action 'self'",
          "object-src 'none'",
          "upgrade-insecure-requests",
        ].join('; '),
      },
      // Clickjacking Koruması — Sitenin iframe içinde gösterilmesini engeller
      {
        key: 'X-Frame-Options',
        value: 'DENY',
      },
      // MIME Sniffing Koruması — Tarayıcının dosya türünü tahmin etmesini engeller
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      // Referrer Politikası — Hangi bilgilerin dış sitelere gönderileceğini kontrol eder
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
      },
      // HSTS — Tarayıcıyı daima HTTPS kullanmaya zorlar (2 yıl)
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      },
      // İzin Politikası — Gereksiz tarayıcı API'lerini kapatır (FLoC dahil)
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
      },
      // DNS Prefetch — Harici kaynaklar için DNS çözümlemeyi hızlandırır
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
      },
    ];

    return [
      // Tüm sayfalara güvenlik başlıkları
      {
        source: '/(.*)',
        headers: securityHeaders.map(h => {
          if (h.key === 'Content-Security-Policy' && process.env.NODE_ENV === 'development') {
            // Dev ortamında HMR ve HTTP çalışması için upgrade-insecure-requests'i kaldırıyoruz
            // ve ws/wss bağlantılarına izin veriyoruz.
            h.value = h.value.replace('upgrade-insecure-requests', '');
            h.value = h.value.replace("connect-src 'self'", "connect-src 'self' ws: wss:");
          }
          return h;
        }),
      },
      // ⚡ Statik varlıklar (JS, CSS, görseller, fontlar) için agresif önbellek
      // Tarayıcının bu dosyaları 1 yıl boyunca yeniden indirmesini engeller
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Görseller için önbellek (1 hafta)
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },

  // ──────────────────────────────────────────────────────
  // 🖼️ UZAK GÖRSEL KAYNAKLARI (next/image için)
  // Sadece güvenilen kaynaklardan görsel yüklenmesine izin verir.
  // İzin verilmeyen kaynaklar otomatik olarak reddedilir.
  // ──────────────────────────────────────────────────────
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
    // WebP/AVIF formatlarına otomatik dönüşüm (LCP iyileştirmesi)
    formats: ['image/avif', 'image/webp'],
  },

  // 🛡️ Powered by başlığını gizle — Saldırganlara teknoloji bilgisi vermez
  poweredByHeader: false,

  // ⚡ React Strict Mode — Geliştirme aşamasında potansiyel sorunları erken yakalar
  reactStrictMode: true,

  // ⚡ Sıkıştırma — gzip/brotli ile çıktı boyutunu küçültür
  compress: true,
};

module.exports = nextConfig;
