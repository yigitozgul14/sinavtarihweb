import type { QuizQuestion } from "@/types/period-data";

const quizQuestions: QuizQuestion[] = [
  // ── DURAKLAMA GENELİ (5 soru) ───────────────────────────────────────────
  {
    id: 1,
    question: "Osmanlı Duraklama Dönemi'nin başlangıcı olarak hangi olay kabul edilir?",
    options: [
      "Preveze Zaferi (1538)",
      "Sokullu Mehmet Paşa'nın vefatı (1579)",
      "II. Viyana Kuşatması (1683)",
      "İnebahtı Yenilgisi (1571)",
    ],
    correctIndex: 1,
    explanation:
      "Sokullu Mehmet Paşa'nın 1579'daki vefatı, güçlü merkezi yönetimin sona ermesi ve kurumsal çözülmenin başlangıcı olarak kabul edilerek duraklama döneminin resmi başlangıç tarihi sayılır.",
  },
  {
    id: 2,
    question: "Osmanlı Duraklama Dönemi hangi antlaşmayla sona ermiştir?",
    options: [
      "Zitvatorok (1606)",
      "Kasr-ı Şirin (1639)",
      "Vasvar (1664)",
      "Karlofça (1699)",
    ],
    correctIndex: 3,
    explanation:
      "1699 Karlofça Antlaşması, Osmanlı'nın Batı'da büyük çaplı toprak kaybettiği ilk antlaşmadır. Bu antlaşmayla Osmanlı stratejisi 'fetih genişlemesi'nden 'mevcudu korumaya' evrilerek duraklama dönemi kapanmış, gerileme dönemi başlamıştır.",
  },
  {
    id: 3,
    question: "XVII. yüzyıl Osmanlı aydınlarının kurumsal bozulmayı tanımlamak için kullandıkları kavram çifti hangisidir?",
    options: [
      "Fütühat ve Cihad",
      "Teceddüd ve Tagayyür",
      "Rüşvet ve İltimas",
      "Kafes ve Şimşirlik",
    ],
    correctIndex: 1,
    explanation:
      "Dönemin Osmanlı aydın ve devlet adamları, kurumlardaki nitelik kaybını 'Teceddüd ve Tagayyür' (Bozulma ve Yozlaşma) kavramlarıyla tanımlamış; imparatorluğun tarihsel bağışıklığının zayıfladığına dikkat çekmişlerdir.",
  },
  {
    id: 4,
    question: "'Beşik ulemalığı' sisteminin Osmanlı eğitimine etkisi nedir?",
    options: [
      "Medreselerin kapanmasına yol açmıştır",
      "Alimin oğlunun alim sayılmasıyla liyakatsiz bir ulema sınıfı oluşmuştur",
      "Pozitif bilimlerin medreselere girmesini sağlamıştır",
      "Şeyhülislam'ın yetkilerini artırmıştır",
    ],
    correctIndex: 1,
    explanation:
      "'Beşik ulemalığı' sistemi liyakat ilkesini ortadan kaldırarak medreselerde niteliksiz bir ulema sınıfının doğmasına zemin hazırlamış; devletin değişen dünya şartlarını okuma kapasitesini zayıflatmıştır.",
  },
  {
    id: 5,
    question: "Aşağıdakilerden hangisi Osmanlı'nın duraklama dönemine girmesinin DIŞ nedenlerindendir?",
    options: [
      "Kapıkulu askerlerinin disiplinsizleşmesi",
      "Tımar sisteminin bozulması",
      "Avrupa'nın bilimsel ve teknolojik üstünlük kazanması",
      "Saray kadınlarının yönetime müdahalesi",
    ],
    correctIndex: 2,
    explanation:
      "Avrupa'nın bilimsel ve teknolojik üstünlük kazanması ile fütühat politikasının doğal sınırlara dayanması dış etkenler arasındadır. Diğer seçenekler (kapıkulu disiplinsizliği, tımar bozulması, kadınlar saltanatı) iç dinamiklere aittir.",
  },

  // ── XVII. YY ANTLAŞMALAR (7 soru) ──────────────────────────────────────
  {
    id: 6,
    question: "1590 Ferhat Paşa Antlaşması'nın Osmanlı açısından stratejik önemi nedir?",
    options: [
      "Batıda en geniş sınırlara ulaşıldı",
      "Doğu cephesinde tarihsel olarak en geniş sınırlara ulaşıldı",
      "İran'a savaş tazminatı ödendi",
      "Kırım Hanlığı elde edildi",
    ],
    correctIndex: 1,
    explanation:
      "1590 Ferhat Paşa Antlaşması ile Osmanlı, doğu cephesinde tarihsel olarak en geniş sınırlara ulaştı. Tebriz, Azerbaycan ve Luristan dahil büyük topraklar Osmanlı kontrolüne geçti; bu antlaşma imparatorluğun doğu kanadındaki stratejik zirvesini temsil eder.",
  },
  {
    id: 7,
    question: "1606 Zitvatorok Antlaşması hangi özelliğiyle Osmanlı tarihinde önemli bir kırılma noktasıdır?",
    options: [
      "Osmanlı Avusturya'dan savaş tazminatı aldığı ilk antlaşmadır",
      "Osmanlı Sultanı, Avusturya Arşidükü'nü İmparator (Sezar) olarak tanımıştır",
      "Macaristan tamamen Osmanlı topraklarına katılmıştır",
      "Venedik ile ticaret anlaşması imzalanmıştır",
    ],
    correctIndex: 1,
    explanation:
      "Zitvatorok'ta Osmanlı Sultanı, Avusturya Arşidükü'nü 'Sezar' (İmparator) olarak tanıdı. Bu diplomatik mütekabiliyet geleneği, Sultan'ın 'Evrensel Hükümdar' iddiasını ve Osmanlı'nın siyasi üstünlüğünü sona erdiren önemli bir kırılmadır.",
  },
  {
    id: 8,
    question: "1639 Kasr-ı Şirin Antlaşması'nın günümüze yansıyan en önemli mirası nedir?",
    options: [
      "Osmanlı-Rus sınırını belirlemiştir",
      "Günümüz Türkiye-İran sınırını büyük ölçüde belirlemiştir",
      "Mısır'ın Osmanlı'ya bağlı olduğunu onaylamıştır",
      "Kırım'ın Osmanlı himayesine girdiğini tescil etmiştir",
    ],
    correctIndex: 1,
    explanation:
      "1639 Kasr-ı Şirin Antlaşması ile Irak Osmanlı'da, Azerbaycan ise Safeviler'de kaldı. Bu antlaşmayla belirlenen sınır, büyük ölçüde günümüz Türkiye-İran sınırının temelini oluşturmakta ve bölgeye uzun vadeli istikrar getirmiştir.",
  },
  {
    id: 9,
    question: "1664 Vasvar Antlaşması ne açısından önemlidir?",
    options: [
      "Osmanlı'nın Batı'da toprak kaybettiği ilk antlaşmadır",
      "XVII. yüzyılda Avusturya'ya karşı kazanılan son avantajlı antlaşmadır",
      "Lale Devri'ni başlatan antlaşmadır",
      "Lehistan ile imzalanan son antlaşmadır",
    ],
    correctIndex: 1,
    explanation:
      "1664 Vasvar Antlaşması, XVII. yüzyılda Osmanlı'nın Avusturya karşısında avantajlı bir pozisyonda imzaladığı son diplomatik metindir. Bu tarihten sonra Osmanlı'nın Batı'daki dengesi bozulmaya başlamıştır.",
  },
  {
    id: 10,
    question: "Osmanlı'nın Batı'da ulaştığı en geniş sınırları hangi antlaşma belirlemiştir?",
    options: [
      "1606 Zitvatorok",
      "1664 Vasvar",
      "1672 Bucaş",
      "1699 Karlofça",
    ],
    correctIndex: 2,
    explanation:
      "1672 Bucaş Antlaşması ile Podolya ve Ukrayna'nın bir bölümü Osmanlı'ya katılarak Batı cephesinde ulaşılan en geniş sınıra kavuşuldu. Bu tarih, geri çekilişin başlangıcı kabul edilmektedir.",
  },
  {
    id: 11,
    question: "1645–1669 yılları arasında süren Girit kuşatması hangi teknolojik sorunu gün yüzüne çıkardı?",
    options: [
      "Osmanlı topçularının Avrupa'nın gerisinde kaldığı",
      "Osmanlı'nın kara ordusunun modernizasyona ihtiyacı olduğu",
      "Kadırga tabanlı Osmanlı donanmasının yelkenli gemiler karşısındaki yetersizliği",
      "Osmanlı'nın finansman sisteminin çöktüğü",
    ],
    correctIndex: 2,
    explanation:
      "24 yıl süren Girit kuşatması, kadırga tabanlı Osmanlı donanmasının Venedik'in modern yelkenli gemilerine karşı lojistik ve teknolojik açıdan yetersiz kaldığını kanıtlamıştır. Bu durum Osmanlı denizcilik anlayışının çağdışı kaldığını gözler önüne sermiştir.",
  },
  {
    id: 12,
    question: "1699 Karlofça Antlaşması Osmanlı stratejisinde hangi köklü dönüşümü simgeler?",
    options: [
      "Ekonomi öncelikli politikaya geçiş",
      "'Fütühattan mevcudu korumaya' stratejik dönüşüm",
      "Doğu seferlerine ağırlık verme kararı",
      "Batı ile kalıcı ittifak arayışı",
    ],
    correctIndex: 1,
    explanation:
      "Karlofça, Batı'da ilk kez büyük çaplı toprak kaybının yaşandığı antlaşmadır. Bu tarihten itibaren Osmanlı stratejisi 'fetih ile genişleme'den 'mevcut toprakları koruma'ya evrilmiştir; bu köklü bir paradigma değişimidir.",
  },

  // ── XVII. YY İSYANLAR (5 soru) ─────────────────────────────────────────
  {
    id: 13,
    question: "Vakayi Vakvakiye (Çınar Vakası) hangi gelişmeyi simgeler?",
    options: [
      "Celali isyanlarının İstanbul'a sıçramasını",
      "IV. Mehmet döneminde 30 devlet adamının infazıyla askeri vesayetin boyutunu",
      "Yeniçerilerin ilk kez padişahı devirmesini",
      "Saray kadınlarının devlet kararlarına müdahalesini",
    ],
    correctIndex: 1,
    explanation:
      "Vakayi Vakvakiye'de (Çınar Vakası) IV. Mehmet döneminde 30'a yakın devlet adamı saraydan alınarak idam edilmiştir. Bu olay, askeri vesayetin hanedana ve devlet yönetimine baskısının ulaştığı boyutu simgeler.",
  },
  {
    id: 14,
    question: "II. Osman'ın (Genç Osman) idam edilmesinin hanedan açısından önemi nedir?",
    options: [
      "İlk kez halifelik makamının el değiştirmesine yol açmıştır",
      "Padişahın 'Zillullah fil-Arz' sıfatıyla taşıdığı kutsiyet zırhını parçalamıştır",
      "Osmanlı'nın Avrupa devletleriyle ilişkilerini bozmuştur",
      "Tımar sisteminin çöküşünü hızlandırmıştır",
    ],
    correctIndex: 1,
    explanation:
      "II. Osman'ın sokaklarda sürüklenerek Yedikule zindanlarında katledilmesi, padişahın 'Zillullah fil-Arz' (Tanrı'nın yeryüzündeki gölgesi) sıfatıyla taşıdığı kutsiyet zırhını parçalamış ve hanedan prestijine telafisi güç bir darbe vurmuştur.",
  },
  {
    id: 15,
    question: "Celali İsyanları'nda 'Büyük Kaçgun' kavramı neyi tanımlar?",
    options: [
      "Osmanlı ordusunun savaş alanından firarını",
      "Güvenliğini yitiren köylülerin kentlere toplu göçünü",
      "Halkın İstanbul'dan Anadolu'ya dağılmasını",
      "Yeniçerilerin Rumeli'ye çekilmesini",
    ],
    correctIndex: 1,
    explanation:
      "'Büyük Kaçgun', Celali isyanları sırasında güvenliğini yitiren köylülerin yerleşim bölgelerini terk ederek kentlere toplu göç etmesi fenomenini tanımlar. Boşalan köylere yerleşen eşkıyalar Anadolu'nun demografik ve ekonomik yapısında kalıcı tahribat yaratmış, tarımsal üretim durma noktasına gelmiştir.",
  },
  {
    id: 16,
    question: "XVII. yüzyıl eyalet isyanlarının temel nedeni aşağıdakilerden hangisidir?",
    options: [
      "Milliyetçilik akımlarının etkisi",
      "Yerel yönetimdeki liyakatsizlik ve otorite boşluğu",
      "Osmanlı-İran savaşlarının getirdiği ağır vergi yükü",
      "Yeniçerilerin taşraya yayılmasından duyulan rahatsızlık",
    ],
    correctIndex: 1,
    explanation:
      "XVII. yy eyalet isyanları, XIX. yy milliyetçi hareketlerinden bağımsızdır; tamamen merkez-çevre ilişkilerindeki bozulma, yerel yönetimlerdeki liyakatsizlik ve oluşan otorite boşluğundan kaynaklanmaktadır.",
  },
  {
    id: 17,
    question: "Kuyucu Murat Paşa hangi padişah döneminde Celali isyanlarını bastırmış ve lakabını nasıl almıştır?",
    options: [
      "IV. Murat döneminde; isyancıları surlardan attığı için",
      "I. Ahmet döneminde; isyancıların kafasını kuyuya attığı için",
      "II. Osman döneminde; kuyularla savunma hattı kurduğu için",
      "III. Murat döneminde; isyancıları kuyulara gömdüğü için",
    ],
    correctIndex: 1,
    explanation:
      "Kuyucu Murat Paşa, I. Ahmet döneminde patlak veren Celali isyanlarını bastırmıştır. İsyancıların kafasını kuyuya attığı için 'Kuyucu' lakabını kazanmıştır.",
  },

  // ── XVII. YY ISLAHATLAR — TOKMAK (8 soru) ──────────────────────────────
  {
    id: 18,
    question: "XVII. yüzyıl Osmanlı ıslahatçılarını hatırlamak için kullanılan şifre hangisidir?",
    options: [
      "MATBAA",
      "TOKMAK",
      "KAFES",
      "İLTİZAM",
    ],
    correctIndex: 1,
    explanation:
      "XVII. yy ıslahatçıları TOKMAK şifresiyle hatırlanır: Tarhuncu Ahmet Paşa, Osman (II./Genç Osman), Kuyucu Murat Paşa, Murat (IV. Murat), I. Ahmet, Köprülü.",
  },
  {
    id: 19,
    question: "Osmanlı tarihinde ilk modern bütçeyi hazırlatan devlet adamı kimdir?",
    options: [
      "Köprülü Mehmet Paşa",
      "Kuyucu Murat Paşa",
      "Tarhuncu Ahmet Paşa",
      "Nevşehirli Damat İbrahim Paşa",
    ],
    correctIndex: 2,
    explanation:
      "Tarhuncu Ahmet Paşa, Osmanlı tarihinde ilk kez modern bir bütçe hazırlatmış ve mali düzeni kurmaya çalışmıştır. TOKMAK şifresindeki 'T' harfini temsil etmektedir.",
  },
  {
    id: 20,
    question: "Osmanlı tarihinde ilk ıslahat girişiminde bulunan padişah olarak kabul edilen kimdir?",
    options: [
      "IV. Murat",
      "I. Ahmet",
      "II. Osman (Genç Osman)",
      "III. Murat",
    ],
    correctIndex: 2,
    explanation:
      "II. Osman (Genç Osman), Osmanlı tarihinde ilk ıslahat girişiminde bulunan padişah olarak kabul edilir. Yeniçeri Ocağı'nı kaldırmayı planlamış, saray dışından evlenmiş, başkenti Anadolu'ya taşımayı düşünmüş ve Şeyhülislam'ın yetkilerini kısıtlamıştır.",
  },
  {
    id: 21,
    question: "II. Osman'ın (Genç Osman) gerçekleştirdiği veya planladığı ıslahatlar arasında hangisi YER ALMAZ?",
    options: [
      "Saray dışından (harem dışından) evlilik yapma",
      "Yeniçeri Ocağı'nı kaldırma planı",
      "İlk modern bütçeyi hazırlatma",
      "Başkenti Anadolu'ya taşıma düşüncesi",
    ],
    correctIndex: 2,
    explanation:
      "İlk modern bütçeyi hazırlatan Tarhuncu Ahmet Paşa'dır, II. Osman değil. II. Osman; saray dışından evlilik (Türk kızıyla), Yeniçeri'yi kaldırma planı, başkent değişikliği düşüncesi ve Şeyhülislam yetkilerini kısıtlamasıyla bilinir.",
  },
  {
    id: 22,
    question: "IV. Murat döneminde Avrupa'da eş zamanlı yaşanan Otuz Yıl Savaşları'nın (1618–1648) niteliği nedir?",
    options: [
      "Osmanlı ile Habsburg Avusturya arasındaki savaş",
      "Avrupa içi Katolik-Protestan mezhep savaşları",
      "Osmanlı-Safevi çatışmasının Avrupa'ya yansıması",
      "Kutsal İttifak'ın Osmanlı'ya karşı açtığı savaş",
    ],
    correctIndex: 1,
    explanation:
      "IV. Murat döneminde Avrupa'da eş zamanlı yaşanan Otuz Yıl Savaşları (1618–1648), Katolik-Protestan ekseninde bir Avrupa içi mezhep savaşıdır; Osmanlı ile doğrudan ilgisi yoktur.",
  },
  {
    id: 23,
    question: "IV. Murat'ın getirdiği yasak ve kısıtlamalar hakkında aşağıdakilerden hangisi YANLIŞTIR?",
    options: [
      "İlk defa gece dışarı çıkma yasağı getirdi",
      "İçki ve tütün yasağı koydu",
      "Kahvehaneleri kapattırdı",
      "Osmanlı tarihinde ilk içki yasağını getiren padişahtır",
    ],
    correctIndex: 3,
    explanation:
      "Osmanlı tarihinde ilk içki yasağını getiren padişah I. Ahmet'tir; IV. Murat değildir. IV. Murat gece çıkma, içki ve tütün yasakları getirmiş, Kanuni döneminde açılan kahvehaneleri kapattırmıştır (nedeni İstanbul yangınları).",
  },
  {
    id: 24,
    question: "I. Ahmet'in veraset sisteminde yaptığı değişiklik hangisidir?",
    options: [
      "Şehzadeleri ilk kez sancağa göndermeye başladı",
      "Kafes sistemini kaldırarak şehzadeleri serbest bıraktı",
      "Ekber ve Erşed sistemini getirerek Osmanlı'nın son veraset değişikliğini yaptı",
      "Kardeş katli kanununu oluşturdu",
    ],
    correctIndex: 2,
    explanation:
      "I. Ahmet, hanedanın en yaşlı (ekber) ve en akıllı (erşed) üyesinin tahta çıkmasını esas alan sistemi getirdi; bu Osmanlı tarihinde veraset sistemindeki son köklü değişikliktir. NOT: Sancağa son çıkan ve kafes sistemini başlatan padişah III. Mehmet'tir.",
  },
  {
    id: 25,
    question: "Köprülüler sülalesinin Osmanlı tarihindeki genel nitelemesi hangisidir?",
    options: [
      "Gerileme döneminde bütünüyle başarısız olan sadrazamlar silsilesi",
      "Duraklama dönemi içinde Osmanlı'ya geçici bir yükselme yaşatan sadrazamlar",
      "Nizam-ı Cedit hareketinin mimarları",
      "Lale Devri'nin asıl yürütücüleri",
    ],
    correctIndex: 1,
    explanation:
      "Köprülüler sülalesi, duraklama dönemi içinde Osmanlı'ya kısa süreli bir yükselme yaşatmıştır. Köprülü Mehmet Paşa maliyeyi düzeltti, Yeniçeri'yi disipline etti ve Çanakkale ablukasını kaldırdı; oğlu Fazıl Ahmet Paşa ise Girit'i fethetti.",
  },

  // ── XVIII. YY ANTLAŞMALAR (7 soru) ─────────────────────────────────────
  {
    id: 26,
    question: "1700 İstanbul Antlaşması'nda Rusya'ya bırakılan yer hangisidir ve bu olay neyin başlangıcıdır?",
    options: [
      "Kırım bırakıldı; Rusya'nın Akdeniz'e açılma politikası başladı",
      "Azak Kalesi bırakıldı; Rusya'nın sıcak denizlere inme sürecinin ilk adımı atıldı",
      "Karadeniz'de serbest dolaşım hakkı tanındı; Rus ticareti güçlendi",
      "Eflak ve Boğdan bırakıldı; Balkanlar'da Rus etkisi başladı",
    ],
    correctIndex: 1,
    explanation:
      "1700 İstanbul Antlaşması ile Azak Kalesi Rusya'ya bırakıldı. Bu gelişme, Rusya'nın sıcak denizlere açılma hedefinin ilk somut gerçekleşmesi ve Karadeniz'in 'Türk Gölü' vasfının sarsılmaya başlamasının işaretiydi.",
  },
  {
    id: 27,
    question: "1711 Prut Antlaşması Osmanlı açısından ne anlam taşır?",
    options: [
      "Büyük toprak kazanımları sağlandı",
      "XVII. yüzyılda kaybedilen bazı toprakların geri alınabileceğine dair umut doğdu; Azak Kalesi geri alındı",
      "Rusya ile ilk dostluk antlaşması imzalandı",
      "Karadeniz'in Türk gölü statüsüne yeniden kavuştu",
    ],
    correctIndex: 1,
    explanation:
      "1711 Prut Antlaşması, Büyük Petro'nun ordusunun kuşatılmasıyla imzalanmıştır. Azak Kalesi'nin geri alınmasıyla Karlofça sonrası kaybedilen toprakların geri alınabileceğine dair kısa süreli bir umut doğurmuştur.",
  },
  {
    id: 28,
    question: "1718 Pasarofça Antlaşması hangi gelişmeyi doğrudan tetiklemiştir?",
    options: [
      "Karlofça toprak kayıplarının büyük bölümünün geri alınmasını",
      "Batı askeri üstünlüğünün kabul edilerek Lale Devri'nin başlamasını",
      "Köprülüler sülalesinin iktidara dönüşünü",
      "III. Selim'in Nizam-ı Cedit hareketini başlatmasını",
    ],
    correctIndex: 1,
    explanation:
      "Petervaradin Savaşı'nın kaybedilmesiyle (1716) imzalanan 1718 Pasarofça Antlaşması, Batı askeri üstünlüğünün fiilen kabul edilmesi anlamına gelmiştir. Bu kabul doğrultusunda Lale Devri (1718-1730) başlamış ve Batı tarzı reformlar gündemine girmiştir.",
  },
  {
    id: 29,
    question: "1774 Küçük Kaynarca Antlaşması hakkında aşağıdakilerden hangisi YANLIŞTIR?",
    options: [
      "İlk kez tamamı Türk ve Müslüman bir toprak (Kırım) kaybedildi",
      "Osmanlı tarihinde ilk kez savaş tazminatı ödendi",
      "Kırım halkı her açıdan Rusya'ya bağlandı; Osmanlı ile dini bağ kesildi",
      "Rusya'nın İstanbul'da elçilik açmasına izin verildi",
    ],
    correctIndex: 2,
    explanation:
      "Küçük Kaynarca'da Kırım siyasi bağımsızlık kazandı; ancak Kırım halkı dini açıdan halifeye (Osmanlı'ya) bağlı kalmaya devam etti. Dolayısıyla 'dini bağ kesildi' ifadesi yanlıştır.",
  },
  {
    id: 30,
    question: "1779 Aynalıkavak Tenkihnamesi'nin Kırım'ın statüsüne etkisi nedir?",
    options: [
      "Kırım Osmanlı'ya iade edildi",
      "Kırım bağımsız ilan edildi",
      "Kırım özerk hale getirildi",
      "Kırım Rusya'ya bırakıldı",
    ],
    correctIndex: 2,
    explanation:
      "'Tenkihname' (sözleşme) adıyla anılan bu belge ile Şahin Giray Han Kırım Hanı olarak tanındı ve Kırım özerk statü kazandı. 1783'te Rusya Kırım'ı tamamen ilhak etti; 1792 Yaş Antlaşması ile Osmanlı bunu resmen kabul etti.",
  },
  {
    id: 31,
    question: "Osmanlı Devleti ile İran arasında imzalanan son antlaşma hangisidir?",
    options: [
      "1639 Kasr-ı Şirin",
      "1724 İstanbul Antlaşması",
      "1746 Kerden Antlaşması",
      "1792 Yaş Antlaşması",
    ],
    correctIndex: 2,
    explanation:
      "1746 Kerden Antlaşması, Osmanlı ile İran arasında imzalanan son antlaşmadır ve 'II. Kasr-ı Şirin' olarak da bilinir. Yaş Antlaşması ise Osmanlı-Rusya arasında imzalanmıştır.",
  },
  {
    id: 32,
    question: "1792 Yaş Antlaşması'nın Kırım meselesindeki önemi nedir?",
    options: [
      "Kırım Osmanlı'ya iade edildi",
      "Kırım'ın Rusya'ya ait olduğu Osmanlı tarafından resmen kabul edildi",
      "Kırım özerk statü kazandı",
      "Kırım'da ortak Osmanlı-Rus yönetimi kuruldu",
    ],
    correctIndex: 1,
    explanation:
      "1792 Yaş Antlaşması ile Osmanlı, 1783'te Rusya'nın ilhak ettiği Kırım'ın Rusya'ya ait olduğunu resmen kabul etmek zorunda kalmıştır. Bu antlaşma Kırım meselesini hukuken kapatan son belgedir.",
  },

  // ── LALE DEVRİ (5 soru) ────────────────────────────────────────────────
  {
    id: 33,
    question: "Lale Devri'nin başlangıç ve bitiş tarihleri hangileridir?",
    options: [
      "1699–1718",
      "1718–1730",
      "1730–1754",
      "1703–1730",
    ],
    correctIndex: 1,
    explanation:
      "Lale Devri, 1718 Pasarofça Antlaşması'ndan 1730 Patrona Halil isyanına kadar süren dönemdir (1718–1730).",
  },
  {
    id: 34,
    question: "Lale Devri'nin padişahı ve sadrazamı kimlerdir?",
    options: [
      "II. Mustafa ve Köprülü Fazıl Ahmet Paşa",
      "III. Ahmet ve Nevşehirli Damat İbrahim Paşa",
      "I. Mahmut ve Koca Ragıp Paşa",
      "III. Mustafa ve Halil Hamit Paşa",
    ],
    correctIndex: 1,
    explanation:
      "Lale Devri'nde tahtta III. Ahmet, sadrazamlıkta ise Nevşehirli Damat İbrahim Paşa bulunmaktaydı. Dönem Patrona Halil isyanıyla sona erdi; III. Ahmet tahttan indirildi, İbrahim Paşa idam edildi.",
  },
  {
    id: 35,
    question: "İlk Türk matbaasını kuranlar ve ilk basılan eser hangisidir?",
    options: [
      "Katip Çelebi ve Evliya Çelebi — Seyahatname",
      "İbrahim Müteferrika ve Said Efendi — Vankulu Lügati",
      "Koçi Bey ve Ragıp Paşa — Risale",
      "28 Mehmet Çelebi ve İbrahim Müteferrika — Sefaretname",
    ],
    correctIndex: 1,
    explanation:
      "İlk Türk matbaası 1727'de İbrahim Müteferrika ve Said Efendi tarafından kuruldu. İlk basılan eser Vankulu Lügati'dir. Hattatların işini kaybetmemesi için dini eserlerin basılması yasaklandı.",
  },
  {
    id: 36,
    question: "Lale Devri'nin ünlü minyatürcüsü ve divan şairi kimlerdir?",
    options: [
      "Karacaoğlan ve Fuzuli",
      "Levni ve Nedim",
      "Baki ve Piri Reis",
      "Koçi Bey ve Katip Çelebi",
    ],
    correctIndex: 1,
    explanation:
      "Lale Devri'nde minyatürcü Levni ve divan şairi Nedim öne çıkan isimlerdir. Levni, Osmanlı minyatür sanatının son büyük temsilcisidir; Nedim ise şiirlerinde Lale Devri'nin neşeli ruhunu yansıtmıştır.",
  },
  {
    id: 37,
    question: "Osmanlı tarihinde Avrupa'ya gönderilen ilk geçici elçi kim ve nereye gönderilmiştir?",
    options: [
      "Yusuf Agah Efendi — Londra",
      "28 Mehmet Çelebi Efendi — Paris",
      "Köprülü Fazıl Ahmet Paşa — Viyana",
      "Katip Çelebi — Amsterdam",
    ],
    correctIndex: 1,
    explanation:
      "Lale Devri'nde Osmanlı tarihinde ilk kez Avrupa'ya geçici elçilikler açıldı. İlk geçici elçi 28 Mehmet Çelebi Efendi'dir; Paris'e gönderilmiştir. Dönüşünde yazdığı 'Sefaretname' adlı eser, Osmanlı ıslahat hareketlerine kaynak oluşturmuştur. NOT: İlk daimi elçi ise Yusuf Agah Efendi'dir (Londra, III. Selim dönemi).",
  },

  // ── XVIII. YY ASKERİ ISLAHATLAR (3 soru) ───────────────────────────────
  {
    id: 38,
    question: "Humbaracı Ahmet Paşa'nın asıl adı ve milliyeti nedir?",
    options: [
      "Baron de Tott — Fransız",
      "Kont Boneval — Fransız asıllı",
      "Kont Boneval — Avusturyalı",
      "Baron de Tott — Macar asıllı",
    ],
    correctIndex: 1,
    explanation:
      "Humbaracı Ahmet Paşa'nın asıl adı Kont Boneval'dır. Fransız asıllı bu komutan, I. Mahmut döneminde Osmanlı hizmetine girerek Humbaracı Ocağı'nı ıslah etmiştir. Baron de Tott ise farklı bir kişi olup III. Mustafa döneminde topçu ocağını ıslah etmiştir.",
  },
  {
    id: 39,
    question: "Mühendishane-i Bahr-î Hümayun (Deniz Mühendishanesi) hangi padişah döneminde ve hangi yılda açılmıştır?",
    options: [
      "I. Mahmut döneminde — 1734",
      "III. Mustafa döneminde — 1773",
      "I. Abdülhamit döneminde — 1780",
      "III. Selim döneminde — 1793",
    ],
    correctIndex: 1,
    explanation:
      "Mühendishane-i Bahr-î Hümayun (Deniz Mühendishanesi) 1773 yılında III. Mustafa döneminde açılmıştır. NOT: I. Mahmut döneminde 1734'te Hendesehane açılmıştı; III. Selim ise Mühendishane-i Berr-i Hümayun'u (Kara Mühendishanesi) kurmuştur.",
  },
  {
    id: 40,
    question: "III. Selim'in başlattığı kapsamlı yenilik hareketi ve bu hareketin finansmanı için kurulan hazine nedir?",
    options: [
      "Islahat-ı Hayriye hareketi ve Irad-ı Cedid Hazinesi",
      "Nizam-ı Cedid hareketi ve Irad-ı Cedid Hazinesi",
      "Tanzimat hareketi ve Hazine-i Amire",
      "Islahat hareketi ve Darü't-Tıbaati'l-Amire",
    ],
    correctIndex: 1,
    explanation:
      "III. Selim, Osmanlı tarihinde köklü (radikal) değişim hareketini başlatan padişahtır. Bu harekete 'Nizam-ı Cedid' adı verilmiş; ordunun ve ıslahatların finansmanı için 'İrad-ı Cedid Hazinesi' kurulmuştur. Dönem Kabakçı Mustafa isyanıyla sona erdi.",
  },
];

export default quizQuestions;
