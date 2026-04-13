import type { CulturePageData } from "@/types/period-data";

const culturePages: CulturePageData[] = [
  {
    id: "kapak",
    title: "Milli Mücadele\nHazırlık Dönemi",
    subtitle: "Samsun · Kongreler · Misak-ı Milli · TBMM · Sevr",
    content: [],
    isCover: true,
  },
  {
    id: "kuvayi-milliye",
    title: "Kuva-i Milliye",
    subtitle: "Silahlı Halk Hareketi ve İlk Direniş",
    content: [
      {
        type: "paragraph",
        text: "Mondros Ateşkesi'nin ardından Anadolu'nun işgale açık hale gelmesiyle halk kendi kendini örgütlemeye başladı. Bu örgütlenmenin silahlı kolu olan Kuva-i Milliye, düzensiz yapısıyla düşmana karşı ilk direniş hattını oluşturdu.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Yapısı",
            def: "Silahlı düzensiz halk kuvvetleri; gönüllülerden oluşur, bölgeseldir, askeri disiplinden yoksundur",
          },
          {
            term: "Komutanlar",
            def: "Eşkıya reisleri, eski subaylar ve efeler; ihtiyaçlarını halktan karşılarlar",
          },
          {
            term: "Yönetim",
            def: "Tek merkezden yönetilmemiştir; her bölge kendi birliğini oluşturmuştur",
          },
          {
            term: "Görevleri",
            def: "Yunan ordusu, Rum ve Ermeni çeteleriyle mücadele; TBMM'ye karşı ayaklanmaları bastırma",
          },
        ],
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "İşgallere karşı ilk direniş Hatay (Dörtyol)'dadır",
          "Batı Cephesinde ilk direniş Ayvalık'tadır — Ali Çetinkaya (Kel Ali) kurşunu attı",
          "Sivas Kongresi'nde Ali Fuat Paşa, Batı Cephesi Kuva-i Milliye komutanlığına atandı",
          "8 Kasım 1920'de TBMM düzenli orduyu kurdu; Kuva-i Milliye birlikleri nizami orduya dahil edildi",
        ],
      },
    ],
  },
  {
    id: "samsun-ve-genelgeler",
    title: "Samsun'a Çıkış ve İlk Genelgeler",
    subtitle: "19 Mayıs 1919 · Havza · Amasya",
    content: [
      {
        type: "paragraph",
        text: "İngilizlerin Doğu Karadeniz'de bölgeyi işgal edeceği tehdidine karşı İstanbul Hükümeti, Mustafa Kemal'i 9. Ordu Müfettişi olarak Samsun'a gönderdi. Bu atama, milli mücadelenin fiili başlangıcına zemin hazırladı.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Samsun Raporu (22 Mayıs 1919)",
            def: "Bölgedeki çatışmaların nedeni Rumların silahlanarak Türk köylerini basmasıdır. İzmir'in işgali haksızdır",
          },
          {
            term: "Havza Genelgesi (28-29 Mayıs 1919)",
            def: "İşgallere karşı mitingler düzenlenecek; İstanbul ve İtilaf devletlerine protesto telgrafları çekilecek; azınlıklara zarar verilmeyecek",
          },
          {
            term: "Sonuç",
            def: "İngilizlerin isteğiyle İstanbul Hükümeti Mustafa Kemal'i geri çağırdı; Mustafa Kemal bu çağrıyı reddetti",
          },
        ],
      },
    ],
  },
  {
    id: "amasya-tamimi",
    title: "Amasya Tamimi (21-22 Haziran 1919)",
    subtitle: "Milli Mücadelenin İhtilal Beyannamesi",
    content: [
      {
        type: "paragraph",
        text: "Mustafa Kemal'in Rauf Orbay, Refet Bele ve Ali Fuat Cebesoy ile birlikte imzaladığı bu tamim; Kazım Karabekir ve Mersinli Cemal Paşa tarafından telgrafla onaylandı. Türk inkılabının ihtilal aşamasını başlatan belge olarak tarihe geçti.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "Vatanın bütünlüğü ve ulusun bağımsızlığı tehlikededir",
          "İstanbul Hükümeti üzerine düşen sorumluluğun gereklerini yerine getirememektedir",
          "Ulusun bağımsızlığını yine ulusun azmi ve kararı kurtaracaktır",
          "Her türlü etki ve denetimden uzak bir kurul oluşturulmalıdır",
          "Sivas'ta ulusal bir kongre toplanacak; delegeleri Müdafaa-i Hukuk cemiyetleri belirleyecek",
          "İtilaf devletlerinin haberleşmeyi engelleme girişimi tanınmayacak",
          "Ordu komutanları silahlarını teslim etmeyecek, birliklerini terhis etmeyecek",
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Önemi",
            def: "Kurtuluş Savaşı'nın amacı, gerekçesi ve yöntemi belirtildi. Üstü kapalı biçimde ulus egemenliğine ilk kez değinildi. Sivas Kongresi için çağrı yapıldı",
          },
          {
            term: "Sonuç",
            def: "İstanbul Hükümeti, Mustafa Kemal'in 9. Ordu Müfettişliği görevine son verdi",
          },
        ],
      },
    ],
  },
  {
    id: "erzurum-kongresi",
    title: "Erzurum Kongresi (23 Temmuz – 7 Ağustos 1919)",
    subtitle: "Milli Sınırların İlk İlanı",
    content: [
      {
        type: "paragraph",
        text: "Ermeni ve Pontus Rum tehdidine karşı halkı uyarmak ve doğu illerinin bütünlüğünü korumak amacıyla toplanan Erzurum Kongresi'nin başkanlığına Mustafa Kemal seçildi. Toplanış amacı bölgesel, aldığı kararlar ulusal nitelikteydi.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "Milli sınırlar içinde vatan bir bütündür, bölünemez — ilk kez ilan edildi",
          "Her türlü yabancı işgal ve müdahalesine karşı millet birleşerek karşı koyacak",
          "Azınlıklara siyasi hâkimiyeti ve sosyal dengeyi bozacak ayrıcalıklar verilemez",
          "Manda ve himaye kesinlikle kabul edilemez",
          "Osmanlı Mebusan Meclisi derhal açılmalı ve İstanbul Hükümeti denetim altına alınmalı",
          "İstanbul Hükümeti görevini yerine getirmezse geçici bir hükümet kurulacak",
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Temsil Kurulu",
            def: "Kongrede 9 kişilik, başkanlığını Mustafa Kemal'in yaptığı bölgesel Temsil Kurulu oluşturuldu",
          },
          {
            term: "Gazeteler",
            def: "Erzurum'da milli mücadeleyi desteklemek için Albayrak, Hadisat ve Le Pays (Vatan) gazeteleri çıkarıldı",
          },
        ],
      },
    ],
  },
  {
    id: "bati-cephesi-kongreleri",
    title: "Batı Cephesi Kongreleri",
    subtitle: "Balıkesir · Nazilli · Alaşehir (1919)",
    content: [
      {
        type: "paragraph",
        text: "İzmir'in işgalinin ardından Batı Anadolu halkı bölgesel kongreler aracılığıyla Yunan kuvvetlerine karşı örgütlendi. Bu kongreler yerel nitelikliydi ancak birbirleriyle koordineli hareket ederek Batı Cephesi'nin temelini attı.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Balıkesir Kongresi (26-31 Temmuz 1919)",
            def: "Hacım Muhittin Çarıklı önderliğinde toplandı. Yunan işgaline karşı mücadele kararı alındı. 'İzmir'e Doğru' gazetesi çıkarıldı. Padişaha bağlılık telgrafı çekildi",
          },
          {
            term: "Nazilli Kongresi (6 Ağustos 1919)",
            def: "Galip Hoca'nın (Celal Bayar) önderliğinde toplandı. Milis güçlere asker sağlanması, Kuva-i Milliye birliklerinin uyumlu hareketi ve vergi toplanması kararlaştırıldı",
          },
          {
            term: "Alaşehir Kongresi (16-25 Ağustos 1919)",
            def: "Hacım Muhittin Bey'in öncülüğünde toplandı. Erzurum Temsil Heyeti ile irtibata geçildi. Sivas Kongresi'ne temsilci gönderildi. Batı Cephesi fiilen oluştu",
          },
        ],
      },
    ],
  },
  {
    id: "sivas-kongresi",
    title: "Sivas Kongresi (4-11 Eylül 1919)",
    subtitle: "Milli Mücadele Tek Merkezden Yönetiliyor",
    content: [
      {
        type: "paragraph",
        text: "Amasya Tamimi'nde çağrısı yapılan Sivas Kongresi, toplanış amacı, yöntemi ve kararları itibarıyla ulusal niteliktedir. İstanbul Hükümeti kongreyi yasadışı ilan etti ve engellemeye çalıştı; ancak başarılı olamadı.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "Erzurum Kongresi beyannamesi çok az değişiklikle kabul edildi",
          "Manda ve himaye kesinlikle reddedildi",
          "Tüm cemiyetler Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti adı altında birleştirildi",
          "Temsil Kurulu üye sayısı 15'e yükseltildi; tüm yurdu temsil eder hale getirildi",
          "Ali Fuat Paşa Batı Cephesi Kuva-i Milliye komutanlığına atandı",
          "İrade-i Milliye gazetesinin çıkarılmasına karar verildi (milli mücadelenin sözcüsü)",
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Önem",
            def: "Milli mücadelenin tek merkezden yönetilmesi sağlandı. Temsil Kurulu TBMM açılana kadar tüm yurdu temsil etti. Temsil Kurulu yürütme yetkisini kullandı",
          },
          {
            term: "İlk Siyasi Başarı",
            def: "Sivas Kongresi sonrası Damat Ferit istifa etmek zorunda kaldı; yerine Ali Rıza Paşa Hükümeti kuruldu",
          },
        ],
      },
    ],
  },
  {
    id: "amasya-gorusmesi-ve-sonrasi",
    title: "Amasya Görüşmesi ve Ankara'ya Geçiş",
    subtitle: "Ekim 1919 – Aralık 1919",
    content: [
      {
        type: "paragraph",
        text: "Damat Ferit'in istifasının ardından kurulan Ali Rıza Paşa Hükümeti, Temsil Kurulu ile diyaloga açık bir tutum sergiledi. İstanbul adına Salih Paşa ile Ankara adına Mustafa Kemal, Amasya'da tarihi görüşmeleri gerçekleştirdi.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "Türk illeri terk edilmeyecek; manda ve himaye kabul edilmeyecek",
          "İstanbul Hükümeti Müdafaa-i Hukuk Cemiyeti'ni ve Sivas Kongresi kararlarını benimseyecek",
          "İtilaf devletleriyle barış görüşmelerine Temsil Kurulu'nun onaylamadığı kişiler katılmayacak",
          "Osmanlı Mebusan Meclisi seçimleri serbestçe yapılacak",
          "Meclisin İstanbul'da toplanmasının güvenlik açısından sakıncalı olduğu kabul edilecek",
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Önemi",
            def: "İstanbul Hükümeti Temsil Kurulu'nu resmen tanıdı. Taraflar ilk kez birlikte hareket etti",
          },
          {
            term: "Ankara'ya Geçiş (27 Aralık 1919)",
            def: "Temsil Heyeti güvenlik, konum ve ulaşım kolaylığı nedeniyle Ankara'yı merkez seçti",
          },
        ],
      },
    ],
  },
  {
    id: "misak-i-milli",
    title: "Son Osmanlı Mebusan Meclisi ve Misak-ı Milli",
    subtitle: "12 Ocak – 28 Ocak 1920",
    content: [
      {
        type: "paragraph",
        text: "Son Osmanlı Mebusan Meclisi 12 Ocak 1920'de açıldı. Meclis başkanlığına Reşat Hikmet seçildi; Müdafaa-i Hukuk Grubu değil, 'Felah-ı Vatan Grubu' kuruldu. 28 Ocak'ta Felah-ı Vatan Grubu'nun desteğiyle Misak-ı Milli gizlice kabul edildi.",
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "Mondros'ta işgal edilmemiş Türk ve Müslüman ekseriyetli topraklar bölünemez bütündür",
          "Kars, Ardahan ve Batum (Elviye-i Selase) ile Batı Trakya için halk oylaması yapılmalı",
          "Azınlık hakları komşu ülkelerdeki Müslüman haklarıyla karşılıklılık ilkesiyle kabul edilecek",
          "İstanbul ve Marmara güvenliği sağlandıkça Boğazlar serbest geçişe açılabilir",
          "Kapitülasyonlar kabul edilemez; gelişimimizi engelleyen yaptırımlar tanınmaz",
        ],
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Önemi",
            def: "Milli mücadelenin ilkeleri ve milli sınırlar belirlendi. Türk milletinin kabul edeceği barışın şartları ortaya kondu. Milli Mücadele yasal zemine oturdu",
          },
        ],
      },
    ],
  },
  {
    id: "istanbul-isgali-ve-tbmm",
    title: "İstanbul'un İşgali ve TBMM'nin Açılışı",
    subtitle: "16 Mart – 23 Nisan 1920",
    content: [
      {
        type: "paragraph",
        text: "Misak-ı Milli'nin ilanının ardından İtilaf devletleri 16 Mart 1920'de İstanbul'u resmen işgal etti. Mebusan Meclisi basılarak kapatıldı; bazı milletvekilleri Malta'ya sürgüne gönderildi. Bu gelişme üzerine Mustafa Kemal, 23 Nisan 1920'de Ankara'da TBMM'yi açtı.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Temsil Kurulu'nun Tepkisi",
            def: "İstanbul'la haberleşme kesildi; itilaf subayları tutuklandı; demiryolları tahrip edildi; banka varlıklarına el konuldu",
          },
          {
            term: "TBMM'nin Açılışı (23 Nisan 1920)",
            def: "Yeni seçilenler ve İstanbul'dan kaçan vekillerle açıldı. En yaşlı üye Şerif Bey toplantıya başkanlık etti. 24 Nisan'da Mustafa Kemal başkan seçildi",
          },
        ],
      },
      { type: "divider" },
      {
        type: "list",
        items: [
          "Yasama ve yürütme yetkileri TBMM'ye aittir (kuvvetler birliği)",
          "TBMM'nin üstünde hiçbir güç yoktur",
          "Meclis içinden seçilen bir heyet hükümet işlerine bakar (meclis hükümeti sistemi)",
          "TBMM: ulusal, kurucu, ihtilalci, halkçı ve merkeziyetçi bir meclisti",
          "I. TBMM'nin çıkardığı ilk kanun: Ağnam Vergisi'nin arttırılması (24 Nisan 1920)",
        ],
      },
    ],
  },
  {
    id: "sevr-ve-ayaklanmalar",
    title: "Sevr Antlaşması ve İç Ayaklanmalar",
    subtitle: "1920 — İki Cepheli Mücadele",
    content: [
      {
        type: "paragraph",
        text: "TBMM hem dış düşmana hem de iç çatışmalara karşı aynı anda mücadele vermek zorunda kaldı. Sevr Antlaşması Osmanlı'yı fiilen sona erdirirken iç ayaklanmalar milli hareketi zayıflatmaya çalıştı.",
      },
      { type: "divider" },
      {
        type: "term-list",
        entries: [
          {
            term: "Sevr (10 Ağustos 1920)",
            def: "Doğu Trakya ve Batı Anadolu Yunanistan'a; Güney Anadolu Fransa ve İtalya'ya; Irak ve Arabistan İngiltere'ye; Doğu Anadolu'da Ermeni devleti. Osmanlı ordusu 50.700 kişiyle sınırlandırıldı. Kapitülasyonlar en geniş haliyle yeniden geçerli. Osmanlı Mebusan Meclisi onaylamadığından hukuken geçersizdi",
          },
          {
            term: "İç Ayaklanmalar",
            def: "Aznavur, Kuva-i İnzibatiye (İstanbul kaynaklı); Bolu-Düzce, Yozgat-Çapanoğlu, Konya-Delibaş ve Koçkiri (kışkırtma kaynaklı); Çerkez Ethem ve Demirci Mehmet Efe (Kuva-i Milliyeci iken sonradan isyan)",
          },
          {
            term: "İstiklal Mahkemeleri (18 Eylül 1920)",
            def: "Ayaklanmaları bastırmak ve asker kaçaklığını önlemek için kurulan mahkemeler. Kararları kesin ve anında uygulandı. Meclisin otoritesini güçlendirdi",
          },
        ],
      },
    ],
  },
];

export default culturePages;
