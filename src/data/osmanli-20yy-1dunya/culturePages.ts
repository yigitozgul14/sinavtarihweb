import type { CulturePageData } from "@/types/period-data";

const culturePages: CulturePageData[] = [
  {
    id: "kapak",
    title: "Osmanlı 20. Yüzyıl\nve 1. Dünya Savaşı",
    subtitle: "31 Mart · Trablusgarb · Balkan Savaşları · I. Dünya Savaşı · Mondros",
    content: [],
    isCover: true,
  },
  {
    id: "31-mart-ayaklanmasi",
    title: "31 Mart Ayaklanması (1909)",
    subtitle: "Meşrutiyete Karşı İlk Gerici İsyan",
    content: [
      {
        type: "paragraph",
        text: "13 Nisan 1909'da (Rumi takvimle 31 Mart) patlak veren bu ayaklanma, II. Meşrutiyet'e karşı yapılan ilk gerici isyandır.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Nedenleri",
            def: "Balkanlardaki siyasi bunalım, partiler arası çekişme, Volkan ve Serbesti gazetelerinin kışkırtıcı yazıları, halkın dinî duygularının istismarı",
          },
          {
            term: "Hareket Ordusu",
            def: "Selanik'te kurulan; komutanlığını Mahmut Şevket Paşa'nın, kurmay başkanlığını Mustafa Kemal'in yaptığı ordu — ayaklanmayı bastırdı",
          },
          {
            term: "Sonucu",
            def: "II. Abdülhamit tahttan indirildi; yerine V. Mehmet (Reşat) padişah oldu",
          },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Ayaklanmaya İttihat ve Terakki'ye muhalif Ahrar Fırkası, İttihad-ı Muhammedi Fırkası ve avcı taburları destek verdi.",
      },
    ],
  },
  {
    id: "anayasa-1909",
    title: "1909 Anayasa Değişiklikleri",
    subtitle: "Parlamenter Sisteme Kritik Adım",
    content: [
      {
        type: "paragraph",
        text: "İttihatçıların girişimiyle V. Mehmet döneminde yapılan değişikliklerle anayasa daha demokratik bir nitelik kazandı.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "Padişahın meclisi kapatma yetkisine sınırlamalar getirildi",
          "Uluslararası antlaşmaların imzalanması meclise bırakıldı",
          "Hükümet padişaha değil meclise karşı sorumlu hale getirildi",
          "Hükümet, padişahın izni olmadan yasa teklifi verebilecekti",
          "Yargı güvensizliği yaratan madde anayasadan çıkarıldı",
          "Siyasi parti ve dernek kurmanın önündeki engeller kaldırıldı",
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Prens Sabahattin",
            def: "\"Adem-i Merkeziyet ve Teşebbüs-i Şahsi\" (yerinden yönetim ve kişisel girişim) ilkesinin savunucusu",
          },
          {
            term: "Vatan ve Hürriyet Cemiyeti",
            def: "Mustafa Kemal'in 1905'te Şam'da, 5. Ordu'ya bağlı 30. Süvari Alayı'nda görevliyken arkadaşlarıyla kurduğu cemiyet",
          },
        ],
      },
    ],
  },
  {
    id: "trablusgarb-savasi",
    title: "Trablusgarb Savaşı (1911–1912)",
    subtitle: "Osmanlı'nın Kuzey Afrika'daki Son Toprağı",
    content: [
      {
        type: "paragraph",
        text: "Birliğini geç tamamlayan İtalya, sömürge edinmek amacıyla Osmanlı'nın Trablusgarb toprağına (bugünkü Libya) saldırdı.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "İngiltere ve Fransa bu girişime seyirci kaldı — İtalya'yı Almanya'dan uzaklaştırmak için",
          "Osmanlı donanması ve kara bağlantısı olmadığından subaylarını bölgeye gizlice gönderdi",
          "Mustafa Kemal → Derne ve Tobruk komutanlığı",
          "Enver Bey → Bingazi komutanlığı",
          "İtalya, Osmanlı'yı barışa zorlamak için Rodos ve Onikiadalar'ı işgal etti (1912)",
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Uşi (Ouchy) Antlaşması — 18 Ekim 1912",
            def: "Trablusgarb İtalya'ya verildi · Onikiadalar geçici olarak İtalya'da kaldı · Trablusgarb dinen Osmanlı halifesine bağlı kalacaktı · Borcu İtalya ödeyecekti",
          },
          {
            term: "Önem",
            def: "Osmanlı Devleti Kuzey Afrika'daki son toprağını kaybetti. Mustafa Kemal'in sömürgeciliğe karşı verdiği ilk silahlı mücadeledir.",
          },
          {
            term: "Onikiadalar'ın akıbeti",
            def: "II. Dünya Savaşı sonrasında 1947 Paris Antlaşması ile İtalya'dan alınıp Yunanistan'a verildi",
          },
        ],
      },
    ],
  },
  {
    id: "i-balkan-savasi",
    title: "I. Balkan Savaşı (1912–1913)",
    subtitle: "Osmanlı Rumeli'yi Kaybediyor",
    content: [
      {
        type: "paragraph",
        text: "Rusya'nın kışkırtıcı politikasından etkilenen ve Avrupalı devletlerin desteğini alan Yunanistan, Bulgaristan, Sırbistan ve Karadağ, Osmanlı'yı Balkanlar'dan atmak amacıyla ittifak kurdu.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Savaşa katılmayan",
            def: "Romanya — tek katılmayan Balkan devletidir",
          },
          {
            term: "Kaybedilme nedenleri",
            def: "Ordu içi siyasi çekişmeler · 60 bin askerin önceden terhis edilmesi · 4 cephede birden savaşılması · ikmal ve haberleşme yetersizlikleri",
          },
          {
            term: "Londra Antlaşması (1913)",
            def: "Avrupalı devletlerin müdahalesiyle imzalandı, I. Balkan Savaşı sona erdi",
          },
        ],
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "Arnavutluk bağımsızlığını ilan etti (Osmanlı'dan ayrılan son Balkan devleti)",
          "Yanya, Selanik, Makedonya, Batı Trakya, Edirne ve Kırklareli kaybedildi",
          "İmroz ve Bozcaada dışındaki tüm Ege adaları kaybedildi",
          "Yenilgi Bab-ı Ali Baskını'na zemin hazırladı",
        ],
      },
    ],
  },
  {
    id: "bab-i-ali-baskini",
    title: "Bab-ı Ali Baskını (1913)",
    subtitle: "İttihat ve Terakki İktidarı Ele Geçirdi",
    content: [
      {
        type: "paragraph",
        text: "I. Balkan Savaşı yenilgisinin ardından iç siyasi bunalım derinleşti. 23 Ocak 1913'te Enver Bey önderliğindeki İttihatçı subaylar Bab-ı Ali'yi (Sadaret) basarak hükümeti devirdi.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "İttihat ve Terakki Cemiyeti, darbenin ardından iktidarın tek ve rakipsiz sahibi oldu",
          "Enver, Talat ve Cemal paşalar üçlüsü yönetimi fiilen devraldı",
          "Mustafa Kemal bu darbenin ardından İttihatçılarla yollarını ayırdı",
        ],
      },
    ],
  },
  {
    id: "ii-balkan-savasi",
    title: "II. Balkan Savaşı (1913)",
    subtitle: "Edirne Geri Alındı",
    content: [
      {
        type: "paragraph",
        text: "I. Balkan Savaşı'ndan en kârlı çıkan Bulgaristan'ın aşırı toprak kazanması, eski müttefiklerini karşı cepheye itti.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Cepheler",
            def: "Yunanistan + Sırbistan + Karadağ + Romanya → Bulgaristan'a karşı",
          },
          {
            term: "Osmanlı'nın tutumu",
            def: "Balkanlardaki karışıklıktan yararlandı; Enver Bey komutasında Edirne ve Kırklareli geri alındı, Meriç'e kadar ilerlendi",
          },
          {
            term: "Bükreş Antlaşması (1913)",
            def: "Balkan devletleri arasında imzalandı, II. Balkan Savaşı sona erdi",
          },
          {
            term: "İstanbul Antlaşması — Bulgaristan (1913)",
            def: "Meriç nehri sınır kabul edildi; Edirne, Kırklareli ve Dimetoka Osmanlı'da kaldı",
          },
          {
            term: "Atina Antlaşması — Yunanistan (1913)",
            def: "Yanya, Selanik ve Girit Yunanistan'a bırakıldı",
          },
          {
            term: "İstanbul Antlaşması — Sırbistan (1914)",
            def: "Sırbistan'da yaşayan Türk azınlıkların hakları kanuna bağlandı",
          },
        ],
      },
    ],
  },
  {
    id: "dunya-savasi-nedenleri",
    title: "I. Dünya Savaşı — Nedenleri ve Bloklar",
    subtitle: "1914–1918",
    content: [
      {
        type: "term-list",
        entries: [
          { term: "Sömürgecilik yarışı", def: "Sanayileşen devletlerin ham madde ve pazar arayışı" },
          { term: "Milliyetçilik", def: "Alman-Fransız (Alsas-Loren) ve Rus-Avusturya (Panslavizm) çatışmaları" },
          { term: "Militarizm", def: "Avrupa devletleri arasındaki silahlanma yarışı" },
          { term: "Bloklaşma", def: "İttifak (Almanya, Avusturya-Macaristan) ile İtilaf (İngiltere, Fransa, Çarlık Rusyası) karşı karşıya" },
          { term: "Fitili ateşleyen olay", def: "Avusturya-Macaristan Veliahtı Arşidük Franz Ferdinand'ın Sırplı milliyetçi Gavrilo Princip tarafından Saraybosna'da öldürülmesi (28 Haziran 1914)" },
        ],
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "İTTİFAK: Almanya · Avusturya-Macaristan · Osmanlı (1914) · Bulgaristan (1915)",
          "İTİLAF: İngiltere · Fransa · Çarlık Rusyası · Japonya · Belçika · Sırbistan → sonradan Romanya, ABD (1917), Yunanistan",
          "İtalya başlangıçta İttifak'ta; 1915'te İtilaf safına geçti",
        ],
      },
    ],
  },
  {
    id: "osmanli-savasa-giris",
    title: "Osmanlı'nın Savaşa Girme Nedenleri",
    subtitle: "Goben-Breslaw ve Gizli İttifak",
    content: [
      {
        type: "paragraph",
        text: "Savaş başladığında Osmanlı tarafsızdı; İtilaf devletleri de Almanya karşısında güçleri azalmasın diye Osmanlı'nın tarafsız kalmasını istiyordu.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "2 Ağustos 1914'te Türk-Alman Gizli İttifakı imzalandı",
          "Osmanlı'ya sığınan Goben (Yavuz) ve Breslaw (Midilli) adlı Alman gemileri Osmanlı bayrağı altına alındı",
          "Bu gemiler Karadeniz'e çıkarak Rus limanlarını (Odessa, Sivastopol) bombaladı",
          "Bunun üzerine İtilaf devletleri Osmanlı'ya savaş ilan etti (Ekim 1914)",
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Almanya'nın Osmanlı'yı savaşa çekme nedenleri",
            def: "Yeni cepheler açmak · Boğazlar ve Süveyş'i ele geçirmek · Rusya'ya yardımı kesmek · Halifeliği İngiliz sömürgelerindeki Müslümanlara karşı kullanmak · Berlin-Bağdat demiryolu · Osmanlı insan gücü",
          },
        ],
      },
    ],
  },
  {
    id: "canakkale-cephesi",
    title: "Çanakkale Cephesi (1915)",
    subtitle: "Mustafa Kemal'in Zaferi",
    content: [
      {
        type: "term-list",
        entries: [
          {
            term: "İtilaf'ın açma amaçları",
            def: "İstanbul ve Boğazları ele geçirmek · Rusya'ya yardım açmak · Balkan devletlerini kendi yanlarına çekmek",
          },
          {
            term: "Deniz harekâtı",
            def: "Nusret mayın gemisinin döşediği mayınlar ve Türk topçusu İtilaf donanmasına büyük kayıp verdirdi; geri çekildi",
          },
          {
            term: "Kara harekâtı",
            def: "19. Tümen Komutanı Mustafa Kemal, Anafartalar · Kireçtepe · Conkbayırı · Arıburnu cephelerinde İtilaf kuvvetlerini durdurdu",
          },
        ],
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "I. Dünya Savaşı'nın süresi uzadı",
          "Bulgaristan İttifak bloğuna katıldı (karşılığında Osmanlı Dimetoka'yı Bulgarlara verdi)",
          "Rusya'ya yardım götürülemediğinden Bolşevik İhtilali önlenemedi",
          "Mustafa Kemal ülkede ve dünyada tanındı; Millî Mücadele liderliğine giden yol açıldı",
        ],
      },
    ],
  },
  {
    id: "diger-cepheler",
    title: "Diğer Cepheler",
    subtitle: "Kafkas · Kanal · Irak · Suriye · Hicaz",
    content: [
      {
        type: "term-list",
        entries: [
          {
            term: "Kafkas (Doğu) Cephesi",
            def: "Sarıkamış Harekâtı büyük facia oldu. Ruslar Erzurum, Muş, Bitlis ve Trabzon'u işgal etti. Mustafa Kemal Muş ve Bitlis'i kurtardı. 1917 Bolşevik İhtilali'nden sonra cephe kapandı; Brest-Litovsk ile Kars, Ardahan, Batum geri alındı.",
          },
          {
            term: "Kanal (Süveyş) Cephesi",
            def: "Almanya'nın isteğiyle açıldı. Hedef: Mısır'ı geri almak ve Süveyş'i ele geçirmek. Cemal Paşa komutasında harekât başarısız oldu; İngilizler Sina Yarımadası'nı aldı.",
          },
          {
            term: "Irak (Basra) Cephesi",
            def: "İngilizler Kafkaslar üzerinden Rusya'ya yardım ve bölge petrolleri için bu cepheyi açtı. Kut-ül Amare'de İngilizlere ağır darbe vuruldu; ancak Arapların İngilizlerle işbirliği yapmasıyla Bağdat kaybedildi.",
          },
          {
            term: "Suriye-Filistin Cephesi",
            def: "Arap kabilelerinin İngilizlerle iş birliği yapmasıyla Filistin ve Suriye elden çıktı. Mustafa Kemal, Halep'te oluşturduğu savunma hattıyla işgal güçlerini durdurdu (Ekim 1918).",
          },
          {
            term: "Hicaz-Yemen Cephesi",
            def: "Hicaz Emiri Şerif Hüseyin'in İngilizlerle iş birliği yapması sonucu kaybedildi. Fahrettin Paşa'nın Medine savunması tarihe geçti; Paşa 'Çöl Kaplanı' olarak anıldı.",
          },
        ],
      },
    ],
  },
  {
    id: "savas-bitisi-wilson",
    title: "Savaşın Bitişi ve Wilson İlkeleri",
    subtitle: "ABD Devreye Girdi — Yeni Düzen",
    content: [
      {
        type: "paragraph",
        text: "Almanya güçlü sanayisine karşın müttefikleri yetersiz kaldığından savaşın yükünü yalnız taşıdı. Denizaltı savaşlarıyla İtilaf ikmalini kesmeye çalışırken 2 ABD sivil gemisini batırdı.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "ABD, Nisan 1917'de İtilaf safında savaşa girdi",
          "Güç dengesi kesin olarak İtilaf lehine döndü",
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Wilson İlkeleri (8 Ocak 1918)",
            def: "Kazanan devletler tazminat ve toprak almayacak · Azınlıklar devlet kurabilecek · Türklerin yaşadığı yerlerin bağımsızlığı tanınacak · Sömürgecilik yasaklanacak · Gizli antlaşma yapılmayacak · Milletler Cemiyeti kurulacak",
          },
          {
            term: "Sonuç",
            def: "İttifak devletleri bu ilkeleri kabul edilebilir bularak ateşkes istedi; İtilaf devletleri ise ilkeleri kendi çıkarları doğrultusunda yorumladı",
          },
        ],
      },
    ],
  },
  {
    id: "mondros",
    title: "Mondros Ateşkesi (30 Ekim 1918)",
    subtitle: "Osmanlı'nın Fiilî Sonu",
    content: [
      {
        type: "paragraph",
        text: "Limni Adası'nın Mondros Limanı'nda Bahriye Nazırı Rauf Bey (Orbay) ile İngiliz Amiral Calthorpe tarafından imzalandı.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "Boğazlar derhal açılacak, istihkamlar İtilaf denetimine bırakılacak",
          "Ordu terhis edilecek (Osmanlı'yı savunmasız bırakmak için)",
          "Tüm haberleşme araçları İtilaf kontrolünde olacak (halkın örgütlenmesini engellemek için)",
          "Kömür yatakları ve maden havzaları İtilaf denetimine geçecek",
          "Toros tünelleri ve liman işletmeleri İtilaf'a bırakılacak",
          "7. Madde: İtilaf devletleri güvenliklerini tehdit eden herhangi bir noktayı işgal edebilecek (işgallerin hukuki dayanağı)",
          "24. Madde: Doğudaki 6 vilayette karışıklık çıkarsa İtilaf oraya girebilecek (Ermeni devleti için zemin)",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Mustafa Kemal, 31 Ekim 1918'de Yıldırım Orduları Grup Komutanlığı'na getirildi.",
      },
    ],
  },
  {
    id: "gizli-antlasmalar",
    title: "I. Dünya Savaşı'nda Osmanlı'yı Paylaşma Antlaşmaları",
    subtitle: "Gizli Antlaşmalar",
    content: [
      {
        type: "term-list",
        entries: [
          {
            term: "Londra Antlaşması (1915)",
            def: "Antalya ve çevresi ile Onikiadalar üzerindeki egemenlik İtalya'ya",
          },
          {
            term: "Boğazlar (İstanbul) Antlaşması (1915)",
            def: "Boğazlar, Doğu Trakya'nın bir bölümü ile İmroz ve Bozcaada Rusya'ya",
          },
          {
            term: "Sykes-Picot Antlaşması (1916)",
            def: "Suriye kıyıları ve Lübnan → Fransa · Musul hariç Irak ve Ürdün → İngiltere",
          },
          {
            term: "Petrograd Protokolü (1916)",
            def: "Trabzon doğusundan Van güneyine uzanan bölge → Rusya",
          },
          {
            term: "Mac Mahon Antlaşması (1916)",
            def: "Arapların Osmanlı'ya karşı savaşması karşılığında Arap bağımsızlığı tanınacak",
          },
          {
            term: "Saint Jean de Maurienne Antlaşması (1917)",
            def: "İzmir ve Batı Anadolu → İtalya'ya (Sykes-Picot'a İtalya itirazı üzerine)",
          },
          {
            term: "Balfour Deklarasyonu (1917)",
            def: "İngiltere, Kudüs merkezli bir Yahudi devleti kurulmasını destekledi",
          },
        ],
      },
    ],
  },
  {
    id: "paris-konferansi",
    title: "Paris Barış Konferansı (18 Ocak 1919)",
    subtitle: "Yeni Dünya Düzeninin Çizilmesi",
    content: [
      {
        type: "paragraph",
        text: "I. Dünya Savaşı sonrasındaki düzeni belirlemek amacıyla toplanan Paris Barış Konferansı'nda Avrupa'nın siyasi haritası yeniden çizildi.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "ABD'nin isteğiyle Milletler Cemiyeti'nin kurulması kararlaştırıldı",
          "İtilaf devletleri 'savaş tazminatı' yerine 'onarım bedeli', 'sömürge' yerine 'manda ve himaye' kavramlarını kullandı",
          "Ermeni temsilciler Doğu Anadolu'da bir Ermeni devleti kurulmasını talep etti",
          "Gizli antlaşmalarla İtalya'ya vaat edilen Batı Anadolu, Yunanistan'a bırakıldı",
          "ABD ve İtalya beklentilerini tam karşılayamadı; İtilaf devletleri arasında ilk görüş ayrılıkları çıktı",
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          { term: "Almanya ile Versay Barış Antlaşması", def: "28 Haziran 1919" },
          { term: "Avusturya ile Sen Germen Barış Antlaşması", def: "10 Eylül 1919" },
          { term: "Bulgaristan ile Nöyyi Barış Antlaşması", def: "27 Kasım 1919" },
          { term: "Macaristan ile Triyanon Barış Antlaşması", def: "4 Haziran 1920" },
        ],
      },
    ],
  },
  {
    id: "mondros-sonrasi",
    title: "Mondros Sonrası — Cemiyetler ve İşgaller",
    subtitle: "Millî Mücadele'nin Temelleri",
    content: [
      {
        type: "paragraph",
        text: "Mondros Ateşkesi'nin ardından İtilaf kuvvetleri 7. maddeyi gerekçe göstererek Osmanlı topraklarını işgal etmeye başladı. Bu süreçte hem işgale yardımcı hem de millî mücadeleye zemin hazırlayan çeşitli cemiyetler kuruldu.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Zararlı Cemiyetler — Azınlık",
            def: "Mavri Mira · Pontus Rum Cemiyeti · Etnik-i Eterya · Hınçak Komitesi · Taşnak Sütyun · Ermeni İntikam Alayı",
          },
          {
            term: "Zararlı Cemiyetler — Millî Varlığa Düşman",
            def: "İngiliz Muhipleri Cemiyeti · Wilson İlkeleri Cemiyeti · Teali İslam Cemiyeti · Kürt Teali Cemiyeti · Hürriyet ve İtilaf Fırkası",
          },
          {
            term: "Yararlı Cemiyetler",
            def: "Trakya Paşaeli Müd. Huk. Mil. Cem. · İzmir Müdafaa-i Hukuk Cem. · İzmir Reddi İlhak Cemiyeti · Doğu Anadolu Müd. Huk. Cem. · Milli Kongre Cemiyeti · Anadolu Kadınları Müdafaa-i Vatan Cemiyeti",
          },
          {
            term: "İzmir'in İşgali (15 Mayıs 1919)",
            def: "Paris Barış Konferansı kararıyla Yunanistan, Mondros'un 7. maddesine dayanarak İzmir ve çevresini işgal etti. İlk kurşunu gazeteci Hasan Tahsin attı.",
          },
        ],
      },
    ],
  },
  {
    id: "son",
    title: "Dönemin Özeti",
    subtitle: "1909'dan 1919'a: Çöküş ve Direniş",
    content: [
      {
        type: "list",
        items: [
          "31 Mart Ayaklanması → II. Abdülhamit tahttan indirildi, 1909 anayasa değişiklikleri",
          "Trablusgarb Savaşı (1911-12) → Kuzey Afrika'daki son toprak İtalya'ya bırakıldı",
          "I. Balkan Savaşı (1912-13) → Rumeli neredeyse tamamen yitirildi",
          "II. Balkan Savaşı (1913) → Edirne geri alındı; Balkan antlaşmaları imzalandı",
          "I. Dünya Savaşı (1914-18) → Osmanlı 5 ayrı cephede savaştı; Çanakkale'de büyük zafer",
          "Mondros Ateşkesi (1918) → Osmanlı fiilen çöktü, işgaller başladı",
          "Paris Barış Konferansı (1919) → Osmanlı toprakları paylaşılmaya başlandı",
        ],
      },
    ],
    isFinal: true,
  },
];

export default culturePages;
