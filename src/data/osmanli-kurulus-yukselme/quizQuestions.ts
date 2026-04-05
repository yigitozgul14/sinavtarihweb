import type { QuizQuestion } from "@/types/period-data";

const quizQuestions: QuizQuestion[] = [
  // ── DEVLET YÖNETİMİ & VERASET (5 soru) ─────────────────────────────────
  {
    id: 1,
    question: "Osmanlı'da \"Ülke padişah ve oğullarınındır\" anlayışını benimseyen padişah kimdir?",
    options: ["Osman Bey", "Orhan Bey", "I. Murat", "Fatih Sultan Mehmed"],
    correctIndex: 2,
    explanation:
      "I. Murat döneminde veraset anlayışı \"ülke hanedanın ortak malıdır\" görüşünden \"ülke padişah ve oğullarınındır\" anlayışına evrilmiştir.",
  },
  {
    id: 2,
    question: "Fatih Sultan Mehmed'in tahta geçme anlayışında getirdiği temel değişiklik nedir?",
    options: [
      "Şehzadeleri sancağa gönderdi",
      "Ekber ve Erşed sistemini kurdu",
      "\"Ülke padişahındır\" ilkesiyle mutlak monarşiyi pekiştirdi",
      "Divan-ı Hümayun'u kurdu",
    ],
    correctIndex: 2,
    explanation:
      "Fatih Sultan Mehmed, \"ülke padişahındır\" anlayışını getirerek merkezi otoriteyi güçlendirmiş ve mutlak monarşiyi pekiştirmiştir.",
  },
  {
    id: 3,
    question: "Ekber ve Erşed sistemi hangi padişah döneminde uygulamaya konulmuştur?",
    options: ["II. Selim", "III. Murad", "I. Ahmet", "IV. Murat"],
    correctIndex: 2,
    explanation:
      "17. yüzyılda I. Ahmet döneminde taht kavgalarını önlemek amacıyla Ekber ve Erşed sistemi getirilmiştir: hanedanın en yaşlı ve en akıllı üyesi tahta çıkar.",
  },
  {
    id: 4,
    question: "Şehzadelerin sancağa gönderilmesi uygulamasına (Sancak Sistemi) son veren padişah kimdir?",
    options: ["I. Ahmet", "II. Osman", "III. Mehmet", "IV. Murat"],
    correctIndex: 2,
    explanation:
      "III. Mehmet döneminde şehzadelerin sancağa gönderilmesi uygulamasına son verilmiş ve şehzadelerin sarayda gözetim altında tutulduğu Kafes sistemi başlatılmıştır.",
  },
  {
    id: 5,
    question: "Divan-ı Hümayun'u kuran ve kaldıran padişahlar hangileridir?",
    options: [
      "Osman Bey kurdu, Fatih kaldırdı",
      "Orhan Bey kurdu, II. Mahmut kaldırdı",
      "I. Murat kurdu, Kanuni kaldırdı",
      "Orhan Bey kurdu, Fatih kaldırdı",
    ],
    correctIndex: 1,
    explanation:
      "Divan-ı Hümayun Orhan Bey tarafından kurulmuş, 19. yüzyılda II. Mahmut tarafından kaldırılmıştır.",
  },

  // ── DİVAN-I HÜMAYUN & ÜYELERİ (4 soru) ────────────────────────────────
  {
    id: 6,
    question: "Osmanlı'da \"Serdar-ı Ekrem\" unvanı kime verilirdi?",
    options: [
      "Kaptan-ı Deryaya deniz seferinde",
      "Kazaskere seferde",
      "Sadrazama ordunun başında sefere çıktığında",
      "Yeniçeri Ağasına büyük kuşatmalarda",
    ],
    correctIndex: 2,
    explanation:
      "Sadrazam (Veziri Azam) ordunun başında sefere çıktığında \"Serdar-ı Ekrem\" unvanını alırdı.",
  },
  {
    id: 7,
    question: "Osmanlı'da kadı ve müderris atamalarından hangi divan üyesi sorumluydu?",
    options: ["Nişancı", "Defterdar", "Kazasker", "Reisülküttap"],
    correctIndex: 2,
    explanation:
      "Kazasker, adalet ve eğitim işlerinden sorumluydu; Anadolu ve Rumeli kazaskerlerinin temel görevi kadı ve müderris atamalarıydı.",
  },
  {
    id: 8,
    question: "Belgelere tuğra çekilmesi ve toprak kayıtlarının (tahrir) tutulması hangi divan üyesinin göreviydi?",
    options: ["Defterdar", "Nişancı", "Kazasker", "Reisülküttap"],
    correctIndex: 1,
    explanation:
      "Nişancı, iç ve dış yazışmaları düzenler, belgelere tuğra çeker, toprak kayıtlarını (tahrir defterleri) tutardı.",
  },
  {
    id: 9,
    question: "Şeyhülislam'ın Divan'daki temel işlevi neydi?",
    options: [
      "Mali kararları onaylamak",
      "Ordu komutasını üstlenmek",
      "Divan kararlarının dine uygunluğu hakkında fetva vermek",
      "Yabancı elçileri karşılamak",
    ],
    correctIndex: 2,
    explanation:
      "Şeyhülislam, Divan kararlarının şer'i hukuka uygunluğunu denetler ve fetva verirdi. Divan üyesi sayılmaz, ancak gerektiğinde görüşüne başvurulurdu.",
  },

  // ── TAŞRA & İSTANBUL YÖNETİMİ (3 soru) ────────────────────────────────
  {
    id: 10,
    question: "Osmanlı eyaletlerinde genel yönetici unvanı neydi?",
    options: ["Sancakbeyi", "Kadı", "Beylerbeyi", "Subaşı"],
    correctIndex: 2,
    explanation:
      "Eyalet düzeyindeki yönetici Beylerbeyi unvanını taşırdı. Sancakbeyi sancak, Kadı kaza düzeyinde görev yapardı.",
  },
  {
    id: 11,
    question: "Aşağıdakilerden hangisi Salyaneli (yıllıklı) eyaletlere örnek gösterilebilir?",
    options: ["Anadolu ve Rumeli", "Mısır ve Tunus", "Erdel ve Eflak", "Karaman ve Rum"],
    correctIndex: 1,
    explanation:
      "Mısır, Habeş, Tunus gibi eyaletler salyaneli eyaletlerdir; yöneticileri merkezden atanır ve maaş alır, İltizam sistemi uygulanır.",
  },
  {
    id: 12,
    question: "İstanbul'un belediye işlerinden hangi yetkili sorumluydu?",
    options: ["Taht Kadısı", "Yeniçeri Ağası", "Şehremini", "Kaptan-ı Derya"],
    correctIndex: 2,
    explanation:
      "İstanbul'un belediye işleri Şehremini tarafından yürütülürdü. Yeniçeri Ağası güvenlikten, Taht Kadısı adalet işlerinden sorumluydu.",
  },

  // ── ASKERİ TEŞKİLAT — KURUMSAL (4 soru) ────────────────────────────────
  {
    id: 13,
    question: "Kapıkulu askerlerine verilen üç aylık maaşın adı nedir?",
    options: ["Dirlik", "Ulufe", "Aşar", "Cebelü"],
    correctIndex: 1,
    explanation:
      "Kapıkulu askerleri 3 ayda bir Ulufe adı verilen maaş alırdı. Bu, onları tımarlı sipahilerden ayıran temel özellikti.",
  },
  {
    id: 14,
    question: "Yeniçeri Ocağı'na asker yetiştiren kaynak ocağının adı nedir?",
    options: ["Cebeciler Ocağı", "Acemioğlanlar Ocağı", "Topçular Ocağı", "Lağımcılar Ocağı"],
    correctIndex: 1,
    explanation:
      "Devşirme yoluyla alınan gençler önce Acemioğlanlar Ocağı'nda yetiştirilir, ardından Yeniçeri Ocağı'na geçerlerdi.",
  },
  {
    id: 15,
    question: "Tımarlı Sipahi ordusunda dirlik sahibinin beslediği askere ne ad verilir?",
    options: ["Akıncı", "Azap", "Cebelü", "Deli"],
    correctIndex: 2,
    explanation:
      "Tımar sahibinin kendi geliriyle donatıp beslediği atlı askerlere cebelü denirdi. Tımarın geliri arttıkça daha fazla cebelü çıkarmak zorunluydu.",
  },
  {
    id: 16,
    question: "Osmanlı'da sınırlarda keşif ve yıpratma harekâtı yürüten birliğin adı nedir?",
    options: ["Yeniçeriler", "Cebeciler", "Akıncılar", "Sakalar"],
    correctIndex: 2,
    explanation:
      "Akıncılar, sınır boylarında hafif süvari kuvveti olarak keşif, baskın ve yıpratma harekâtı yürütürdü; düzenli ordudan önce hareket ederlerdi.",
  },

  // ── HUKUK & SOSYAL YAPI (4 soru) ────────────────────────────────────────
  {
    id: 17,
    question: "Osmanlı hukuk sisteminde \"Örfi Hukuk\" neyi ifade eder?",
    options: [
      "Yalnızca İslam hukukunu",
      "Gelenekler ve padişah fermanlarına dayalı kuralları",
      "Gayrimüslimlerin kendi hukuklarını",
      "Cemaat mahkemelerinde uygulanan kuralları",
    ],
    correctIndex: 1,
    explanation:
      "Örfi hukuk, İslam hukukunu (şer'i hukuku) tamamlayan, geleneklere ve padişah fermanlarına dayalı kurallar bütünüdür.",
  },
  {
    id: 18,
    question: "Osmanlı'da gayrimüslimlerin kendi dini hukuklarını uyguladığı mahkemeler hangileridir?",
    options: [
      "Şeri Mahkemeler",
      "Konsolosluk Mahkemeleri",
      "Cemaat Mahkemeleri",
      "Divan-ı Hümayun",
    ],
    correctIndex: 2,
    explanation:
      "Cemaat Mahkemeleri, gayrimüslimlerin kendi toplulukları içindeki davaları için kendi dini hukuklarını uyguladıkları mahkemelerdir.",
  },
  {
    id: 19,
    question: "Osmanlı'da \"İlmiye\" sınıfı aşağıdaki hangi görevi kapsamaz?",
    options: ["Kadılık", "Müderrislik", "Şeyhülislamlık", "Defterdarlık"],
    correctIndex: 3,
    explanation:
      "Defterdar Kalemiye sınıfına aittir. İlmiye (Ulema), eğitim, adalet ve fetva işlerini yürüten şeyhülislam, kadı ve müderrislerden oluşur.",
  },
  {
    id: 20,
    question: "Osmanlı sosyal yapısında \"Reaya\" kimlerden oluşurdu?",
    options: [
      "Yalnızca askerlerden",
      "Yalnızca gayrimüslimlerden",
      "Vergi ödeyen Müslüman ve gayrimüslim halktan",
      "Ulema sınıfından",
    ],
    correctIndex: 2,
    explanation:
      "Reaya, vergi ödeyen tüm halkı (Müslüman ve gayrimüslim) kapsayan sosyal kesimdir; çiftçi, esnaf ve tüccarları içerir.",
  },

  // ── TOPRAK & VERGİ (3 soru) ─────────────────────────────────────────────
  {
    id: 21,
    question: "Osmanlı'da yıllık geliri 100.000 akçeden fazla olan dirlik türü nedir?",
    options: ["Tımar", "Zeamet", "Has", "Mukataa"],
    correctIndex: 2,
    explanation:
      "Has, yıllık geliri 100.000 akçeden fazla olan dirlik türüdür. Padişah, vezir ve beylerbeyi gibi üst düzey yöneticilere verilirdi.",
  },
  {
    id: 22,
    question: "Gayrimüslimlerden askerlik muafiyeti karşılığında alınan vergi hangisidir?",
    options: ["Aşar", "Haraç", "Ağnam", "Cizye"],
    correctIndex: 3,
    explanation:
      "Cizye, gayrimüslim erkeklerden askerlik yapmadıkları için alınan baş vergisidir. Aşar ve Haraç ise ürün vergileridir.",
  },
  {
    id: 23,
    question: "\"Avarız\" vergisi ne zaman alınırdı?",
    options: [
      "Her yıl düzenli olarak",
      "Sadece barış döneminde",
      "Olağanüstü durumlarda (savaş, kıtlık vb.)",
      "Yalnızca gayrimüslimlerden",
    ],
    correctIndex: 2,
    explanation:
      "Avarız, olağanüstü durumlarda (savaş, büyük kıtlık, doğal afet gibi) toplumdan alınan olağanüstü vergidir.",
  },

  // ── EĞİTİM & BİLİM (3 soru) ─────────────────────────────────────────────
  {
    id: 24,
    question: "Osmanlı'da ilk medreseyi hangi şehirde kim açmıştır?",
    options: [
      "Bursa'da Orhan Bey",
      "İznik'te Orhan Bey",
      "Edirne'de I. Murat",
      "İstanbul'da Fatih Sultan Mehmed",
    ],
    correctIndex: 1,
    explanation:
      "Osmanlı'nın ilk medresesi İznik'te Orhan Bey tarafından açılmıştır.",
  },
  {
    id: 25,
    question: "Piri Reis'in denizcilik ve coğrafya alanındaki başlıca eseri hangisidir?",
    options: ["Cihannüma", "Kitab-ı Bahriye", "Keşfüzzünun", "Mecmua-i Menazil"],
    correctIndex: 1,
    explanation:
      "Piri Reis'in \"Kitab-ı Bahriye\" adlı eseri, Akdeniz limanlarını ve kıyılarını anlatan kapsamlı bir denizcilik rehberidir. Aynı zamanda 1513 tarihli dünya haritasıyla da ünlüdür.",
  },
  {
    id: 26,
    question: "İlk Osmanlı rasathanesini kuran bilim insanı kimdir?",
    options: ["Ali Kuşçu", "Piri Reis", "Takiyüddin Mehmet", "Akşemsettin"],
    correctIndex: 2,
    explanation:
      "Takiyüddin Mehmet, 1577'de İstanbul'da ilk Osmanlı rasathanesini kurmuştur. Rasathane daha sonra siyasi baskılar nedeniyle yıktırılmıştır.",
  },

  // ── KURULUŞ DÖNEMİ OLAYLARI 1299–1402 (6 soru) ──────────────────────────
  {
    id: 27,
    question: "Osmanlı Beyliği'nin kuruluşu olarak kabul edilen tarih hangisidir?",
    options: ["1281", "1299", "1302", "1326"],
    correctIndex: 1,
    explanation:
      "Osman Bey'in Söğüt ve Domaniç çevresinde bağımsızlığını ilan ettiği 1299 yılı Osmanlı Devleti'nin resmi kuruluş tarihi olarak kabul edilmektedir.",
  },
  {
    id: 28,
    question: "1302'deki Koyunhisar (Bafeon) Savaşı'nın önemi nedir?",
    options: [
      "Edirne'nin Osmanlı'ya geçmesini sağladı",
      "Osmanlıların Bizans karşısında kazandığı ilk büyük zaferdir; Bursa önündeki savunma çöktü",
      "Rumeli'ye geçişin kapısı açıldı",
      "Anadolu'da Karesioğulları yenildi",
    ],
    correctIndex: 1,
    explanation:
      "Koyunhisar (Bafeon) Savaşı, Osmanlıların Bizans ordusu karşısında kazandığı ilk büyük zaferdir. Bu zafer Bizans'ın Bursa önlerindeki savunmasını çöküşe götürdü.",
  },
  {
    id: 29,
    question: "Osmanlıların Avrupa'ya geçişinin başlangıcı olarak kabul edilen olay hangisidir?",
    options: [
      "Bursa'nın fethi (1326)",
      "Sazlıdere Savaşı (1363)",
      "Çimpe Kalesi'nin alınması (1353)",
      "Sırpsındığı Savaşı (1364)",
    ],
    correctIndex: 2,
    explanation:
      "1353'te Orhan Bey'in oğlu Süleyman Paşa, Bizans iç savaşında Kantakuzenos'a yardım karşılığında Çimpe Kalesi'ni aldı. Bu olay Osmanlıların Avrupa (Rumeli) topraklarına geçişinin başlangıcı sayılır.",
  },
  {
    id: 30,
    question: "I. Kosova Savaşı (1389) ile ilgili aşağıdaki bilgilerden hangisi doğrudur?",
    options: [
      "Osmanlılar yenildi; I. Beyazıt tahta çıktı",
      "Osmanlılar kazandı; I. Murat savaş sırasında şehit düştü",
      "Osmanlılar kazandı; Fetret Devri başladı",
      "Macar ordusu yenildi; Edirne alındı",
    ],
    correctIndex: 1,
    explanation:
      "I. Kosova Savaşı'nda Osmanlılar Sırp-Bosna-Arnavut koalisyonunu yendi, ancak Sultan I. Murat savaş sırasında şehit düştü. Yerine I. Beyazıt (Yıldırım) geçti.",
  },
  {
    id: 31,
    question: "Niğbolu Savaşı'nın (1396) önemi nedir?",
    options: [
      "Osmanlılar ilk kez Hristiyan devletlere karşı yenildi",
      "Macaristan öncülüğündeki büyük Haçlı ordusu yenildi; Balkan hakimiyeti pekişti",
      "Kırım Osmanlı himayesine girdi",
      "Venedik'le ilk antlaşma imzalandı",
    ],
    correctIndex: 1,
    explanation:
      "1396'da Macaristan öncülüğündeki büyük Haçlı ordusu Niğbolu'da Yıldırım Beyazıt tarafından bozguna uğratıldı ve Osmanlı'nın Balkan hakimiyeti güçlendi.",
  },
  {
    id: 32,
    question: "Ankara Savaşı'nın (1402) Osmanlı Devleti'ne etkisi nedir?",
    options: [
      "Osmanlı Mısır'ı kaybetti",
      "Fetret Devri başladı; kardeşler arasında taht mücadelesi yaşandı",
      "Balkanlar'daki topraklar geri alındı",
      "Edirne başkent yapıldı",
    ],
    correctIndex: 1,
    explanation:
      "1402'de Timur, Ankara Savaşı'nda Yıldırım Beyazıt'ı esir aldı. Osmanlı, on yıldan fazla süren Fetret Devri'ne girdi; şehzadeler arasında iç savaş yaşandı.",
  },

  // ── YÜKSELİŞ DÖNEMİ OLAYLARI 1402–1517 (5 soru) ────────────────────────
  {
    id: 33,
    question: "İstanbul'un fethinin gerçekleştiği yıl ve kuşatma süresi nedir?",
    options: [
      "1451, 40 gün",
      "1453, 53 gün",
      "1453, 75 gün",
      "1448, 53 gün",
    ],
    correctIndex: 1,
    explanation:
      "Fatih Sultan Mehmed, 53 günlük kuşatmanın ardından 29 Mayıs 1453'te İstanbul'u fethetti. Bin yıllık Bizans İmparatorluğu böylece son buldu.",
  },
  {
    id: 34,
    question: "1475'te Kırım'ın Osmanlı himayesine girmesinin önemi nedir?",
    options: [
      "Osmanlı ilk kez Karadeniz'e ulaştı",
      "Karadeniz tam bir Osmanlı gölü haline gelmeye başladı",
      "Venedik ile savaş başladı",
      "Balkanlar'daki son direnç kırıldı",
    ],
    correctIndex: 1,
    explanation:
      "Gedik Ahmet Paşa'nın 1475'te Kırım'ı fethetmesiyle Kırım Hanlığı Osmanlı himayesine girdi ve Karadeniz tam bir Osmanlı gölü haline gelmeye başladı.",
  },
  {
    id: 35,
    question: "Çaldıran Savaşı'nın (1514) sonuçlarından hangisi doğrudur?",
    options: [
      "Osmanlılar yenildi ve Doğu Anadolu'yu kaybetti",
      "Yavuz Sultan Selim Şah İsmail'i yenip Doğu Anadolu'yu Osmanlı'ya kattı",
      "Mısır fethedildi ve halifelik alındı",
      "Dulkadiroğulları beyliği sona erdi",
    ],
    correctIndex: 1,
    explanation:
      "1514'te Yavuz Sultan Selim, Çaldıran'da Şah İsmail'i kesin yenilgiye uğrattı. Doğu Anadolu ve Güneydoğu Anadolu Osmanlı'ya katıldı; Safevi tehdidi geçici olarak durduruldu.",
  },
  {
    id: 36,
    question: "Ridaniye Savaşı'nın (1517) Osmanlı açısından en önemli sonucu nedir?",
    options: [
      "Suriye ve Filistin alındı",
      "Mısır fethedildi; halifelik ve kutsal topraklar Osmanlı'ya geçti",
      "Venedik ile antlaşma imzalandı",
      "Doğu Anadolu Osmanlı'ya katıldı",
    ],
    correctIndex: 1,
    explanation:
      "Yavuz'un 1517'de Ridaniye'de Memlükleri yenmesiyle Mısır fethedildi. Bu zaferle birlikte halifelik unvanı ile Hicaz ve kutsal topraklar Osmanlı'ya geçti.",
  },
  {
    id: 37,
    question: "Osmanlı'nın Batı'daki en uç noktası olarak tarihe geçen olay hangisidir?",
    options: [
      "Mohaç Savaşı (1526)",
      "Belgrad'ın fethi (1521)",
      "I. Viyana Kuşatması (1529)",
      "Preveze Zaferi (1538)",
    ],
    correctIndex: 2,
    explanation:
      "1529'daki I. Viyana Kuşatması, Osmanlı'nın Batı'ya ulaştığı en uç nokta olarak tarihe geçmiştir. Lojistik güçlükler ve erken gelen kış nedeniyle geri çekilmek zorunda kalındı.",
  },

  // ── KLASİK ÇAĞ OLAYLARI 1517–1579 (3 soru) ──────────────────────────────
  {
    id: 38,
    question: "Preveze Zaferi'nin (1538) önemi nedir?",
    options: [
      "İspanya ile barış sağlandı",
      "Osmanlı donanması Haçlı donanmasını yenerek Akdeniz'de deniz hakimiyeti kurdu",
      "Kıbrıs Osmanlı'ya geçti",
      "Venedik'e kapitülasyon tanındı",
    ],
    correctIndex: 1,
    explanation:
      "1538'de Barbaros Hayreddin Paşa komutasındaki Osmanlı donanması, Papa öncülüğündeki Haçlı donanmasını Preveze'de büyük yenilgiye uğrattı. Akdeniz'de Osmanlı deniz hakimiyeti kuruldu.",
  },
  {
    id: 39,
    question: "Amasya Antlaşması (1555) hangi iki devlet arasında imzalanmış olup özelliği nedir?",
    options: [
      "Osmanlı-Venedik; ilk deniz sınırı antlaşması",
      "Osmanlı-Safevi; iki güç arasındaki ilk resmi barış antlaşması",
      "Osmanlı-Habsburg; Avrupa'da ilk sınır belirleme antlaşması",
      "Osmanlı-Memlük; son barış antlaşması",
    ],
    correctIndex: 1,
    explanation:
      "Amasya Antlaşması (1555), Osmanlı ile Safevi Devleti arasında imzalanan ilk resmi barış anlaşmasıdır. Irak ve Azerbaycan'ın bir bölümü Osmanlı'ya bırakıldı.",
  },
  {
    id: 40,
    question: "İnebahtı Yenilgisi'nden (1571) sonra Osmanlı ne yaptı?",
    options: [
      "Akdeniz'deki tüm topraklarını kaybetti",
      "Venedik ile kalıcı barış imzaladı",
      "Donanmasını kısa sürede yeniden kurdu ve Akdeniz hakimiyetini korudu",
      "Preveze'deki üslerini boşalttı",
    ],
    correctIndex: 2,
    explanation:
      "İnebahtı'da İspanya-Venedik-Papa koalisyonu Osmanlı donanmasını yendi; ancak Osmanlı kısa sürede donanmasını yeniledi ve Akdeniz'deki üstünlüğünü genel olarak korudu.",
  },
];

export default quizQuestions;
