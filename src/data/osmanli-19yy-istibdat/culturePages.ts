import type { CulturePageData } from "@/types/period-data";

const culturePages: CulturePageData[] = [
  {
    id: "kapak",
    title: "Osmanlı 19. Yüzyıl\nve İstibdat Dönemi",
    subtitle: "II. Mahmut · Tanzimat · Meşrutiyet · İstibdat",
    content: [],
    isCover: true,
  },
  {
    id: "genel-durum",
    title: "19. Yüzyılda Genel Durum",
    subtitle: "Doğu Sorunu ve Hasta Adam",
    content: [
      {
        type: "paragraph",
        text: "19. yüzyılda Osmanlı Devleti varlığını tek başına koruyamayacak düzeye gelmiştir. Avrupa devletleri bu durumu kendi çıkarları doğrultusunda değerlendirmiştir.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Doğu Sorunu (Şark Meselesi)",
            def: "Avrupalı devletlerin Osmanlı topraklarını paylaşma meselesine verdikleri ad",
          },
          {
            term: "Hasta Adam",
            def: "Rus Çarı I. Nikola'nın Osmanlı için 1853'te kullandığı benzetme: 'Kollarımız arasında ağır hasta bir adam var'",
          },
          {
            term: "Denge Siyaseti",
            def: "Osmanlı'nın Avrupalı devletler arasındaki çıkar çatışmalarından yararlanma politikası",
          },
          {
            term: "Panslavizm",
            def: "Rusya'nın Slav ırk birliğini gerçekleştirme ve Balkanlarda uydu devletler kurma politikası",
          },
        ],
      },
    ],
  },
  {
    id: "sened-i-ittifak",
    title: "Sened-i İttifak (1808)",
    subtitle: "Padişah Yetkisinin İlk Kez Sınırlandırılması",
    content: [
      {
        type: "paragraph",
        text: "II. Mahmut ile ayanlar arasında imzalanan Sened-i İttifak, Osmanlı tarihinde padişah yetkilerinin ilk kez resmi bir belgeyle kısıtlandığı belgedir.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "Ayanlar padişahın emrine uyacak",
          "İstanbul'da ayaklanma çıkarsa ayanlar emir beklemeden bastıracak",
          "Ayanlar vergi ve asker toplanmasına karşı gelmeyecek",
          "Padişah ağır vergiler koymayacak, adaletli davranacak",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Önemli Özellikleri:",
      },
      {
        type: "list",
        items: [
          "Herhangi bir dış baskı olmadan iç dinamiklerle oluştu",
          "Devlet, ayanları resmen tanımış oldu",
          "Osmanlı'da padişah yetkisinin kısıtlandığı ilk belgedir",
          "İngiltere'deki Magna Carta ile benzerlik kurulur ancak daha sınırlı kaldı",
        ],
      },
    ],
  },
  {
    id: "ii-mahmut-askeri",
    title: "II. Mahmut: Askeri Islahatlar",
    subtitle: "Vakay-ı Hayriye ve Yeni Ordu",
    content: [
      {
        type: "paragraph",
        text: "II. Mahmut'un en köklü reformu, yüzyıllardır devleti engelleyen Yeniçeri Ocağı'nı kaldırmasıdır.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Vakay-ı Hayriye (1826)",
            def: "'Hayırlı Olay' — Yeniçeri Ocağı'nın kaldırılması. Yeni kurulan Eşkinci Ocağı'na karşı çıkan yeniçeriler bu sefer bastırıldı.",
          },
          {
            term: "Asâkir-i Mansure-i Muhammediye",
            def: "Yeniçeri Ocağı'nın yerini alan, Avrupa tarzında eğitim alan modern ordu",
          },
          {
            term: "Redif Birlikleri",
            def: "Vilayetlerde kurulan yedek askeri birlikler",
          },
          {
            term: "Bektaşi Tarikatının Kapatılması",
            def: "Yeniçerilerle iç içe geçmiş tarikat, ocakla birlikte kapatıldı",
          },
        ],
      },
    ],
  },
  {
    id: "ii-mahmut-yonetim",
    title: "II. Mahmut: Yönetim ve Diğer Islahatlar",
    subtitle: "Divan'dan Nazırlıklara, Tımar'dan Maaşa",
    content: [
      {
        type: "paragraph",
        text: "II. Mahmut, yönetim yapısını kökten dönüştürerek modern devlet kurumlarının temelini attı.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Divan Hümayun → Nazırlıklar",
            def: "Divan kaldırılarak yerine bakanlıklar (nazırlıklar) kuruldu: Sadrazam→Başvekil, Defterdar→Maliye Nazırı, Reisülküttab→Hariciye Nazırı",
          },
          {
            term: "Tımar Sisteminin Kaldırılması",
            def: "Memurlara toprak yerine maaş bağlandı; merkezi otoriteyi güçlendirdi",
          },
          {
            term: "Takvim-i Vekayi (1831)",
            def: "Osmanlı'nın ilk resmi gazetesi",
          },
          {
            term: "İlk Nüfus Sayımı (1831)",
            def: "Askeri amaçlı yapıldı; sadece erkekler sayıldı",
          },
          {
            term: "Muhtarlıklar",
            def: "Köy ve mahallelere muhtarlık kuruldu; yerel yönetim oluşturuldu",
          },
          {
            term: "Posta, Polis, Karantina Teşkilatları",
            def: "Modern devlet hizmetleri kurumsal bir yapıya kavuştu",
          },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Eğitim alanında: İlköğretim zorunlu hale getirildi (1824), Mekteb-i Tıbbiye ve Mekteb-i Harbiye açıldı, Avrupa'ya ilk öğrenci gönderildi.",
      },
    ],
  },
  {
    id: "misir-sorunu",
    title: "Mısır Sorunu (1831–1840)",
    subtitle: "Kavalalı'nın İsyanı ve Boğazlar Meselesi",
    content: [
      {
        type: "paragraph",
        text: "Kavalalı Mehmet Ali Paşa'nın 1830'da başlattığı isyan, Osmanlı'nın iç sorunu olmaktan çıkarak Avrupalı devletlerin müdahalesini davet eden uluslararası bir krize dönüştü.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Kütahya Antlaşması (1833)",
            def: "Kavalalı'nın Konya'ya kadar ilerlemesinin ardından Suriye ve Adana geçici olarak Mısır'a bırakıldı",
          },
          {
            term: "Hünkar İskelesi Antlaşması (1833)",
            def: "Osmanlı, Rusya'nın askeri yardımı karşılığında savaş halinde Boğazları Rusya lehine kapatmayı taahhüt etti; 'Boğazlar Sorunu' başladı",
          },
          {
            term: "Nizip Muharebesi (1839)",
            def: "İbrahim Paşa Osmanlı ordusunu imha etti; aynı dönemde donanma da Mısır'a teslim edildi",
          },
          {
            term: "Londra Antlaşması (1840)",
            def: "Avrupalı güçlerin devreye girmesiyle Mısır Sorunu çözüldü; Mısır kalıtsal valilik olarak Kavalalı'ya bırakıldı",
          },
          {
            term: "Londra Boğazlar Sözleşmesi (1841)",
            def: "Hünkar İskelesi'nin Rusya'ya verdiği ayrıcalıklar iptal edildi; Boğazlar çok taraflı güvence altına alındı",
          },
        ],
      },
    ],
  },
  {
    id: "tanzimat-fermani",
    title: "Tanzimat Fermanı (1839)",
    subtitle: "Gülhane Hattı Hümayunu — Hukukun Üstünlüğü",
    content: [
      {
        type: "paragraph",
        text: "3 Kasım 1839'da Mustafa Reşit Paşa tarafından Gülhane Parkı'nda okunan Tanzimat Fermanı, Osmanlı anayasal sürecinin başlangıcıdır.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Temel Maddeleri:",
      },
      {
        type: "list",
        items: [
          "Halkın can, mal, ırz ve namus güvencesi sağlanacak",
          "Hiç kimse yargılanmadan cezalandırılmayacak",
          "Osmanlı uyruğundaki herkes mülk edinip miras bırakabilecek",
          "Mahkemeler herkese açık olacak, yasalar önünde herkes eşit",
          "Rüşvet ve iltimas yasaklanacak",
          "Vergiler kişinin gelirine göre toplanacak",
          "Padişah dahil herkes yasalara uyacak",
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Hazırlayan",
            def: "Sadrazam Mustafa Reşit Paşa (6 kez sadrazam, 4 kez hariciye nazırı; Tanzimat'ın mimarı)",
          },
          {
            term: "Önemi",
            def: "Yönetimde kanun üstünlüğünün ilk kez resmi kabulü — anayasa değil, anayasal sürecin başlangıcı",
          },
          {
            term: "Amacı",
            def: "Avrupa'nın güvenini kazanmak, azınlık isyanlarını önlemek, Mısır ve Boğazlar sorununda destek bulmak",
          },
        ],
      },
    ],
  },
  {
    id: "tanzimat-yenilikler",
    title: "Tanzimat Dönemi Yenilikleri",
    subtitle: "Hukuk · Eğitim · Ekonomi · Kurumlar",
    content: [
      {
        type: "paragraph",
        text: "Tanzimat dönemi (1839-1876) boyunca Osmanlı, Avrupa kurumlarından esinlenen köklü dönüşümleri hayata geçirdi.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Hukuk",
            def: "Divan-ı Ahkâm-ı Adliye (Yargıtay) ve Şura-i Devlet (Danıştay) kuruldu; Avrupa tarzı mahkemeler açıldı",
          },
          {
            term: "İlk Kâğıt Para",
            def: "Kaime-i Naktiye-i Mutebere — Osmanlı'nın ilk kâğıt parası basıldı",
          },
          {
            term: "İlk Dış Borç (1854)",
            def: "Kırım Savaşı için İngiltere'den alınan borç, Osmanlı mali bağımlılığının başlangıcıdır",
          },
          {
            term: "Bankacılık",
            def: "1856'da Bank-ı Osmani kuruldu; 1863'te Bank-ı Osmani Şahane adını alarak para basma yetkisi aldı",
          },
          {
            term: "Eğitim",
            def: "Darülfünun (1863), Galatasaray Sultanisi (1868), Darülmüallimat (1870), Mekteb-i Mülkiye (1859) açıldı",
          },
          {
            term: "Mecelle (1878'de yürürlük)",
            def: "Ahmet Cevdet Paşa önderliğinde hazırlanan Osmanlı Medeni Hukuku; İslam hukukunu sistematik biçimde kodladı",
          },
          {
            term: "Memleket Sandıkları (1863)",
            def: "Mithat Paşa'nın kurduğu tarım kredisi sandıkları; 1888'de Ziraat Bankası'na dönüştürüldü",
          },
          {
            term: "İlk Özel Gazete",
            def: "Tercüman-ı Ahval (1860) — Şinasi ve Agâh Efendi tarafından çıkarıldı",
          },
        ],
      },
    ],
  },
  {
    id: "islahat-fermani",
    title: "Islahat Fermanı (1856)",
    subtitle: "Kırım Savaşı Sonrası Azınlık Hakları",
    content: [
      {
        type: "paragraph",
        text: "Abdülmecit döneminde 1856 Paris Konferansı öncesinde ilan edilen Islahat Fermanı, Paris Antlaşması metnine de eklendi.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Temel Maddeleri:",
      },
      {
        type: "list",
        items: [
          "Gayrimüslimler devlet memuru olabilecek",
          "Herkes kendi dinine göre yemin edebilecek",
          "Gayrimüslimler nakdi bedel karşılığı askerlikten muaf olabilecek",
          "Herkes şirket ve banka kurabilecek",
          "Azınlıklara ait kilise, okul ve hastaneler tamir edilebilecek",
          "Resmi yazışmalarda azınlıkları küçük düşüren ifadeler kullanılmayacak",
          "Cizye vergisi ve iltizam usulüne son verilecek",
          "İşkence, dayak ve angarya yasaklanacak",
          "Yabancılar Osmanlı toprakları üzerinde mülk edinebilecek",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Kırım Savaşı (1853-56) İngiltere, Fransa ve Piyemonte'nin desteğiyle Osmanlı lehine sonuçlandı. 1856 Paris Antlaşması ile Osmanlı toprak bütünlüğü Avrupalı devletlerce güvence altına alındı; Osmanlı Avrupa devletler hukukuna katıldı.",
      },
    ],
  },
  {
    id: "i-mesrutiyet",
    title: "I. Meşrutiyet (1876)",
    subtitle: "Kanun-i Esasi — Osmanlı'nın İlk Anayasası",
    content: [
      {
        type: "paragraph",
        text: "Tanzimat döneminde yetişen Genç Osmanlılar (Jön Türkler) meşrutiyet fikrini savundu. Namık Kemal, Ziya Paşa ve Şinasi bu hareketin öncüleri arasındaydı.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Genç Osmanlılar",
            def: "Osmanlıcılık ve meşrutiyeti savunan aydın grup; Abdülaziz'in tahtan indirilmesinde etkili oldu",
          },
          {
            term: "Kanun-i Esasi (23 Aralık 1876)",
            def: "Mithat Paşa başkanlığındaki kurul tarafından hazırlandı; II. Abdülhamit tarafından onaylandı",
          },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Meclisi Umum (Genel Meclis) yapısı:",
      },
      {
        type: "term-list",
        entries: [
          {
            term: "Meclisi Ayan",
            def: "Üyelerini padişah atar; denetim ve onay işlevi görür",
          },
          {
            term: "Meclisi Mebusan",
            def: "Üyelerini halk seçer; seçimler 4 yılda bir, sadece erkekler, çift dereceli sistem",
          },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Padişahın Yetkileri: Meclisi açıp kapama, hükümeti atama, yasaları veto etme, kişiler hakkında sürgün kararı alma.",
      },
    ],
  },
  {
    id: "istibdat",
    title: "İstibdat Dönemi (1878–1908)",
    subtitle: "Baskı, Sansür ve II. Abdülhamit'in Yönetimi",
    content: [
      {
        type: "paragraph",
        text: "93 Harbi'ni bahane eden II. Abdülhamit 1878'de meclisi kapattı. 1878-1908 arası dönem 'İstibdat' (baskı) olarak anılır.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "Genç Osmanlılar takibata uğradı; pek çoğu Avrupa'ya kaçtı",
          "Osmanlıcılık yerine İslamcılık (Ümmetçilik) politikası ön plana çıktı",
          "Yoğun baskı ve sansür uygulandı; anayasadaki özgürlükler askıya alındı",
          "Donanma Haliç'e çekildi ve çürümeye bırakıldı",
          "Hafiye (istihbarat) ağı kurularak muhalefet takip edildi",
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "İslamcılık Politikası",
            def: "Hilafet kurumu öne çıkarıldı; Sultan aynı zamanda İslam dünyasının halifesi olarak konumlandırıldı",
          },
          {
            term: "Hamidiye Alayları",
            def: "Doğu Anadolu'da Kürt aşiretlerinden oluşturulan düzensiz süvari birlikleri; başlangıçta Ermeni olaylarına karşı kullanıldı",
          },
          {
            term: "Sanayi-i Nefise Mektebi (1883)",
            def: "Osman Hamdi Bey müdürlüğünde açılan güzel sanatlar okulu — dönemin kültürel yatırımlarından biri",
          },
          {
            term: "Berlin-Bağdat Demiryolu",
            def: "Almanya ile yakınlaşmanın somut ürünü; I. Dünya Savaşı'nda Almanya yanında yer alınmasının zeminini hazırladı",
          },
        ],
      },
    ],
  },
  {
    id: "93-harbi-berlin",
    title: "93 Harbi ve Berlin Antlaşması",
    subtitle: "Osmanlı'nın Büyük Toprak Kayıpları",
    content: [
      {
        type: "paragraph",
        text: "1877-1878 Osmanlı-Rus Savaşı (93 Harbi) Balkanlar'da ve Kafkasya'da ağır yenilgilerle sonuçlandı. Rus ordusu Yeşilköy'e kadar ilerledi.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Ayastefanos Antlaşması (1878)",
            def: "Büyük Bulgaristan kuruldu; Sırbistan, Karadağ, Romanya bağımsız oldu; Kars, Ardahan, Batum Rusya'ya geçti",
          },
          {
            term: "Berlin Antlaşması (1878)",
            def: "Rusya'yı güçlendiren Ayastefanos Batılı devletlerce reddedildi; Berlin'de denge yeniden kuruldu. Büyük Bulgaristan üçe bölündü; Elviye-i Selase (Kars, Ardahan, Batum) Rusya'da kaldı",
          },
          {
            term: "İngiltere Kıbrıs'ı Aldı (1878)",
            def: "Berlin Kongresi öncesinde imzalanan gizli anlaşmayla Kıbrıs İngiltere'ye bırakıldı",
          },
          {
            term: "Ermeni Meselesi",
            def: "Berlin Antlaşması ile sözde bir Ermeni meselesi yaratılarak Osmanlı iç işlerine müdahale kapısı aralandı",
          },
        ],
      },
    ],
  },
  {
    id: "istibdat-ekonomi",
    title: "İstibdat Döneminde Ekonomi",
    subtitle: "Duyun-u Umumiye ve Mali Çöküş",
    content: [
      {
        type: "paragraph",
        text: "1875'te ilan edilen mali iflas, 1881'de Duyun-u Umumiye idaresinin kurulmasıyla sonuçlandı. Osmanlı mali egemenliğinin büyük bölümünü yitirdi.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Muharrem Kararnamesi (1881)",
            def: "Osmanlı'nın resmen mali iflasını ilan ettiği kararname",
          },
          {
            term: "Duyun-u Umumiye İdaresi (1881)",
            def: "Alacaklı Avrupalı devletlerin kurduğu, Osmanlı gelirlerinin bir bölümünü (tuz, tütün, ipek vergisi vb.) doğrudan tahsil eden idare",
          },
          {
            term: "Reji İdaresi (1883)",
            def: "Osmanlı'daki tütün üretim, satış ve işletme tekeli yabancı şirkete devredildi",
          },
          {
            term: "Osmanlı İtibar-ı Milli Bankası (1906)",
            def: "Milli sermayeyle kurulan ilk Osmanlı bankası; İttihat ve Terakki'nin ekonomi politikasının yansıması",
          },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "19. yüzyılda Fransa Cezayir'i (1830) ve Tunus'u (1881); İngiltere ise Kıbrıs'ı (1878) ve Mısır'ı (1882) işgal etti.",
      },
    ],
  },
  {
    id: "itc",
    title: "İttihat ve Terakki Cemiyeti",
    subtitle: "Muhalefetten İktidara",
    content: [
      {
        type: "paragraph",
        text: "2 Haziran 1889'da İstanbul Askeri Tıbbiye'de dört tıbbiyeli öğrenci tarafından kurulan cemiyet, Türkçülük ideolojisini benimsedi.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Kurucular",
            def: "İshak Sükûti, İbrahim Temo, Abdullah Cevdet, Çerkez Mehmed Reşid",
          },
          {
            term: "Öncü Liderler",
            def: "Enver Paşa, Talat Paşa, Cemal Paşa (Üç Paşalar)",
          },
          {
            term: "İdeoloji",
            def: "Türkçülük; milliyetçi, laik ve meşrutiyetçi bir çizgi",
          },
          {
            term: "Vatan ve Hürriyet Cemiyeti",
            def: "Mustafa Kemal'in 1905'te Şam'da kurduğu cemiyet; daha sonra İTC ile birleşti",
          },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Cemiyetin muhalif çizgideki diğer yapılar: Prens Sabahattin'in 'Adem-i Merkeziyet ve Teşebbüs-i Şahsi' hareketi; Ahrar Fırkası.",
      },
    ],
  },
  {
    id: "ii-mesrutiyet",
    title: "II. Meşrutiyet (23 Temmuz 1908)",
    subtitle: "İstibdat Sona Erdi — Çok Partili Hayat Başladı",
    content: [
      {
        type: "paragraph",
        text: "İngiltere ve Rusya'nın Reval'de (1908) Panslavizm üzerinde uzlaşması İttihatçıları alarma geçirdi. Makedonya'da silahlanan İTC subayları II. Abdülhamit'i anayasayı yeniden yürürlüğe koymaya zorladı.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "Eş zamanlı gelişmeler:",
      },
      {
        type: "list",
        items: [
          "Bulgaristan bağımsızlığını ilan etti (1908)",
          "Avusturya-Macaristan Bosna-Hersek'i ilhak etti",
          "Girit, Yunanistan'a bağlanma kararı aldı",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "II. Meşrutiyet döneminde kurulan başlıca partiler:",
      },
      {
        type: "list",
        items: [
          "İttihat ve Terakki Cemiyeti (iktidar)",
          "Ahrar Fırkası (hürriyetçi muhalefet)",
          "Hürriyet ve İtilaf Fırkası",
          "İttihad-ı Muhammediye Fırkası",
          "Osmanlı Demokrat Fırkası",
        ],
      },
    ],
  },
  {
    id: "31-mart-1909-anayasa",
    title: "31 Mart ve 1909 Anayasa Değişiklikleri",
    subtitle: "Hareket Ordusu ve Demokratikleşme",
    content: [
      {
        type: "paragraph",
        text: "13 Nisan 1909'da (Rumi 31 Mart) İstanbul'da patlak veren ayaklanma, Osmanlı'da rejime karşı yapılan ilk gerici isyandır.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Tetikleyici Etkenler",
            def: "Balkanlardaki siyasi bunalım, parti çatışmaları, Volkan ve Serbesti gazetelerinin kışkırtıcı yazıları, dinî duyguların istismarı",
          },
          {
            term: "Hareket Ordusu",
            def: "Selanik'te kurulan; komutası Mahmut Şevket Paşa'ya, kurmay başkanlığı Mustafa Kemal'e ait olan kuvvet; isyanı bastırdı",
          },
          {
            term: "II. Abdülhamit'in Hal'i",
            def: "Ayaklanmanın bastırılmasının ardından meclis onu tahttan indirdi; yerine V. Mehmet (Reşat) geçti",
          },
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "1909 Anayasa Değişiklikleri:",
      },
      {
        type: "list",
        items: [
          "Padişahın meclisi kapatma yetkisine sınırlamalar getirildi",
          "Uluslararası antlaşmaların imzalanması meclisin onayına bağlandı",
          "Hükümet padişaha değil meclise karşı sorumlu hale getirildi",
          "Hükümet padişahın izni olmadan yasa teklifi verebilecekti",
          "Yargı güvensizliği yaratan madde anayasadan çıkarıldı",
          "Siyasi parti ve dernek kurmanın önündeki engeller kaldırıldı",
        ],
      },
    ],
  },
  {
    id: "final",
    title: "Tebrikler!",
    subtitle: "19. YY ve İstibdat Dönemi bölümünü tamamladınız.",
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
