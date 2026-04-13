import type { QuizQuestion } from "@/types/period-data";

const quizQuestions: QuizQuestion[] = [
  // Kuva-i Milliye ve İlk Direniş — 4 soru
  {
    id: 1,
    question: "Kuva-i Milliye birlikleriyle ilgili aşağıdakilerden hangisi yanlıştır?",
    options: [
      "Gönüllülerden oluşan silahlı düzensiz halk kuvvetleridir",
      "Tek merkezden yönetilmiştir",
      "İhtiyaçlarını halktan karşılamışlardır",
      "Askeri disiplinden yoksundur",
    ],
    correctIndex: 1,
    explanation: "Kuva-i Milliye birlikleri tek merkezden yönetilmemiştir; bölgesel bir yapıya sahiptiler. Her bölge kendi birliğini ayrı ayrı örgütledi. Bu dağınık yapı, sonradan hem güç hem de zayıflık kaynağı oldu.",
  },
  {
    id: 2,
    question: "Kuva-i Milliye birliklerinin düzenli orduya dahil edilmesine ne zaman karar verilmiştir?",
    options: [
      "23 Nisan 1920 — TBMM'nin açılışıyla",
      "Eylül 1919 — Sivas Kongresi'nde",
      "8 Kasım 1920 — TBMM'nin kararıyla",
      "28 Ocak 1920 — Misak-ı Milli'nin kabulüyle",
    ],
    correctIndex: 2,
    explanation: "8 Kasım 1920'de TBMM, düzenli ordunun kurulmasına karar verdi. Bu tarihten itibaren Kuva-i Milliye birlikleri düzenli orduya dahil edilmeye başlandı. Birleşmeye direnen Çerkez Ethem ve Demirci Mehmet Efe gibi komutanlar tasfiye edildi.",
  },
  {
    id: 3,
    question: "İşgallere karşı ilk silahlı direniş nerede gerçekleşmiştir?",
    options: [
      "Ayvalık",
      "Hatay (Dörtyol)",
      "İzmir",
      "Samsun",
    ],
    correctIndex: 1,
    explanation: "İşgallere karşı ilk silahlı direniş Hatay (Dörtyol)'dadır. Mondros'un ardından Fransız kuvvetleri çıkarma yapmak isteyince bölge halkı silahlı karşı koyma gösterdi. Batı Cephesinde ise ilk direniş Ayvalık'ta gerçekleşti.",
  },
  {
    id: 4,
    question: "Batı Cephesinde ilk direniş kurşununu atan kişi kimdir?",
    options: [
      "Hacım Muhittin Çarıklı",
      "Demirci Mehmet Efe",
      "Ali Çetinkaya (Kel Ali)",
      "Çerkez Ethem",
    ],
    correctIndex: 2,
    explanation: "Ali Çetinkaya, 'Kel Ali' lakabıyla tanınır. İzmir'in işgalinin ardından Ayvalık'ta Kuva-i Milliye birliklerini örgütleyerek Yunan kuvvetlerine Batı Cephesinde ilk kurşunu attı. Daha sonra Ankara İstiklal Mahkemesi başkanlığı görevini de üstlendi.",
  },

  // Mustafa Kemal'in Samsun'a Çıkışı — 2 soru
  {
    id: 5,
    question: "Mustafa Kemal hangi görevle ve hangi gerekçeyle Samsun'a gönderilmiştir?",
    options: [
      "Batı Cephesi Komutanı olarak; İzmir'in işgalini önlemek için",
      "9. Ordu Müfettişi olarak; Rum çeteleriyle Türkler arasındaki çatışmaları önlemek için",
      "Anadolu Kumandanı olarak; Mondros hükümlerini uygulamak için",
      "Temsil Kurulu Başkanı olarak; Kongreleri örgütlemek için",
    ],
    correctIndex: 1,
    explanation: "İngilizler, Doğu Karadeniz'de Pontus Rum çeteleriyle Türkler arasındaki çatışmalar önlenmezse bölgeyi işgal edebileceklerini bildirdi. İstanbul Hükümeti bölgede asayişi sağlamak amacıyla Mustafa Kemal'i 9. Ordu Müfettişi olarak Samsun'a gönderdi.",
  },
  {
    id: 6,
    question: "Samsun Raporu'na (22 Mayıs 1919) göre bölgedeki çatışmaların temel nedeni nedir?",
    options: [
      "Osmanlı ordusunun bölgede denetimi yitirmesi",
      "Türklerin silahlanarak Rum köylerini basması",
      "Rumların silahlanarak Türk köylerini basması",
      "İngiliz kışkırtmalarına maruz kalan azınlıkların kendiliğinden ayaklanması",
    ],
    correctIndex: 2,
    explanation: "Mustafa Kemal, Samsun Raporu'nda bölgedeki çatışmaların temel nedeninin Rumların silahlanarak Türk köylerini basması olduğunu belirtti. Türklerin silahlanmasının ise yalnızca öz savunma amacı taşıdığını vurguladı. Raporunda ayrıca İzmir'in işgalinin haksız olduğunu da ifade etti.",
  },

  // Havza Genelgesi — 2 soru
  {
    id: 7,
    question: "Havza Genelgesi'nin (28-29 Mayıs 1919) temel içeriği aşağıdakilerden hangisinde doğru verilmiştir?",
    options: [
      "Osmanlı Mebusan Meclisi'nin açılması çağrısı",
      "İşgallere karşı mitingler düzenlenmesi ve İstanbul ile İtilaf devletlerine protesto telgrafları çekilmesi",
      "Sivas'ta ulusal bir kongrenin toplanması kararı",
      "Kuva-i Milliye birliklerinin örgütlenmesi talimatı",
    ],
    correctIndex: 1,
    explanation: "Havza Genelgesi, başta İzmir'in işgali olmak üzere tüm işgallere karşı mitingler düzenlenmesini, İstanbul Hükümeti ve İtilaf devletlerine protesto telgrafları çekilmesini öngörüyordu. Düzenlenecek mitinglerde azınlıklara zarar verilmemesi de ayrıca vurgulandı.",
  },
  {
    id: 8,
    question: "Havza Genelgesi'nin ardından İstanbul Hükümeti nasıl tepki vermiştir?",
    options: [
      "Amasya'da Mustafa Kemal ile müzakere masasına oturdu",
      "Temsil Kurulu'nu resmen tanıdı",
      "İngilizlerin isteğiyle Mustafa Kemal'i geri çağırdı",
      "Erzurum Kongresi'ne temsilci gönderdi",
    ],
    correctIndex: 2,
    explanation: "Havza Genelgesi'nin yayımlanmasının ardından İngilizler, İstanbul Hükümeti'ne baskı yaptı ve Mustafa Kemal'in geri çağrılmasını istedi. İstanbul Hükümeti bu isteği yerine getirerek Mustafa Kemal'i geri çağırdı; ancak Mustafa Kemal bu çağrıyı reddetti ve görevine devam etti.",
  },

  // Amasya Tamimi — 4 soru
  {
    id: 9,
    question: "Amasya Tamimi hangi tarihte yayımlanmış ve hangi isimler tarafından imzalanmıştır?",
    options: [
      "28 Mayıs 1919 — Mustafa Kemal ve Rauf Orbay",
      "21-22 Haziran 1919 — Mustafa Kemal, Rauf Orbay, Refet Bele, Ali Fuat Cebesoy",
      "23 Temmuz 1919 — Mustafa Kemal ve Kazım Karabekir",
      "4 Eylül 1919 — Mustafa Kemal ve tüm kongre delegeleri",
    ],
    correctIndex: 1,
    explanation: "Amasya Tamimi 21-22 Haziran 1919'da yayımlandı. İmzacılar: Mustafa Kemal, Rauf Orbay, Refet Bele ve Ali Fuat Cebesoy. Kazım Karabekir ve Mersinli Cemal Paşa ise tamimi telgrafla onayladı.",
  },
  {
    id: 10,
    question: "Amasya Tamimi'nde üstü kapalı biçimde ilk kez dile getirilen kavram aşağıdakilerden hangisidir?",
    options: [
      "Manda yönetimi",
      "Ulus egemenliği",
      "Milli sınırlar",
      "Meclis hükümeti sistemi",
    ],
    correctIndex: 1,
    explanation: "Amasya Tamimi'nde 'ulusun bağımsızlığını yine ulusun azmi ve kararı kurtaracaktır' ifadesiyle ulus egemenliğine üstü kapalı biçimde ilk kez atıf yapıldı. Bu nedenle tamim, Türk inkılabının ihtilal beyannamesi olarak değerlendirilmektedir.",
  },
  {
    id: 11,
    question: "Amasya Tamimi'nin ardından Mustafa Kemal'in göreviyle ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "Hareket Ordusu komutanlığına atandı",
      "İstanbul Hükümeti ona yeni bir görev teklif etti",
      "9. Ordu Müfettişliği görevi sona erdirildi",
      "Erzurum Kongresi başkanlığından istifa etti",
    ],
    correctIndex: 2,
    explanation: "Amasya Tamimi'nin yayımlanmasının ardından İstanbul Hükümeti, Mustafa Kemal'in 9. Ordu Müfettişliği görevine son verdi. Mustafa Kemal bu karar üzerine askerlik görevinden de istifa ederek mücadeleyi sivil kimliğiyle sürdürdü.",
  },
  {
    id: 12,
    question: "Amasya Tamimi'nde Sivas Kongresi ile ilgili aşağıdakilerden hangisi belirtilmiştir?",
    options: [
      "Sivas'ta milli ordu kurulacak",
      "Sivas'ta ulusal bir kongre toplanacak; delegeleri Müdafaa-i Hukuk cemiyetleri ve belediyeler belirleyecek",
      "Sivas'ta Osmanlı Mebusan Meclisi'nin olağanüstü toplantısı yapılacak",
      "Sivas'ta manda yönetimi için görüşmeler yapılacak",
    ],
    correctIndex: 1,
    explanation: "Amasya Tamimi'nde Sivas'ta ulusal bir kongrenin toplanacağı, kongre delegelerinin Müdafaa-i Hukuk ve Redd-i İlhak cemiyetleri ile belediyeler tarafından belirleneceği kararlaştırıldı. Ayrıca 10 Temmuz'da Erzurum'da toplanacak kongrenin delegelerinin Sivas'a da geleceği belirtildi.",
  },

  // Erzurum Kongresi — 4 soru
  {
    id: 13,
    question: "Erzurum Kongresi hangi temel amaçla toplanmıştır?",
    options: [
      "Osmanlı Mebusan Meclisi'nin açılması için kamuoyu baskısı oluşturmak",
      "Ermeni ve Pontus Rum tehdidine karşı halkı uyarmak ve doğu illerinin bütünlüğünü sağlamak",
      "Batı Cephesi Kuva-i Milliye birliklerini örgütlemek",
      "İtilaf devletleriyle diplomatik ilişkiler kurmak",
    ],
    correctIndex: 1,
    explanation: "Erzurum Kongresi, Ermeni ve Pontus Rum tehditine karşı halkı uyarmak ve silahlı mücadeleye hazır tutmak; doğu illerinin bütünlüğünü sağlamak amacıyla toplandı. Toplanış amacı bölgesel olsa da aldığı kararlar ulusal nitelikte oldu.",
  },
  {
    id: 14,
    question: "Erzurum Kongresi'nde 'milli sınırlar' kavramı ilk kez nasıl ifade edilmiştir?",
    options: [
      "Osmanlı İmparatorluğu sınırları korunacaktır",
      "Milli sınırlar içinde vatan bir bütündür, bölünemez",
      "Türklerin yaşadığı tüm topraklar Türkiye'ye katılacaktır",
      "Milli sınırlar ancak uluslararası komisyonlar tarafından belirlenebilir",
    ],
    correctIndex: 1,
    explanation: "Erzurum Kongresi'nde 'Milli sınırlar içinde vatan bir bütündür, bölünemez' ilkesi ilk kez ilan edildi. Bu ilke daha sonra Sivas Kongresi ve Misak-ı Milli'de de tekrarlanarak milli mücadelenin temel direği oldu.",
  },
  {
    id: 15,
    question: "Erzurum Kongresi'nde oluşturulan Temsil Kurulu hakkında aşağıdakilerden hangisi doğrudur?",
    options: [
      "15 kişilik üyesiyle tüm yurdu temsil edecekti",
      "9 kişilik üyesiyle Mustafa Kemal başkanlığında bölgesel nitelikteydi",
      "Padişah tarafından atanan üyelerden oluşuyordu",
      "Doğrudan Osmanlı Mebusan Meclisi'ne bağlıydı",
    ],
    correctIndex: 1,
    explanation: "Erzurum Kongresi'nde 9 kişilik, başkanlığını Mustafa Kemal'in yaptığı bir bölgesel Temsil Kurulu oluşturuldu. Bu kurulun üye sayısı Sivas Kongresi'nde 15'e çıkarılarak tüm yurdu temsil eder hale getirildi.",
  },
  {
    id: 16,
    question: "Erzurum Kongresi'nin en belirgin özelliği aşağıdakilerden hangisidir?",
    options: [
      "Toplanış amacı ve aldığı kararlar her ikisi de bölgeseldir",
      "Toplanış amacı ulusal, aldığı kararlar bölgeseldir",
      "Toplanış amacı bölgesel, aldığı kararlar ulusaldır",
      "Toplanış amacı ve aldığı kararlar her ikisi de ulusaldır",
    ],
    correctIndex: 2,
    explanation: "Erzurum Kongresi, doğu illerinin sorunlarını ele almak amacıyla bölgesel nitelikte toplandı; ancak aldığı kararlar (milli sınırların bütünlüğü, manda reddi, milli kuvvetlerin etkinleştirilmesi) ulusal nitelikteydi. Bu özelliği Sivas Kongresi'nden farklılaştıran en önemli yöndür.",
  },

  // Batı Cephesi Kongreleri — 3 soru
  {
    id: 17,
    question: "Balıkesir Kongresi kiminin öncülüğünde ve hangi amaçla toplanmıştır?",
    options: [
      "Galip Hoca (Celal Bayar) — Milis güçlerin vergi toplaması için",
      "Hacım Muhittin Çarıklı — Yunan işgaline karşı mücadele etmek için",
      "Ali Çetinkaya — Batı Cephesi komutanlığını belirlemek için",
      "Çerkez Ethem — Kuva-i Milliye birliklerini düzenlemek için",
    ],
    correctIndex: 1,
    explanation: "Balıkesir Kongresi, Hacım Muhittin Çarıklı Bey'in öncülüğünde toplandı. Yunan işgaline karşı mücadele kararı alındı; kongre sırasında padişaha bağlılık telgrafı da çekildi. Balıkesir'de işgale karşı 'İzmir'e Doğru' gazetesi çıkarıldı.",
  },
  {
    id: 18,
    question: "Nazilli Kongresi'ne hangi önemli siyasetçi önderlik etmiştir?",
    options: [
      "Hacım Muhittin Çarıklı",
      "Rauf Orbay",
      "Galip Hoca (Celal Bayar)",
      "Refet Bele",
    ],
    correctIndex: 2,
    explanation: "Nazilli Kongresi'ne Galip Hoca lakabıyla tanınan Celal Bayar önderlik etti. Kongrede bölgenin Yunan işgalinden kurtarılması, milis güçlere asker sağlanması, Kuva-i Milliye birliklerinin uyumlu hareketi ve Kurtuluş Savaşı'na vergi desteği kararlaştırıldı.",
  },
  {
    id: 19,
    question: "Balıkesir ve Alaşehir Kongrelerinin ortak sonucu aşağıdakilerden hangisidir?",
    options: [
      "Doğu Cephesi oluşturuldu",
      "Batı Cephesi oluşturuldu",
      "Güney Cephesi oluşturuldu",
      "İstanbul Hükümeti resmen tanındı",
    ],
    correctIndex: 1,
    explanation: "Balıkesir ve Alaşehir Kongreleri, Yunan işgaline karşı birbirleriyle koordineli hareket ederek Batı Cephesi'nin oluşmasını sağladı. Alaşehir Kongresi ayrıca Erzurum'daki Temsil Heyeti ile irtibata geçerek Sivas Kongresi'ne temsilci gönderdi.",
  },

  // Sivas Kongresi — 4 soru
  {
    id: 20,
    question: "Sivas Kongresi öncesinde yaşanan iki temel kriz aşağıdakilerden hangisinde doğru verilmiştir?",
    options: [
      "İmzacı krizi ve toprak krizi",
      "Başkanlık krizi ve manda-himaye krizi",
      "Temsil Kurulu krizi ve haberleşme krizi",
      "İstanbul Hükümeti krizi ve azınlık hakları krizi",
    ],
    correctIndex: 1,
    explanation: "Sivas Kongresi öncesinde iki önemli kriz yaşandı: Başkanlık krizi (kongre başkanlığına kimin seçileceği tartışması) ve manda-himaye krizi (bazı delegelerin Amerikan mandası konusundaki tutumu). İki kriz de kongrenin toplanmadan önce çözüme kavuşturuldu.",
  },
  {
    id: 21,
    question: "Sivas Kongresi'nde çıkarılmasına karar verilen ve milli mücadelenin sözcülüğünü yapan ilk gazetenin adı nedir?",
    options: [
      "Albayrak",
      "İzmir'e Doğru",
      "İrade-i Milliye",
      "Hakimiyet-i Milliye",
    ],
    correctIndex: 2,
    explanation: "Sivas Kongresi'nde milli mücadelenin amaçlarını halka doğru anlatmak amacıyla İrade-i Milliye gazetesinin çıkarılmasına karar verildi. Bu gazete, milli mücadelenin sözcülüğünü yapan ilk gazetedir. Hakimiyet-i Milliye ise daha sonra Ankara'da çıkarılmaya başlandı.",
  },
  {
    id: 22,
    question: "Sivas Kongresi'nde batı cephesi Kuva-i Milliye komutanlığına kim atanmıştır ve bu atamanın önemi nedir?",
    options: [
      "Kazım Karabekir — Temsil Kurulu'nun yargı yetkisini kullandığını kanıtladı",
      "Rauf Orbay — Temsil Kurulu'nun yasama yetkisini kullandığını kanıtladı",
      "Ali Fuat Paşa — Temsil Kurulu'nun yürütme yetkisini kullandığını kanıtladı",
      "Refet Bele — Temsil Kurulu'nun askeri önceliklerini ortaya koydu",
    ],
    correctIndex: 2,
    explanation: "Sivas Kongresi'nde Ali Fuat Paşa, Batı Cephesi Kuva-i Milliye komutanlığına atandı. Bu atama, Temsil Kurulu'nun yürütme yetkisini fiilen kullandığının kanıtıdır; çünkü askeri atama yapmak yürütme organına ait bir yetkidir.",
  },
  {
    id: 23,
    question: "Temsil Heyeti'nin ilk siyasi başarısı olarak kabul edilen gelişme aşağıdakilerden hangisidir?",
    options: [
      "Erzurum Kongresi'nin toplanması",
      "Misak-ı Milli'nin kabulü",
      "Damat Ferit Hükümeti'nin istifaya zorlanması",
      "İstanbul'un işgaline karşı demiryollarının tahrip edilmesi",
    ],
    correctIndex: 2,
    explanation: "Sivas Kongresi'nin ardından Temsil Kurulu İstanbul'la haberleşmeyi kesti. Anadolu'daki valilerin Damat Ferit'in emirlerine uymayacaklarını ilan etmesi üzerine Sadrazam Damat Ferit istifa etmek zorunda kaldı. Bu gelişme Temsil Heyeti'nin ilk siyasi başarısı olarak tarihe geçmiştir.",
  },

  // Amasya Görüşmesi — 2 soru
  {
    id: 24,
    question: "Amasya Görüşmesi'nde (20-22 Ekim 1919) kimler buluşmuştur?",
    options: [
      "Mustafa Kemal ve Padişah VI. Mehmet",
      "Mustafa Kemal ve İngiliz temsilcisi",
      "Salih Paşa (İstanbul adına) ve Mustafa Kemal (Temsil Kurulu adına)",
      "Rauf Orbay ve Damat Ferit Paşa",
    ],
    correctIndex: 2,
    explanation: "Damat Ferit'in istifasının ardından kurulan Ali Rıza Paşa Hükümeti, Temsil Kurulu ile diyaloga geçti. Görüşmelerde İstanbul Hükümeti adına Salih Paşa, Temsil Kurulu adına Mustafa Kemal Amasya'da buluştu.",
  },
  {
    id: 25,
    question: "Amasya Görüşmesi'nin en önemli sonucu aşağıdakilerden hangisidir?",
    options: [
      "Osmanlı Mebusan Meclisi açıldı",
      "İstanbul Hükümeti Temsil Kurulu'nu resmen tanıdı",
      "Misak-ı Milli kabul edildi",
      "Yunanistan işgali durduruldu",
    ],
    correctIndex: 1,
    explanation: "Amasya Görüşmesi'nin en önemli sonucu, İstanbul Hükümeti'nin Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti'ni ve Sivas Kongresi kararlarını benimseyeceğini açıklayarak Temsil Kurulu'nu resmen tanımasıdır. Taraflar bu görüşmede ilk kez birlikte hareket etmeyi kararlaştırdı.",
  },

  // Misak-ı Milli — 3 soru
  {
    id: 26,
    question: "Misak-ı Milli hangi kurulda ve kim tarafından hazırlanarak hangi mecliste kabul edilmiştir?",
    options: [
      "Sivas Kongresi'nde hazırlandı, Temsil Kurulu'nda kabul edildi",
      "Mustafa Kemal tarafından Ankara'da hazırlandı, Son Osmanlı Mebusan Meclisi'nde kabul edildi",
      "İtilaf devletleriyle müzakere edilerek Paris'te kabul edildi",
      "Erzurum Kongresi'nde hazırlandı, TBMM'de kabul edildi",
    ],
    correctIndex: 1,
    explanation: "Misak-ı Milli metni Erzurum ve Sivas kongrelerinin kararları temel alınarak Mustafa Kemal tarafından Ankara'da bizzat hazırlandı. 28 Ocak 1920'de Son Osmanlı Mebusan Meclisi'nin gizli toplantısında Felah-ı Vatan Grubu'nun desteğiyle kabul edildi.",
  },
  {
    id: 27,
    question: "Misak-ı Milli'ye göre Kars, Ardahan ve Batum (Elviye-i Selase) için öngörülen çözüm nedir?",
    options: [
      "Bu bölgeler koşulsuz Türkiye'ye bağlıdır",
      "Bu bölgelerin geleceği için halk oylamasına başvurulmalıdır",
      "Bu bölgeler Rusya ile ortak yönetim altına girecektir",
      "Bu bölgeler milletlerarası komisyon kararına bırakılacaktır",
    ],
    correctIndex: 1,
    explanation: "Misak-ı Milli'ye göre Kars, Ardahan ve Batum (Elviye-i Selase) ile Batı Trakya'nın geleceği için halk oylamasına başvurulmalıdır. Bu üç il 1878 Berlin Antlaşması ile Rusya'ya bırakılmış, Brest-Litovsk (1918) ile Osmanlı'ya geri dönmüştü.",
  },
  {
    id: 28,
    question: "Misak-ı Milli'nin kapitülasyonlara ilişkin maddesi aşağıdakilerden hangisidir?",
    options: [
      "Kapitülasyonlar yalnızca İngiltere için geçerlidir",
      "Kapitülasyonlar ekonomik kalkınmaya katkı sağladığından sürdürülmelidir",
      "Gelişimimizi engelleyen adli, mali ve idari yaptırımları içeren kapitülasyonlar kabul edilemez",
      "Kapitülasyonlar Lozan'da yeniden müzakere edilecektir",
    ],
    correctIndex: 2,
    explanation: "Misak-ı Milli'nin son maddesine göre; gelişimimizi engelleyen adli, mali ve idari yaptırımları içeren kapitülasyonlar kesinlikle kabul edilemez. Ancak bu ilkeye aykırı olmamak kaydıyla borçların ödenmesi yükümlülüğü sürdürülecektir.",
  },

  // TBMM ve Sevr — 3 soru
  {
    id: 29,
    question: "TBMM'nin çıkardığı ilk kanun aşağıdakilerden hangisidir?",
    options: [
      "Hıyanet-i Vataniye Kanunu",
      "Ağnam Vergisi'nin arttırılması",
      "İstiklal Mahkemelerinin kurulması",
      "Misak-ı Milli'nin onaylanması",
    ],
    correctIndex: 1,
    explanation: "TBMM'nin açıldığı gün, 24 Nisan 1920'de çıkarılan ilk kanun Ağnam Vergisi'nin (küçükbaş hayvan vergisi) arttırılmasıdır. Hıyanet-i Vataniye Kanunu ise 29 Nisan 1920'de çıkarıldı. İstiklal Mahkemeleri 18 Eylül 1920'de kuruldu.",
  },
  {
    id: 30,
    question: "Sevr Antlaşması (10 Ağustos 1920) ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      "Osmanlı Mebusan Meclisi tarafından onaylandığından hukuken geçerliydi",
      "TBMM imzalamayı kabul etti; ancak uygulanmadı",
      "Osmanlı Mebusan Meclisi onaylamadığından hukuken geçersizdi; TBMM imzalayanları vatan haini ilan etti",
      "Türk zaferiyle Lozan'da aynı şartlarla yeniden imzalandı",
    ],
    correctIndex: 2,
    explanation: "Sevr Antlaşması, Osmanlı Mebusan Meclisi tarafından onaylanmadığından hukuken geçersizdi. Rıza Tevfik, Reşat Halis ve Hadi Paşa imzalamış; TBMM bu üçünü vatan haini ilan etti. Antlaşma hiçbir zaman yürürlüğe girmedi; yerini 1923 Lozan Antlaşması aldı.",
  },
];

export default quizQuestions;
