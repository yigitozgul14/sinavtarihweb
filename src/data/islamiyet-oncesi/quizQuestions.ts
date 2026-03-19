export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string; // Gösterilecek açıklama (doğru cevabı açıklar)
}

const quizQuestions: QuizQuestion[] = [
  // ── DEVLET (10 soru) ──────────────────────────────────────────────
  {
    id: 1,
    question: "Türk devletinin dört temel unsuru hangisinde doğru verilmiştir?",
    options: [
      "Bağımsızlık (oksızlık), ülke, halk (kün) ve teşkilat",
      "Kağan, hatun, kurultay ve ordu",
      "Kut, küç, ülüş ve töre",
      "Boy, budun, il ve urug",
    ],
    correctIndex: 0,
    explanation:
      "Türk devletinin dört temel unsuru; bağımsızlık (oksızlık), ülke, halk (kün) ve teşkilattır.",
  },
  {
    id: 2,
    question: "Türk devlet yönetiminde 'hatun' kimdir ve rolü nedir?",
    options: [
      "Kağanın annesinin unvanıdır",
      "Hükümdarın eşidir ve devlet yönetiminde söz sahibidir",
      "Orduyu yöneten kadın komutandır",
      "Kurultay'ın başkanıdır",
    ],
    correctIndex: 1,
    explanation:
      "Hatun, hükümdarın eşine verilen unvandır. Türk devlet anlayışında hatun devlet yönetiminde söz sahibi olmuştur.",
  },
  {
    id: 3,
    question: "'Kut' kavramı ne anlama gelir?",
    options: [
      "Askeri yetki",
      "Ekonomik yetki",
      "Siyasi yetki — Gök Tanrı tarafından verilen iktidar hakkı",
      "Halk tarafından seçilme yetkisi",
    ],
    correctIndex: 2,
    explanation:
      "Kut; Gök Tanrı'nın hükümdara verdiği siyasi yetkidir. Küç askeri, ülüş ise ekonomik yetkiyi ifade eder.",
  },
  {
    id: 4,
    question: "'Kut anlayışı' ne anlama gelir?",
    options: [
      "Ülke yalnızca kağanın malıdır",
      "Ülke, hükümdar ve ailesinin ortak malıdır",
      "Ülke halka aittir",
      "Ülke yalnızca kurultayın kontrolündedir",
    ],
    correctIndex: 1,
    explanation:
      "Kut anlayışına göre ülke, hükümdar ve ailesinin ortak malıdır. Bu inanç taht kavgalarına zemin hazırlamıştır.",
  },
  {
    id: 5,
    question: "Türk devletinde doğuyu yöneten hükümdara ne ad verilirdi?",
    options: ["Yabgu", "Şad", "Kağan", "Tudun"],
    correctIndex: 2,
    explanation:
      "Devletin merkezi doğu kabul edildiğinden doğuyu yöneten hükümdar Kağan unvanını taşırdı.",
  },
  {
    id: 6,
    question: "Türk devletinde batıyı yöneten hükümdara ne ad verilirdi?",
    options: ["Kağan", "Yabgu", "Şad", "Tudun"],
    correctIndex: 1,
    explanation:
      "Batıyı yöneten hükümdar Yabgu unvanını taşırdı. Doğuyu yöneten ise Kağan'dır.",
  },
  {
    id: 7,
    question: "Kurultay'ın diğer adı nedir?",
    options: ["Kengeş", "Toy", "Orun", "Divan"],
    correctIndex: 1,
    explanation:
      "Kurultay'ın diğer adı Toy'dur. Günümüz Bakanlar Kurulu'na benzetilebilir.",
  },
  {
    id: 8,
    question: "Kurultay'a katılan üyelere ne ad verilirdi?",
    options: ["Orun", "Toygun", "Aygucı", "Budun"],
    correctIndex: 1,
    explanation:
      "Kurultay'a katılan üyelere toygun adı verilirdi. Oturma düzenlerine ise orun denirdi.",
  },
  {
    id: 9,
    question: "Kurultay'daki oturma düzenine ne ad verilirdi?",
    options: ["Toygun", "Toy", "Orun", "Kengeş"],
    correctIndex: 2,
    explanation:
      "Kurultay'daki oturma düzenine orun denirdi; bu aynı zamanda üyelerin saygınlık sırasını da belirlerdi.",
  },
  {
    id: 10,
    question: "Kağan yokken Kurultay'a kim başkanlık ederdi?",
    options: ["Hatun", "Şad", "Aygucı (vezir)", "En yaşlı boy beyi"],
    correctIndex: 2,
    explanation:
      "Kağan olmadığı zamanlarda vezir (aygucı) kurultaya başkanlık ederdi.",
  },

  // ── SOSYAL HAYAT (3 soru) ─────────────────────────────────────────
  {
    id: 11,
    question: "Türklerde halkın kaldığı çadırlara ne ad verilirdi?",
    options: ["Ev", "Yurt", "Kurgan", "Otağ"],
    correctIndex: 1,
    explanation:
      "Halkın kaldığı çadırlara yurt denirdi. Otağ ise hükümdar çadırının adıdır.",
  },
  {
    id: 12,
    question: "Türk toplum örgütlenmesinde küçükten büyüğe doğru doğru sıralama hangisidir?",
    options: [
      "Boy → Urug → Oğuş → Budun → İl",
      "Oğuş → Urug → Boy → Budun → İl",
      "Budun → Boy → Urug → Oğuş → İl",
      "İl → Budun → Boy → Urug → Oğuş",
    ],
    correctIndex: 1,
    explanation:
      "Küçükten büyüğe: Oğuş (aile) → Urug (sülale) → Boy → Budun (millet) → İl (devlet).",
  },
  {
    id: 13,
    question: "Konargöçer yaşam tarzının Türk kültürüne etkilerinden biri DEĞİLDİR?",
    options: [
      "Mimari eserlerin az olması",
      "Yazının geç kullanılması",
      "Ordu-millet anlayışının benimsenmesi",
      "Tarımın temel ekonomik faaliyet olması",
    ],
    correctIndex: 3,
    explanation:
      "Konargöçer yaşam tarım yapılmasını engeller. Tarım ancak yerleşik Uygurlar arasında yaygınlaşmıştır.",
  },

  // ── HUKUK (4 soru) ───────────────────────────────────────────────
  {
    id: 14,
    question: "Türklerde geçerli olan hukuk sisteminin adı nedir?",
    options: ["Yasa", "Töre", "Ferman", "Kanun"],
    correctIndex: 1,
    explanation:
      "Türklerde sözlü hukuk kurallarına töre denirdi. Töre; yazılı değil, geleneksel sözlü bir hukuk sistemiydi.",
  },
  {
    id: 15,
    question: "Törenin dört değişmez kuralı hangi seçenekte doğru verilmiştir?",
    options: [
      "Adalet, Uzluk, Tüzlük, İnsanlık",
      "Kut, Küç, Ülüş, Töre",
      "Adalet, Eşitlik, Özgürlük, Kardeşlik",
      "Uzluk, Adalet, Kağanlık, Birlik",
    ],
    correctIndex: 0,
    explanation:
      "Törenin dört değişmez kuralı: Adalet, Uzluk (iyilik), Tüzlük (eşitlik) ve İnsanlık (kişilik)tir.",
  },
  {
    id: 16,
    question: "Türk hukukunda hapis cezaları en fazla kaç günü geçmezdi?",
    options: ["3 gün", "5 gün", "10 gün", "30 gün"],
    correctIndex: 2,
    explanation:
      "Töre hukukunda hapis cezaları 10 günü geçmezdi. İdam ise yalnızca belirli ağır suçlar için uygulanırdı.",
  },
  {
    id: 17,
    question: "Törenin oluşumunda etkili olan unsurlar hangisinde tam olarak verilmiştir?",
    options: [
      "Kut anlayışı, kurultay kararları, gelenek ve görenekler",
      "Kağanın fermanları, din adamları, savaş gelenekleri",
      "Yabgu kararları, hatun fermanları, halk oylaması",
      "Sadece gelenek ve görenekler",
    ],
    correctIndex: 0,
    explanation:
      "Törenin oluşumunda kut anlayışı, kurultayda alınan kararlar ile gelenek ve görenekler belirleyici olmuştur.",
  },

  // ── ORDU (3 soru) ────────────────────────────────────────────────
  {
    id: 18,
    question: "Hangi Türk devleti ordusuna ücret öderdi?",
    options: ["Göktürkler", "Uygurlar", "Hazarlar", "Asya Hunları"],
    correctIndex: 2,
    explanation:
      "Türk devletlerinde ordu-millet anlayışı gereği herkes asker sayıldığından ordular ücretsizdi. Tek istisna Hazarlardı.",
  },
  {
    id: 19,
    question: "Onlu sistemi kuran Türk hükümdarı kimdir?",
    options: ["Bilge Kağan", "Tonyukuk", "Mete Han", "Attila"],
    correctIndex: 2,
    explanation:
      "Mete Han, MÖ 209 yılında tahta çıkarak orduda onlu sistemi kurdu ve Orta Asya'da siyasi birliği sağladı.",
  },
  {
    id: 20,
    question: "Türklerin dünyayı en çok etkilediği alan hangisidir?",
    options: ["Mimari", "Tarım", "Askerlik", "Denizcilik"],
    correctIndex: 2,
    explanation:
      "Türkler dünyayı en çok askerlik alanında etkilemiştir. Onlu sistem gibi askeri örgütlenme biçimleri dünyaya yayılmıştır.",
  },

  // ── BİLİM (1 soru) ────────────────────────────────────────────────
  {
    id: 21,
    question: "12 Hayvanlı Türk Takvimi hangi esasa dayanır?",
    options: [
      "Güneş esaslı, 365 günlük döngüler",
      "Ay esaslı, 354 günlük döngüler",
      "12 yıllık döngüler halinde düzenlenmiştir",
      "Hicri takvimden alınmıştır",
    ],
    correctIndex: 2,
    explanation:
      "Türk 12 Hayvanlı Takvimi, her biri bir hayvan adıyla anılan 12 yıllık döngülere dayanır.",
  },

  // ── DİN VE İNANIŞ (5 soru) ────────────────────────────────────────
  {
    id: 22,
    question: "Türklerde cenaze törenine ne ad verilirdi?",
    options: ["Kurgan", "Balbal", "Yuğ", "Tamu"],
    correctIndex: 2,
    explanation:
      "Cenaze töreninin adı yuğ'dur. Kurgan mezar, balbal mezar taşı, tamu ise cehennem anlamına gelir.",
  },
  {
    id: 23,
    question: "Türklerde mezara ne ad verilirdi?",
    options: ["Balbal", "Kurgan", "Yuğ", "Uçmağ"],
    correctIndex: 1,
    explanation:
      "Mezara kurgan denirdi. Balbal mezar taşı, yuğ cenaze töreni, uçmağ ise cennet anlamındadır.",
  },
  {
    id: 24,
    question: "Türklerde mezar taşına ne ad verilirdi?",
    options: ["Kurgan", "Yuğ", "Balbal", "Tamu"],
    correctIndex: 2,
    explanation:
      "Mezar taşına balbal denirdi. Balballar genellikle öldürülen düşmanları sembolize eden heykeller şeklindeydi.",
  },
  {
    id: 25,
    question: "Türklerde cenneti ifade eden kelime hangisidir?",
    options: ["Tamu", "Yuğ", "Uçmağ", "Kurgan"],
    correctIndex: 2,
    explanation:
      "Cennet anlamında uçmağ, cehennem anlamında ise tamu kelimesi kullanılırdı.",
  },
  {
    id: 26,
    question: "Türklerde hâkim olan inanç sistemi hangisiydi?",
    options: [
      "Yalnızca İslamiyet",
      "Atalar kültü ve tabiat kuvvetlerine inanış (yer-su-gök)",
      "Yalnızca Budizm",
      "Yalnızca Gök Tanrı inancı",
    ],
    correctIndex: 1,
    explanation:
      "Atalar kültü (mezar ziyareti) ve tabiat kuvvetlerine (yer-su-gök) inanış hâkim olmuştur. Ancak tarih boyunca birçok din de benimsenmiştir.",
  },

  // ── MÜZİK VE SPOR (2 soru) ────────────────────────────────────────
  {
    id: 27,
    question: "Kopuz, hangi çalgı aletinin atası sayılmaktadır?",
    options: ["Kithara (Türk kanunu)", "Saz (bağlama)", "Ud", "Çevgan"],
    correctIndex: 1,
    explanation:
      "Kopuz, günümüz saz ve bağlamasının atasıdır. Kithara ise Türk kanununun diğer adıdır.",
  },
  {
    id: 28,
    question: "Aşağıdakilerden hangisi eski Türklerin oynadığı bir spordur?",
    options: ["Cirit", "Güreş (küreş)", "Okçuluk", "Polo"],
    correctIndex: 1,
    explanation:
      "Küreş (güreş), seğirtme ve tepük eski Türklerin başlıca sporlarındandır.",
  },

  // ── EKONOMİ (3 soru) ──────────────────────────────────────────────
  {
    id: 29,
    question: "Türklerin temel ticaret yolları hangileriydi?",
    options: [
      "Baharat Yolu ve İpek Yolu",
      "İpek Yolu ve Kürk Yolu",
      "Amber Yolu ve Baharat Yolu",
      "Kürk Yolu ve Altın Yolu",
    ],
    correctIndex: 1,
    explanation:
      "Türkler İpek Yolu ve Kürk Yolu'nu kullanırdı. Bu yollar ekonomilerinin temelini oluşturuyordu.",
  },
  {
    id: 30,
    question: "İslam öncesinde parayı ticarette değişim aracı olarak kullanan ilk Türk devleti hangisidir?",
    options: ["Asya Hunları", "Uygurlar", "Göktürkler", "Hazarlar"],
    correctIndex: 2,
    explanation:
      "İslam öncesinde parayı ticarette bir değişim aracı olarak kullanan ilk Türk devleti Göktürklerdir.",
  },
  {
    id: 31,
    question: "Tarımı ekonomilerinin temeli olarak benimseyen Türk topluluğu hangisidir?",
    options: ["Göktürkler", "Asya Hunları", "Uygurlar", "İskitler"],
    correctIndex: 2,
    explanation:
      "Yerleşik hayata geçen Uygurlar tarımı esas almıştır. Diğer Türk toplulukları ticaret ve hayvancılığa dayanmıştır.",
  },

  // ── EDEBİYAT VE YAZI (7 soru) ────────────────────────────────────
  {
    id: 32,
    question: "Türk edebiyatında atasözlerine ne ad verilirdi?",
    options: ["Koşuk", "Sagu", "Sav", "Destan"],
    correctIndex: 2,
    explanation:
      "Sav atasözü, koşuk şiir, sagu ise ağıt anlamına gelir.",
  },
  {
    id: 33,
    question: "Türk edebiyatında ağıta ne ad verilirdi?",
    options: ["Koşuk", "Sav", "Sagu", "Destan"],
    correctIndex: 2,
    explanation:
      "Sagu ağıt demektir. Koşuk şiir, sav ise atasözü anlamındadır.",
  },
  {
    id: 34,
    question: "Oğuz Kağan Destanı'nda Oğuz Kağan adıyla geçen hükümdar kimdir?",
    options: ["Mete Han", "Teoman", "Bilge Kağan", "Attila"],
    correctIndex: 1,
    explanation:
      "Oğuz Kağan Destanı'nda Oğuz Kağan olarak geçen hükümdar Asya Hun Devleti'nin kurucusu Teoman'dır.",
  },
  {
    id: 35,
    question: "'Alper Tunga Destanı' hangi Türk topluluğuna aittir?",
    options: ["Asya Hunları", "Göktürkler", "İskitler (Sakalar)", "Uygurlar"],
    correctIndex: 2,
    explanation:
      "Alper Tunga Destanı İskitlere (Sakalara) aittir. Bu destanda geçen Alper Tunga, İranlıların Şehname'sinde Efrasiyap adıyla anlatılmıştır.",
  },
  {
    id: 36,
    question: "Türk edebiyatının bilinen ilk yazılı eseri olan Orhun Abideleri nerededir?",
    options: [
      "Orta Asya — Çin sınırında",
      "Moğolistan'da",
      "Sibirya'da",
      "Kazakistan'da",
    ],
    correctIndex: 1,
    explanation:
      "Orhun Abideleri Moğolistan'da bulunmaktadır. Orhun alfabesi ve Çin alfabesiyle yazılmıştır.",
  },
  {
    id: 37,
    question: "İlk Türk tarihçisi ve yazarı kimdir?",
    options: ["Bilge Kağan", "Yollug Tigin", "Tonyukuk", "Kül Tigin"],
    correctIndex: 2,
    explanation:
      "İlk Türk tarihçisi ve yazarı Vezir Tonyukuk'tur. Tonyukuk kendi anıtını kendisi yazarken diğer iki anıtı Yollug Tigin yazmıştır.",
  },
  {
    id: 38,
    question: "Yenisey Kitabeleri hangi özelliğiyle öne çıkar?",
    options: [
      "Türk edebiyatının ilk siyasetnamesidir",
      "Kırgızların mezar taşlarına yazdığı tek heceli yazılardır",
      "Çin sınırında bulunmuştur",
      "Göktürklere ait ilk yazılı eserdir",
    ],
    correctIndex: 1,
    explanation:
      "Yenisey Kitabeleri; Kırgızların mezar taşlarına yazdığı tek heceli yazılardır.",
  },
  {
    id: 39,
    question: "'Ergenekon ve Bozkurt' destanı hangi Türk topluluğuna aittir?",
    options: ["Asya Hunları", "Uygurlar", "Göktürkler", "İskitler"],
    correctIndex: 2,
    explanation:
      "Ergenekon ve Bozkurt destanları Göktürklere aittir. Türeyiş ve Göç destanları Uygurlar'a aittir.",
  },

  // ── İSKİTLER / SAKALAR (2 soru) ───────────────────────────────────
  {
    id: 40,
    question: "Üzengiyi ilk defa kullanan Türk topluluğu hangisidir?",
    options: ["Asya Hunları", "Göktürkler", "İskitler (Sakalar)", "Avarlar"],
    correctIndex: 2,
    explanation:
      "Üzengiyi ilk defa kullanan topluluk İskitlerdir (Sakalardır). Aynı zamanda ilk balbal (mezar taşı) dikip maden işlemeciliğinde 'Bozkırın Kuyumcuları' olarak anılmışlardır.",
  },
  {
    id: 41,
    question: "İskit hükümdarı Alper Tunga, İran destanı Şehname'de hangi adla anlatılmıştır?",
    options: ["Rüstem", "Zal", "Efrasiyap", "Siyavuş"],
    correctIndex: 2,
    explanation:
      "Alper Tunga, İran hükümdarı Kirus ile yıllarca savaşmıştır. Bu savaşlar Şehname destanında 'Efrasiyap' adıyla anlatılmıştır.",
  },

  // ── ASYA HUN DEVLETİ (4 soru) ─────────────────────────────────────
  {
    id: 42,
    question: "Tarihte bilinen ilk Türk devleti hangisidir ve kurucusu kimdir?",
    options: [
      "I. Göktürk Devleti — Bumin Kağan",
      "Asya Hun Devleti — Teoman",
      "İskit Devleti — Alper Tunga",
      "Avar Devleti — Bayan Han",
    ],
    correctIndex: 1,
    explanation:
      "Tarihte bilinen ilk Türk devleti Asya Hun Devleti'dir; kurucusu Teoman'dır. En önemli hükümdarı ise onlu sistemi kuran Mete Han'dır.",
  },
  {
    id: 43,
    question: "Çin'in Büyük Seddi'ni inşa etme sebebi nedir?",
    options: [
      "Moğol akınlarını durdurmak",
      "Hun akınlarını durdurmak",
      "İpek Yolu'nu korumak",
      "Göktürk saldırılarını önlemek",
    ],
    correctIndex: 1,
    explanation:
      "Çin İmparatoru, Asya Hun (Hiung-nu) akınlarını engellemek amacıyla MÖ 214 yılında Büyük Seddi inşa ettirmiştir.",
  },
  {
    id: 44,
    question: "Kavimler Göçü'nü başlatan lider kimdir ve bu göç hangi sonuçları doğurmuştur?",
    options: [
      "Mete Han — Orta Asya'da siyasi birliği sağladı",
      "Balamir — Roma'yı ikiye böldü, İlk Çağ'ı kapattı, Orta Çağ'ı başlattı",
      "Atilla — Bizans'ı vergi ödemeye zorladı",
      "Teoman — Çin'e seferler düzenledi",
    ],
    correctIndex: 1,
    explanation:
      "Kavimler Göçü'nü Kuzey Hun lideri Balamir başlatmıştır (MS 375). Bu göç Roma'yı ikiye böldü, İlk Çağ'ı kapattı, Orta Çağ'ı açtı ve kiliseyi güçlendirdi.",
  },
  {
    id: 45,
    question: "Mete Han'ın Türk tarihine en önemli katkısı nedir?",
    options: [
      "Orhun Abideleri'ni diktirmesi",
      "İstanbul'u kuşatması",
      "Orduda onlu sistemi kurarak Orta Asya'da siyasi birliği sağlaması",
      "Çin Seddi'ni inşa ettirmesi",
    ],
    correctIndex: 2,
    explanation:
      "Mete Han MÖ 209'da tahta çıkarak orduda onlu sistemi kurmuş ve Orta Asya'da siyasi birliği sağlayan ilk Türk hükümdarı olmuştur.",
  },

  // ── AVRUPA HUN DEVLETİ (4 soru) ───────────────────────────────────
  {
    id: 46,
    question: "Avrupa Hun Devleti'nin kurucusu ve en önemli hükümdarı kimlerdir?",
    options: [
      "Kurucusu Atilla, en önemli hükümdar Balamir",
      "Kurucusu Balamir, en önemli hükümdar Atilla",
      "Kurucusu Mete Han, en önemli hükümdar Atilla",
      "Kurucusu Attila, en önemli hükümdar Mete Han",
    ],
    correctIndex: 1,
    explanation:
      "Avrupa Hun Devleti'nin kurucusu Balamir'dir. En önemli hükümdarı ise Avrupa'nın büyük bölümüne hükmeden Atilla'dır.",
  },
  {
    id: 47,
    question: "Atilla ile Bizans arasında imzalanan Margos Barışı'nın önemi nedir?",
    options: [
      "Bizans, Hunlara yıllık vergi ödemeyi kabul etti",
      "Hunlar Bizans topraklarını terketti",
      "Bizans, Hristiyanlığı Hunlara kabul ettirdi",
      "Hunlar Bizans sınırlarını tanıdı",
    ],
    correctIndex: 0,
    explanation:
      "434 yılında imzalanan Margos Barışı ile Bizans, Hunlara yıllık vergi ödemeyi kabul etti. Bu, Bizans üzerinde Türk baskısının ilk resmî belgesidir.",
  },
  {
    id: 48,
    question: "Atilla'ya 'Tanrı'nın Kamçısı' unvanını verenler kimlerdir?",
    options: ["Bizanslılar", "Hristiyanlar (Romalılar)", "Persler", "Slavlar"],
    correctIndex: 1,
    explanation:
      "Atilla'ya Hristiyanlar (Romalılar) tarafından 'Tanrı'nın Kamçısı' unvanı verilmiştir. Atilla, Papa I. Leo'nun ricası üzerine 452'de Roma'yı bağışlamıştır.",
  },
  {
    id: 49,
    question: "Batı Roma'nın isteğiyle Avrupa Hunlarının savaştığı topluluk hangisidir ve bu mücadele hangi destana konu olmuştur?",
    options: [
      "Vizigotlar — Nibelungen Destanı",
      "Burgundlar — Nibelungen Destanı",
      "Franklar — İgor Destanı",
      "Vandallar — Şehname",
    ],
    correctIndex: 1,
    explanation:
      "Batı Roma'nın isteğiyle Avrupa Hunları Burgundlara karşı savaşmıştır. Bu mücadele Alman Nibelungen Destanı'na konu olmuştur.",
  },

  // ── AVARLAR (2 soru) ──────────────────────────────────────────────
  {
    id: 50,
    question: "İstanbul'u (Konstantinopolis) kuşatan ilk Türk devleti hangisidir?",
    options: ["Tuna Bulgarları", "Göktürkler", "Avarlar", "Peçenekler"],
    correctIndex: 2,
    explanation:
      "İstanbul'u kuşatan ilk Türk devleti Avarlardır; iki kez kuşatma yapmışlardır. Kurucuları Bayan Han'dır.",
  },
  {
    id: 51,
    question: "Avarların kurucusu kimdir?",
    options: ["Bumin Kağan", "Bayan Han", "Asparuh", "Kutluk Kağan"],
    correctIndex: 1,
    explanation:
      "Avarların kurucusu Bayan Han'dır. Avarlar hem Orta Asya hem de Avrupa'da devlet kurmuşlardır.",
  },

  // ── I. GÖKTÜRK DEVLETİ (4 soru) ───────────────────────────────────
  {
    id: 52,
    question: "'Türk' adıyla kurulan ilk devlet hangisidir ve kurucusu kimdir?",
    options: [
      "Asya Hunları — Teoman",
      "I. Göktürk Devleti — Bumin Kağan",
      "II. Göktürk Devleti — Kutluk Kağan",
      "Uygurlar — Kutluk Bilge Kül Kağan",
    ],
    correctIndex: 1,
    explanation:
      "'Türk' adıyla kurulan ilk devlet I. Göktürk Devleti'dir. Bumin Kağan, Avarları yenerek devleti kurmuş ve 'İl Kağan' unvanını almıştır (552).",
  },
  {
    id: 53,
    question: "İstemi Yabgu, hangi devletle ittifak kurarak Akhunları ortadan kaldırmıştır?",
    options: ["Bizans", "Sasaniler", "Çin", "Abbasiler"],
    correctIndex: 1,
    explanation:
      "I. Göktürk'ün batı kanadını yöneten İstemi Yabgu, Sasanilerle ittifak kurarak Akhunlara son vermiştir. Ardından Bizans ile anlaşıp İpek Yolu'na hâkim olmuştur.",
  },
  {
    id: 54,
    question: "Kürşat Ayaklanması (639) nedir?",
    options: [
      "Uygurların Göktürklere karşı başlattığı ayaklanma",
      "Çin esareti altındaki Türklerin Kürşat önderliğinde başlattığı ilk bağımsızlık mücadelesi",
      "Göktürklerin Çin'e saldırısı",
      "Karlukların Göktürklere isyanı",
    ],
    correctIndex: 1,
    explanation:
      "Kürşat Ayaklanması (639), Çin esareti altındaki Türklerin Kürşat önderliğinde başlattığı millî kurtuluş hareketidir; Türk tarihinin bilinen ilk bağımsızlık mücadelesidir.",
  },
  {
    id: 55,
    question: "Orta Asya'dan Bizans'a elçi gönderen ilk Türk devleti hangisidir?",
    options: ["Asya Hunları", "Uygurlar", "I. Göktürk Devleti", "Hazarlar"],
    correctIndex: 2,
    explanation:
      "I. Göktürk Devleti, Orta Asya'dan Bizans'a elçi gönderen ilk Türk devletidir. Bu ilişki İpek Yolu ticareti üzerindeki hakimiyet amacıyla kurulmuştur.",
  },

  // ── II. GÖKTÜRK (KUTLUKLAR) (3 soru) ─────────────────────────────
  {
    id: 56,
    question: "II. Göktürk Devleti'nin kurucusu kimdir ve ne unvanla tahta çıkmıştır?",
    options: [
      "Bilge Kağan — Kutluk",
      "Kutluk Kağan — İlteriş",
      "Tonyukuk — Aygucı",
      "Kül Tigin — Şad",
    ],
    correctIndex: 1,
    explanation:
      "II. Göktürk Devleti'nin kurucusu Kutluk Kağan'dır; 'İlteriş' unvanıyla tahta çıkmıştır. 50 yıllık Çin esaretinin ardından Türkleri yeniden birleştirmiştir (682).",
  },
  {
    id: 57,
    question: "Orhun Abideleri hangi dönemde dikilmiştir?",
    options: [
      "I. Göktürk Devleti — Mukan Kağan döneminde",
      "II. Göktürk Devleti — Bilge Kağan döneminde",
      "Uygurlar — Bögü Kağan döneminde",
      "Asya Hunları — Mete Han döneminde",
    ],
    correctIndex: 1,
    explanation:
      "Orhun Abideleri, II. Göktürk (Kutluklar) döneminde Bilge Kağan zamanında dikilmiştir (732). Türk edebiyatının bilinen ilk yazılı eseri ve ilk siyasetnamesidir.",
  },
  {
    id: 58,
    question: "II. Göktürk Devleti hangi ittifak tarafından yıkılmıştır?",
    options: [
      "Kırgızlar tarafından",
      "Çin tarafından",
      "Karluk, Basmil ve Uygur ittifakı tarafından",
      "Abbasiler tarafından",
    ],
    correctIndex: 2,
    explanation:
      "II. Göktürk Devleti, Karluk, Basmil ve Uygur ittifakı tarafından yıkılmıştır (744).",
  },

  // ── UYGURLAR (4 soru) ─────────────────────────────────────────────
  {
    id: 59,
    question: "Uygurlar hangi adla da anılmaktadır ve kurucusu kimdir?",
    options: [
      "'On Oklar' — Bögü Kağan",
      "'Dokuz Oğuzlar' — Kutluk Bilge Kül Kağan",
      "'On Uygurlar' — Kutluk Kağan",
      "'Yedi Kabileler' — Mete Han",
    ],
    correctIndex: 1,
    explanation:
      "Uygurlar 'Dokuz Oğuzlar' olarak da anılır. Kurucuları Kutluk Bilge Kül Kağan'dır.",
  },
  {
    id: 60,
    question: "Uygurlar hangi dini, hangi kağan döneminde benimsemiştir?",
    options: [
      "Budizm — Kutluk Bilge Kül Kağan",
      "Mani dini — Bögü Kağan",
      "İslamiyet — Almış Han",
      "Hristiyanlık — Boris Han",
    ],
    correctIndex: 1,
    explanation:
      "Uygurlar, Mani dinini Bögü Kağan döneminde benimsemiştir (762). Bu kabulle yerleşik hayata geçilmiş, hayvansal gıda yasaklanmış ve şehirlere 'Balıg' adı verilmiştir.",
  },
  {
    id: 61,
    question: "Türk tarihinde ilk kütüphane, ilk örgün eğitim kurumu ve ilk kağıt para hangi devlet döneminde ortaya çıkmıştır?",
    options: ["I. Göktürk Devleti", "Asya Hunları", "Uygurlar", "Karluklar"],
    correctIndex: 2,
    explanation:
      "Türk tarihinde ilk kütüphane, ilk örgün eğitim kurumu, ilk kağıt para kullanımı ve Türk tiyatrosunun temeli Uygurlar döneminde atılmıştır.",
  },
  {
    id: 62,
    question: "Uygur Devleti hangi topluluk tarafından yıkılmıştır?",
    options: ["Karluklar", "Göktürkler", "Kırgızlar", "Kıpçaklar"],
    correctIndex: 2,
    explanation:
      "Uygur Devleti 840 yılında Kırgızlar tarafından yıkılmıştır. Uygurların bir kısmı Çin'e, bir kısmı güneye kaçmıştır.",
  },

  // ── HAZARLAR (2 soru) ─────────────────────────────────────────────
  {
    id: 63,
    question: "Museviliği kabul eden tek Türk devleti hangisidir?",
    options: ["Peçenekler", "Tuna Bulgarları", "Hazarlar", "Kıpçaklar"],
    correctIndex: 2,
    explanation:
      "Museviliği kabul eden tek Türk devleti Hazarlardır (740). Farklı dinlere gösterdikleri hoşgörü nedeniyle bu dönem 'Hazar Barış Çağı' olarak anılır.",
  },
  {
    id: 64,
    question: "Hazarlar ile ilgili hangisi doğrudur?",
    options: [
      "Türk tarihinde ücretli ordu kuran ilk devlettir ve Müslüman Arapların İslamiyet'i bölgeye yaymasını engellemiştir",
      "İstanbul'u kuşatan ilk Türk devletidir",
      "Kavimler Göçü'nü başlatmışlardır",
      "Orhun Abideleri'ni diktirmişlerdir",
    ],
    correctIndex: 0,
    explanation:
      "Hazarlar, ordusuna ücretli asker alan ilk Türk devletidir. Müslüman Araplarla savaşarak bölgede İslamiyet'in yayılmasını engellemiştir.",
  },

  // ── TUNA BULGARLARI (2 soru) ──────────────────────────────────────
  {
    id: 65,
    question: "Tuna Bulgar Devleti'nin kurucusu kimdir?",
    options: ["Boris Han", "Asparuh", "Simon", "Bayan Han"],
    correctIndex: 1,
    explanation:
      "Tuna Bulgar Devleti'nin kurucusu Asparuh'tur. Boris Han döneminde ise Hristiyanlık kabul edilmiştir (864).",
  },
  {
    id: 66,
    question: "'Çar' unvanını kullanan ilk Türk hükümdarı kimdir?",
    options: ["Boris Han", "Asparuh", "Simon", "Almış Han"],
    correctIndex: 2,
    explanation:
      "Çar unvanını kullanan ilk Türk hükümdarı Tuna Bulgar hükümdarı Simon olmuştur.",
  },

  // ── İTİL BULGARLARI (1 soru) ──────────────────────────────────────
  {
    id: 67,
    question: "Doğu Avrupa'da Türk-İslam kültürünün ilk temsilcisi olan devlet hangisidir?",
    options: ["Hazarlar", "Tuna Bulgarları", "İtil (Volga) Bulgarları", "Kıpçaklar"],
    correctIndex: 2,
    explanation:
      "İtil (Volga) Bulgarları, Almış Han döneminde İslamiyet'i kabul etmiş (922) ve Doğu Avrupa'da Türk-İslam kültürünün ilk temsilcileri olmuşlardır.",
  },

  // ── KARLUKLAR (2 soru) ────────────────────────────────────────────
  {
    id: 68,
    question: "751 yılında gerçekleşen Talas Savaşı'nda Karluklar hangi tarafı tutmuştur?",
    options: ["Çin", "Abbasiler", "Bizans", "Sasaniler"],
    correctIndex: 1,
    explanation:
      "Talas Savaşı'nda (751) Karluklar, Abbasi saflarına geçmiştir. Bu karar savaşın Abbasi zaferiyle sonuçlanmasını sağlamış ve Orta Asya'da İslamiyet'in yayılmasının önünü açmıştır.",
  },
  {
    id: 69,
    question: "İslamiyet'i kabul eden ilk Türk boyu hangisidir?",
    options: ["Uygurlar", "Göktürkler", "Oğuzlar", "Karluklar"],
    correctIndex: 3,
    explanation:
      "İslamiyet'i kabul eden ilk Türk boyu Karluklardır. Karahanlıların kuruluşunda da etkili olmuşlardır.",
  },

  // ── PEÇENEKLER (1 soru) ───────────────────────────────────────────
  {
    id: 70,
    question: "Malazgirt Savaşı'nda (1071) Peçenekler ne yapmıştır?",
    options: [
      "Bizans saflarında savaşmış ve Bizans'ın kazanmasını sağlamıştır",
      "Savaşa katılmamıştır",
      "Bizans saflarındayken Selçuklu tarafına geçerek savaşın kazanılmasına katkı sağlamıştır",
      "Selçukluların yanında başından beri savaşmıştır",
    ],
    correctIndex: 2,
    explanation:
      "Malazgirt Savaşı'nda (1071) Bizans saflarındaki Peçenekler savaş ortasında Selçuklu tarafına geçmiştir; bu hamle savaşın Selçuklular lehine sonuçlanmasında belirleyici olmuştur.",
  },

  // ── KIPÇAKLAR / KUMANLAR (2 soru) ─────────────────────────────────
  {
    id: 71,
    question: "Oğuzlarla mücadeleleri hangi esere konu olan Türk topluluğu hangisidir?",
    options: ["Peçenekler", "Kıpçaklar (Kumanlar)", "Avarlar", "Macarlar"],
    correctIndex: 1,
    explanation:
      "Oğuzlar ile Kıpçakların mücadeleleri Dede Korkut Hikayeleri'ne konu olmuştur. Ayrıca Kıpçakların Ruslarla mücadeleleri İgor Destanı'na konu olmuştur.",
  },
  {
    id: 72,
    question: "Codex Cumanicus adlı sözlük hangi Türk topluluğuna aittir?",
    options: ["Uygurlar", "Peçenekler", "Kıpçaklar (Kumanlar)", "Macarlar"],
    correctIndex: 2,
    explanation:
      "Codex Cumanicus, Kıpçaklara (Kumanlara) ait bir sözlüktür. Kıpçaklar aynı zamanda Bizans ile anlaşarak 1091'de Peçenekleri mağlup etmişlerdir.",
  },

  // ── OĞUZLAR (1 soru) ──────────────────────────────────────────────
  {
    id: 73,
    question: "Büyük Selçuklu, Anadolu Selçuklu ve Osmanlı devletlerini kuran Türk boyu hangisidir?",
    options: ["Karluklar", "Kıpçaklar", "Oğuzlar", "Uygurlar"],
    correctIndex: 2,
    explanation:
      "Oğuzlar, Türk tarihinin en köklü boylarından biridir. Büyük Selçuklu, Anadolu Selçuklu ve Osmanlı devletlerini kuran boydur.",
  },

  // ── MACARLAR (1 soru) ─────────────────────────────────────────────
  {
    id: 74,
    question: "Türk tarihinde ilk Türkoloji Enstitüsü'nü kuran topluluk hangisidir?",
    options: ["Kıpçaklar", "Uygurlar", "Macarlar", "Oğuzlar"],
    correctIndex: 2,
    explanation:
      "Türk tarihinde ilk Türkoloji Enstitüsü Macarlar tarafından kurulmuştur. Macarlar soylarını Atilla'ya dayandırır; bilinen ilk liderleri Arpad'dır.",
  },
];

export default quizQuestions;
