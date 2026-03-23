import type { CulturePageData } from "@/types/period-data";

const culturePages: CulturePageData[] = [
  // ─── KAPAK ──────────────────────────────────────────────────────
  {
    id: "kapak",
    title: "Türk-İslam Devletleri\nKültür ve Medeniyeti",
    subtitle: "Devlet · Ordu · Hukuk · Bilim · Edebiyat · Sanat",
    content: [],
    isCover: true,
  },

  // ─── SAYFA 1: HÜKÜMDAR — KUT & YETKİ ───────────────────────────
  {
    id: "hukumdar-1",
    title: "Hükümdar",
    subtitle: "Kut, Yetki ve İslami Dönüşüm",
    content: [
      {
        type: "paragraph",
        text: "İslam öncesinden gelen Kut inancı İslami bir anlam kazanarak \"Allah'ın nasibi ve takdiri\" olarak yorumlanmıştır. \"Ülkenin hükümdar ve ailesinin ortak malı\" olduğu şeklindeki egemenlik anlayışı devam etmiştir.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Hükümdarın yetki ve görevleri:",
      },
      {
        type: "list",
        items: [
          "Devlet yönetir, ferman ve buyruk verir",
          "Orduya komuta eder",
          "Büyük davalara bakar",
          "Fetva veremez (bu yetki din adamlarına aittir)",
        ],
      },
    ],
  },

  // ─── SAYFA 2: HÜKÜMDAR — UNVANLAR & ALAMETLER ──────────────────
  {
    id: "hukumdar-2",
    title: "Hükümdar Unvanları ve Alametleri",
    subtitle: "Han'dan Sultan'a",
    content: [
      {
        type: "paragraph",
        text: "Hükümdar unvanları:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Han, Hakan, Melik, Emir", def: "Genel Türk hükümdar unvanları" },
          { term: "Sultan", def: "İlk kez Gazneli Mahmut kullanmıştır" },
          { term: "Sultan-ı Azam", def: "Büyük Selçuklu hükümdarı Melikşah'ın unvanı" },
          { term: "Keykavus, Keyhüsrev, Keykubat", def: "Anadolu Selçuklu unvanları" },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Hakimiyet alametleri:",
      },
      {
        type: "list",
        items: [
          "Otağ (hükümdar çadırı), Örgin (taht)",
          "Tuğ, Sancak (Alem), Davul (Nevbet)",
          "Taç, Sorguç, Yay, Tuğra, Saray",
          "Para bastırmak ve hutbe okutmak",
          "Hilat ve Tıraz (Abbasi halifesinden gelen giysiler)",
          "Çetr (saltanat şemsiyesi), Asa",
        ],
      },
    ],
  },

  // ─── SAYFA 3: SARAY ─────────────────────────────────────────────
  {
    id: "saray",
    title: "Saray",
    subtitle: "Bölümleri ve Adlandırmalar",
    content: [
      {
        type: "paragraph",
        text: "Hükümdar ve ailesi sarayda otururdu. Saray üç bölümden oluşurdu:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Selamlık", def: "Resmi kabul ve devlet işleri bölümü" },
          { term: "Harem", def: "Hükümdar ailesi ve cariyeler" },
          { term: "Enderun", def: "Saray okulu ve iç hizmet" },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Saraya verilen isimler:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Kapu", def: "Karahanlılarda sarayın adı" },
          { term: "Dergâh / Bargâh", def: "Selçuklularda sarayın adı" },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Büyük Hacip: Sarayın en önemli görevlisidir. Tüm saray mensupları ona karşı sorumludur.",
      },
    ],
  },

  // ─── SAYFA 4: HÜKÜMET (DIVAN) — TEMEL YAPI ─────────────────────
  {
    id: "divan-1",
    title: "Hükümet (Büyük Divan)",
    subtitle: "Vezir ve Temel Yapı",
    content: [
      {
        type: "paragraph",
        text: "Devlet meseleleri konularına göre \"divan\" adı verilen dairelerde görüşülür ve karara bağlanırdı.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Büyük Divan (Divan-ı Saltanat / Divan-ı Âlâ)",
            def: "Tüm divanların bir araya gelmesiyle oluşan hükümet; Selçuklulardaki adı",
          },
          {
            term: "Vezir",
            def: "Hükümetin başı; devlet yönetiminde hükümdardan sonra en yetkili kişi",
          },
          {
            term: "Niyabet-i Saltanat Divanı",
            def: "Hükümdar başkentte yokken devletin günlük işlerini yürütür; başında Naib bulunur",
          },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Divanda alınan kararlar hükümdarın onayından geçtikten sonra uygulamaya konulurdu.",
      },
    ],
  },

  // ─── SAYFA 5: DİVAN TÜRLERİ ────────────────────────────────────
  {
    id: "divan-2",
    title: "Divan Türleri",
    subtitle: "İstifa'dan Pervane'ye",
    content: [
      {
        type: "term-list",
        entries: [
          {
            term: "Divan-ı İstifa",
            def: "Mali işlerin görüldüğü divan — yöneticisi: Müstevfi",
          },
          {
            term: "Divan-ı İşraf",
            def: "Mali ve idari işleri denetleyen divan — yöneticisi: Müşrif-i Memalik",
          },
          {
            term: "Divan-ı Arz",
            def: "Ordunun ihtiyaçlarını tespit eder ve maaşları öder — yöneticisi: Emir-i Arız",
          },
          {
            term: "Divan-ı İnşa (Tuğra Divanı)",
            def: "İç ve dış yazışmalar ile hükümdar fermanlarına tuğra çekilmesi — yöneticisi: Tuğrai",
          },
          {
            term: "Pervane Divanı",
            def: "Ele geçirilen toprakların kaydı ve ikta olarak dağıtımı — yöneticisi: Pervaneci",
          },
        ],
      },
    ],
  },

  // ─── SAYFA 6: TAŞRA TEŞKİLATI ──────────────────────────────────
  {
    id: "tasra",
    title: "Taşra Teşkilatı",
    subtitle: "Eyaletler ve Görevliler",
    content: [
      {
        type: "paragraph",
        text: "İlk Türk-İslam devletlerinde ülke eyalet adı verilen idari bölgelere ayrılmıştır. Selçuklu prens/melikleri, atabey unvanlı eğitmenleriyle taşrada yönetim tecrübesi kazanırdı.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Türkiye Selçuklularında eyalet çeşitleri:",
      },
      {
        type: "term-list",
        entries: [
          {
            term: "Meliklerin Yönettiği Eyaletler",
            def: "Atabey eşliğinde meliklerin yönetici olarak gönderildiği eyaletler",
          },
          {
            term: "Divan Dairesi Eyaletleri",
            def: "Sivil ve askeri idarenin başı olan subaşılar tarafından yönetilir",
          },
          {
            term: "Bizans Sınırındaki Eyaletler",
            def: "Uç beyi yönetir; sınır güvenliği sağlanır",
          },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Eyaletlerdeki görevliler:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Şıhne / Melik", def: "Askeri vali / hanedan üyesi vali (mülki)" },
          { term: "Kadı", def: "Adli yönetim" },
          { term: "Amil", def: "Mali yönetim" },
          { term: "Muhtesip", def: "Çarşı ve ticaret denetimi" },
        ],
      },
    ],
  },

  // ─── SAYFA 7: TOPRAK SİSTEMİ ────────────────────────────────────
  {
    id: "toprak",
    title: "Toprak Sistemi",
    subtitle: "Has, İkta, Vakıf, Mülk",
    content: [
      {
        type: "paragraph",
        text: "Türk-İslam devletlerinde toprak genel olarak devletin malıdır; bu arazilere miri arazi adı verilmiştir.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Has Arazi",
            def: "Geliri sultana ve saraya ait arazi",
          },
          {
            term: "İkta Arazi",
            def: "Vergileri devlet görevlilerine (ikta sahibi) maaş ve hizmet karşılığı bırakılan arazi",
          },
          {
            term: "Vakıf Arazi",
            def: "Geliri dini, ilmi ve sosyal hizmetler için ayrılan arazi",
          },
          {
            term: "Mülk Arazi",
            def: "Ev, ağıl, bahçe gibi her türlü tasarruf hakkı kişiye ait özel mülk",
          },
        ],
      },
    ],
  },

  // ─── SAYFA 8: ORDU ──────────────────────────────────────────────
  {
    id: "ordu",
    title: "Ordu",
    subtitle: "Gulamlar, İkta, Türkmen, Bağlı Kuvvetler",
    content: [
      {
        type: "term-list",
        entries: [
          {
            term: "1. Gulamlar",
            def: "Satın alınan veya esir alınan çocuklar Gulamhane'de eğitilir. Gulaman-ı Saray sultanı korur (3 ayda bir maaş). Hassa askerleri ordunun esas unsurudur; Türklerden oluşur ve ikta geliri alır.",
          },
          {
            term: "2. İkta Askerleri (Sipahiyan)",
            def: "İkta verilen melik, vali ve devlet adamlarının beslemek zorunda olduğu atlı askerler. Devlet hazinesinden maaş almazlar.",
          },
          {
            term: "3. Türkmen Kuvvetleri",
            def: "Sınır bölgelerinde her an savaşa hazır bekleyen atlı birlikler",
          },
          {
            term: "4. Bağlı Beylik ve Devlet Askerleri",
            def: "Gerektiğinde gönderilen kuvvetler",
          },
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          { term: "Emirü'l-Ümera", def: "Ordu komutanı" },
          { term: "Dizdar", def: "Kale komutanı" },
          { term: "Reisü'l-Bahr / Melikü's-Sevahil", def: "Anadolu Selçuklu donanma komutanı" },
        ],
      },
    ],
  },

  // ─── SAYFA 9: HUKUK ─────────────────────────────────────────────
  {
    id: "hukuk",
    title: "Hukuk",
    subtitle: "Şeri ve Örfi Hukuk",
    content: [
      {
        type: "paragraph",
        text: "Türk-İslam devletlerinde hukuk şeri ve örfi olmak üzere ikiye ayrılırdı.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Şeri Hukuk",
            def: "Kaynağını Kur'an'dan alır; İslam hukukudur. Şeri davalara kadılar bakar. Başkadıya Kadi'l-Kudat denir.",
          },
          {
            term: "Örfi Hukuk",
            def: "Halk örf ve adetleri ile hükümdar emirlerinden oluşur; şeri hükümlere aykırı olamaz. Örfi davalara Emir-i Dad bakar.",
          },
          {
            term: "Kadıleşker (Kazasker)",
            def: "Askeri davalara bakan kadı",
          },
          {
            term: "Divan-ı Mezalim",
            def: "Sultan başkanlığındaki yüksek mahkeme. Kadı kararlarına itirazlar, siyasi suçlar ve şikâyet edilen devlet memurları burada yargılanır.",
          },
        ],
      },
    ],
  },

  // ─── SAYFA 10: SOSYAL & İKTİSADİ HAYAT ─────────────────────────
  {
    id: "sosyal",
    title: "Sosyal ve İktisadi Hayat",
    subtitle: "Ahilik ve Ticaret",
    content: [
      {
        type: "paragraph",
        text: "Göçebe unsurların yerleşik hayata geçirilme (iskan) nedenleri:",
      },
      {
        type: "list",
        items: [
          "Düzenli vergi ve asker alınmasını kolaylaştırmak",
          "Tarım alanlarını genişletmek",
          "Göçebe ve yerleşik unsurlar arasındaki çatışmaları durdurmak",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Ahilik: Aynı iş kolundan esnafın ahi baba etrafında toplandığı dini, sosyal ve ekonomik örgütlenme.",
      },
      {
        type: "term-list",
        entries: [
          { term: "Ahi Evran", def: "Anadolu'da Ahiliğin kurucusu (asıl adı Mahmut Nureddin)" },
          { term: "Narh", def: "Fiyat belirleme; alt ve üst fiyatları Ahiler belirler" },
          { term: "Gedik", def: "Dükkan açma belgesi" },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Anadolu Selçuklu ticaret politikası: Yolların güvenliği sağlandı, zarar gören tüccarın zararı devlet karşıladı, kervansaray yapımına önem verildi, Venediklilere ticari imtiyazlar verildi.",
      },
    ],
  },

  // ─── SAYFA 11: EĞİTİM VE BİLİM ─────────────────────────────────
  {
    id: "egitim",
    title: "Eğitim ve Bilim",
    subtitle: "Medreseler ve İlk Örnekler",
    content: [
      {
        type: "paragraph",
        text: "Türk-İslam eğitim kurumlarının merkezinde medreseler vardır. İlk örnekleri Karahanlılar dönemine aittir (Tabgaç Buğra Han Medresesi – Semerkant). İlk burslu öğrencilik sistemini uygulayan da Karahanlılardır.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "Medreselerde eğitim dili Arapçaydı; eğitim temelde dini nitelikteydi",
          "Okutulan dersler: tefsir, hadis, kelam, fıkıh, icma, kıraat",
          "Büyük Selçuklu'da ilk medrese Tuğrul Bey tarafından Nişabur'da açıldı",
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Nizamiye Medresesi (Bağdat)",
            def: "Büyük Selçuklu veziri Nizamülmülk tarafından kuruldu. Pozitif bilimlerin de okutulduğu bu medresenin amacı memur ve bilim insanı yetiştirmekti.",
          },
          {
            term: "Yağıbasan Medresesi (1151 – Tokat/Niksar)",
            def: "Danişmentoğullarına ait; Anadolu'nun ilk medresesidir.",
          },
          {
            term: "Koca Hasan Medresesi (1193 – Kayseri)",
            def: "Anadolu Selçuklularının ilk medresesidir.",
          },
          {
            term: "Bimaristan / Darüşşifa",
            def: "Hastane-tıp okulu işlevi gören kurumlar",
          },
        ],
      },
    ],
  },

  // ─── SAYFA 12: BİLİM ADAMLARI ───────────────────────────────────
  {
    id: "bilim-adamlari",
    title: "Bilim Adamları",
    subtitle: "Farabi'den El-Cezeri'ye",
    content: [
      {
        type: "term-list",
        entries: [
          {
            term: "Farabi (Alfarabyus)",
            def: "\"Muallim-i Sani\" (İkinci Öğretmen). Bilimleri sınıflandırdı. Eserleri: İhsaü'l-Ulüm, El-Medinetü'l-Fazıla (Erdemli Kent), Kitabü'l-Musikî el-Kebir.",
          },
          {
            term: "İbn Sina (Avicenna)",
            def: "Tıp dahisi. \"El Kanun fit-Tıp\" adlı eseri Avrupa'da yüzyıllarca ders kitabı olarak kullanıldı.",
          },
          {
            term: "El-Biruni",
            def: "Geometri, fizik ve coğrafya. Enlem-boylam dairelerini tespit etti, dünyanın çapını hesapladı. Eseri: Asarü'l-Bakiye.",
          },
          {
            term: "Harezmi",
            def: "Cebir'i sistemleştirdi. En önemli eseri: Kitabü'l-Cebr ve'l-Mukabele.",
          },
          {
            term: "Gazali",
            def: "Nizamiye medresesinde müderrislik yaptı; dinin akıldan üstün olduğunu savundu. Eseri: İhyaü'l-Ulumuddin.",
          },
          {
            term: "Ömer Hayyam",
            def: "Büyük Selçuklu'nun bilgini. Celali takviminin düzenlenmesinde görev aldı.",
          },
          {
            term: "El-Cezeri",
            def: "Artuklular döneminde yaşadı. Sibernetiğin kurucusu.",
          },
          {
            term: "Uluğ Bey",
            def: "Timur'un torunu; sultan ve bilim adamı. Semerkant'ta rasathane açtı.",
          },
        ],
      },
    ],
  },

  // ─── SAYFA 13: DİL ve EDEBİYAT I ───────────────────────────────
  {
    id: "edebiyat-1",
    title: "Dil ve Edebiyat I",
    subtitle: "Karahanlılar ve Gazneliler",
    content: [
      {
        type: "paragraph",
        text: "Selçuklularda resmi yazışmalar Farsça veya Arapça yapılmış; bu durum Türkçenin gelişimini engellemiştir.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Karahanlılar dönemi eserleri:",
      },
      {
        type: "term-list",
        entries: [
          {
            term: "Kutadgu Bilig (1069)",
            def: "\"Mutluluk Veren Bilgi\". Yusuf Has Hacib'in siyasetnamesi. Türk-İslam edebiyatının ilk yazılı örneği. Tamgaç Buğra Han'a sunulmuştur.",
          },
          {
            term: "Divan-ı Lügati't-Türk (1074)",
            def: "Kaşgarlı Mahmut'un Türkçe ansiklopedik sözlüğü. Abbasi Halifesi El-Muktedi'ye sunulmuş; ilk Türk dünyası haritasını içermektedir.",
          },
          {
            term: "Atabetü'l-Hakayık",
            def: "\"Gerçeklerin Eşiği\". Edip Ahmet Yükneki'nin ahlak kitabı.",
          },
          {
            term: "Divan-ı Hikmet",
            def: "İlk Türk mutasavvıfı Hoca Ahmet Yesevi'nin eseri.",
          },
          {
            term: "Satuk Buğra Han Destanı",
            def: "Karahanlı hükümdarı Satuk Buğra Han'ın İslamiyeti benimsemesini anlatan sözlü destan.",
          },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Gazneliler dönemi:",
      },
      {
        type: "term-list",
        entries: [
          {
            term: "Şehname",
            def: "İranlı şair Firdevsi'nin Farsça kaleme aldığı destan; Gazneli Mahmut'a sunulmuştur.",
          },
          {
            term: "Tarihi Yemin",
            def: "Utbi'nin Gazneli Mahmut'a ithaf ettiği tarihi eser.",
          },
        ],
      },
    ],
  },

  // ─── SAYFA 14: DİL ve EDEBİYAT II ──────────────────────────────
  {
    id: "edebiyat-2",
    title: "Dil ve Edebiyat II",
    subtitle: "Büyük Selçuklu, Timur, Babür ve Anadolu",
    content: [
      {
        type: "paragraph",
        text: "Büyük Selçuklu dönemi:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Siyasetname", def: "Vezir Nizamülmülk'ün Farsça siyaset kitabı." },
          { term: "Rubaiyat", def: "Ömer Hayyam'ın dünyaca ünlü dörtlükleri." },
          { term: "Mantıku't-Tayr", def: "Feridüddin Attar'ın \"Kuşların Dili\" adlı eseri." },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Timur Devleti: Çağatay Türkçesi ve Uygur alfabesi kullanıldı.",
      },
      {
        type: "term-list",
        entries: [
          {
            term: "Muhakemet'ül-Lügateyn",
            def: "Ali Şir Nevai'nin Türkçenin Farsçadan zengin olduğunu kanıtlamak için yazdığı eser.",
          },
          {
            term: "Babürname",
            def: "Babür Şah'ın kendi yaşamını Türkçe olarak kaleme aldığı anı eseri.",
          },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Anadolu Selçuklu ve Beylikler dönemi üç koldan gelişti:",
      },
      {
        type: "term-list",
        entries: [
          {
            term: "Halk Edebiyatı",
            def: "Battalname, Danişmendname destanları; Nasrettin Hoca fıkraları; Aşık Paşa'nın Garipname'si.",
          },
          {
            term: "Tasavvuf Edebiyatı",
            def: "Mevlana (Mesnevi, Divan-ı Kebir — Farsça); Yunus Emre (Divan — Türkçe); Hacı Bektaşi Veli (Makalat).",
          },
          {
            term: "Divan Edebiyatı",
            def: "İlk isim: Hoca Dehhani (Selçuklu Şehnamesi — Farsça). 14. yy'da Germiyanlı Ahmedi: İskendername.",
          },
        ],
      },
    ],
  },

  // ─── SAYFA 15: SANAT ve MİMARİ ──────────────────────────────────
  {
    id: "sanat",
    title: "Sanat ve Mimari",
    subtitle: "Camiler, Medreseler, Darüşşifalar, Külliyeler",
    content: [
      {
        type: "paragraph",
        text: "Türk-İslam mimarisinin ilk örnekleri Karahanlılar dönemine aittir. Selçuklularda taş, tuğla, ahşap kullanılmış; bitki, hayvan motifleri ve geometrik şekiller ile süslenmiştir. Çift başlı kartal Selçukluların simgesidir. Kubbe, Kümbet ve Kemer İslam mimarisine Türklerce kazandırılmıştır.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Anadolu ilk Türk beylikleri eserleri:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Saltuklular", def: "Erzurum Ulu Cami, Tepsi Minare, Üç Kümbetler, Mama Hatun Türbesi" },
          { term: "Mengücekler", def: "Divriği Külliyesi ve Ulu Cami (Anadolu'nun en eski külliyesi)" },
          { term: "Danişmentliler", def: "Kayseri Ulu Cami, Yağıbasan Medresesi (1151 – Anadolu'nun ilk medresesi)" },
          { term: "Artuklular", def: "Mardin Ulu Cami, Hatuniye Medresesi, Malabadi Köprüsü (Hasankeyf)" },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Anadolu Selçuklu önemli eserleri:",
      },
      {
        type: "list",
        items: [
          "Camiler: Konya-Niğde Alaaddin, Sivas-Malatya Ulu, Ankara Aslanhane, Konya Sahip Ata",
          "Medreseler: İnce Minareli, Karatay, Sırçalı (Konya); Gök, Buruciye (Sivas); Çifte Minareli (Erzurum); Cacabey (Kırşehir — rasathane)",
          "Darüşşifalar: Gevher Nesibe (Kayseri, 1205); Alaeddin Keykubat (Aksaray); Torumtay (Amasya)",
          "Külliyeler: Hunat Hatun (Kayseri), Sahip Ata (Konya)",
        ],
      },
    ],
  },

  // ─── SON SAYFA ───────────────────────────────────────────────────
  {
    id: "final",
    title: "Tebrikler!",
    subtitle: "Kültür ve Medeniyet bölümünü tamamladınız.",
    content: [
      {
        type: "paragraph",
        text: "Şimdi öğrendiklerinizi 30 soruluk quiz ile pekiştirme zamanı.",
      },
    ],
    isFinal: true,
  },
];

export default culturePages;
