export type ContentItem =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "term-list"; entries: { term: string; def: string }[] }
  | { type: "divider" };

export interface CulturePageData {
  id: string;
  title: string;
  subtitle?: string;
  content: ContentItem[];
  isCover?: boolean;
  isFinal?: boolean;
}

const culturePages: CulturePageData[] = [
  // ─── KAPAK ───────────────────────────────────────────────────────
  {
    id: "kapak",
    title: "İslamiyet Öncesi\nTürk Kültür ve Medeniyeti",
    subtitle: "Devlet · Toplum · Hukuk · Ordu · Bilim · Sanat · Din · Edebiyat",
    content: [],
    isCover: true,
  },

  // ─── SAYFA 1: DEVLET YAPISI — UNSURLAR & HATUN ───────────────────
  {
    id: "devlet-1",
    title: "Devlet Yapısı",
    subtitle: "Temel Unsurlar ve Yönetim Anlayışı",
    content: [
      {
        type: "paragraph",
        text: "Türk devletinin dört temel unsuru şunlardır:",
      },
      {
        type: "list",
        items: [
          "Bağımsızlık (oksızlık)",
          "Ülke",
          "Halk (kün)",
          "Teşkilat",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Sosyal devlet anlayışı benimsenmiştir. Devlet yönetiminde hatun (hükümdarın eşi) de söz sahibi olmuştur.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Gök Tanrı'nın hükümdarı üç yetkiyle donattığına inanılmıştır:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Kut", def: "Siyasi yetki" },
          { term: "Küç", def: "Askeri yetki" },
          { term: "Ülüş", def: "Ekonomik yetki" },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Kut anlayışı: \"Ülke, hükümdar ve ailesinin ortak malıdır\" inancıdır. Bu durum taht kavgalarına zemin hazırlamıştır.",
      },
    ],
  },

  // ─── SAYFA 2: DEVLET YAPISI — HAKİMİYET & YÖNETİM ───────────────
  {
    id: "devlet-2",
    title: "Devlet Yapısı",
    subtitle: "Türk Cihan Hakimiyeti ve Yönetim Bölümü",
    content: [
      {
        type: "paragraph",
        text: "Devletin sürekliliğini sağlamak için üç büyük ülkü uygulanmıştır:",
      },
      {
        type: "term-list",
        entries: [
          {
            term: "Türk Cihan Hakimiyeti",
            def: "Tüm dünyayı Türk hükümdarların idare etmesi",
          },
          {
            term: "Nizam-ı Alem",
            def: "Tanrı adına dünya düzenini sağlamak",
          },
          {
            term: "Kızıl Elma",
            def: "Her zaman yeni hedef koyma ülküsü",
          },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Devlet yönetimde doğu-batı bölümü esas alınmıştır:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Kağan", def: "Devletin merkezi olan doğuyu yöneten" },
          { term: "Yabgu", def: "Batıyı yöneten" },
        ],
      },
    ],
  },

  // ─── SAYFA 3: KURULTAY (TOY) ────────────────────────────────────
  {
    id: "kurultay",
    title: "Kurultay (Toy)",
    subtitle: "Türk'ün Devlet Meclisi",
    content: [
      {
        type: "paragraph",
        text: "Kurultay (Toy), günümüz Bakanlar Kurulu'na benzetilebilir. Her türlü devlet meselesinin konuşulduğu meclisdir.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "Kağan olmadığı zaman vezir (aygucı) kurula başkanlık etmiştir.",
          "Katılan üyelere toygun adı verilmiştir.",
          "Oturma düzenine orun adı verilmiştir.",
        ],
      },
    ],
  },

  // ─── SAYFA 4: SOSYAL HAYAT ──────────────────────────────────────
  {
    id: "sosyal",
    title: "Sosyal Hayat",
    subtitle: "Toplumsal Yapı ve Yaşam",
    content: [
      {
        type: "paragraph",
        text: "Halkın kaldığı çadırlara yurt denmiştir. Türk toplumunun örgütlenme kademesi küçükten büyüğe şöyledir:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Oğuş", def: "Aile" },
          { term: "Urug", def: "Sülale" },
          { term: "Boy", def: "Kabile" },
          { term: "Budun", def: "Millet" },
          { term: "İl", def: "Devlet" },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Konargöçer yaşamın etkileri:",
      },
      {
        type: "list",
        items: [
          "Kalıcı mimari eser az görülmüştür.",
          "Yazı geç kullanılmıştır.",
          "Ordu-millet anlayışı benimsenmiştir.",
        ],
      },
    ],
  },

  // ─── SAYFA 5: HUKUK ─────────────────────────────────────────────
  {
    id: "hukuk",
    title: "Hukuk",
    subtitle: "Töre — Türk'ün Sözlü Hukuku",
    content: [
      {
        type: "paragraph",
        text: "Sözlü \"töre\" hukuk kuralları uygulanmıştır. Törenin oluşumunda şu etkenler belirleyici olmuştur:",
      },
      {
        type: "list",
        items: [
          "Kut anlayışı",
          "Kurultay'da alınan kararlar",
          "Gelenek ve görenekler",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Törenin dört değişmez kuralı:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Adalet", def: "Hukukun temel ilkesi" },
          { term: "Uzluk", def: "İyilik" },
          { term: "Tüzlük", def: "Eşitlik" },
          { term: "İnsanlık (Kişilik)", def: "İnsan onuruna saygı" },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Hapis cezaları 10 günü geçmemiş; idam yalnızca belirli suçlar için uygulanmıştır.",
      },
    ],
  },

  // ─── SAYFA 6: ORDU & BİLİM ─────────────────────────────────────
  {
    id: "ordu-bilim",
    title: "Ordu ve Bilim",
    subtitle: "",
    content: [
      {
        type: "paragraph",
        text: "Ordu — Ordu-millet anlayışı benimsenmiştir.",
      },
      {
        type: "list",
        items: [
          "Hazarlar hariç tüm Türk orduları ücretsizdir.",
          "Türkler dünyayı en çok askerlik alanında etkilemiştir.",
          "Onlu sistemi bulan Mete Han'dır (MÖ 209).",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Bilim — Takvim yapımından bilimle uğraştıkları kanıtlanmıştır. Başlıca kullanılan takvimler:",
      },
      {
        type: "list",
        items: [
          "12 Hayvanlı Türk Takvimi",
          "Hicri Takvim",
          "Celali Takvimi",
          "Rumi Takvimi",
          "Miladi Takvim",
        ],
      },
    ],
  },

  // ─── SAYFA 7: SANAT & DİN ──────────────────────────────────────
  {
    id: "sanat-din",
    title: "Sanat ve Din",
    subtitle: "",
    content: [
      {
        type: "paragraph",
        text: "Sanat — Başlıca sanat dalları:",
      },
      {
        type: "list",
        items: [
          "Dokumacılık ve çadırcılık",
          "Kilim ve halıcılık",
          "Madencilik",
          "Minyatür ve heykel",
          "Ahşap işlemeciliği",
          "Resim ve duvar resmi",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Din ve İnanış — Atalar kültü ve tabiat kuvvetlerine inanç (yer-su-gök) hâkim olmuştur. Tarih boyunca benimsenen dinler:",
      },
      {
        type: "list",
        items: [
          "Gök Tanrı · Manihaizm · İslamiyet",
          "Hristiyanlık · Musevilik · Budistlik",
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          { term: "Yuğ", def: "Cenaze töreni" },
          { term: "Kurgan", def: "Mezar" },
          { term: "Balbal", def: "Mezar taşı" },
          { term: "Tamu", def: "Cehennem" },
          { term: "Uçmağ", def: "Cennet" },
        ],
      },
    ],
  },

  // ─── SAYFA 8: MÜZİK & EKONOMİ ──────────────────────────────────
  {
    id: "muzik-ekonomi",
    title: "Müzik, Spor ve Ekonomi",
    subtitle: "",
    content: [
      {
        type: "paragraph",
        text: "Müzik Aletleri:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Kithara (Türk kanunu)", def: "Türklerin Batı'ya aktardığı çalgı" },
          { term: "Kopuz", def: "Saz'ın atası" },
          { term: "Çevgan", def: "Vurmalı çalgı" },
        ],
      },
      {
        type: "paragraph",
        text: "Başlıca sporlar: seğirtme, tepük, küreş.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Ekonomi:",
      },
      {
        type: "list",
        items: [
          "İpek Yolu ve Kürk Yolu kullanılmıştır.",
          "Uygurlar tarıma, diğerleri ticaret ve hayvancılığa dayanmıştır.",
          "İslam öncesinde parayı ticarette değişim aracı olarak kullanan ilk Türk devleti Göktürklerdir.",
        ],
      },
    ],
  },

  // ─── SAYFA 9: EDEBİYAT — TÜRLER & DESTANLAR ────────────────────
  {
    id: "edebiyat-1",
    title: "Yazı Dili ve Edebiyat",
    subtitle: "Edebi Türler ve Destanlar",
    content: [
      {
        type: "paragraph",
        text: "Edebi türler:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Sav", def: "Atasözü" },
          { term: "Koşuk", def: "Şiir" },
          { term: "Sagu", def: "Ağıt" },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Oğuz Kağan Destanı'nda Oğuz Kağan olarak geçen hükümdar Teoman'dır.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Destanlar ve ait oldukları topluluklar:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Alper Tunga", def: "İskitler (Sakalar)" },
          { term: "Oğuz Kağan", def: "Asya Hunları" },
          { term: "Ergenekon ve Bozkurt", def: "Göktürkler" },
          { term: "Türeyiş ve Göç", def: "Uygurlar" },
          { term: "Attila ve Sihirli Geyik", def: "Avrupa Hunları" },
          { term: "Manas", def: "Kırgızlar" },
        ],
      },
    ],
  },

  // ─── SAYFA 10: EDEBİYAT — KİTABELER & ABİDELER ─────────────────
  {
    id: "edebiyat-2",
    title: "Kitabeler ve Abideler",
    subtitle: "Türk'ün İlk Yazılı Eserleri",
    content: [
      {
        type: "paragraph",
        text: "Yenisey Kitabeleri: Kırgızların mezar taşlarına yazdığı tek heceli yazılardır.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Orhun Abideleri:",
      },
      {
        type: "list",
        items: [
          "Türk edebiyatının bilinen ilk yazılı eseridir.",
          "Türk tarihinin ilk siyasetnamesidir.",
          "Moğolistan'da yer alır.",
          "Orhunca ve Çin alfabesiyle yazılmıştır.",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Kitabeler ve yazarları:",
      },
      {
        type: "term-list",
        entries: [
          { term: "1. Kitabe", def: "Tonyukuk adına (kendi yazdı)" },
          { term: "2. Kitabe", def: "Kül Tigin adına (Yollug Tigin yazdı)" },
          { term: "3. Kitabe", def: "Bilge Kağan adına (Yollug Tigin yazdı)" },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "İlk Türk tarihçisi ve yazarı: Vezir Tonyukuk.",
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
        text: "Şimdi öğrendiklerinizi 35 soruluk quiz ile pekiştirme zamanı.",
      },
    ],
    isFinal: true,
  },
];

export default culturePages;
