"use client";
import { useState } from 'react';
import { Camera, PlayCircle, Quote, ShieldCheck, X, Home, TrendingUp, UserCheck, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function DeneyimlerPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  const galeriFotograflari = [
    { url: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=800&q=80", etiket: "Evde Birebir Eğitim" },
    { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", etiket: "Online Kodlama" },
    { url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80", etiket: "Odaklanma Anı" },
    { url: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80", etiket: "İlk Proje Heyecanı" },
  ];

  const veliVideolari = [
    {
      id: 1,
      isim: "Ayşe Y. - Veli",
      yorum: "Evimize bir eğitmen kabul etmek başta bizi düşündürmüştü ama ilk tanışma dersinden itibaren ne kadar profesyonel ve güvenilir bir eğitim olduğunu gördük.",
      thumbnail: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      id: 2,
      isim: "Murat K. - Veli",
      yorum: "Oğlumun dikkatini toplamak zordur fakat birebir ilginiz ve online dersteki enerjiniz sayesinde artık ders günlerini iple çekiyor.",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      id: 3,
      isim: "Elif S. - Veli",
      yorum: "Kendi hızında öğrenmesi, takıldığı yerde anında destek alabilmesi özel dersin en büyük avantajı oldu. Gelişimi harika.",
      thumbnail: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
  ];

  // WhatsApp Numarası (Kendi numaranı yazmalısın)
  const whatsappNumber = "905555555555"; 
  const whatsappMessage = "Merhaba, 40 dakikalık ücretsiz online tanışma görüşmesi hakkında bilgi almak istiyorum.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      
      {/* 1. HERO BÖLÜMÜ */}
      <section className="bg-brand-dark text-white pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/30 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-gold text-sm font-semibold mb-8 backdrop-blur-sm">
            <UserCheck size={16} /> Birebir Mentörlük Deneyimi
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Problemsiz, Şeffaf ve <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
              Güvenilir Eğitim.
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Çocuğunuzun teknoloji eğitimini şansa bırakmayın. Evinizin konforunda veya online ortamda, sürekli iletişim halinde olduğumuz ve sadece çocuğunuzun potansiyeline odaklanan özel bir serüven.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/10">
              <ShieldCheck className="text-brand-gold" size={24} />
              <span className="font-semibold text-sm md:text-base">Referanslı Eğitmen</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/10">
              <Home className="text-brand-gold" size={24} />
              <span className="font-semibold text-sm md:text-base">Evde veya Online</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/10">
              <TrendingUp className="text-brand-gold" size={24} />
              <span className="font-semibold text-sm md:text-base">Şeffaf Gelişim Takibi</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VELİ VİDEOLARI */}
      <section className="max-w-7xl mx-auto px-4 pt-20 relative z-20">
        <div className="mb-12 text-center md:text-left flex items-center gap-3 justify-center md:justify-start">
          <Quote className="text-brand-gold" size={32} />
          <h2 className="text-3xl font-bold text-brand-dark">Velilerimiz Ne Diyor?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {veliVideolari.map((video) => (
            <div 
              key={video.id} 
              className="group bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:border-brand-gold/50 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col hover:-translate-y-2"
              style={{ willChange: 'transform, box-shadow' }}
            >
              <div 
                className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-800 mb-6 cursor-pointer"
                onClick={() => setActiveVideo(video.videoUrl)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.isim} 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors duration-300">
                  <PlayCircle className="text-white w-16 h-16 drop-shadow-lg group-hover:text-brand-gold group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{video.yorum}"</p>
                <h4 className="font-bold text-brand-dark flex items-center gap-2 border-t border-slate-100 pt-4">
                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-xs">
                    {video.isim.charAt(0)}
                  </div>
                  {video.isim}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DERSLERİMİZDEN KARELER */}
      <section className="max-w-7xl mx-auto px-4 mt-32 relative z-20">
        <div className="mb-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 text-brand-blue">
            <Camera size={32} />
          </div>
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Derslerimizden Kareler</h2>
          <p className="text-slate-500 max-w-2xl text-lg">
            Öğrencimin evi sınıfımız, ekranı ise tahtamızdır. Kendi ortamında, dış etkenlerden uzak ve tamamen hedefe odaklı çalışma anlarımız.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galeriFotograflari.map((foto, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${index === 0 || index === 3 ? 'md:col-span-2 aspect-[2/1]' : 'col-span-2 md:col-span-1 aspect-square'}`}
            >
              <img 
                src={foto.url} 
                alt={foto.etiket} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-gold font-bold text-sm md:text-base">{foto.etiket}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. GÜVEN VE TANIŞMA ÇAĞRISI (CTA) */}
      <section className="max-w-4xl mx-auto px-4 mt-32 relative z-20">
        <div className="bg-brand-dark rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1000&q=80')] opacity-5 bg-cover bg-center"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Önce Tanışalım, Beklentilerinizi Konuşalım.</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Evinize bir eğitmen davet etmenin veya eğitime başlamanın güven gerektirdiğini biliyorum. Bu yüzden ilk adımımız <span className="text-brand-gold font-bold">40 dakikalık ücretsiz online ön görüşmedir.</span> Bu görüşmede ders işlemeyiz; çocuğunuzun ilgi alanlarını keşfeder, sizin hedeflerinizi dinler ve karşılıklı uyumumuzu değerlendiririz.
            </p>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-4 px-8 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#128C7E] transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:-translate-y-1"
            >
              <MessageCircle className="mr-3 w-6 h-6" /> WhatsApp'tan Görüşme Talep Et
            </a>
          </div>
        </div>
      </section>

      {/* VİDEO MODAL */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          {/* Her koşulda görünen sabit kapatma butonu */}
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] w-12 h-12 bg-white/10 hover:bg-red-500 border border-white/20 rounded-full flex items-center justify-center text-white transition-colors shadow-2xl backdrop-blur-sm"
            title="Kapat"
          >
            <X size={28} strokeWidth={2.5} />
          </button>

          <div 
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20"
            onClick={(e) => e.stopPropagation()} 
          >
            <video 
              src={activeVideo} 
              controls 
              autoPlay 
              className="w-full aspect-video outline-none"
            >
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
          </div>
        </div>
      )}

    </main>
  );
}