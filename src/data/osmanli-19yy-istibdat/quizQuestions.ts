import type { QuizQuestion } from "@/types/period-data";

const quizQuestions: QuizQuestion[] = [
  // II. Mahmut Dönemi — 6 soru
  {
    id: 1,
    question: "Osmanlı tarihinde padişahın yetkilerinin ilk kez resmi bir belgeyle kısıtlandığı belge aşağıdakilerden hangisidir?",
    options: [
      "Tanzimat Fermanı",
      "Sened-i İttifak",
      "Kanun-i Esasi",
      "Islahat Fermanı",
    ],
    correctIndex: 1,
    explanation: "Sened-i İttifak (1808), II. Mahmut ile ayanlar arasında imzalanmış ve padişahın yetkilerinin ilk kez kâğıda döküldüğü belgedir. Herhangi bir dış baskı olmaksızın iç dinamiklerle oluşmasıyla da özgün bir nitelik taşır.",
  },
  {
    id: 2,
    question: "Yeniçeri Ocağı'nın kaldırılmasına 'Vakay-ı Hayriye' (Hayırlı Olay) adının verilmesinin temel nedeni nedir?",
    options: [
      "Olayın bayram gününe denk gelmesi",
      "Padişahın bu kararı ulema onayıyla alması",
      "Yeniçerilerin kendiliğinden ocağı terk etmesi",
      "Modernleşmenin önündeki en büyük engelin ortadan kalkması",
    ],
    correctIndex: 3,
    explanation: "Yeniçeri Ocağı, Osmanlı'daki reform girişimlerinin önündeki en büyük engeldi. II. Mahmut'un 1826'da bu ocağı kaldırması, modernleşmenin yolunu açtığı için 'hayırlı olay' olarak nitelendirilmiştir.",
  },
  {
    id: 3,
    question: "II. Mahmut döneminde Divan-ı Hümayun kaldırılarak yerine hangi yapı getirilmiştir?",
    options: [
      "Şura-i Devlet",
      "Meclis-i Mebusan",
      "Nazırlıklar (Bakanlıklar)",
      "Divan-ı Ahkâm-ı Adliye",
    ],
    correctIndex: 2,
    explanation: "Divan-ı Hümayun'un kaldırılmasıyla Sadrazam'a Başvekil, Defterdar'a Maliye Nazırı, Reisülküttab'a Hariciye Nazırı denilmeye başlandı. Avrupa'daki bakanlık sistemine benzer nazırlıklar (bakanlıklar) kuruldu.",
  },
  {
    id: 4,
    question: "Osmanlı'nın 'Hasta Adam' benzetmesiyle anılmasını ilk kez kullanan devlet adamı ve yıl aşağıdakilerden hangisidir?",
    options: [
      "Bismarck — 1871",
      "I. Nikola — 1853",
      "Napolyon — 1809",
      "II. Katerina — 1774",
    ],
    correctIndex: 1,
    explanation: "Rus Çarı I. Nikola, 1853'te St. Petersburg'da 'Kollarımız arasında ağır hasta bir adam var' diyerek Osmanlı'yı 'Hasta Adam' olarak nitelendirmiştir.",
  },
  {
    id: 5,
    question: "1827 Navarin Olayı'nın doğrudan sonucu aşağıdakilerden hangisidir?",
    options: [
      "Tanzimat Fermanı'nın hazırlanması",
      "Hünkar İskelesi Antlaşması'nın imzalanması",
      "Osmanlı-Rus Savaşı'nın başlaması ve Yunan bağımsızlığının önünün açılması",
      "Mısır Sorunu'nun başlaması",
    ],
    correctIndex: 2,
    explanation: "İngiltere, Fransa ve Rusya'nın Navarin'de Osmanlı-Mısır donanmasını yakması, 1827-1829 Osmanlı-Rus Savaşı'nı tetikledi. 1829 Edirne Antlaşması ile Yunanistan bağımsızlığını kazandı.",
  },
  {
    id: 6,
    question: "Osmanlı'dan bağımsızlığını kazanan ilk azınlık aşağıdakilerden hangisidir?",
    options: [
      "Sırplar",
      "Bulgarlar",
      "Romenler",
      "Yunanlılar",
    ],
    correctIndex: 3,
    explanation: "1829 Edirne Antlaşması ile Yunanlılar bağımsızlıklarını kazandı. Bağımsızlık sürecinde Filiki Eterya cemiyetinin örgütlenmesi, Fransız İhtilali'nin milliyetçilik fikirleri ve Rusya'nın desteği belirleyici rol oynadı.",
  },

  // Tanzimat ve Islahat Fermanı — 6 soru
  {
    id: 7,
    question: "Tanzimat Fermanı'nı hazırlayan ve Gülhane Parkı'nda okuyan devlet adamı kimdir?",
    options: [
      "Mithat Paşa",
      "Ahmet Cevdet Paşa",
      "Mustafa Reşit Paşa",
      "Fuad Paşa",
    ],
    correctIndex: 2,
    explanation: "Osmanlı Devleti'nde Tanzimat'ın mimarı olan Mustafa Reşit Paşa, Tanzimat Fermanı'nı hazırlayarak 3 Kasım 1839'da Gülhane Parkı'nda okudu. Sultan Abdülmecit döneminde 6 kez sadrazamlık yaptı.",
  },
  {
    id: 8,
    question: "Tanzimat Fermanı hakkında aşağıdakilerden hangisi doğrudur?",
    options: [
      "Halk tarafından hazırlanıp padişaha sunulmuştur",
      "Osmanlı'nın ilk anayasasıdır",
      "Yönetimde hukukun üstünlüğünü ilk kez resmi olarak kabul eden belgedir",
      "Yalnızca Müslümanlara yönelik hazırlanmıştır",
    ],
    correctIndex: 2,
    explanation: "Tanzimat Fermanı padişahın kendi iradesiyle ilan ettiği bir fermandır; bir anayasa değil, anayasal sürecin başlangıcıdır. 'Padişah dahil herkes yasalara uyacaktır' maddesiyle yönetimde hukukun üstünlüğü ilk kez resmen kabul edildi.",
  },
  {
    id: 9,
    question: "Osmanlı Medeni Hukuku olan Mecelle'yi hazırlayan heyetin başkanlığını kim yapmıştır?",
    options: [
      "Mustafa Reşit Paşa",
      "Mithat Paşa",
      "Ahmet Cevdet Paşa",
      "Namık Kemal",
    ],
    correctIndex: 2,
    explanation: "Ahmet Cevdet Paşa başkanlığındaki heyet Mecelle'yi hazırladı (1878'de uygulamaya konuldu). Şekilde Batı prensiplerini uygularken özünde şer'i prensiplere bağlı kalan bir hukuk anlayışını yansıtıyordu.",
  },
  {
    id: 10,
    question: "1856 Islahat Fermanı'nda yer almayan madde aşağıdakilerden hangisidir?",
    options: [
      "Gayrimüslimler devlet memuru olabilecek",
      "Cizye vergisi kaldırılacak",
      "Yabancılar Osmanlı topraklarında mülk edinebilecek",
      "Tımar sistemi kaldırılacak",
    ],
    correctIndex: 3,
    explanation: "Tımar sistemi II. Mahmut döneminde zaten kaldırılmıştı. Islahat Fermanı ise gayrimüslimlere yönelik hakları (memuriyet, cizye muafiyeti, mülk edinme, okul ve kilise tamiri vb.) düzenledi.",
  },
  {
    id: 11,
    question: "İlk Türkçe özel gazete aşağıdakilerden hangisidir?",
    options: [
      "Takvim-i Vekayi",
      "Tercüman-ı Ahval",
      "Tasvir-i Efkâr",
      "Düstur",
    ],
    correctIndex: 1,
    explanation: "Şinasi ve Agâh Efendi tarafından çıkarılan Tercüman-ı Ahval (1860), Osmanlı'nın ilk özel Türkçe gazetesidir. Takvim-i Vekayi (1831) ise ilk resmi gazete olup devlet tarafından çıkarılmıştır.",
  },
  {
    id: 12,
    question: "Tanzimat döneminde kurulan Memleket Sandıkları hangi kuruma dönüşmüştür?",
    options: [
      "Bank-ı Osmani Şahane",
      "Duyun-u Umumiye İdaresi",
      "Ziraat Bankası",
      "Osmanlı İtibar-ı Milli Bankası",
    ],
    correctIndex: 2,
    explanation: "Mithat Paşa'nın 1863'te çiftçiye kredi vermek amacıyla kurduğu Memleket Sandıkları, 1888'de Ziraat Bankası'na dönüştürüldü. Bu gelişme İstibdat dönemine denk gelir.",
  },

  // Mısır Sorunu / Kırım Savaşı / Antlaşmalar — 5 soru
  {
    id: 13,
    question: "Hünkar İskelesi Antlaşması (1833) hangi konuda Osmanlı-Rus ilişkilerini biçimlendirmiştir?",
    options: [
      "Kırım'ın statüsü",
      "Boğazların kullanımı",
      "Ortak ordu kurulması",
      "Yunanistan'ın tanınması",
    ],
    correctIndex: 1,
    explanation: "Hünkar İskelesi Antlaşması ile Osmanlı, savaş halinde Boğazları Rusya'nın isteği doğrultusunda yabancı savaş gemilerine kapatmayı taahhüt etti. Bu antlaşma 'Boğazlar Sorunu'nu uluslararası bir mesele haline getirdi.",
  },
  {
    id: 14,
    question: "1839 Nizip Muharebesi'nde Osmanlı ordusunu yenen komutan kimdir?",
    options: [
      "Kavalalı Mehmet Ali Paşa",
      "Hafız Osman Paşa",
      "Kavalalı İbrahim Paşa",
      "Mustafa Reşit Paşa",
    ],
    correctIndex: 2,
    explanation: "Kavalalı Mehmet Ali Paşa'nın oğlu İbrahim Paşa, 24 Haziran 1839'da Nizip'te Hafız Osman Paşa komutasındaki Osmanlı ordusunu imha etti.",
  },
  {
    id: 15,
    question: "Kırım Savaşı'nda Osmanlı'nın yanında savaşan devletler aşağıdakilerden hangisidir?",
    options: [
      "İngiltere, Fransa, Prusya",
      "İngiltere, Fransa, Piyemonte",
      "İngiltere, Avusturya, Rusya",
      "Fransa, İtalya, Yunanistan",
    ],
    correctIndex: 1,
    explanation: "Kırım Savaşı'nda (1853-56) İngiltere, Fransa ve İtalyan prensliği Piyemonte Osmanlı'nın yanında Rusya'ya karşı savaştı. Osmanlı bu desteği sayesinde savaşı kazandı.",
  },
  {
    id: 16,
    question: "1856 Paris Antlaşması ile Osmanlı Devleti açısından gerçekleşen en önemli gelişme aşağıdakilerden hangisidir?",
    options: [
      "Kırım Osmanlı'ya geri verildi",
      "Osmanlı Avrupa devletler hukukuna resmen dahil edildi",
      "Boğazlar Osmanlı'nın tam egemenliğine bırakıldı",
      "Dış borçlanma yasaklandı",
    ],
    correctIndex: 1,
    explanation: "Paris Antlaşması ile Osmanlı toprak bütünlüğü Avrupalı devletlerce güvence altına alındı ve Osmanlı Avrupa devletler hukukuna resmen dahil edildi. Karadeniz tarafsızlaştırılırken Rusya savaş gemisi bulundurma hakkından vazgeçti.",
  },
  {
    id: 17,
    question: "Osmanlı'nın ilk dış borcu hangi amaçla ve hangi ülkeden alınmıştır?",
    options: [
      "Mısır Sorunu için Fransa'dan",
      "Kırım Savaşı için İngiltere'den",
      "Demiryolu yapımı için Almanya'dan",
      "93 Harbi için Rusya'dan",
    ],
    correctIndex: 1,
    explanation: "Osmanlı'nın ilk dış borcu 1854'te Kırım Savaşı'nın finansmanı için İngiltere'den alındı. Bu borçlanma, ilerleyen yıllarda artan mali bağımlılığın ve 1875 iflasının temelini attı.",
  },

  // I. Meşrutiyet / Kanun-i Esasi — 4 soru
  {
    id: 18,
    question: "Kanun-i Esasi'yi (Osmanlı'nın ilk anayasası) hazırlayan kurulun başkanı kimdir?",
    options: [
      "Mustafa Reşit Paşa",
      "Ahmet Cevdet Paşa",
      "Mithat Paşa",
      "Namık Kemal",
    ],
    correctIndex: 2,
    explanation: "Kanun-i Esasi, Sadrazam Mithat Paşa başkanlığındaki bir kurul tarafından hazırlandı ve II. Abdülhamit tarafından 23 Aralık 1876'da onaylanarak ilan edildi.",
  },
  {
    id: 19,
    question: "Kanun-i Esasi'ye göre Meclisi Ayan'ın üyeleri nasıl belirlenmektedir?",
    options: [
      "Halk tarafından seçilir",
      "Meclisi Mebusan tarafından seçilir",
      "Padişah tarafından atanır",
      "Ulema tarafından belirlenir",
    ],
    correctIndex: 2,
    explanation: "Kanun-i Esasi'ye göre Meclisi Ayan'ın üyelerini padişah atarken, Meclisi Mebusan'ın üyelerini halk 4 yılda bir çift dereceli seçimle belirliyordu.",
  },
  {
    id: 20,
    question: "I. Meşrutiyet'i ilan eden padişah ve meclisin kapatılmasına gerekçe gösterilen olay aşağıdakilerden hangisidir?",
    options: [
      "Abdülaziz — Mısır Sorunu",
      "II. Abdülhamit — 93 Harbi (1877-78 Osmanlı-Rus Savaşı)",
      "V. Murat — Kırım Savaşı",
      "Abdülmecit — Navarin Olayı",
    ],
    correctIndex: 1,
    explanation: "I. Meşrutiyet'i ilan eden II. Abdülhamit, 1877-1878 Osmanlı-Rus Savaşı'nı (93 Harbi) bahane ederek meclisi kapattı. Böylece İstibdat dönemi başladı.",
  },
  {
    id: 21,
    question: "Genç Osmanlılar (Jön Türkler) hangi siyasi düşünceyi savunmuşlardır?",
    options: [
      "İslamcılık ve şeriat",
      "Osmanlıcılık ve meşrutiyet",
      "Türkçülük ve milliyetçilik",
      "Batıcılık ve cumhuriyet",
    ],
    correctIndex: 1,
    explanation: "Genç Osmanlılar, farklı etnik unsurların 'Osmanlıcılık' çatısı altında birleştirilmesi ve bir meclis aracılığıyla temsil edilmesi durumunda Osmanlı'nın dağılmasının önlenebileceğini savundu.",
  },

  // İstibdat Dönemi — 5 soru
  {
    id: 22,
    question: "İstibdat döneminde (1878-1908) hâkim olan siyasi düşünce aşağıdakilerden hangisidir?",
    options: [
      "Osmanlıcılık",
      "Türkçülük",
      "İslamcılık (Ümmetçilik)",
      "Batıcılık",
    ],
    correctIndex: 2,
    explanation: "Genç Osmanlıların savunduğu Osmanlıcılık düşüncesi İstibdat döneminde geride kaldı; II. Abdülhamit'in benimsediği İslamcılık (Ümmetçilik) politikası ön plana çıktı. Halifelik kimliği özellikle vurgulandı.",
  },
  {
    id: 23,
    question: "Duyun-u Umumiye İdaresi'nin kurulmasının temel nedeni aşağıdakilerden hangisidir?",
    options: [
      "Demiryolu yapımını finanse etmek",
      "Osmanlı'nın 1875'te ilan ettiği mali iflasın ardından dış borçların yönetilmesi",
      "Yabancı tüccarların vergisini toplamak",
      "Azınlıkların ekonomik haklarını güvence altına almak",
    ],
    correctIndex: 1,
    explanation: "1875 mali iflasının ardından çıkarılan Muharrem Kararnamesi (1881) ile Duyun-u Umumiye İdaresi kuruldu. Alacaklı Avrupalı devletler bu idare aracılığıyla Osmanlı gelirlerinin önemli bir bölümünü (tuz, tütün, ipek vergisi vb.) doğrudan tahsil etti.",
  },
  {
    id: 24,
    question: "Berlin Antlaşması (1878) ile Rusya'ya bırakılan ve 'Elviye-i Selase' olarak bilinen üç kale hangisidir?",
    options: [
      "Edirne, Filibe, Üsküp",
      "Kars, Ardahan, Batum",
      "Varna, Köstence, Silistre",
      "Erzurum, Van, Bitlis",
    ],
    correctIndex: 1,
    explanation: "Berlin Antlaşması (1878) ile Kars, Ardahan ve Batum Rusya'ya bırakıldı; bu üç il 'Elviye-i Selase' (üç vilayet) olarak anılmaktadır.",
  },
  {
    id: 25,
    question: "İttihat ve Terakki Cemiyeti ne zaman ve nerede kurulmuştur?",
    options: [
      "1889 — İstanbul Askeri Tıbbiye",
      "1895 — Paris",
      "1905 — Selanik",
      "1908 — Şam",
    ],
    correctIndex: 0,
    explanation: "İttihat ve Terakki Cemiyeti, 2 Haziran 1889'da İstanbul Askeri Tıbbiye'nin bahçesinde İshak Sükûti, İbrahim Temo, Abdullah Cevdet ve Çerkez Mehmed Reşid öncülüğünde kuruldu.",
  },
  {
    id: 26,
    question: "II. Abdülhamit döneminde Almanya ile yakınlaşmanın en somut göstergesi olan proje aşağıdakilerden hangisidir?",
    options: [
      "Süveyş Kanalı'nın yapımı",
      "Berlin-Bağdat Demiryolu",
      "Hicaz Demiryolu",
      "Boğaz tüneli projesi",
    ],
    correctIndex: 1,
    explanation: "İstibdat döneminde Osmanlı Almanya'ya yakınlaştı; bu yakınlaşmanın en somut ürünü Berlin-Bağdat Demiryolu projesidir. Bu yakınlaşma Osmanlı'nın I. Dünya Savaşı'na Almanya yanında girmesinde belirleyici rol oynadı.",
  },

  // II. Meşrutiyet / İTC / 31 Mart — 4 soru
  {
    id: 27,
    question: "II. Meşrutiyet'in ilan edilmesinde doğrudan tetikleyici olan uluslararası gelişme aşağıdakilerden hangisidir?",
    options: [
      "Fransa'nın Tunus'u işgal etmesi",
      "İngiltere ile Rusya'nın Reval Görüşmeleri'nde Panslavizm konusunda uzlaşması",
      "Balkan Savaşları'nın başlaması",
      "Yunanistan'ın Girit'i işgali",
    ],
    correctIndex: 1,
    explanation: "1908'de İngiltere ve Rusya'nın Reval'de yaptığı görüşmelerde Panslavizm politikasında uzlaşması, İttihat ve Terakki'ye bağlı subayları harekete geçirdi. II. Abdülhamit bu baskıyla 23 Temmuz 1908'de II. Meşrutiyet'i ilan etti.",
  },
  {
    id: 28,
    question: "31 Mart Ayaklanması'nı (1909) bastıran Hareket Ordusu'nun kurmay başkanlığını kim yapmıştır?",
    options: [
      "Enver Paşa",
      "Mahmut Şevket Paşa",
      "Mustafa Kemal",
      "Talat Paşa",
    ],
    correctIndex: 2,
    explanation: "Selanik'te kurulan Hareket Ordusu'nun komutasını Mahmut Şevket Paşa, kurmay başkanlığını ise Mustafa Kemal üstlendi. Ayaklanma bastırıldıktan sonra II. Abdülhamit tahttan indirildi.",
  },
  {
    id: 29,
    question: "1909 Anayasa değişiklikleriyle aşağıdakilerden hangisi gerçekleşmiştir?",
    options: [
      "Padişahın meclisi kapatma yetkisi tamamen kaldırıldı",
      "Hükümet meclise değil padişaha karşı sorumlu kılındı",
      "Hükümet padişaha değil meclise karşı sorumlu hale getirildi",
      "Meclisi Ayan seçimle oluşturulmaya başlandı",
    ],
    correctIndex: 2,
    explanation: "1909 anayasa değişiklikleriyle hükümet padişaha değil meclise karşı sorumlu hale getirildi; padişahın meclisi kapatma yetkisi sınırlandırıldı (tamamen kaldırılmadı). Bu değişiklikler parlamenter sisteme önemli bir adım oldu.",
  },
  {
    id: 30,
    question: "Aşağıdakilerden hangisi 19. yüzyılda Kuzey Afrika'daki Osmanlı topraklarını işgal eden devlet ve toprak eşleşmesinde yanlıştır?",
    options: [
      "Fransa — Cezayir (1830)",
      "Fransa — Tunus (1881)",
      "İngiltere — Kıbrıs (1878)",
      "Rusya — Mısır (1882)",
    ],
    correctIndex: 3,
    explanation: "Mısır'ı 1882'de işgal eden Rusya değil, İngiltere'dir. 19. yüzyıldaki işgaller: Fransa—Cezayir (1830) ve Tunus (1881); İngiltere—Kıbrıs (1878) ve Mısır (1882) şeklindedir.",
  },
];

export default quizQuestions;
