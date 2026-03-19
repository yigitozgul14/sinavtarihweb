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
];

export default quizQuestions;
