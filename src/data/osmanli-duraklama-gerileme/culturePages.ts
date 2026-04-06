import type { CulturePageData } from "@/types/period-data";

const culturePages: CulturePageData[] = [
  // ─── KAPAK ──────────────────────────────────────────────────────────────
  {
    id: "kapak",
    title: "Osmanlı Duraklama ve\nGerileme Dönemi",
    subtitle: "XVII. Yüzyıl · XVIII. Yüzyıl · Islahatlar · Lale Devri",
    content: [],
    isCover: true,
  },

  // ─── SAYFA 1: DURAKLAMA DÖNEMİ'NE GİRİŞ ────────────────────────────────
  {
    id: "duraklama-giris",
    title: "Duraklama Dönemine Giriş",
    subtitle: "Teceddüd ve Tagayyür — Bozulma ve Yozlaşma",
    content: [
      {
        type: "paragraph",
        text: "XVII. yüzyıl, Osmanlı klasik nizamının sarsıldığı kritik bir eşiği temsil eder. Dönemin aydınları bu bozulmayı 'Teceddüd ve Tagayyür' (Bozulma ve Yozlaşma) kavramlarıyla tanımlamıştır.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          { term: "Başlangıç", def: "Sokullu Mehmet Paşa'nın vefatı — 1579" },
          { term: "Bitiş", def: "Karlofça Antlaşması — 1699" },
          { term: "Genel nitelik", def: "Sadece askeri duraklama değil; idari, iktisadi ve içtimai çözülme" },
        ],
      },
    ],
  },

  // ─── SAYFA 2: DURAKLAMA NEDENLERİ ──────────────────────────────────────
  {
    id: "duraklama-nedenler",
    title: "Duraklama Nedenleri",
    subtitle: "İç ve Dış Dinamikler",
    content: [
      {
        type: "paragraph",
        text: "İÇ NEDENLER:",
      },
      {
        type: "list",
        items: [
          "Çocuk yaşta tahta çıkışlar (örn. IV. Mehmet — 6 yaşında) ve sık padişah değişikliği",
          "Saray kadınlarının siyasete müdahalesi (Kadınlar Saltanatı dönemi)",
          "Medreselerden pozitif bilimlerin dışlanması; 'Beşik ulemalığı' (alimin oğlu alim sayıldı)",
          "Tımar sisteminin bozulması ve 'Ocak devlet içindir' anlayışının yerleşmesi",
          "Kapıkulu askerlerinin (özellikle Yeniçeriler) disiplinsizleşmesi",
          "Ganimetlerin azalması, hazine açıkları ve Kapitülasyonların yaygınlaşması",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "DIŞ NEDENLER:",
      },
      {
        type: "list",
        items: [
          "Avrupa'nın bilimsel ve teknolojik üstünlük kazanması",
          "Fütühat politikasının doğal sınırlara (dağ, deniz, çöl) dayanması — genişlemenin tıkanması",
          "Coğrafi Keşifler sonrası ticaret yollarının değişmesiyle Osmanlı transit gelirlerinin erimesi",
        ],
      },
    ],
  },

  // ─── SAYFA 3: XVII. YY ANTLAŞMALARI ─────────────────────────────────────
  {
    id: "antlasmalar-17yy",
    title: "XVII. Yüzyıl Antlaşmaları",
    subtitle: "Diplomatik Kırılma Noktaları",
    content: [
      {
        type: "term-list",
        entries: [
          { term: "1590 Ferhat Paşa (İran)", def: "Doğuda ulaşılan en geniş sınırlar — doğu cephesinin stratejik zirvesi" },
          { term: "1606 Zitvatorok (Avusturya)", def: "Sultan, Avusturya Arşidükü'nü İmparator olarak tanıdı → 'Evrensel Hükümdar' iddiası sona erdi" },
          { term: "1639 Kasr-ı Şirin (İran)", def: "Günümüz Türkiye-İran sınırını büyük ölçüde belirleyen, uzun vadeli istikrar getiren sınır" },
          { term: "1664 Vasvar (Avusturya)", def: "XVII. yy'da Avusturya'ya karşı kazanılan son avantajlı antlaşma" },
          { term: "1672 Bucaş (Lehistan)", def: "Batıda en geniş sınırlara ulaşılan zirve noktası → bu tarihten itibaren geri çekilme başladı" },
          { term: "1699 Karlofça (Kutsal İttifak)", def: "Batıda ilk kez büyük çaplı toprak kaybı → strateji 'fetihten mevcudu korumaya' evrildi" },
        ],
      },
    ],
  },

  // ─── SAYFA 4: XVII. YY İSYANLARI ────────────────────────────────────────
  {
    id: "isyanlar-17yy",
    title: "XVII. Yüzyıl İsyanları",
    subtitle: "Devlet-Toplum Sözleşmesinin Çöküşü",
    content: [
      {
        type: "paragraph",
        text: "A) İstanbul (Merkez) İsyanları — Askeri Vesayet",
      },
      {
        type: "list",
        items: [
          "Vakayi Vakvakiye (Çınar Vakası): IV. Mehmet döneminde 30'a yakın devlet adamının saraydan alınarak idam edilmesi — askeri vesayetin ulaştığı boyut",
          "II. Osman'ın katli (1622): Padişahın sokaklarda sürüklenerek Yedikule'de idam edilmesi, hükümdar kutsiyetini parçaladı",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "B) Celali (Anadolu) İsyanları",
      },
      {
        type: "list",
        items: [
          "Tımar çöküşü ve ağır vergi yükü isyanı tetikledi",
          "Önemli liderler: Gürcü Nebi, Kalenderoğlu, Canbulatoğlu",
          "'Büyük Kaçgun': Güvenliği yitiren köylülerin kentlere toplu göçü — tarımsal üretim durdu",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "C) Eyalet İsyanları — Yönetim Krizi",
      },
      {
        type: "list",
        items: [
          "XIX. yy milliyetçilik akımlarıyla ilgisi yoktur",
          "Yerel yönetimdeki liyakatsizlik ve otorite boşluğundan kaynaklanır",
          "Merkez-çevre ilişkilerindeki bozulmanın yansımasıdır",
        ],
      },
    ],
  },

  // ─── SAYFA 5: XVII. YY ISLAHATLARI — TOKMAK ─────────────────────────────
  {
    id: "islahatlar-tokmak",
    title: "XVII. Yüzyıl Islahatları",
    subtitle: "TOKMAK Şifresi",
    content: [
      {
        type: "paragraph",
        text: "XVII. yy ıslahatçılarını TOKMAK şifresiyle hatırlayın:",
      },
      {
        type: "term-list",
        entries: [
          { term: "T — Tarhuncu Ahmet Paşa", def: "Osmanlı tarihinde ilk modern bütçeyi hazırlattı" },
          { term: "O — II. Osman (Genç Osman)", def: "İlk ıslahat yapan padişah; Yeniçeri'yi kaldırmayı planladı; saray dışından evlendi; başkenti taşımayı düşündü; Şeyhülislam'ı kısıtladı → Yeniçeriler tarafından idam edildi (1622)" },
          { term: "K — Kuyucu Murat Paşa", def: "I. Ahmet döneminde Celali isyanlarını bastırdı (kafaları kuyuya attığı için 'Kuyucu' lakabını aldı)" },
          { term: "M — IV. Murat (Bağdat Fatihi)", def: "Saray kadınlarını uzaklaştırdı; ilk Şeyhülislam'ı idam ettirdi; gece yasağı, içki ve tütün yasağı getirdi; kahvehaneleri kapattı. NOT: İlk içki yasağını getiren I. Ahmet'tir." },
          { term: "A — I. Ahmet", def: "Ekber ve Erşed sistemini getirdi — Osmanlı veraset tarihindeki son değişiklik. NOT: Sancağa çıkmayı son kaldıran III. Mehmet'tir." },
          { term: "K — Köprülüler", def: "Bkz. ayrı sayfa" },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "XVII. yy ıslahatlarının genel özellikleri:",
      },
      {
        type: "list",
        items: [
          "Kişilere bağlı kaldı; kalıcı kurumsal dönüşüm sağlanamadı",
          "Sorunların köküne inilmedi",
          "Saray, ulema ve asker ıslahatçılara karşı çıktı",
          "Avrupa örnek alınmadı — Fatih ve Kanuni (Kanuni Kadim) örnek alındı",
          "Baskı ve şiddet yoluyla uygulamaya çalışıldı",
        ],
      },
    ],
  },

  // ─── SAYFA 6: KÖPRÜLÜLER DÖNEMİ ─────────────────────────────────────────
  {
    id: "koprululer",
    title: "Köprülüler Dönemi",
    subtitle: "Duraklama İçinde Yükselme (1656–1683)",
    content: [
      {
        type: "paragraph",
        text: "Köprülüler sülalesi, duraklama döneminin ortasında Osmanlı'ya kısa süreli bir yükselme yaşatmıştır.",
      },
      {
        type: "term-list",
        entries: [
          { term: "Köprülü Mehmet Paşa", def: "Saraya şartlar sürerek (tam yetki, hesap vermeme) sadrazam oldu. Maliyeyi düzeltti, Yeniçeri'yi disipline etti, Venedik'in Çanakkale ablukasını kaldırdı." },
          { term: "Köprülü Fazıl Ahmet Paşa", def: "24 yıllık kuşatmanın ardından Girit'i fethetti (1669). 1672 Bucaş ile batıda en geniş sınırlara ulaşıldı." },
          { term: "Merzifonlu Kara Mustafa Paşa", def: "1683 II. Viyana kuşatmasını 'totemi' yüzünden (şehri beklemesi, yağmalamak istemesi) kaybetti ve idam edildi." },
          { term: "Amcazade Hüseyin Paşa", def: "Köprülüler sülalesinin son önemli temsilcisi." },
        ],
      },
    ],
  },

  // ─── SAYFA 7: KARLOFÇA'DAN LALE DEVRİ'NE ────────────────────────────────
  {
    id: "gecis-18yy",
    title: "Karlofça'dan Lale Devri'ne",
    subtitle: "XVIII. Yüzyılın Eşiğinde Osmanlı",
    content: [
      {
        type: "paragraph",
        text: "1699 Karlofça ile başlayan XVIII. yüzyılda Osmanlı, XVII. yüzyıla göre daha somut çözümler üretmeye çalışmış; ancak gerileme önlenememiştir.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "XVIII. yy ıslahatlarının genel özellikleri:",
      },
      {
        type: "list",
        items: [
          "Avrupa'nın üstünlüğü kabul edilmiş ve ilk kez Avrupa tarzı yenilikler yapılmıştır",
          "Batıdan teknik uzmanlar getirilmiştir",
          "Islahatlar padişah ve devlet adamlarının iradeleriyle gerçekleşti",
          "Islahatların finansmanı için konulan vergiler halkın muhalefetine yol açtı",
          "Islahatçılara karşı çıkan gruplar (ulema, Yeniçeri) reformları sekteye uğrattı",
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          { term: "1700 İstanbul Ant.", def: "Azak Kalesi Rusya'ya bırakıldı — Karadeniz hegemonyası sarsıldı" },
          { term: "1703 Edirne Vakası", def: "III. Ahmet başa geçti" },
          { term: "1711 Prut Ant.", def: "Azak geri alındı; XVII. yy kayıplarını geri alma umudu doğdu" },
          { term: "1718 Pasarofça Ant.", def: "Batı üstünlüğü kabul edildi → Lale Devri başladı" },
        ],
      },
    ],
  },

  // ─── SAYFA 8: LALE DEVRİ ─────────────────────────────────────────────────
  {
    id: "lale-devri",
    title: "Lale Devri (1718–1730)",
    subtitle: "III. Ahmet · Nevşehirli Damat İbrahim Paşa",
    content: [
      {
        type: "paragraph",
        text: "1718 Pasarofça Antlaşması'ndan 1730 Patrona Halil isyanına kadar süren dönem.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "Avrupa'ya ilk kez geçici elçilikler açıldı — İlk geçici elçi: 28 Mehmet Çelebi Efendi (Paris). Sefaretname adlı eseri ıslahat hareketlerine kaynak oluşturdu.",
          "İlk Türk matbaası kuruldu (1727) — İbrahim Müteferrika ve Said Efendi. İlk basılan eser: Vankulu Lügati. Dini eserlerin basılması yasaklandı.",
          "İstanbul'da çini, Yalova'da kağıt imalathanesi açıldı; yeni kütüphaneler kuruldu",
          "İlk kez çiçek aşısı uygulandı",
          "Doğu ve Batı klasiklerinden ilk çeviriler yapıldı",
          "Tulumbacılar: Yeniçerilerden oluşturulan ilk itfaiye örgütü",
          "Avrupa mimarisi örnek alındı; sivil mimari gelişti — III. Ahmet Çeşmesi günümüze ulaştı",
          "Dönemin ünlü minyatürcüsü Levni; divan şairi Nedim",
          "Dönem Patrona Halil isyanıyla sona erdi (1730)",
        ],
      },
    ],
  },

  // ─── SAYFA 9: XVIII. YY ANTLAŞMALARI ────────────────────────────────────
  {
    id: "antlasmalar-18yy",
    title: "XVIII. Yüzyıl Antlaşmaları",
    subtitle: "Küçük Kaynarca ve Kırım'ın Kaybı",
    content: [
      {
        type: "term-list",
        entries: [
          { term: "1724 İstanbul Ant. (Rusya)", def: "Rusya ile imzalanan ilk dostluk antlaşması" },
          { term: "1739 Belgrad Ant. (Avusturya)", def: "Gerileme döneminde Batı'ya karşı kazanılan son büyük diplomatik zafer; Belgrad geri alındı" },
          { term: "1740 Kapitülasyon Ant. (Fransa)", def: "I. Mahmut kapitülasyonları sürekli hale getirdi — Osmanlı'nın büyük stratejik hatası" },
          { term: "1746 Kerden Ant. (İran)", def: "Osmanlı-İran arasındaki son antlaşma ('II. Kasr-ı Şirin')" },
          { term: "1774 Küçük Kaynarca (Rusya)", def: "İlk kez tamamı Türk-Müslüman toprak (Kırım) kaybedildi · İlk savaş tazminatı ödendi · Karadeniz Türk gölü vasfını yitirdi · Rusya İstanbul'da elçilik açtı" },
          { term: "1779 Aynalıkavak (Rusya)", def: "Kırım özerk hale getirildi" },
          { term: "1792 Yaş Ant. (Rusya)", def: "Kırım'ın Rusya'ya ait olduğu Osmanlı tarafından resmen kabul edildi" },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Kırım'ın statüsündeki değişim:",
      },
      {
        type: "term-list",
        entries: [
          { term: "1774 Küçük Kaynarca", def: "Kırım — Bağımsız" },
          { term: "1779 Aynalıkavak", def: "Kırım — Özerk" },
          { term: "1783 Rusya ilhakı", def: "Kırım — Rusya'ya katıldı" },
          { term: "1792 Yaş Antlaşması", def: "Kırım — Osmanlı tarafından Rusya'ya ait olarak kabul edildi" },
        ],
      },
    ],
  },

  // ─── SAYFA 10: XVIII. YY ASKERİ ISLAHATLARI ─────────────────────────────
  {
    id: "askeri-islahatlar-18yy",
    title: "XVIII. Yüzyıl Askeri Islahatları",
    subtitle: "I. Mahmut'tan III. Selim'e",
    content: [
      {
        type: "term-list",
        entries: [
          { term: "I. MAHMUT", def: "Fransız asıllı Humbaracı Ahmet Paşa (Kont Boneval) Humbaracı Ocağı'nı ıslah etti. Hendesehane açıldı (1734). 1740'da Fransa'ya kapitülasyonlar sürekli hale getirildi." },
          { term: "III. MUSTAFA", def: "Sadrazam Koca Ragıp Paşa ıslahatları yönlendirdi. Fransız Baron de Tott topçu ocağını ıslah etti; Sürat Topçuları Ocağı kuruldu. Mühendishane-i Bahr-î Hümayun (Deniz Mühendishanesi) açıldı (1773)." },
          { term: "I. ABDÜLHAMİT", def: "Sadrazam Halil Hamit Paşa önemli hizmetler verdi. İstihkam okulu, yeni tersaneler ve modern gemiler yapıldı. Yeniçeri sayımı yapıldı; ulufe alım-satımı yasaklandı. İlk iç borçlanma (esham sistemi) uygulandı." },
          { term: "III. SELİM (1789–1807)", def: "Nizam-ı Cedit hareketi: köklü (radikal) değişimin başlangıcı. Layihalar hazırlatıldı; Avrupa'da daimi elçilikler açıldı (İlk daimi elçi: Londra — Yusuf Agah Efendi). Nizam-ı Cedit ordusu kuruldu; İrad-ı Cedid Hazinesi oluşturuldu. Mühendishane-i Berr-i Hümayun (Kara Mühendishanesi) kuruldu. İlk devlet matbaası (Matbaa-i Amire) açıldı. Şeyhülislam'ın yetkileri sınırlandırıldı. Dönem Kabakçı Mustafa isyanıyla sona erdi; yerine IV. Mustafa geçti." },
        ],
      },
    ],
  },

  // ─── KAPANIŞ ─────────────────────────────────────────────────────────────
  {
    id: "sonuc",
    title: "Sonuç: İki Yüzyılın Mirası",
    subtitle: "Fütühattan Savunmaya, Savunmadan Islahatçılığa",
    content: [
      {
        type: "paragraph",
        text: "XVII-XVIII. yüzyıllar, Osmanlı'nın klasik yapısının modern dünyanın gerçekleri karşısında yetersiz kaldığı büyük bir dönüşüm laboratuvarıdır.",
      },
      {
        type: "list",
        items: [
          "1579 → Sokullu'nun vefatı ile merkezi çözülme başladı",
          "1699 → Karlofça ile 'fetihten mevcudu korumaya' geçildi",
          "1718 → Pasarofça ile Batı üstünlüğü kabul edildi",
          "1774 → Küçük Kaynarca ile Karadeniz hegemonyası sarsıldı",
          "1789 → Nizam-ı Cedit ile köklü modernleşme başladı",
        ],
      },
      {
        type: "paragraph",
        text: "Bu dönem, bir sonraki yüzyılın Tanzimat ve Islahat reformlarına zemin hazırlayan sancılı ama zorunlu bir ön hazırlık sürecidir.",
      },
    ],
    isFinal: true,
  },
];

export default culturePages;
