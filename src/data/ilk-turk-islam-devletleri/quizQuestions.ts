import type { QuizQuestion } from "@/types/period-data";

const quizQuestions: QuizQuestion[] = [
  // ── HÜKÜMDAR & DEVLET (5 soru) ────────────────────────────────────
  {
    id: 1,
    question: "Türk-İslam devletlerinde 'Sultan' unvanını ilk kez kullanan hükümdar kimdir?",
    options: [
      "Tuğrul Bey",
      "Gazneli Mahmut",
      "Melikşah",
      "Alparslan",
    ],
    correctIndex: 1,
    explanation:
      "Sultan unvanını ilk kez Gazneli Mahmut kullanmıştır. 'Sultan-ı Azam' unvanını ise Büyük Selçuklu hükümdarı Melikşah kullanmıştır.",
  },
  {
    id: 2,
    question: "Türk-İslam devletlerinde 'Kut' anlayışı İslami yorumla nasıl tanımlanmıştır?",
    options: [
      "Halkın hükümdara verdiği yetki",
      "Ordunun hükümdara tanıdığı güç",
      "Allah'ın nasibi ve takdiri olarak hükümdara verilen iktidar",
      "Kurultayın onayladığı siyasi yetki",
    ],
    correctIndex: 2,
    explanation:
      "İslam öncesinden gelen Kut inancı İslami bir anlam kazanarak 'Allah'ın nasibi ve takdiri' olarak yorumlanmıştır.",
  },
  {
    id: 3,
    question: "Aşağıdakilerden hangisi Türk-İslam devletlerinde hükümdarın hakimiyet alametlerinden biri değildir?",
    options: [
      "Hutbe okutmak",
      "Para bastırmak",
      "Fetva vermek",
      "Tuğra kullanmak",
    ],
    correctIndex: 2,
    explanation:
      "Fetva vermek hükümdarın yetkisi dışındadır; bu yetki din adamlarına aittir. Hutbe, para ve tuğra ise hakimiyet alametlerindendir.",
  },
  {
    id: 4,
    question: "Büyük Selçuklularda hükümete (Büyük Divan) verilen isim nedir?",
    options: [
      "Divan-ı Arz",
      "Divan-ı İnşa",
      "Divan-ı Saltanat / Divan-ı Âlâ",
      "Pervane Divanı",
    ],
    correctIndex: 2,
    explanation:
      "Büyük Selçuklularda tüm divanların bir araya gelmesiyle oluşan hükümete 'Divan-ı Saltanat' ya da 'Divan-ı Âlâ' adı verilmiştir.",
  },
  {
    id: 5,
    question: "Türk-İslam devletlerinde 'Hilat ve Tıraz' ne anlama gelir?",
    options: [
      "Hükümdarın kılıç ve miğferi",
      "Abbasi halifesinin gönderdiği giysi ve aksesuarlar",
      "Sarayın selamlık ve harem bölümleri",
      "Orduya verilen ikta gelirleri",
    ],
    correctIndex: 1,
    explanation:
      "Hilat ve Tıraz; Abbasi halifesinin hükümdara meşruiyet sembolü olarak gönderdiği giysi, kemer ve külah gibi hediyelerdir.",
  },

  // ── SARAY & DİVAN (4 soru) ────────────────────────────────────────
  {
    id: 6,
    question: "Selçuklularda saraya verilen isim nedir?",
    options: [
      "Kapu",
      "Dergâh / Bargâh",
      "Enderun",
      "Otağ",
    ],
    correctIndex: 1,
    explanation:
      "Karahanlılarda saraya 'Kapu', Selçuklularda ise 'Dergâh' ya da 'Bargâh' adı verilmiştir.",
  },
  {
    id: 7,
    question: "Mali işlerin görüldüğü Divan-ı İstifa'nın başındaki görevliye ne ad verilir?",
    options: [
      "Tuğrai",
      "Pervaneci",
      "Müstevfi",
      "Emir-i Arız",
    ],
    correctIndex: 2,
    explanation:
      "Divan-ı İstifa mali işlerin yürütüldüğü divandır ve yöneticisine Müstevfi denirdi.",
  },
  {
    id: 8,
    question: "Hükümdar fermanlarına tuğra çekilmesi ve yazışmaları yürüten divan hangisidir?",
    options: [
      "Divan-ı Arz",
      "Divan-ı İşraf",
      "Pervane Divanı",
      "Divan-ı İnşa (Tuğra Divanı)",
    ],
    correctIndex: 3,
    explanation:
      "Divan-ı İnşa (Tuğra Divanı), iç ve dış yazışmaları ile hükümdar fermanlarına tuğra çekilmesi işini yürütürdü; yöneticisine Tuğrai denirdi.",
  },
  {
    id: 9,
    question: "Türk-İslam sarayının en önemli görevlisi olan ve tüm saray personelinin kendisine karşı sorumlu olduğu kişi kimdir?",
    options: [
      "Naib",
      "Müşrif-i Memalik",
      "Büyük Hacip",
      "Emirü'l-Ümera",
    ],
    correctIndex: 2,
    explanation:
      "Büyük Hacip sarayın en önemli görevlisidir; saray görevlileri ona karşı sorumludur.",
  },

  // ── ORDU & TOPRAK (4 soru) ────────────────────────────────────────
  {
    id: 10,
    question: "Türk-İslam devletlerinde 'Gulamhane'de eğitilerek oluşturulan asker sınıfı hangisidir?",
    options: [
      "Türkmen Kuvvetleri",
      "Sipahiyan",
      "Gulamlar",
      "Hassa Askerleri",
    ],
    correctIndex: 2,
    explanation:
      "Gulamlar; satın alınan veya esir edilen çocukların Gulamhane adı verilen ocaklarda eğitilmesiyle oluşturulurdu.",
  },
  {
    id: 11,
    question: "İkta askerleri (Sipahiyan) hakkında aşağıdakilerden hangisi doğrudur?",
    options: [
      "Devlet hazinesinden düzenli maaş alırlardı",
      "Gulamhanede yetiştirilmiş köle askerlerdi",
      "İkta verilen devlet adamlarının beslemek zorunda olduğu atlı askerlerdir",
      "Yalnızca sınır bölgelerinde görev yaparlardı",
    ],
    correctIndex: 2,
    explanation:
      "Sipahiyan; iktâ verilen melik, vali ve devlet adamlarının beslemek zorunda olduğu atlı askerlerdi ve devlet hazinesinden maaş almazlardı.",
  },
  {
    id: 12,
    question: "Geliri sultana ve saraya ait olan arazi türü hangisidir?",
    options: [
      "İkta Arazi",
      "Vakıf Arazi",
      "Mülk Arazi",
      "Has Arazi",
    ],
    correctIndex: 3,
    explanation:
      "Has Arazi, geliri doğrudan sultana ve saraya ait olan arazidir.",
  },
  {
    id: 13,
    question: "Türk-İslam devletlerinde toprakların büyük bölümü hangi genel isimle anılırdı?",
    options: [
      "Vakıf arazi",
      "Miri arazi",
      "İkta arazi",
      "Mülk arazi",
    ],
    correctIndex: 1,
    explanation:
      "Türk-İslam devletlerinde toprak genel olarak devletin malıdır; bu arazilere 'miri arazi' adı verilmiştir.",
  },

  // ── HUKUK (3 soru) ───────────────────────────────────────────────
  {
    id: 14,
    question: "Türk-İslam devletlerinde askeri davalara bakan kadıya ne ad verilir?",
    options: [
      "Kadi'l-Kudat",
      "Kadıleşker (Kazasker)",
      "Emir-i Dad",
      "Müşrif",
    ],
    correctIndex: 1,
    explanation:
      "Askeri davalara 'Kadıleşker' (kazasker) bakardı. Kadi'l-Kudat ise kadıların başında bulunan baş kadının unvanıdır.",
  },
  {
    id: 15,
    question: "Divan-ı Mezalim hakkında aşağıdakilerden hangisi yanlıştır?",
    options: [
      "Sultan başkanlık ederdi",
      "Kadı kararlarına itirazlar görüşülürdü",
      "Siyasi suçlular burada yargılanırdı",
      "Şeri davalara bakan sıradan bir mahkemeydi",
    ],
    correctIndex: 3,
    explanation:
      "Divan-ı Mezalim, sultan başkanlığındaki yüksek mahkemedir; sıradan şeri mahkeme değildir. Kadı kararlarına itirazlar ve siyasi suçlar burada görülürdü.",
  },
  {
    id: 16,
    question: "Türk-İslam devletlerinde örfi davalara bakan görevli kimdir?",
    options: [
      "Kadı",
      "Müstevfi",
      "Emir-i Dad",
      "Muhtesip",
    ],
    correctIndex: 2,
    explanation:
      "Örfi davalara 'Emir-i Dad' bakardı. Kadı ise şeri davalara bakardı.",
  },

  // ── SOSYAL & AHİLİK (3 soru) ─────────────────────────────────────
  {
    id: 17,
    question: "Anadolu'da Ahiliğin kurucusu olarak kabul edilen kişi kimdir?",
    options: [
      "Hoca Ahmet Yesevi",
      "Ahi Evran (Mahmut Nureddin)",
      "Yunus Emre",
      "Hacı Bektaşi Veli",
    ],
    correctIndex: 1,
    explanation:
      "Anadolu'da Ahiliğin kurucusu asıl adı Mahmut Nureddin olan Ahi Evran'dır.",
  },
  {
    id: 18,
    question: "Ahilik teşkilatında 'Gedik' ne anlama gelir?",
    options: [
      "Esnafın ödediği vergi belgesi",
      "Dükkan açma belgesi",
      "Usta çırak ilişkisini düzenleyen sözleşme",
      "Fiyat belirleme mekanizması",
    ],
    correctIndex: 1,
    explanation:
      "Gedik, dükkan açma belgesidir. Narh ise alt ve üst fiyatları belirleyen fiyat mekanizmasıdır.",
  },
  {
    id: 19,
    question: "Anadolu Selçuklu Devleti'nde zarar gören tüccarın zararının devlet hazinesinden karşılanması hangi anlayışın yansımasıdır?",
    options: [
      "İkta sistemi",
      "Ahilik teşkilatının denetimi",
      "Devlet sigortası anlayışı",
      "Narh uygulaması",
    ],
    correctIndex: 2,
    explanation:
      "Anadolu Selçukluları, ticaret yollarında zarar gören tüccarın zararını devlet hazinesinden karşılamıştır; bu bir nevi devlet sigortası anlayışıdır.",
  },

  // ── EĞİTİM & BİLİM (4 soru) ──────────────────────────────────────
  {
    id: 20,
    question: "Anadolu'nun ilk medresesi hangisidir?",
    options: [
      "Koca Hasan Medresesi (Kayseri, 1193)",
      "Nizamiye Medresesi (Bağdat)",
      "Yağıbasan Medresesi (Tokat/Niksar, 1151)",
      "Cacabey Medresesi (Kırşehir)",
    ],
    correctIndex: 2,
    explanation:
      "Anadolu'nun ilk medresesi 1151'de Danişmentoğullarına ait Yağıbasan Medresesi'dir (Tokat/Niksar). Koca Hasan Medresesi ise Anadolu Selçuklularının ilk medresesidir.",
  },
  {
    id: 21,
    question: "Nizamiye Medresesi'ni kim ve nerede kurmuştur?",
    options: [
      "Tuğrul Bey, Nişabur'da",
      "Vezir Nizamülmülk, Bağdat'ta",
      "Gazneli Mahmut, Gazne'de",
      "Alparslan, İsfahan'da",
    ],
    correctIndex: 1,
    explanation:
      "Nizamiye Medresesi Büyük Selçuklu veziri Nizamülmülk tarafından Bağdat'ta kurulmuştur. Amaç memur ve bilim insanı yetiştirmekti.",
  },
  {
    id: 22,
    question: "Medreselerde ilk burslu öğrencilik sistemini uygulayan devlet hangisidir?",
    options: [
      "Büyük Selçuklu Devleti",
      "Gazneliler",
      "Karahanlılar",
      "Eyyubiler",
    ],
    correctIndex: 2,
    explanation:
      "İlk burslu öğrencilik sistemini uygulayan Karahanlılardır.",
  },
  {
    id: 23,
    question: "Cacabey Medresesi (Kırşehir) hangi işlev için de kullanılmıştır?",
    options: [
      "Darüşşifa (hastane)",
      "Rasathane (gözlemevi)",
      "Kervansaray",
      "Saray okulu (Enderun)",
    ],
    correctIndex: 1,
    explanation:
      "Cacabey Medresesi hem medrese hem de rasathane olarak kullanılmıştır.",
  },

  // ── BİLİM ADAMLARI (3 soru) ──────────────────────────────────────
  {
    id: 24,
    question: "\"Muallim-i Sani\" (İkinci Öğretmen) unvanıyla tanınan ve bilimleri sınıflandıran Türk-İslam bilgini kimdir?",
    options: [
      "İbn Sina",
      "Gazali",
      "Farabi",
      "El-Biruni",
    ],
    correctIndex: 2,
    explanation:
      "Farabi 'Muallim-i Sani' (İkinci Öğretmen) olarak bilinir. Bilimleri sınıflandırmış, Aristo mantığını en iyi şekilde açıklamıştır.",
  },
  {
    id: 25,
    question: "Sibernetiğin kurucusu kabul edilen ve Artuklular döneminde yaşayan bilim insanı kimdir?",
    options: [
      "Harezmi",
      "Ömer Hayyam",
      "El-Cezeri",
      "Uluğ Bey",
    ],
    correctIndex: 2,
    explanation:
      "El-Cezeri, Artuklular döneminde yaşamış ve sibernetiğin kurucusu olarak kabul edilmektedir.",
  },
  {
    id: 26,
    question: "İbn Sina'nın Avrupa'da yüzyıllarca ders kitabı olarak kullanılan eseri hangisidir?",
    options: [
      "Kitabü'l-Cebr ve'l-Mukabele",
      "El Kanun fit-Tıp",
      "İhsaü'l-Ulüm",
      "Asarü'l-Bakiye",
    ],
    correctIndex: 1,
    explanation:
      "İbn Sina'nın 'El Kanun fit-Tıp' adlı eseri Avrupa'da uzun yıllar ders kitabı olarak kullanılmıştır.",
  },

  // ── EDEBİYAT (4 soru) ────────────────────────────────────────────
  {
    id: 27,
    question: "Kutadgu Bilig kime sunulmuştur ve yazarı kimdir?",
    options: [
      "Abbasi Halifesi El-Muktedi'ye — Kaşgarlı Mahmut",
      "Tamgaç Buğra Han'a — Yusuf Has Hacib",
      "Gazneli Mahmut'a — Firdevsi",
      "Alparslan'a — Nizamülmülk",
    ],
    correctIndex: 1,
    explanation:
      "Kutadgu Bilig, Yusuf Has Hacib tarafından Tamgaç Buğra Han'a sunulmuştur. Türk-İslam edebiyatının ilk yazılı örneğidir.",
  },
  {
    id: 28,
    question: "Divan-ı Lügati't-Türk hakkında aşağıdakilerden hangisi yanlıştır?",
    options: [
      "Kaşgarlı Mahmut tarafından yazılmıştır",
      "Abbasi Halifesi El-Muktedi'ye sunulmuştur",
      "İlk Türk dünyası haritasını içermektedir",
      "Gazneli Mahmut'a sunulan bir siyasetnamedir",
    ],
    correctIndex: 3,
    explanation:
      "Divan-ı Lügati't-Türk bir siyasetname değil ansiklopedik bir sözlüktür ve Gazneli Mahmut'a değil Abbasi Halifesi El-Muktedi'ye sunulmuştur.",
  },
  {
    id: 29,
    question: "Babürname ne tür bir eserdir ve kim tarafından yazılmıştır?",
    options: [
      "Farsça yazılmış bir destan — Firdevsi",
      "Türkçe yazılmış anı/otobiyografi eseri — Babür Şah",
      "Arapça yazılmış siyasetname — Nizamülmülk",
      "Çağatay Türkçesiyle yazılmış sözlük — Ali Şir Nevai",
    ],
    correctIndex: 1,
    explanation:
      "Babürname, Babür Şah'ın kendi yaşam hikayesini ve anılarını Türkçe olarak yazdığı eserdir.",
  },
  {
    id: 30,
    question: "Ali Şir Nevai'nin 'Muhakemet'ül-Lügateyn' adlı eserinin amacı nedir?",
    options: [
      "Türk ve Moğol dillerini karşılaştırmak",
      "Türkçenin Farsçadan daha zengin bir dil olduğunu kanıtlamak",
      "Arapça ile Türkçenin ortak köklerini göstermek",
      "Çağatay Türkçesinin Osmanlıcadan üstünlüğünü savunmak",
    ],
    correctIndex: 1,
    explanation:
      "Ali Şir Nevai, 'Muhakemet'ül-Lügateyn' (İki Dilin Karşılaştırması) adlı eserini Türkçenin Farsçadan daha zengin bir dil olduğunu ispatlamak için yazmıştır.",
  },
];

export default quizQuestions;
