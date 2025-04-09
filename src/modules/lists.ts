export type Brands = {
  id: number;
  en: string;
  ja: string;
  url?: string;
};

const brandlist: Brands[] = [
  { id: 1, en: '24karats', ja: 'トゥウェンティーフォーカラッツ', url: 'https://www.24karats.jp/' },
  { id: 2, en: 'A BATHING APE', ja: 'アベイシングエイプ', url: 'https://www.bape.com/' },
  { id: 3, en: 'A. LANGE & SOHNE', ja: 'ランゲアンドゾーネ', url: 'https://www.alange-soehne.com/jp-ja' },
  { id: 4, en: 'Abercrombie&Fitch', ja: 'アバクロンビーアンドフィッチ' },
  { id: 5, en: 'adidas', ja: 'アディダス' },
  { id: 6, en: 'ALDIES', ja: 'アールディーズ' },
  { id: 7, en: 'American Eagle', ja: 'アメリカンイーグル' },
  { id: 8, en: 'ANTEPRIMA', ja: 'アンテプリマ', url: 'https://jp.anteprima.com/' },
  { id: 9, en: 'ARMANI', ja: 'アルマーニ', url: 'https://www.armani.com/ja-jp/' },
  { id: 10, en: 'ASICS', ja: 'アシックス' },
  { id: 11, en: 'Azzedine Alaia', ja: 'アズディンアライア', url: 'https://www.maison-alaia.com/jp' },
  { id: 12, en: 'BALENCIAGA', ja: 'バレンシアガ', url: 'https://www.balenciaga.com/ja-jp' },
  {
    id: 13,
    en: 'BAUME&MERCIER',
    ja: 'ボームアンドメルシエ',
    url: 'https://www.baume-et-mercier.com/jp/ja/%E3%83%9C%E3%83%BC%E3%83%A0%EF%BC%86%E3%83%A1%E3%83%AB%E3%82%B7%E3%82%A8.html',
  },
  { id: 14, en: 'BEAMS', ja: 'ビームス', url: 'https://www.beams.co.jp/' },
  { id: 15, en: 'Beats by Dr. Dre', ja: 'ビーツ バイ ドクター ドレー', url: 'https://www.beatsbydre.com/jp' },
  {
    id: 16,
    en: 'BEAUTY＆YOUTH UNITED ARROWS',
    ja: 'ビューティーアンドユースユナイテッドアローズ',
    url: 'https://store.united-arrows.co.jp/brand/by/',
  },
  { id: 17, en: 'Berluti', ja: 'ベルルッティ', url: 'https://www.berluti.com/ja-jp/homepage/' },
  { id: 18, en: 'BIRKENSTOCK', ja: 'ビルケンシュトック' },
  { id: 19, en: 'BOTTEGA VENETA', ja: 'ボッテガ ヴェネタ', url: 'https://www.bottegaveneta.com/jp/' },
  { id: 20, en: 'BOY LONDON', ja: 'ボーイロンドン', url: 'https://boy-london-jp.com/' },
  { id: 21, en: 'BREE', ja: 'ブリー (サイトダウン中)' },
  { id: 22, en: 'BURBERRY', ja: 'バーバリー', url: 'https://jp.burberry.com/' },
  { id: 23, en: 'BURTON', ja: 'バートン', url: 'https://www.burton.com/jp/ja/home' },
  { id: 24, en: 'BVLGARI', ja: 'ブルガリ', url: 'https://www.bulgari.com/ja-jp/' },
  { id: 25, en: 'Callaway', ja: 'キャロウェイ', url: 'https://www.callawaygolf.jp/' },
  { id: 26, en: 'Calvin Klein', ja: 'カルバン クライン' },
  { id: 27, en: 'CANADA GOOSE', ja: 'カナダグース' },
  { id: 28, en: 'Cartier', ja: 'カルティエ', url: 'https://www.cartier.jp/' },
  { id: 29, en: 'CELINE', ja: 'セリーヌ', url: 'https://www.celine.com/ja-jp/home' },
  { id: 30, en: 'Champion', ja: 'チャンピオン', url: 'https://www.championusa.jp/' },
  { id: 31, en: 'CHAN LUU', ja: 'チャン ルー', url: 'https://www.chanluu.jp/' },
  { id: 32, en: 'CHANEL', ja: 'シャネル', url: 'https://www.chanel.com/jp/' },
  { id: 33, en: 'CHAUMET', ja: 'ショーメ', url: 'https://www.chaumet.com/jp_ja' },
  { id: 34, en: 'Chloe', ja: 'クロエ', url: 'https://www.chloe.com/jp' },
  { id: 35, en: 'Christian Dior', ja: 'クリスチャン ディオール', url: 'https://www.dior.com/ja_jp' },
  { id: 36, en: 'Christian Louboutin', ja: 'クリスチャンルブタン', url: 'https://jp.christianlouboutin.com/jp_ja/' },
  { id: 37, en: 'CHROME HEARTS', ja: 'クロムハーツ', url: 'https://www.chromehearts.com/' },
  { id: 38, en: 'COACH', ja: 'コーチ', url: 'https://japan.coach.com/' },
  { id: 39, en: 'Columbia', ja: 'コロンビア' },
  { id: 40, en: 'CONVERSE', ja: 'コンバース' },
  { id: 41, en: 'courreges', ja: 'クレージュ', url: 'https://www.courreges.com/en-jp' },
  { id: 42, en: 'crocs', ja: 'クロックス' },
  { id: 43, en: 'DE BEERS', ja: 'デビアス (2017年国内撤退)', url: 'https://www.debeers.co.uk/en-gb/home' },
  { id: 44, en: 'DIESEL', ja: 'ディーゼル' },
  { id: 45, en: 'DOLCE&GABBANA', ja: 'ドルチェアンドガッバーナ', url: 'https://www.dolcegabbana.com/ja-jp/' },
  { id: 46, en: 'DRESSCAMP', ja: 'ドレスキャンプ', url: 'http://www.dresscamp.org/' },
  { id: 47, en: 'DSQUARED2', ja: 'ディースクエアード', url: 'https://www.dsquared2.com/jp/' },
  { id: 48, en: 'dunhill', ja: 'ダンヒル' },
  { id: 49, en: 'DUNLOP', ja: 'ダンロップ' },
  { id: 50, en: 'DUVETICA', ja: 'デュベティカ', url: 'https://duvetica.jp/' },
  { id: 51, en: 'EMILIO PUCCI', ja: 'エミリオプッチ', url: 'https://www.pucci.com/ja-jp' },
  { id: 52, en: 'ergobaby', ja: 'エルゴベビー', url: 'https://ergobaby.jp/' },
  { id: 53, en: 'ETRO', ja: 'エトロ', url: 'https://www.etro.com/jp-ja/' },
  { id: 54, en: 'EVISU', ja: 'エヴィス', url: 'https://evisu.jp/' },
  { id: 55, en: 'Felisi', ja: 'フェリージ', url: 'https://www.felisi.net/' },
  { id: 56, en: 'FENDI', ja: 'フェンディ', url: 'https://www.fendi.com/jp-ja/' },
  { id: 57, en: 'FILA', ja: 'フィラ', url: 'https://www.fila.jp/top/CSfTop.jsp' },
  { id: 58, en: 'Folli Follie', ja: 'フォリフォリ', url: 'https://www.follifollie.com/cm-en/' },
  { id: 59, en: 'FRANCK MULLER', ja: 'フランクミュラー', url: 'https://franckmuller-japan.com/' },
  { id: 60, en: 'FRANKLIN & MARSHALL', ja: 'フランクリンマーシャル', url: 'https://www.franklinandmarshall.com/' },
  { id: 61, en: 'Fred', ja: 'フレッド', url: 'https://www.fred.com/jp/ja_JP/' },
  { id: 62, en: 'FRED PERRY', ja: 'フレッドペリー' },
  { id: 63, en: 'FURLA', ja: 'フルラ', url: 'https://www.furla.com/jp/ja/' },
  { id: 64, en: 'GaGa MILANO', ja: 'ガガミラノ', url: 'https://gagamilano.jp/' },
  { id: 65, en: 'GIVENCHY', ja: 'ジバンシィ', url: 'https://www.givenchy.com/jp/ja/homepage' },
  { id: 66, en: 'GOLDWIN', ja: 'ゴールドウイン' },
  { id: 67, en: 'GOYARD', ja: 'ゴヤール', url: 'https://www.goyard.com/ja_jp/' },
  {
    id: 68,
    en: 'green label relaxing',
    ja: 'グリーンレーベルリラクシング',
    url: 'https://store.united-arrows.co.jp/brand/glr/',
  },
  { id: 69, en: 'GUCCI', ja: 'グッチ', url: 'https://www.gucci.com/jp/ja/' },
  { id: 70, en: 'HERMES', ja: 'エルメス', url: 'https://www.hermes.com/jp/ja/' },
  { id: 71, en: 'Hollister', ja: 'ホリスター', url: 'https://www.hollisterco.com/shop/am-ja' },
  { id: 72, en: 'HUBLOT', ja: 'ウブロ', url: 'https://www.hublot.com/ja-jp' },
  { id: 73, en: 'HUGO BOSS', ja: 'ヒューゴ ボス', url: 'https://www.hugoboss.com/jp/home' },
  { id: 74, en: 'HUNTER', ja: 'ハンター', url: 'https://hunterboots.co.jp/' },
  { id: 75, en: 'HYDROGEN', ja: 'ハイドロゲン (2025年1月国内取扱終了)', url: 'https://www.hydrogen.it/us/' },
  { id: 76, en: 'HYSTERIC GLAMOUR', ja: 'ヒステリックグラマー' },
  { id: 77, en: 'IWC', ja: 'アイダブリューシー', url: 'https://www.iwc.com/jp/ja/home.html' },
  { id: 78, en: 'JAEGER-LECOULTRE', ja: 'ジャガー ルクルト', url: 'https://www.jaeger-lecoultre.com/jp-ja' },
  { id: 79, en: 'off white', ja: 'オフホワイト', url: 'https://www.off---white.com/en-jp' },
  { id: 80, en: 'SERAPIAN', ja: 'セラピアン', url: 'https://www.serapian.com/ja-jp' },
  { id: 81, en: 'MANOLO BLAHNIK', ja: 'マノロブラニク', url: 'https://strasburgo.co.jp/brand/manoloblahnik-w/' },
  { id: 82, en: 'RIMOWA', ja: 'リモワ', url: 'https://www.rimowa.com/jp/ja/home' },
  { id: 83, en: 'JIL SANDER', ja: 'ジルサンダー', url: 'https://www.jilsander.com/ja-jp/' },
  { id: 84, en: 'JILL STUART', ja: 'ジルスチュアート (ブランド終了)' },
  { id: 85, en: 'MARNI', ja: 'マルニ', url: 'https://www.marni.com/ja-jp/' },
  { id: 86, en: 'VASIC', ja: 'ヴァジック', url: 'https://www.vasic-newyork.jp/' },
  { id: 87, en: 'Carhartt', ja: 'カーハート', url: 'https://carhartt-wip.jp/' },
  { id: 88, en: 'Sergio rossi', ja: 'セルジオロッシ', url: 'https://www.sergiorossi.com/jp-ja/' },
  { id: 89, en: 'A.P.C.', ja: 'アーペーセー', url: 'https://www.apcjp.com/jpn/' },
  { id: 90, en: 'Alexander McQueen', ja: 'アレキサンダーマックイーン', url: 'https://www.alexandermcqueen.com/ja-jp' },
  { id: 91, en: 'KENZO', ja: 'ケンゾー', url: 'https://www.kenzo.com/ja-jp/home' },
  { id: 92, en: 'HUMAN MADE', ja: 'ヒューマンメード', url: 'https://humanmade.jp/' },
  {
    id: 93,
    en: 'AMI Alexandre Mattiussi（AMI Paris）',
    ja: 'アミアレクサンドルマテュッシ（アミパリス）',
    url: 'https://www.amiparis.com/ja-jp',
  },
  { id: 94, en: 'Herve Chapelier', ja: 'エルベシャプリエ', url: 'https://hervechapelierjapon.com/' },
  { id: 95, en: 'marimekko', ja: 'マリメッコ', url: 'https://www.marimekko.jp/' },
  { id: 96, en: 'ALAIA', ja: 'アライア', url: 'https://www.maison-alaia.com/jp' },
  { id: 97, en: 'BUCCELLATI', ja: 'ブチェラッティ', url: 'https://www.buccellati.com/jp_jp/' },
  { id: 98, en: 'le coq sportif', ja: 'ルコックスポルティフ', url: 'https://store.descente.co.jp/lecoqsportif/' },
  { id: 99, en: 'OOFOS', ja: 'ウーフォス', url: 'https://oofos.jp/' },
  { id: 100, en: 'Teva', ja: 'テバ', url: 'https://jp.teva.com/' },
  { id: 101, en: 'Apple', ja: 'アップル', url: 'https://www.apple.com/jp/' },
  { id: 102, en: 'Le Creuset', ja: 'ル クルーゼ', url: 'https://www.lecreuset.co.jp/' },
  { id: 103, en: 'BOSE', ja: 'ボーズ', url: 'https://www.bose.co.jp/' },
  { id: 104, en: 'Marshall', ja: 'マーシャル', url: 'https://www.marshall.com/jp/en' },
  { id: 105, en: 'JIMMY CHOO', ja: 'ジミーチュウ', url: 'https://www.jimmychoo.jp/ja/home' },
  { id: 106, en: 'kate spade NEW YORK', ja: 'ケイト スペード ニューヨーク', url: 'https://www.katespade.jp/' },
  { id: 107, en: 'LACOSTE', ja: 'ラコステ' },
  { id: 108, en: 'LANCEL', ja: 'ランセル (2012年国内撤退)', url: 'https://lancel.com/' },
  { id: 109, en: 'LeSportsac', ja: 'レスポートサック', url: 'https://shop.lesportsac.co.jp/top/CSfTop.jsp' },
  { id: 110, en: 'LOEWE', ja: 'ロエベ', url: 'https://www.loewe.com/jap/ja/home' },
  { id: 111, en: 'LONGCHAMP', ja: 'ロンシャン', url: 'https://www.longchamp.com/jp/ja/' },
  { id: 112, en: 'LOUIS VUITTON', ja: 'ルイヴィトン', url: 'https://jp.louisvuitton.com/jpn-jp/homepage' },
  { id: 113, en: 'MAMMUT', ja: 'マムート', url: 'https://www.mammut.jp/' },
  { id: 114, en: 'Manhattan Portage', ja: 'マンハッタンポーテージ', url: 'https://www.manhattanportage.co.jp/' },
  { id: 115, en: 'MARC JACOBS', ja: 'マーク ジェイコブス', url: 'https://www.marcjacobs.jp/' },
  { id: 116, en: 'Max Mara', ja: 'マックスマーラ', url: 'https://jp.maxmara.com/' },
  { id: 117, en: 'Max&Co.', ja: 'マックスアンドコー', url: 'https://jp.maxandco.com/' },
  { id: 118, en: 'MCM', ja: 'エムシーエム', url: 'https://jp.mcmworldwide.com/ja_JP/home' },
  { id: 119, en: 'Mezaik', ja: 'メザイク', url: 'https://www.artsbrains.co.jp/' },
  { id: 120, en: 'MICHAEL KORS', ja: 'マイケルコース', url: 'https://www.michaelkors.jp/' },
  { id: 121, en: 'mila schon', ja: 'ミラショーン', url: 'https://www.coronet-store.jp/view/page/milaschon' },
  { id: 122, en: 'Minnetonka', ja: 'ミネトンカ', url: 'https://minnetonkamoccasin.co.jp/' },
  { id: 123, en: 'miu miu', ja: 'ミュウミュウ', url: 'https://www.miumiu.com/jp/ja.html' },
  { id: 124, en: 'MIZUNO', ja: 'ミズノ' },
  { id: 125, en: 'MONCLER', ja: 'モンクレール', url: 'https://www.moncler.com/ja-jp/' },
  { id: 126, en: 'mont-bell', ja: 'モンベル' },
  { id: 127, en: 'MONTBLANC', ja: 'モンブラン', url: 'https://www.montblanc.com/ja-jp' },
  { id: 128, en: 'MOSCHINO', ja: 'モスキーノ', url: 'https://www.moschino.com/jp_ja' },
  { id: 129, en: 'New Balance', ja: 'ニューバランス' },
  { id: 130, en: 'NEW ERA', ja: 'ニューエラ' },
  { id: 131, en: 'NIKE', ja: 'ナイキ' },
  { id: 132, en: 'NINE WEST', ja: 'ナインウエスト', url: 'https://ninewest.com/' },
  { id: 133, en: 'OAKLEY', ja: 'オークリー', url: 'https://www.oakley.com/ja-jp' },
  { id: 134, en: 'PANERAI', ja: 'パネライ', url: 'https://www.panerai.com/jp/ja/home.html' },
  { id: 135, en: 'OMEGA', ja: 'オメガ', url: 'https://www.omegawatches.jp/' },
  { id: 136, en: 'Orobianco', ja: 'オロビアンコ' },
  { id: 137, en: 'patagonia', ja: 'パタゴニア' },
  {
    id: 138,
    en: 'PATEK PHILIPPE',
    ja: 'パテック フィリップ',
    url: 'https://www.patek.com/ja/%E3%83%9B%E3%83%BC%E3%83%A0',
  },
  { id: 139, en: 'Paul Smith', ja: 'ポール スミス', url: 'https://www.paulsmith.co.jp/shop' },
  { id: 140, en: 'PEARLY GATES', ja: 'パーリーゲイツ', url: 'https://www.pearlygates.net/' },
  { id: 141, en: 'PIAGET', ja: 'ピアジェ', url: 'https://www.piaget.com/jp-ja' },
  { id: 142, en: 'POLO RALPH LAUREN', ja: 'ポロ ラルフローレン' },
  { id: 143, en: 'PRADA', ja: 'プラダ', url: 'https://www.prada.com/jp/ja.html' },
  { id: 144, en: 'PUMA', ja: 'プーマ' },
  { id: 145, en: 'Quiksilver', ja: 'クイックシルバー', url: 'https://boardriders.co.jp/pages/quiksilver' },
  { id: 146, en: 'Ray-Ban', ja: 'レイバン', url: 'https://www.ray-ban.com/japan' },
  { id: 147, en: 'ROGER DUBUIS', ja: 'ロジェ デュブイ', url: 'https://www.rogerdubuis.com/jp-ja' },
  { id: 148, en: 'ROLEX', ja: 'ロレックス', url: 'https://www.rolex.com/ja' },
  { id: 149, en: 'SALOMON', ja: 'サロモン', url: 'https://salomon.jp/' },
  { id: 150, en: 'FERRAGAMO', ja: 'フェラガモ', url: 'https://www.ferragamo.com/shop/jpn/ja' },
  { id: 151, en: 'Samantha Thavasa', ja: 'サマンサタバサ', url: 'https://samanthathavasa.jp/' },
  { id: 152, en: 'SCOTTY CAMERON', ja: 'スコッティ キャメロン', url: 'https://www.titleist.co.jp/golf-clubs/putters' },
  { id: 153, en: 'SKINS', ja: 'スキンズ', url: 'https://www.grip-inter.com/shop/c/cSK/' },
  { id: 154, en: 'Stella McCartney', ja: 'ステラ マッカートニー', url: 'https://www.stellamccartney.com/jp/ja/' },
  { id: 155, en: 'STUSSY', ja: 'ステューシー', url: 'https://jp.stussy.com/' },
  { id: 156, en: 'Supreme', ja: 'シュプリーム', url: 'https://supreme.com/' },
  { id: 157, en: 'TAG HEUER', ja: 'タグ ホイヤー', url: 'https://www.tagheuer.com/jp/ja/' },
  { id: 158, en: 'TaylorMade', ja: 'テーラーメイド', url: 'https://www.taylormadegolf.jp/home' },
  { id: 159, en: 'THE NORTH FACE', ja: 'ザ ノースフェイス' },
  { id: 160, en: 'THOM BROWNE', ja: 'トム ブラウン', url: 'https://www.thombrowne.com/ja-jp' },
  { id: 161, en: 'TIFFANY&Co.', ja: 'ティファニー', url: 'https://www.tiffany.co.jp/' },
  { id: 162, en: 'Titleist', ja: 'タイトリスト', url: 'https://www.titleist.co.jp/' },
  { id: 163, en: "TOD'S", ja: 'トッズ', url: 'https://www.tods.com/jp-ja/home/' },
  { id: 164, en: 'TOM FORD', ja: 'トムフォード', url: 'https://www.tomford.com/' },
  { id: 165, en: 'TOMMY HILFIGER', ja: 'トミー ヒルフィガー', url: 'https://japan.tommy.com/' },
  { id: 166, en: 'TOMS', ja: 'トムス (2022年国内取扱終了)', url: 'https://www.toms.com/en-us/' },
  { id: 167, en: 'TOPKAPI', ja: 'トプカピ', url: 'https://cricket-web.co.jp/pages/topkapi' },
  { id: 168, en: 'TORY BURCH', ja: 'トリーバーチ', url: 'https://www.toryburch.jp/ja-jp/' },
  { id: 169, en: 'TUMI', ja: 'トゥミ', url: 'https://www.tumi.co.jp/' },
  { id: 170, en: 'UGG', ja: 'アグ', url: 'https://www.ugg.com/jp/' },
  { id: 171, en: 'UNDER ARMOUR', ja: 'アンダーアーマー', url: 'https://www.underarmour.co.jp/top/CSfTop.jsp' },
  { id: 172, en: 'UNITED ARROWS', ja: 'ユナイテッドアローズ', url: 'https://store.united-arrows.co.jp/brand/ua/' },
  {
    id: 173,
    en: 'VACHERON CONSTANTIN',
    ja: 'ヴァシュロン コンスタンタン',
    url: 'https://www.vacheron-constantin.com/jp/ja/home.html',
  },
  {
    id: 174,
    en: 'Van Cleef ＆ Arpels',
    ja: 'ヴァンクリーフアンドアーペル',
    url: 'https://www.vancleefarpels.com/jp/ja/home.html',
  },
  { id: 175, en: 'VANS', ja: 'ヴァンズ' },
  { id: 176, en: 'VERSACE', ja: 'ヴェルサーチェ', url: 'https://www.versace.jp/ja/' },
  {
    id: 177,
    en: 'Vivienne Westwood',
    ja: 'ヴィヴィアンウエストウッド',
    url: 'https://www.viviennewestwood-tokyo.com/',
  },
  { id: 178, en: 'Disney', ja: 'ディズニー' },
  { id: 179, en: 'YONEX', ja: 'ヨネックス', url: 'https://www.yonex.co.jp/' },
  { id: 180, en: 'Yves Saint Laurent (Saint Laurent)', ja: 'イヴ サンローラン', url: 'https://www.ysl.com/en-jp' },
  { id: 181, en: 'ZENITH', ja: 'ゼニス', url: 'https://www.zenith-watches.com/ja_jp' },
  { id: 182, en: 'MAISON KITSUNE', ja: 'メゾン キツネ', url: 'https://maisonkitsune.com/jp/' },
  { id: 183, en: 'KLASSE14', ja: 'クラスフォーティーン', url: 'https://klasse14.co.jp/' },
  { id: 184, en: 'SKAGEN', ja: 'スカーゲン', url: 'https://www.skagen.com/ja-jp/' },
  { id: 185, en: 'Swatch', ja: 'スウォッチ', url: 'https://www.swatch.com/ja-jp/' },
  { id: 186, en: "ARC'TERYX", ja: 'アークテリクス', url: 'https://arcteryx.jp/' },
  { id: 187, en: 'STONE ISLAND', ja: 'ストーン アイランド', url: 'https://www.stoneisland.com/ja-jp/' },
  { id: 188, en: 'Dr.Martens', ja: 'ドクターマーチン', url: 'https://jp.drmartens.com/' },
  { id: 189, en: 'FEAR OF GOD', ja: 'フィアオブゴッド', url: 'https://fearofgod.com/en-jp/collections/fearofgod' },
  { id: 190, en: 'POLENE', ja: 'ポレーヌ', url: 'https://jp.polene-paris.com/' },
  { id: 191, en: 'HOKA（HOKA ONEONE）', ja: 'ホカ（ホカ オネオネ）', url: 'https://www.hoka.com/jp/' },
  { id: 192, en: 'agnes b.', ja: 'アニエスベー', url: 'https://www.agnesb.co.jp/top/CSfTop.jsp' },
  { id: 193, en: 'Maison Margiela', ja: 'メゾンマルジェラ', url: 'https://www.maisonmargiela.com/ja-jp/' },
  { id: 194, en: 'Reebok', ja: 'リーボック' },
  { id: 195, en: 'ecco', ja: 'エコー', url: 'https://jp.ecco.com/' },
  { id: 196, en: 'drew house', ja: 'ドリューハウス', url: 'https://thehouseofdrew.com/' },
  { id: 197, en: 'ANYA HINDMARCH', ja: 'アニヤ ハインドマーチ', url: 'https://www.anyahindmarch.jp/' },
  { id: 198, en: 'GREGORY', ja: 'グレゴリー', url: 'https://www.gregory.jp/' },
  { id: 199, en: 'Rick Owens', ja: 'リック オウエンス', url: 'https://www.rickowens.eu/en/JP' },
  { id: 200, en: 'AUDEMARS PIGUET', ja: 'オーデマピゲ', url: 'https://www.audemarspiguet.com/com/ja/' },
  { id: 201, en: 'FitFlop', ja: 'フィットフロップ', url: 'https://www.fitflop.jp/' },
  { id: 202, en: 'NIXON', ja: 'ニクソン (2023年国内撤退)' },
  { id: 203, en: 'Ron Herman', ja: 'ロンハーマン', url: 'https://ronherman.jp/' },
  { id: 204, en: 'Yohji Yamamoto', ja: 'ヨウジヤマモト', url: 'https://www.yohjiyamamoto.co.jp/' },
  { id: 205, en: 'Dyson', ja: 'ダイソン', url: 'https://www.dyson.co.jp/ja' },
  { id: 206, en: 'Staub', ja: 'ストウブ', url: 'https://www.zwilling.com/jp/staub/' },
  { id: 207, en: 'JBL', ja: 'ジェイビーエル', url: 'https://jp.jbl.com/' },
  { id: 208, en: 'agnes b. FEMME', ja: 'アニエスベー ファム' },
  { id: 209, en: 'agnes b. HOMME', ja: 'アニエスベー オム' },
  { id: 210, en: 'agnes b. ENFANT', ja: 'アニエスベー アンファン' },
  { id: 211, en: 'agnes b. VOYAGE', ja: 'アニエスベー ボヤージュ' },
  { id: 212, en: 'agnes b. SELECTIVE', ja: 'アニエスベー セレクティブ' },
  { id: 213, en: 'EA7 (ARMANI)', ja: 'エンポリオアルマーニ7' },
  { id: 214, en: 'D&G (DOLCE&GABBANA)', ja: 'ディーアンドジー' },
  { id: 215, en: 'FEAR OF GOD ESSENTIALS', ja: 'フィア オブ ゴッド エッセンシャル' },
  { id: 216, en: 'MM6 (Maison Margiela)', ja: 'エムエム6', url: 'https://www.maisonmargiela.com/ja-jp/mm6/' },
  { id: 217, en: 'Jordan (NIKE)', ja: 'ジョーダン', url: 'https://www.nike.com/jordan' },
  { id: 218, en: 'LAUREN Ralph Lauren', ja: 'ローレン ラルフローレン' },
  { id: 219, en: 'Samantha Vega', ja: 'サマンサベガ' },
  { id: 220, en: 'TOMMY JEANS (TOMMY HILFIGER)', ja: 'トミージーンズ' },
  { id: 221, en: 'Y-3 (adidas)', ja: 'ワイスリー' },
  { id: 222, en: 'Y-3 (Yohji Yamamoto)', ja: 'ワイスリー' },
  { id: 223, en: "S'YTE (Yohji Yamamoto)", ja: 'サイト' },
  { id: 224, en: 'Ground Y (Yohji Yamamoto)', ja: 'グラウンド ワイ' },
  { id: 225, en: "Y's (Yohji Yamamoto)", ja: 'ワイズ' },
  { id: 226, en: "Y's.... (Yohji Yamamoto)", ja: 'ワイズ....' },
  { id: 227, en: "Y's for men (Yohji Yamamoto)", ja: 'ワイズフォーメン' },
  { id: 228, en: 'power of the WHITE shirt (Yohji Yamamoto)', ja: 'パワー オブ ザ ホワイトシャツ' },
  { id: 229, en: 'LIMI feu (Yohji Yamamoto)', ja: 'リミ フゥ' },
];

// 昇順に並び替え
brandlist.sort((a: Brands, b: Brands): number => a.en.localeCompare(b.en));

// 重複削除
const unique = new Map<string, Brands>();
brandlist.forEach((brand: Brands): void => {
  unique.set(brand.en.toLowerCase(), brand);
});

const uniqueBrandlist: Brands[] = Array.from(unique.values());
// for(let i = 0; i < uniqueBrandlist.length; i++) {
//   if(uniqueBrandlist[i].url === undefined) {
//     uniqueBrandlist[i].url = '';
//       console.log(uniqueBrandlist[i].id, uniqueBrandlist[i].ja, uniqueBrandlist[i].url);
//   }
// }
export default uniqueBrandlist;
