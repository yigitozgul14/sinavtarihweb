import type { QuizQuestion } from "@/types/period-data";

const quizQuestions: QuizQuestion[] = [
  // 31 Mart Ayaklanması ve 1909 Anayasası — 5 soru
  {
    id: 1,
    question: "31 Mart Ayaklanması'nı bastıran Hareket Ordusu'nun kurmay başkanlığını kim yapmıştır?",
    options: [
      "Enver Paşa",
      "Talat Paşa",
      "Mustafa Kemal",
      "Mahmut Şevket Paşa",
    ],
    correctIndex: 2,
    explanation: "Selanik'te kurulan Hareket Ordusu'nun komutanlığını Mahmut Şevket Paşa, kurmay başkanlığını ise Mustafa Kemal üstlendi. Ayaklanma bastırıldıktan sonra II. Abdülhamit tahttan indirildi.",
  },
  {
    id: 2,
    question: "31 Mart Ayaklanması'nın ardından II. Abdülhamit'in yerine padişah olan kişi kimdir?",
    options: [
      "VI. Mehmet (Vahdettin)",
      "V. Mehmet (Reşat)",
      "II. Murat",
      "Abdülaziz",
    ],
    correctIndex: 1,
    explanation: "31 Mart Ayaklanması'nın bastırılmasının ardından meclis II. Abdülhamit'i tahttan indirdi; yerine V. Mehmet Reşat padişah oldu. VI. Mehmet (Vahdettin) ise I. Dünya Savaşı'nın sonunda tahta çıktı.",
  },
  {
    id: 3,
    question: "1909 anayasa değişiklikleriyle aşağıdakilerden hangisi gerçekleşmiştir?",
    options: [
      "Padişahın meclisi kapatma yetkisi tamamen kaldırıldı",
      "Hükümet padişaha karşı değil meclise karşı sorumlu hale getirildi",
      "Meclisi Ayan seçimle oluşturulmaya başlandı",
      "Kanun-i Esasi ilk kez ilan edildi",
    ],
    correctIndex: 1,
    explanation: "1909 anayasa değişiklikleriyle hükümet padişaha değil meclise karşı sorumlu hale getirildi. Padişahın meclisi kapatma yetkisi sınırlandırıldı ancak tamamen kaldırılmadı. Bu değişiklikler parlamenter sisteme önemli bir adım oldu.",
  },
  {
    id: 4,
    question: "31 Mart Ayaklanması'na destek veren muhalif siyasi unsurlar aşağıdakilerden hangisinde doğru verilmiştir?",
    options: [
      "Hürriyet ve İtilaf Fırkası · Teali İslam Cemiyeti",
      "Ahrar Fırkası · İttihad-ı Muhammedi Fırkası",
      "Trabzon ve Havalisi Cemiyeti · Kürt Teali Cemiyeti",
      "İngiliz Muhipleri Cemiyeti · Wilson İlkeleri Cemiyeti",
    ],
    correctIndex: 1,
    explanation: "31 Mart Ayaklanması'na İttihat ve Terakki'ye muhalif Ahrar Fırkası ile İttihad-ı Muhammedi Fırkası siyasi destek verirken avcı taburları da askeri destek sağladı.",
  },
  {
    id: 5,
    question: "\"Adem-i Merkeziyet ve Teşebbüs-i Şahsi\" ilkesini savunan kişi kimdir?",
    options: [
      "Enver Paşa",
      "Mustafa Kemal",
      "Prens Sabahattin",
      "Namık Kemal",
    ],
    correctIndex: 2,
    explanation: "Prens Sabahattin, Osmanlı'da ciddi biçimde gündeme gelen yerinden yönetim ve kişisel girişim anlayışının siyasi ifadesi olan Adem-i Merkeziyet ve Teşebbüs-i Şahsi ilkesini savundu.",
  },

  // Trablusgarb Savaşı — 5 soru
  {
    id: 6,
    question: "Trablusgarb Savaşı'nda Mustafa Kemal hangi bölgelerde yerel kuvvetlerin komutanlığını yapmıştır?",
    options: [
      "Bingazi ve Trablus",
      "Bingazi ve Tobruk",
      "Derne ve Tobruk",
      "Derne ve Bingazi",
    ],
    correctIndex: 2,
    explanation: "Mustafa Kemal Trablusgarb'da Derne ve Tobruk'ta yerel kuvvetlerin komutanlığını yürüttü. Bingazi bölgesinde ise Enver Bey görev yaptı.",
  },
  {
    id: 7,
    question: "İtalya, Trablusgarb Savaşı'nda Osmanlı'yı barışa zorlamak için hangi adaları işgal etmiştir?",
    options: [
      "İmroz ve Bozcaada",
      "Rodos ve Onikiadalar",
      "Kıbrıs ve Girit",
      "Midilli ve Sakız",
    ],
    correctIndex: 1,
    explanation: "İtalya, Trablusgarb'da kesin sonuç alamayınca Osmanlı'yı barış masasına oturtmak için Ege'deki Rodos ve Onikiadalar'ı işgal etti. Bu hamle Osmanlı'nın Ege'deki deniz gücünü fiilen sona erdirdi.",
  },
  {
    id: 8,
    question: "Uşi Antlaşması kaç tarihinde imzalanmıştır ve Osmanlı açısından temel önemi nedir?",
    options: [
      "18 Ekim 1912 — Kuzey Afrika'daki son toprak İtalya'ya bırakıldı",
      "30 Ekim 1912 — Rodos Türkiye'ye devredildi",
      "18 Ekim 1913 — Onikiadalar geri alındı",
      "18 Ağustos 1912 — Trablusgarb'ın dini bağı koparıldı",
    ],
    correctIndex: 0,
    explanation: "18 Ekim 1912'de imzalanan Uşi Antlaşması ile Trablusgarb İtalya'ya bırakıldı. Osmanlı, bu antlaşmayla Kuzey Afrika'daki son toprağını yitirdi. Bölge dini açıdan Osmanlı halifeliğine bağlı kalmaya devam etti.",
  },
  {
    id: 9,
    question: "Rodos ve Onikiadalar hangi antlaşmayla Yunanistan'a verilmiştir?",
    options: [
      "1923 Lozan Antlaşması",
      "1947 Paris Antlaşması",
      "1913 Bükreş Antlaşması",
      "1919 Sevr Antlaşması",
    ],
    correctIndex: 1,
    explanation: "Rodos ve Onikiadalar, II. Dünya Savaşı'nın ardından 1947 Paris Antlaşması ile İtalya'dan alınıp Yunanistan'a verildi. Bu adalar 1912'den beri İtalya'nın elindeydi.",
  },
  {
    id: 10,
    question: "Trablusgarb Savaşı'nda İngiltere ve Fransa'nın İtalya'ya seyirci kalmasının temel nedeni nedir?",
    options: [
      "Osmanlı ile antlaşma yükümlülükleri bulunmaktaydı",
      "İtalya'yı Almanya'nın yanından kendi saflarına çekmek istiyorlardı",
      "Trablusgarb'ın savunulmasına stratejik önem vermiyorlardı",
      "Uluslararası hukukun izin vermesi",
    ],
    correctIndex: 1,
    explanation: "İngiltere ve Fransa, İtalya'nın Üçlü İttifak'tan koparak kendi saflarına geçmesini sağlamak amacıyla Trablusgarb işgaline göz yumdu. Bu hesap I. Dünya Savaşı'nda 1915'te İtalya'nın İtilaf safına geçmesiyle doğrulandı.",
  },

  // I. Balkan Savaşı — 7 soru
  {
    id: 11,
    question: "I. Balkan Savaşı'na katılmayan tek Balkan devleti aşağıdakilerden hangisidir?",
    options: [
      "Bulgaristan",
      "Arnavutluk",
      "Romanya",
      "Karadağ",
    ],
    correctIndex: 2,
    explanation: "I. Balkan Savaşı'nı başlatan ittifakta Yunanistan, Bulgaristan, Sırbistan ve Karadağ yer aldı. Romanya bu savaşa katılmadı; II. Balkan Savaşı'nda ise Bulgaristan'a karşı sahneye çıktı.",
  },
  {
    id: 12,
    question: "I. Balkan Savaşı'nda Osmanlı'nın son savunma hattı nereye çekilmiştir?",
    options: [
      "Edirne-Kırklareli hattı",
      "Midye-Enez (Çatalca) hattı",
      "İstanbul surları",
      "Meriç nehri",
    ],
    correctIndex: 1,
    explanation: "I. Balkan Savaşı'nda ağır yenilgiler alan Osmanlı ordusu Midye-Enez (Çatalca) hattına kadar çekildi. Bu hat İstanbul'u korumak amacıyla tutulan son savunma çizgisiydi.",
  },
  {
    id: 13,
    question: "I. Balkan Savaşı'nın kaybedilme nedenlerinden hangisi yanlıştır?",
    options: [
      "Ordu içinde siyasi çekişmelerin yaşanması",
      "Savaş öncesi 60 bin kadar askerin terhis edilmesi",
      "Osmanlı'nın İngiltere'den borç alamaması",
      "4 cephede birden savaşılması",
    ],
    correctIndex: 2,
    explanation: "I. Balkan Savaşı'nın kaybedilme nedenleri arasında ordu içi siyasi çekişmeler, 60 bin askerin önceden terhis edilmesi, 4 cephede birden savaşılması ve ikmal/teçhizat/haberleşme yetersizlikleri sayılır. Borç sorunu bu savaşın kaybedilme nedenleri arasında yer almaz.",
  },
  {
    id: 14,
    question: "Osmanlı'dan ayrılarak bağımsız olan son Balkan devleti aşağıdakilerden hangisidir?",
    options: [
      "Bulgaristan",
      "Sırbistan",
      "Yunanistan",
      "Arnavutluk",
    ],
    correctIndex: 3,
    explanation: "Arnavutluk, I. Balkan Savaşı sürecinde 1912'de bağımsızlığını ilan ederek Osmanlı'dan ayrılan son Balkan devleti oldu.",
  },
  {
    id: 15,
    question: "I. Balkan Savaşı'nı sona erdiren antlaşma aşağıdakilerden hangisidir?",
    options: [
      "Bükreş Antlaşması",
      "Londra Antlaşması",
      "İstanbul Antlaşması",
      "Berlin Antlaşması",
    ],
    correctIndex: 1,
    explanation: "Avrupalı devletlerin müdahalesiyle 1913'te imzalanan Londra Antlaşması ile I. Balkan Savaşı sona erdi. II. Balkan Savaşı ise Balkan devletleri arasında imzalanan 1913 Bükreş Antlaşması ile sona erdi.",
  },
  {
    id: 16,
    question: "Bab-ı Ali Baskını (1913) aşağıdakilerden hangisiyle tanımlanır?",
    options: [
      "Halk tarafından yönetime karşı yapılan bir ayaklanma",
      "İttihat ve Terakki'nin yaptığı bir hükümet darbesi",
      "İngilizlerin Osmanlı Sadrıazamı'nı değiştirmesi",
      "Balkan devletlerinin İstanbul'a yönelik saldırısı",
    ],
    correctIndex: 1,
    explanation: "Bab-ı Ali Baskını, 23 Ocak 1913'te Enver Bey liderliğindeki İttihatçı subayların Bab-ı Ali'yi (Sadaret) basarak Kamil Paşa hükümetini devirdiği askeri darbedir. Bu darbenin ardından İttihat ve Terakki iktidarın tek sahibi oldu.",
  },
  {
    id: 17,
    question: "I. Balkan Savaşları sürecinde kaybedilen topraklar aşağıdakilerden hangisinde tam ve doğru olarak verilmiştir?",
    options: [
      "Arnavutluk · Makedonya · Batı Trakya · Ege Adaları",
      "Arnavutluk · Sırbistan · Romanya · Ege Adaları",
      "Makedonya · Batı Trakya · Kıbrıs · Ege Adaları",
      "Arnavutluk · Yunanistan · Bulgaristan · Ege Adaları",
    ],
    correctIndex: 0,
    explanation: "Balkan Savaşları ile kaybedilen topraklar: Arnavutluk, Makedonya, Batı Trakya ve Ege Adaları'dır. Kıbrıs 1878'de zaten İngiltere'ye devredilmişti.",
  },

  // II. Balkan Savaşı — 4 soru
  {
    id: 18,
    question: "II. Balkan Savaşı'nda Bulgaristan'a karşı savaşan devletler aşağıdakilerden hangisinde doğru verilmiştir?",
    options: [
      "Yunanistan · Sırbistan · Karadağ · Romanya · Osmanlı",
      "Yunanistan · Sırbistan · Avusturya · Romanya",
      "Osmanlı · İngiltere · Fransa · Romanya",
      "Yunanistan · Arnavutluk · Sırbistan · Romanya",
    ],
    correctIndex: 0,
    explanation: "II. Balkan Savaşı'nda Bulgaristan'a karşı savaşanlar: Yunanistan, Sırbistan, Karadağ, Romanya ve Osmanlı. Osmanlı bu fırsatı kullanarak Edirne ve Kırklareli'ni geri aldı.",
  },
  {
    id: 19,
    question: "Osmanlı'nın II. Balkan Savaşı'nda Edirne'yi geri almasında etkin rol oynayan komutan kimdir?",
    options: [
      "Mustafa Kemal",
      "Cemal Paşa",
      "Halil Paşa",
      "Enver Bey",
    ],
    correctIndex: 3,
    explanation: "II. Balkan Savaşı sürecinde Enver Bey komutasındaki Osmanlı kuvvetleri Edirne ve Kırklareli'ni geri aldı, Meriç nehrine kadar ilerledi. 21 Temmuz 1913'te Mustafa Kemal de Bolayır Kolordusu Kurmay Başkanı olarak bu harekâtta rol oynadı.",
  },
  {
    id: 20,
    question: "1913 İstanbul Antlaşması ile Osmanlı ile Bulgaristan arasında aşağıdakilerden hangisi kararlaştırılmıştır?",
    options: [
      "Bulgaristan'ın savaş tazminatı ödemesi",
      "Meriç nehrinin iki devlet arasında sınır olarak belirlenmesi",
      "Edirne'nin Bulgaristan'a bırakılması",
      "Osmanlı'nın Dimetoka'yı geri alması",
    ],
    correctIndex: 1,
    explanation: "1913 İstanbul Antlaşması ile Meriç nehri Osmanlı ile Bulgaristan arasında sınır kabul edildi. Edirne, Kırklareli ve Dimetoka Osmanlı'da kaldı. (Bulgaristan'ın savaşa girmesi karşılığında Osmanlı Dimetoka'yı Bulgarlara zaten vermişti.)",
  },
  {
    id: 21,
    question: "Osmanlı ile Sırbistan arasındaki 1914 İstanbul Antlaşması'nın temel konusu nedir?",
    options: [
      "Sırbistan'ın toprak kazanımlarının onaylanması",
      "Sırbistan'da yaşayan Türk azınlıkların haklarının düzenlenmesi",
      "İki devlet arasındaki savaşın resmen sona ermesi",
      "Makedonya sınırının belirlenmesi",
    ],
    correctIndex: 1,
    explanation: "1914 İstanbul Antlaşması ile Sırbistan'da yaşayan Türk azınlıkların hakları kanuna bağlandı. Bu antlaşma, Balkan Savaşları sonucunda Osmanlı'nın kaybettiği topraklarda kalan Türk nüfusun haklarını güvence altına almaya çalışan belgelerden biridir.",
  },

  // I. Dünya Savaşı — 7 soru
  {
    id: 22,
    question: "I. Dünya Savaşı'nı fiilen başlatan olay aşağıdakilerden hangisidir?",
    options: [
      "Almanya'nın Belçika'yı işgal etmesi",
      "Osmanlı'nın Rus limanlarını bombalaması",
      "Avusturya-Macaristan Veliahtı Franz Ferdinand'ın Saraybosna'da öldürülmesi",
      "Rusya'nın Sırbistan'a destek vermesi",
    ],
    correctIndex: 2,
    explanation: "I. Dünya Savaşı'nı başlatan olay Avusturya-Macaristan Veliahtı Arşidük Franz Ferdinand'ın 28 Haziran 1914'te Sırp milliyetçi Gavrilo Princip tarafından Saraybosna'da öldürülmesidir. Bu suikast ittifak sisteminin domino etkisiyle devletleri savaşa sürükledi.",
  },
  {
    id: 23,
    question: "Osmanlı'nın I. Dünya Savaşı'na fiilen girmesine yol açan gelişme aşağıdakilerden hangisidir?",
    options: [
      "Türk-Alman Gizli İttifakı'nın imzalanması",
      "Goben ve Breslaw'ın Rus limanlarını bombalaması",
      "İtilaf devletlerinin Çanakkale'ye saldırması",
      "Sarıkamış Harekâtı'nın başlaması",
    ],
    correctIndex: 1,
    explanation: "Osmanlı'ya sığınan Alman savaş gemileri Goben (Yavuz) ve Breslaw (Midilli), Osmanlı bayrağı altında Rus limanlarını bombalayınca İtilaf devletleri Osmanlı'ya savaş ilan etti (Ekim 1914). Türk-Alman İttifakı gizliydi ve doğrudan savaş ilanına sebep olmadı.",
  },
  {
    id: 24,
    question: "İtilaf devletlerinin Çanakkale Cephesi'ni açmasının temel amaçları arasında aşağıdakilerden hangisi yer almaz?",
    options: [
      "İstanbul ve Boğazları ele geçirerek Osmanlı'yı savaş dışı bırakmak",
      "Rusya'ya yardım götürmek",
      "Balkan devletlerini kendi yanlarına çekmek",
      "Almanya'nın Berlin-Bağdat demiryolunu ele geçirmek",
    ],
    correctIndex: 3,
    explanation: "Çanakkale'yi açma amaçları: İstanbul ve Boğazları ele geçirerek Osmanlı'yı savaş dışına çıkarmak, Rusya'ya yardım götürmek, Balkan devletlerini İtilaf safına çekmek. Berlin-Bağdat demiryolunu ele geçirmek Çanakkale'nin doğrudan hedefi değildi.",
  },
  {
    id: 25,
    question: "Çanakkale Cephesi'nin sonuçları arasında aşağıdakilerden hangisi yer almaz?",
    options: [
      "I. Dünya Savaşı'nın süresi uzadı",
      "Bulgaristan İttifak bloğuna katıldı",
      "Rusya'ya yardım götürülemediği için Bolşevik İhtilali önlenemedi",
      "Osmanlı İtilaf devletleriyle ateşkes imzaladı",
    ],
    correctIndex: 3,
    explanation: "Çanakkale Cephesi'nin sonuçları: Savaşın süresi uzadı, Bulgaristan İttifak safına geçti, Rusya'ya yardım götürülemediğinden Bolşevik İhtilali önlenemedi ve Mustafa Kemal ülkede ve dünyada tanındı. Ateşkes Çanakkale'nin değil, I. Dünya Savaşı'nın sonunun (Mondros) ürünüdür.",
  },
  {
    id: 26,
    question: "Sarıkamış Harekâtı'nın amaçları arasında aşağıdakilerden hangisi yer almaz?",
    options: [
      "Rusları Kafkaslardan çıkarmak",
      "Bakü petrollerini ele geçirmek",
      "Turancılık idealini gerçekleştirmek",
      "Süveyş Kanalı'nı ele geçirmek",
    ],
    correctIndex: 3,
    explanation: "Sarıkamış Harekâtı'nın üç temel amacı: Rusları Kafkaslardan çıkarmak, Bakü petrollerini ele geçirmek ve Turancılık idealini gerçekleştirmek. Süveyş Kanalı'nı ele geçirmek ise Kanal (Süveyş) Cephesi'nin, yani Cemal Paşa'nın hedefiydi.",
  },
  {
    id: 27,
    question: "Brest-Litovsk Antlaşması (1918) sonucunda Osmanlı aşağıdakilerden hangisini geri almıştır?",
    options: [
      "Edirne, Kırklareli ve Dimetoka",
      "Kars, Ardahan ve Batum (Elviye-i Selase)",
      "Trablusgarb ve Rodos",
      "Makedonya ve Batı Trakya",
    ],
    correctIndex: 1,
    explanation: "1917 Bolşevik İhtilali'nin ardından Sovyet Rusya ile imzalanan Brest-Litovsk Antlaşması (1918) ile Osmanlı, 1878 Berlin Antlaşması ile Rusya'ya kaptırdığı Kars, Ardahan ve Batum'u (Elviye-i Selase) geri aldı.",
  },
  {
    id: 28,
    question: "Wilson İlkeleri'ne göre Türklerin yaşadığı yerlerle ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "Türklerin yaşadığı yerler Avrupalı devletlerin mandası altına girecek",
      "Türklerin yaşadığı yerlerin bağımsızlıkları tanınacak",
      "Türklerin yaşadığı yerler Yunanistan'a devredilecek",
      "Türklerin yaşadığı yerlerde uluslararası denetim uygulanacak",
    ],
    correctIndex: 1,
    explanation: "Wilson İlkeleri'ne göre azınlıklar çoğunlukta olduğu yerlerde devlet kurabilecek; Türklerin yaşadığı yerlerin ise bağımsızlıkları tanınacaktı. İtilaf devletleri bu ilkeleri kendi çıkarları doğrultusunda yorumladığından pratikte uygulamadı.",
  },

  // Mondros, Gizli Antlaşmalar ve Paris Konferansı — 2 soru
  {
    id: 29,
    question: "Mondros Ateşkesi'nin 7. maddesi ne anlama gelmektedir?",
    options: [
      "Osmanlı ordusu tamamen dağıtılacak",
      "Boğazlar İtilaf denetimine bırakılacak",
      "İtilaf devletleri güvenliklerini tehdit eden herhangi bir stratejik noktayı işgal edebilecek",
      "Osmanlı dış borçları dondurulacak",
    ],
    correctIndex: 2,
    explanation: "Mondros Ateşkesi'nin 7. maddesi, İtilaf devletlerine güvenliklerini tehdit eden herhangi bir stratejik noktayı işgal etme yetkisi verdi. Bu madde, Mondros sonrasındaki tüm işgallerin (İzmir dahil) hukuki dayanağı olarak kullanıldı.",
  },
  {
    id: 30,
    question: "Sykes-Picot Antlaşması'na (1916) göre Musul hariç Irak ve Ürdün hangi devlete bırakılmıştır?",
    options: [
      "Fransa",
      "Rusya",
      "İtalya",
      "İngiltere",
    ],
    correctIndex: 3,
    explanation: "Sykes-Picot Antlaşması'na göre Suriye kıyıları ve Lübnan Fransa'ya, Musul hariç Irak ve Ürdün ise İngiltere'ye bırakıldı. Musul'un statüsü bu antlaşmada ayrı tutuldu; sonradan İngiltere'nin eline geçti.",
  },
];

export default quizQuestions;
