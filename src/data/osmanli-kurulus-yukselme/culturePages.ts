import type { CulturePageData } from "@/types/period-data";

const culturePages: CulturePageData[] = [
  // ─── KAPAK ──────────────────────────────────────────────────────────────
  {
    id: "kapak",
    title: "Osmanlı Devleti\nKültür ve Medeniyeti",
    subtitle: "Devlet · Ordu · Hukuk · Toprak · Bilim · Eğitim",
    content: [],
    isCover: true,
  },

  // ─── SAYFA 1: DEVLET YÖNETİMİ — EGEMENLİK VE VERASET ──────────────────
  {
    id: "devlet-1",
    title: "Devlet Yönetimi",
    subtitle: "Egemenlik Anlayışı ve Veraset Sistemi",
    content: [
      {
        type: "paragraph",
        text: "Osmanlı devlet yönetimi, gücün merkezde toplandığı mutlak monarşik bir yapıdır. Fetihlerle genişleyen devlet, çok uluslu bir imparatorluk niteliği kazanmıştır.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Tahta geçme usulündeki tarihsel dönüşüm:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Başlangıç", def: "Ülke, hanedanın ortak malı kabul edilmiştir." },
          { term: "I. Murat Devri", def: "\"Ülke padişah ve oğullarınındır\" anlayışına geçildi." },
          { term: "II. Mehmet (Fatih) Devri", def: "\"Ülke padişahındır\" anlayışı ile mutlak monarşi pekişti." },
          { term: "17. Yüzyıl (I. Ahmet)", def: "Ekber ve Erşed sistemi: hanedanın en yaşlı ve en akıllı üyesi tahta çıkar." },
        ],
      },
    ],
  },

  // ─── SAYFA 2: ŞEHZADE EĞİTİMİ VE DİVAN-I HÜMAYUN ──────────────────────
  {
    id: "devlet-2",
    title: "Şehzade Eğitimi ve Divan-ı Hümayun",
    subtitle: "Sancak Sistemi'nden Kafes'e",
    content: [
      {
        type: "paragraph",
        text: "Şehzadeler, devlet yönetimi deneyimi kazanmak amacıyla Lala adı verilen tecrübeli hocalar eşliğinde sancaklara vali olarak gönderilirdi (Manisa, Kütahya, Amasya vb.). III. Mehmet döneminde bu uygulamaya son verilmiş ve Kafes sistemi başlatılmıştır.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Divan-ı Hümayun, Orhan Bey tarafından kurulmuş ve II. Mahmut tarafından kaldırılmıştır. Padişahın danışma meclisi olup kararlar Mühimme Defterlerine kaydedilirdi.",
      },
      {
        type: "list",
        items: [
          "Devlet işleri görüşülür, yüksek düzeyli davalar karara bağlanır",
          "Kararlar Sadrazam aracılığıyla uygulamaya konulur",
          "Şeyhülislam kararların dine uygunluğunu denetler",
          "Yabancı elçiler Divan'da kabul edilir",
        ],
      },
    ],
  },

  // ─── SAYFA 3: DİVAN ÜYELERİ VE GÖREVLERİ ───────────────────────────────
  {
    id: "devlet-3",
    title: "Divan Üyeleri ve Görevleri",
    subtitle: "Merkez Yönetiminin Kadrosu",
    content: [
      {
        type: "term-list",
        entries: [
          { term: "Veziri Azam (Sadrazam)", def: "Padişahın mutlak vekili. Seferde \"Serdar-ı Ekrem\" unvanını alır." },
          { term: "Vezirler", def: "Sadrazamın yardımcıları." },
          { term: "Kazasker", def: "Adalet ve eğitim işleri; kadı ve müderris atamalarından sorumlu (Anadolu ve Rumeli)." },
          { term: "Defterdar", def: "Mali işler ve devlet bütçesi (Anadolu ve Rumeli)." },
          { term: "Nişancı", def: "İç/dış yazışmalar, belgelere tuğra çekilmesi ve toprak kayıtlarının (tahrir) tutulması." },
          { term: "Kaptan-ı Derya", def: "Deniz kuvvetleri komutanı." },
          { term: "Şeyhülislam", def: "Divan kararlarının dine uygunluğu hakkında fetva verir; Divan üyesi değildir." },
          { term: "Reisülküttap", def: "Başlangıçta nişancıya bağlı, 17. yy'dan itibaren dışişlerinden sorumlu." },
        ],
      },
    ],
  },

  // ─── SAYFA 4: TAŞRA YÖNETİMİ ────────────────────────────────────────────
  {
    id: "tasra-1",
    title: "Taşra Yönetimi",
    subtitle: "İdari Birimler ve Yöneticiler",
    content: [
      {
        type: "paragraph",
        text: "Osmanlı toprakları merkezden çevreye doğru hiyerarşik idari birimlere ayrılmıştır. Her kademede idari, güvenlik ve adalet işleri farklı yetkililer tarafından yürütülür.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          { term: "Eyalet", def: "Yönetici: Beylerbeyi · Güvenlik: Subaşı · Adalet: Kadı" },
          { term: "Sancak", def: "Yönetici: Sancakbeyi · Güvenlik: Subaşı · Adalet: Kadı" },
          { term: "Kaza", def: "Yönetici: Kadı · Güvenlik: Subaşı · Adalet: Kadı" },
          { term: "Köy", def: "Yönetici: Köy Kethüdası · Güvenlik: Yiğitbaşı · Adalet: Kadı Naibi" },
        ],
      },
    ],
  },

  // ─── SAYFA 5: EYALET ÇEŞİTLERİ ──────────────────────────────────────────
  {
    id: "tasra-2",
    title: "Eyalet Çeşitleri",
    subtitle: "Salyanesiz · Salyaneli · İmtiyazlı",
    content: [
      {
        type: "term-list",
        entries: [
          {
            term: "Salyanesiz (Yıllıksız) Eyaletler",
            def: "Merkeze tam bağlı; Tımar sistemi uygulanır. Anadolu, Rumeli, Karaman vb.",
          },
          {
            term: "Salyaneli (Yıllıklı) Eyaletler",
            def: "Yöneticiler merkezden atanır ve maaş alır; İltizam sistemi uygulanır. Mısır, Habeş, Tunus vb.",
          },
          {
            term: "Bağlı Beylik ve Hükümetler",
            def: "İç işlerinde serbest, dış işlerinde merkeze bağlı imtiyazlı eyaletler. Erdel, Eflak, Kırım, Hicaz vb.",
          },
        ],
      },
    ],
  },

  // ─── SAYFA 6: BAŞKENTİN YÖNETİMİ ───────────────────────────────────────
  {
    id: "tasra-3",
    title: "Başkent İstanbul'un Yönetimi",
    subtitle: "İslambol · Dersaadet · Payitaht",
    content: [
      {
        type: "paragraph",
        text: "İstanbul; İslambol, Dersaadet ve Payitaht gibi isimlerle anılmıştır. Fetihten sonra imparatorluğun kalıcı başkenti olmuştur.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          { term: "Genel İdare", def: "Sadrazam" },
          { term: "Adalet", def: "Taht Kadısı — padişah tarafından atanan en yüksek rütbeli kadı" },
          { term: "Güvenlik", def: "Yeniçeri Ağası" },
          { term: "Belediye İşleri", def: "Şehremini" },
        ],
      },
    ],
  },

  // ─── SAYFA 7: ASKERİ TEŞKİLAT — KAPIKULU ORDUSU ────────────────────────
  {
    id: "ordu-1",
    title: "Askeri Teşkilat",
    subtitle: "Kapıkulu Ordusu — Merkez Kuvvetleri",
    content: [
      {
        type: "paragraph",
        text: "Kapıkulu askerleri, padişaha bağlı, 3 ayda bir Ulufe adı verilen maaş alan sürekli ordudur. Devşirme kökenlidirler.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Piyade birlikleri:",
      },
      {
        type: "list",
        items: [
          "Acemioğlanlar Ocağı — devşirme çocukların ilk yetiştirme ocağı",
          "Yeniçeri Ocağı — asıl savaşçı güç",
          "Cebeciler — silah bakım ve tamiri",
          "Topçular — top döküm ve kullanımı",
          "Lağımcılar — tünel açma ve kale kuşatma",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Süvari birlikleri (Altı Bölük Halkı):",
      },
      {
        type: "list",
        items: [
          "Sipah ve Silahdar — padişah çadırını korur",
          "Ulufeciler — sancakları korur",
          "Garipler — hazineyi korur",
        ],
      },
    ],
  },

  // ─── SAYFA 8: EYALET ASKERLERİ ───────────────────────────────────────────
  {
    id: "ordu-2",
    title: "Eyalet Askerleri",
    subtitle: "Taşra Ordusu ve Yardımcı Kuvvetler",
    content: [
      {
        type: "term-list",
        entries: [
          {
            term: "Tımarlı Sipahiler",
            def: "Türklerden oluşan atlı birlikler. Dirlik sahiplerinin beslediği askerlere cebelü denir.",
          },
          {
            term: "Akıncılar",
            def: "Sınırlarda görev yapan, keşif ve yıpratma operasyonları yürüten hafif süvari birlikleri.",
          },
          {
            term: "Azaplar",
            def: "Bekar Türk gençlerinden oluşan yaya piyade kuvvetleri.",
          },
          {
            term: "Deliler",
            def: "Gönüllü sınır gazileri; cesaret ve pervasızlıklarıyla bilinir.",
          },
          {
            term: "Beşliler",
            def: "Her 5 haneden bir asker sağlanan taşra düzensiz kuvvetleri.",
          },
          {
            term: "Sakalar",
            def: "Ordunun su temini ve ikmalininden sorumlu birlik.",
          },
          {
            term: "Turnalar",
            def: "Ordu içi haberleşme ve ulak görevi yapan birlik.",
          },
        ],
      },
    ],
  },

  // ─── SAYFA 9: HUKUK SİSTEMİ ─────────────────────────────────────────────
  {
    id: "hukuk-1",
    title: "Hukuk Sistemi",
    subtitle: "Şer'i · Örfi · Azınlık Hukuku",
    content: [
      {
        type: "paragraph",
        text: "Osmanlı hukuk düzeni üç temel kaynaktan beslenir:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Şer'i Hukuk", def: "İslam hukukuna (fıkha) dayalı kurallar." },
          { term: "Örfi Hukuk", def: "Gelenekler ve padişah fermanlarına dayalı kurallar." },
          { term: "Azınlık Hukuku", def: "Gayrimüslimlerin kendi cemaat hukuklarını uyguladığı alan." },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Mahkeme türleri:",
      },
      {
        type: "term-list",
        entries: [
          {
            term: "Şeri Mahkemeler",
            def: "Müslümanların tüm, gayrimüslimlerin kamu davalarına bakardı.",
          },
          {
            term: "Cemaat Mahkemeleri",
            def: "Gayrimüslimlerin kendi dini hukuklarını uyguladığı mahkemeler.",
          },
          {
            term: "Konsolosluk Mahkemeleri",
            def: "Kapitülasyonlar sonrası yabancı ülke vatandaşları için kurulmuştur.",
          },
        ],
      },
    ],
  },

  // ─── SAYFA 10: SOSYAL SINIFLAR ───────────────────────────────────────────
  {
    id: "hukuk-2",
    title: "Sosyal Yapı",
    subtitle: "Yönetenler ve Yönetilenler",
    content: [
      {
        type: "paragraph",
        text: "Osmanlı toplumu vergi veren halk (Reaya) ve yöneten askeri sınıf (Beraya) olarak ayrılmıştır. Sınıflar arası geçişe (dikey hareketlilik) imkan tanınmıştır.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Seyfiye (Ümera)",
            def: "İdari ve askeri sınıf. Sadrazam, beylerbeyi, yeniçeriler.",
          },
          {
            term: "İlmiye (Ulema)",
            def: "Eğitim, adalet ve fetva işleri. Şeyhülislam, kadı, müderris.",
          },
          {
            term: "Kalemiye",
            def: "Bürokrasi ve yazışma sınıfı. Defterdar, nişancı, katipler.",
          },
          {
            term: "Reaya",
            def: "Vergi ödeyen Müslüman ve gayrimüslim halk; çiftçi, esnaf, tüccar.",
          },
        ],
      },
    ],
  },

  // ─── SAYFA 11: TOPRAK SİSTEMİ VE VERGİ ─────────────────────────────────
  {
    id: "toprak-1",
    title: "Toprak ve Maliye",
    subtitle: "Dirlik Sistemi · Vergi Düzeni",
    content: [
      {
        type: "paragraph",
        text: "Miri topraklar mülkiyeti devlete ait olup en önemli türü Dirlik'tir. Dirlikler gelir büyüklüğüne göre üçe ayrılır:",
      },
      {
        type: "term-list",
        entries: [
          { term: "Has", def: "Yıllık geliri 100.000 akçeden fazla. Padişah, vezir, beylerbeyi vb." },
          { term: "Zeamet", def: "Yıllık geliri 20.000–100.000 akçe arası. Orta düzey yöneticiler." },
          { term: "Tımar", def: "Yıllık geliri 20.000 akçeye kadar. Sipahiler." },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Vergi türleri:",
      },
      {
        type: "list",
        items: [
          "Aşar — Müslümanlardan alınan ürün vergisi",
          "Haraç — Gayrimüslimlerden alınan ürün vergisi",
          "Cizye — Gayrimüslimlerden alınan askerlik muafiyet vergisi",
          "Ağnam — Hayvan vergisi",
          "Avarız — Olağanüstü durum vergisi",
          "Çiftbozan — Toprağı boş bırakandan alınan ceza",
        ],
      },
    ],
  },

  // ─── SAYFA 12: EĞİTİM VE KURUMLAR ───────────────────────────────────────
  {
    id: "egitim-1",
    title: "Eğitim Kurumları",
    subtitle: "Medrese · Enderun · Lonca",
    content: [
      {
        type: "paragraph",
        text: "Osmanlı eğitim sistemi farklı kademelere ve amaçlara hizmet eden kurumlardan oluşmaktadır.",
      },
      {
        type: "term-list",
        entries: [
          {
            term: "Medrese",
            def: "İlk medrese İznik'te Orhan Bey tarafından açıldı. Fatih'in Sahn-ı Seman, Kanuni'nin Süleymaniye medreseleri en yüksek eğitim kurumlarıdır.",
          },
          {
            term: "Enderun",
            def: "Sarayda devlet yöneticisi ve üst kadro yetiştirir; devşirme kökenli yetenekli gençlere açıktır.",
          },
          {
            term: "Harem",
            def: "Sarayda kadınların eğitim gördüğü bölüm.",
          },
          {
            term: "Şehzadegan Mektebi",
            def: "Şehzadelerin temel eğitim aldığı saray okulu.",
          },
          {
            term: "Lonca Sistemi",
            def: "Mesleki eğitim usta-çırak ilişkisiyle yürütülür; el sanatları ve ticareti kapsar.",
          },
        ],
      },
    ],
  },

  // ─── SAYFA 13: BİLİM İNSANLARI ──────────────────────────────────────────
  {
    id: "egitim-2",
    title: "Osmanlı Bilim Dünyası",
    subtitle: "Önemli İsimler ve Katkıları",
    content: [
      {
        type: "term-list",
        entries: [
          {
            term: "Ali Kuşçu",
            def: "Matematik ve astronomi uzmanı; Fatih döneminde İstanbul'a geldi.",
          },
          {
            term: "Akşemsettin",
            def: "Tıp ve dini bilimler bilgini; Fatih Sultan Mehmed'in hocası.",
          },
          {
            term: "Piri Reis",
            def: "Dünya haritası (1513) ve \"Kitab-ı Bahriye\" eseriyle ünlü coğrafyacı ve denizci.",
          },
          {
            term: "Katip Çelebi",
            def: "Sosyal bilimci; \"Cihannüma\" (coğrafya) ve \"Keşfüzzünun\" (ansiklopedi) eserlerinin yazarı.",
          },
          {
            term: "Takiyüddin Mehmet",
            def: "İlk Osmanlı rasathanesini İstanbul'da kuran astronom (1577).",
          },
          {
            term: "Hazerfen Ahmet Çelebi",
            def: "Yapay kanatlarla Boğaz'ı uçmayı denemesiyle havacılığın erken öncüsü.",
          },
          {
            term: "Lagari Hasan Çelebi",
            def: "Roket benzeri araçla havalanmayı denemiş, roket teknolojisinin erken öncüsü.",
          },
        ],
      },
    ],
  },

  // ─── FINAL SAYFASI ───────────────────────────────────────────────────────
  {
    id: "final",
    title: "Bilgini Test Et",
    subtitle: "Osmanlı kültür ve tarihine dair sorular seni bekliyor",
    content: [
      {
        type: "paragraph",
        text: "Devlet yönetiminden askeri teşkilata, hukuk sisteminden bilim dünyasına uzanan Osmanlı kültür ve medeniyetini öğrendin. Şimdi bu dönemin kritik savaş, antlaşma ve kurumsal bilgilerini içeren bir quizle kendini sına.",
      },
    ],
    isFinal: true,
  },
];

export default culturePages;
