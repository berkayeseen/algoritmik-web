export const egitimler = [
  {
    id: 0,
    slug: "scratch-kodlamaya-giris",
    baslik: "Scratch ile Kodlamaya Giriş",
    ozelNot: "Bu eğitim, tek başına satılmaz. Bilgisayar kullanımı konusunda henüz yeni olan öğrencilerimiz için tasarlanmış bir başlangıç eğitimidir. Uzun eğitimlerde ilk 4 hafta alışma ve mantığı kavramak için öğrenci çok temel seviyedeyse ve yaşı küçükse yapılır. Öğretmenlerimizin uygun görmesi halinde, kodlama yolculuğuna bu eğitimden başlanması tavsiye edilir.",
    amaci: "Kodlamanın temel mantığını (sıralama, koşullar, döngüler) karmaşık sözdizimi engeline takılmadan, eğlenceli ve interaktif bir görsel arayüzle keşfetmek.",
    uzunAciklama: "Kodlama dünyasına ilk adımınızı atıyoruz! Scratch, bilgisayarı henüz yeni keşfeden öğrencilerimiz için tasarlanmış en ideal başlangıç platformudur. Burası, gelecekteki profesyonel yazılım yolculuğunun temelidir.",
    konular: [
      { baslik: "Arayüz ve Temel Kavramlar", detay: "Sahne, Kukla ve blokların çalışma prensibi." },
      { baslik: "Sıralı Algoritmalar", detay: "Kodların yukarıdan aşağıya çalışma mantığı." },
      { baslik: "Döngüler ve Tekrar", detay: "İşleri kolaylaştıran tekrar blokları." },
      { baslik: "Koşullu Yapılar", detay: "Olaylara göre karakterin karar vermesi." },
      { baslik: "Etkileşim ve Olaylar", detay: "Tuşlara ve tıklamalara yanıt verme." },
      { baslik: "Küçük Uygulamalar", detay: "Basit animasyonlar ve oyun tasarımları." }
    ],
    kazanimlar: [
      "Algoritmik düşünme becerisini görselleştirerek kazanır.",
      "Kendi kurguladığı hikayeyi dijital ortama aktarabilir.",
      "Döngüler ve koşullu ifadeler gibi temel yapıları kavrar.",
      "Dijital tasarımın temel öğelerini bir araya getirmeyi öğrenir.",
      "Kodlama dünyasına karşı oluşan önyargıları kırarak özgüven kazanır."
    ]
  },
  {
    id: 1,
    slug: "temel-python",
    baslik: "Temel Python Programlamaya Giriş",
    amaci: "Ezbere dayalı değil; kurgu yapabilen, yazdığı kodun mantığını kavrayan ve sistemli düşünebilen bireyler yetiştirmeyi hedefliyoruz.",
    uzunAciklama: "Python, dünyanın en popüler ve modern programlama dillerinden biridir. Bu eğitim, çocuğunuzun teknolojiyle kurduğu ilişkiyi 'kullanıcı' seviyesinden 'geliştirici' seviyesine taşıyacak teknik bir temel sunar.",
    konular: [
      { baslik: "Algoritmik Temeller", detay: "Problem çözme sanatı ve mantıksal akış." },
      { baslik: "Değişkenler ve Veri Yapıları", detay: "Bilgiyi hafızada yönetme." },
      { baslik: "Koşullu İfadeler", detay: "Karar mekanizmaları ve mantık." },
      { baslik: "Döngüler", detay: "Tekrarlayan işleri otomatize etme." },
      { baslik: "Fonksiyonlar", detay: "Modüler kod blokları yazma." },
      { baslik: "Listeler ve Veri Grupları", detay: "Veri organizasyonu ve işleme." }
    ],
    kazanimlar: [
      "Python sözdizimini (syntax) kullanarak temel seviyede kod yazabilir.",
      "Karmaşık problemleri küçük, yönetilebilir algoritmik parçalara bölebilir.",
      "Yazılı bir kodu analiz edip işlevini kavrayarak 'kod okuma' yeteneğini geliştirebilir.",
      "Mantıksal hata ayıklama disiplini ile kendi programındaki hataları bulabilir.",
      "İleri seviye yapay zeka ve veri bilimi projeleri için sağlam bir temel oluşturur."
    ]
  },
  {
    id: 2,
    slug: "arduino-robotik-giris",
    baslik: "Arduino ile Robotik Dünyasına Giriş",
    amaci: "Sadece kod yazmakla kalmıyor; elektronik devreleri kurguluyor, sensörleri yönetiyor ve fiziksel dünyayı kodlarımızla kontrol altına alıyoruz.",
    uzunAciklama: "Arduino, dijital dünyayı gerçek dünyaya bağlayan bir köprüdür. Bu eğitimde öğrencilerimiz, temel elektronik prensiplerini öğrenirken; sensörlerden veri okumayı keşfedecekler.",
    konular: [
      { baslik: "Elektronik ve Devre Temelleri", detay: "Direnç, voltaj, akım ve breadboard kullanımı." },
      { baslik: "Sensör Teknolojileri", detay: "Mesafe, ısı, nem, toprak sensörleri." },
      { baslik: "Giriş-Çıkış (I/O) Birimleri", detay: "Buton kullanımı, Buzzer ve LCD ekranlar." },
      { baslik: "Motor ve Kontrol", detay: "Servo motorlar ve DC motorlar." },
      { baslik: "İletişim Modülleri", detay: "Bluetooth ile uzaktan kontrol." },
      { baslik: "Proje Geliştirme", detay: "Park sistemleri ve hata ayıklama." }
    ],
    kazanimlar: [
      "Elektronik devre şemalarını okuyabilir ve breadboard bağlantıları kurabilir.",
      "Direnç, LED, sensör ve motor çalışma mantığını kavrar.",
      "GND, VCC kavramlarını anlayarak güvenli devre tasarlar.",
      "Sensörlerden gelen verileri işleyerek karar mekanizmaları oluşturur.",
      "Elektronik ve yazılımı birleştirerek gerçek dünya sorunlarına çözümler üretir."
    ]
  },
  {
    id: 3,
    slug: "arduino-robotik-projeler",
    baslik: "Arduino ile Robotik Projeler Geliştirme",
    onKosu: "Arduino ile Robotik Dünyasına Giriş",
    amaci: "Temel seviyede kazanılan bilgileri; gerçek dünya problemlerine çözüm üreten akıllı, otonom ve interaktif robotik sistemlere dönüştürmek.",
    uzunAciklama: "Bu eğitim, bir 'robotik mühendisi' adayı gibi düşünmeye başladığımız yerdir. Proje planlama, devre mimarisi kurma ve hata ayıklama disiplinlerini en üst seviyede uygulayacağız.",
    konular: [
      { baslik: "İleri Seviye Sensörler", detay: "Birden fazla sensörü aynı anda işleyerek kompleks kararlar alma." },
      { baslik: "Otonom Robotik", detay: "Çizgi izleyen, engelden kaçan robot tasarımları." },
      { baslik: "Akıllı Otomasyon", detay: "Akıllı garaj bariyerleri, otomatik sulama sistemleri." },
      { baslik: "Proje Mimarisi", detay: "Mekanik, elektronik ve yazılım süreçlerini yönetme." },
      { baslik: "Güç Yönetimi", detay: "Servo motorlar, sürücüler ve şasi tasarımları." },
      { baslik: "Sistem Optimizasyonu", detay: "Yazılım hatalarını giderme (debug) ve sistemi hızlandırma." }
    ],
    kazanimlar: [
      "Farklı donanımları birbiriyle uyum içinde çalıştırarak bağımsız projeler geliştirebilir.",
      "Robotların karar verme süreçlerini programlayabilir.",
      "Karmaşık elektronik devreleri hatasız kurabilir.",
      "Fikir aşamasından prototip aşamasına kadar mühendislik sürecini deneyimler.",
      "Sistemli problem çözme yeteneği kazanır."
    ]
  },
  {
    id: 4,
    slug: "c-sharp-gorsel",
    baslik: "C# ile Görsel Masaüstü Programlama",
    amaci: "Endüstriyel standartlardaki C# diliyle, veri girişi alan, bunları işleyen ve sonuç döndüren profesyonel uygulamalar geliştirmek.",
    uzunAciklama: "C# kurumsal yazılım dünyasının temel taşıdır. Bu eğitimde öğrencilerimiz, boş bir pencereyi (Form) kendi tasarımlarıyla dolduracaklar.",
    konular: [
      { baslik: "C# Sözdizimi", detay: "Değişkenler, veri tipleri ve operatörler." },
      { baslik: "Görsel Arayüz (UI)", detay: "Textbox, Button, Label, ComboBox kullanımı." },
      { baslik: "Olay Yönetimi", detay: "Butona basıldığında çalışan fonksiyonlar." },
      { baslik: "Nesne Yönelimli Programlama", detay: "Sınıflar (Classes) ve nesnelerin arayüzle uyumu." },
      { baslik: "Veri İşleme", detay: "Girilen verileri analiz etme, hesaplama ve sonuç döndürme." },
      { baslik: "Uygulama Mimarisi", detay: "Çoklu form yapısı ve veri transferi." }
    ],
    kazanimlar: [
      "Visual Studio ile masaüstü uygulama geliştirebilir.",
      "OOP mantığını arayüz tasarımıyla birleştirerek uygulayabilir.",
      "Kullanıcıdan veri alan ve hata denetimi yapan fonksiyonlar yazabilir.",
      "Olay yönelimli programlama ile interaktif arayüzler kurgulayabilir.",
      "Veritabanı veya listeler üzerinde verileri listeleyip arama yapabilir."
    ]
  },
  {
    id: 5,
    slug: "construct-oyun",
    baslik: "Construct 3 ile 2D Oyun Geliştirme",
    amaci: "Kod yazma bariyerine takılmadan; mantıksal kurgu, görsel tasarım ve oyun mekaniklerini birleştirerek hayal edilen dünyaları somut birer 2D oyuna dönüştürmek.",
    uzunAciklama: "Bu eğitimde öğrencilerimiz, Construct 3'ün güçlü görsel motorunu kullanarak karakterlerini sıfırdan tasarlayacaklar.",
    konular: [
      { baslik: "Oyun Motoruna Giriş", detay: "Sahneler, katmanlar ve oyun döngüsü." },
      { baslik: "Karakter ve Nesne Tasarımı", detay: "Varlık oluşturma ve animasyon." },
      { baslik: "Oyun Mekanikleri", detay: "Hareket, yerçekimi ve çarpışma testleri." },
      { baslik: "Blok Tabanlı Mantık", detay: "Koşul-Eylem (Event-Action) yapısı." },
      { baslik: "Arayüz ve Kullanıcı Deneyimi", detay: "Başlangıç/bitiş ekranları, skor sistemi." },
      { baslik: "Seviye Tasarımı", detay: "Farklı zorluk derecelerinde bölümler." }
    ],
    kazanimlar: [
      "2D oyun tasarım süreçlerini bir bütün olarak kavrar.",
      "Nesneler için görsel animasyonlar oluşturabilir.",
      "Blok tabanlı mantıkla oyun içi olaylar kurgulayabilir.",
      "Fiziksel kuralları oyun sahnelerine uygulayabilir.",
      "Kendi tasarladığı varlıkları oyun motoruna entegre edebilir."
    ]
  },
  {
    id: 6,
    slug: "python-pygame",
    baslik: "Python Pygame ile Oyun Geliştirme",
    onKosu: "Temel Python Programlamaya Giriş",
    amaci: "Hazır oyun motorlarına bağımlı kalmadan, Python'ın saf gücüyle oyunların arka planındaki matematiği kodlayarak öğrenmek.",
    uzunAciklama: "Bu eğitim, temel Python bilgisini bir üst seviyeye taşımak isteyen öğrencilerimiz için tasarlandı. Nesne Yönelimli Programlama (OOP) mantığıyla profesyonel mimariler kuruyoruz.",
    konular: [
      { baslik: "Nesne Yönelimli Programlama", detay: "Sınıflar (Classes), nesneler ve kalıtım." },
      { baslik: "Pygame Kütüphanesi", detay: "Oyun penceresi, renkler ve ekran yönetimi." },
      { baslik: "Oyun Döngüsü", detay: "Oyunun sürekli güncelleme mantığı." },
      { baslik: "Hareket ve Kontrol", detay: "Klavye ve mouse girdileri." },
      { baslik: "Çarpışma Tespiti", detay: "Nesnelerin temasını algılama." },
      { baslik: "AI Destekli Geliştirme", detay: "Kod optimizasyonu ve AI araçlarından faydalanma." }
    ],
    kazanimlar: [
      "OOP kavramlarını gerçek projelerde kullanabilir.",
      "Bir kütüphanenin dökümantasyonunu okuyup entegre edebilir.",
      "Oyunların arka planında çalışan mantıksal döngüleri kavrar.",
      "Yapay zeka araçlarını kullanarak kod geliştirme süreçlerini hızlandırabilir.",
      "Sıfırdan oyun mekaniği kodlayarak problem çözme yeteneğini geliştirir."
    ]
  },
  {
    id: 7,
    slug: "html-css-web",
    baslik: "Modern Web Geliştirme: HTML ve CSS",
    amaci: "Sadece içerik görüntüleyen sayfalar değil; modern, responsive ve estetik açıdan yüksek standartlara sahip web projeleri tasarlamayı hedefliyoruz.",
    uzunAciklama: "Web, internetin iskeletidir. Bu eğitimde öğrencilerimiz HTML5 ile yapının temellerini atarken, CSS3 ile bu yapıya renk, tipografi ve estetik katacaklar.",
    konular: [
      { baslik: "HTML5 Yapılandırması", detay: "Semantik etiketler ve sayfa hiyerarşisi." },
      { baslik: "CSS3 Görsel Tasarım", detay: "Box model, flexbox, grid sistemleri." },
      { baslik: "Modern Tipografi", detay: "Google Fonts entegrasyonu." },
      { baslik: "Yapay Zeka ile Web Üretimi", detay: "AI araçlarını kullanarak hızlı kod yazma." },
      { baslik: "Responsive Tasarım", detay: "Mobil uyumlu sayfalar geliştirme." },
      { baslik: "Web Yayıncılığı", detay: "Domain, hosting ve sayfayı yayına alma." }
    ],
    kazanimlar: [
      "Modern HTML5 ve CSS3 standartlarına uygun, temiz kod yazabilir.",
      "Özel yazı tiplerini projelerine dahil edebilir.",
      "Yapay zeka araçlarını kullanarak süreçleri optimize edebilir.",
      "Geliştirdiği web sayfalarını yayına alabilir.",
      "Mobil uyumlu web siteleri tasarlayabilir."
    ]
  },
  {
    id: 8,
    slug: "mit-app-inventor",
    baslik: "MIT App Inventor ile Mobil Uygulama",
    amaci: "Karmaşık sözdizimi kurallarına boğulmadan; blok tabanlı bir yaklaşımla mobil dünyanın mimarisiyle tanışmak.",
    uzunAciklama: "Mobil uygulamalar hayatımızın merkezinde. Bu eğitimde öğrencilerimiz, kod yazmayı bir yapboz parçası gibi birleştirecek. MIT App Inventor'ın sürükle-bırak arayüzü sayesinde mobil projeler geliştirecekler.",
    konular: [
      { baslik: "Blok Tabanlı Mantık", detay: "Kodlama mantığını sürükle-bırak ile inşa etme." },
      { baslik: "Mobil Arayüz Tasarımı", detay: "Butonlar, ekranlar ve görsel deneyim." },
      { baslik: "Cihaz Sensörleri", detay: "Telefonun ivmeölçer, konum ve kamera özellikleri." },
      { baslik: "Uygulama İçi Karar Yapıları", detay: "Bloklarla döngüler ve koşullu ifadeler." },
      { baslik: "Veri Yönetimi", detay: "Küçük verileri saklama ve taşıma." },
      { baslik: "Mobil Oyun Mekanikleri", detay: "Sprite'lar, çarpışma testleri ve oyun döngüleri." }
    ],
    kazanimlar: [
      "Mobil uygulamanın tasarım ve kod arasındaki farkı kavrar.",
      "Blok tabanlı kodlama ile karmaşık algoritmaları ayırabilir.",
      "Telefonun donanım özelliklerini projelerine entegre edebilir.",
      "Kendi tasarladığı uygulamayı Android cihazında çalıştırabilir.",
      "Üretkenlik ve problem çözme süreçlerini mobil platformda uygulayabilir."
    ]
  },
  {
    id: 9,
    slug: "unity-oyun-gelistirme",
    baslik: "Unity ile Profesyonel Oyun Geliştirme",
    onKosu: "C# ile Görsel Masaüstü Programlama",
    amaci: "Sektör standardı olan Unity oyun motorunu kullanarak; fizik kuralları, gelişmiş kod mimarisi ve görsel tasarımı birleştiren, yayınlanmaya hazır 2D veya 3D oyunlar geliştirmek.",
    uzunAciklama: "Unity, bugün mobil ve bilgisayar oyunlarının en büyük geliştirme platformudur. Bu eğitimde öğrencilerimiz, C# diliyle yazdıkları kodları Unity'nin nesne tabanlı yapısına entegre edecekler.",
    konular: [
      { baslik: "Unity Arayüzü", detay: "Sahne (Scene), Inspector ve Hierarchy panelleri." },
      { baslik: "C# ile Oyun Scriptleri", detay: "Unity bileşenlerini kontrol eden profesyonel kod." },
      { baslik: "Fizik Motoru", detay: "Rigidbody, Collider ve yerçekimi." },
      { baslik: "Karakter ve Animasyon", detay: "Animator controller ile karakter yönetimi." },
      { baslik: "Oyun Mimarisi", detay: "Skor sistemi, bölüm geçişleri ve oyun yönetimi." },
      { baslik: "Asset Yönetimi", detay: "Dışarıdan 2D/3D model ve ses entegrasyonu." }
    ],
    kazanimlar: [
      "Unity oyun motorunun profesyonel geliştirme süreçlerini kavrar.",
      "C# kodlarını oyun nesnelerine bileşen olarak ekleyebilir.",
      "Oyun içi fizik kurallarını ve çarpışma algoritmalarını programlayabilir.",
      "Profesyonel oyunlarda kullanılan sahne yönetimi tekniklerini uygulayabilir.",
      "Piyasada karşılığı olan bir oyun motorunda yetkinlik kazanabilir."
    ]
  }
];