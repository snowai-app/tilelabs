import { COMPANY } from './company.ts';

/** The company's privacy policy and terms in seven languages (operator, 26 October 2026, T-3820; Japanese, Korean and Portuguese added 27 October 2026, T-3829; Arabic, T-3832). English governs; the others are translated to the best of our ability, written by Claude and not yet read by a native speaker. A correction is one line here.
    A paragraph may hold {legal} {trading} {place} {uen} {line} (filled from lib/company.ts and the language's own words) and the link slots {mail} {privacy} {snowPrivacy} {snowTerms}, which the page draws as links. */

export const LANGS = ['en', 'es', 'hi', 'zh', 'ja', 'ko', 'pt', 'ar'] as const;
export type Lang = (typeof LANGS)[number];
export const isLang = (s: string): s is Lang => (LANGS as readonly string[]).includes(s);
/** The menu's two columns (operator, 27 October 2026, T-3831: "when you write HI, I don't know; if I see Hindi, I'll know"). NAME, on the left, is in letters the reader can recognise: the language's own name when that is in Latin letters, else its English name. SHORT, on the right and on the bar's button, is the language in its own script, or its code when the name is already Latin. */
export const SHORT: Record<Lang, string> = { en: 'EN', es: 'ES', hi: 'हिन्दी', zh: '中文', ja: '日本語', ko: '한국어', pt: 'PT', ar: 'العربية' };
export const NAME: Record<Lang, string> = { en: 'English', es: 'Español', hi: 'Hindi', zh: 'Chinese', ja: 'Japanese', ko: 'Korean', pt: 'Português', ar: 'Arabic' };
export const OTHER = ['es', 'hi', 'zh', 'ja', 'ko', 'pt', 'ar'] as const;
/** Arabic reads right to left (T-3832). */
export const dirOf = (l: Lang) => (l === 'ar' ? 'rtl' : 'ltr');
/** The html lang and hreflang code of a language (Chinese is Simplified). */
export const htmlLang = (l: Lang) => (l === 'zh' ? 'zh-Hans' : l);

export type Block = { h?: string; p: string };
export type Frame = {
  htmlLang: string;
  privacyTitle: string; termsTitle: string;
  privacyDesc: string; termsDesc: string;
  updated: string; last: string; draft: string; back: string; homeAria: string;
  companyNo: string; place: string; line: string;
  switchLabel: string; note: string;
  privacyLink: string; termsLink: string; hipaa: string; cookies: string; cookiesBody: string; close: string;
};

const L = COMPANY.legal;
const T = COMPANY.trading;

export const FRAME: Record<Lang, Frame> = {
  en: {
    htmlLang: 'en',
    privacyTitle: 'Privacy policy', termsTitle: 'Terms',
    privacyDesc: `How ${L} handles personal information as a company.`, termsDesc: `The terms for this website, from ${L}.`,
    updated: '26 October 2026', last: 'Last updated {date}.', draft: 'Draft: not yet reviewed by a lawyer.', back: 'Back to Tile Labs', homeAria: 'Tile Labs, home',
    companyNo: 'UEN', place: 'Singapore', line: `${L} DBA ${T}`,
    switchLabel: 'Language', note: '',
    privacyLink: 'Privacy', termsLink: 'Terms', hipaa: 'HIPAA compliant', cookies: 'Cookie choices',
    cookiesBody: 'This page sets no cookies and has no analytics, so there is nothing to choose. If that changes, the choice will be here first.', close: 'Close',
  },
  es: {
    htmlLang: 'es',
    privacyTitle: 'Política de privacidad', termsTitle: 'Términos',
    privacyDesc: `Cómo ${L} trata los datos personales como empresa.`, termsDesc: `Los términos de este sitio web, de ${L}.`,
    updated: '26 de octubre de 2026', last: 'Última actualización: {date}.', draft: 'Borrador: aún no revisado por un abogado.', back: 'Volver a Tile Labs', homeAria: 'Tile Labs, inicio',
    companyNo: 'UEN', place: 'Singapur', line: `${L}, que opera como ${T}`,
    switchLabel: 'Idioma', note: 'Traducido de la mejor manera posible. La versión en inglés es la que rige y esta traducción no tiene efecto legal.',
    privacyLink: 'Privacidad', termsLink: 'Términos', hipaa: 'Cumple con HIPAA', cookies: 'Opciones de cookies',
    cookiesBody: 'Esta página no instala cookies y no tiene analítica, así que no hay nada que elegir. Si eso cambia, la opción estará aquí primero.', close: 'Cerrar',
  },
  hi: {
    htmlLang: 'hi',
    privacyTitle: 'गोपनीयता नीति', termsTitle: 'शर्तें',
    privacyDesc: `${L} एक कंपनी के रूप में व्यक्तिगत जानकारी को कैसे संभालती है।`, termsDesc: `${L} की ओर से इस वेबसाइट की शर्तें।`,
    updated: '26 अक्टूबर 2026', last: 'अंतिम अद्यतन: {date}।', draft: 'मसौदा: अभी किसी वकील ने नहीं देखा है।', back: 'Tile Labs पर वापस जाएँ', homeAria: 'Tile Labs, मुखपृष्ठ',
    companyNo: 'UEN', place: 'सिंगापुर', line: `${L}, जो ${T} के नाम से कारोबार करती है`,
    switchLabel: 'भाषा', note: 'यह अनुवाद हमारी पूरी कोशिश से किया गया है। अंग्रेज़ी संस्करण ही मान्य है और इस अनुवाद का कोई कानूनी प्रभाव नहीं है।',
    privacyLink: 'गोपनीयता', termsLink: 'शर्तें', hipaa: 'HIPAA के अनुरूप', cookies: 'कुकी विकल्प',
    cookiesBody: 'यह पृष्ठ कोई कुकी नहीं लगाता और इसमें कोई एनालिटिक्स नहीं है, इसलिए चुनने के लिए कुछ नहीं है। यदि यह बदलता है, तो विकल्प सबसे पहले यहीं होगा।', close: 'बंद करें',
  },
  zh: {
    htmlLang: 'zh-Hans',
    privacyTitle: '隐私政策', termsTitle: '条款',
    privacyDesc: `${L} 作为公司如何处理个人信息。`, termsDesc: `${L} 提供的本网站条款。`,
    updated: '2026年10月26日', last: '最后更新：{date}。', draft: '草稿：尚未经律师审阅。', back: '返回 Tile Labs', homeAria: 'Tile Labs，首页',
    companyNo: '公司编号（UEN）', place: '新加坡', line: `${L} 以 ${T} 名义经营`,
    switchLabel: '语言', note: '本译文尽力而为。以英文版本为准，本译文不具有法律效力。',
    privacyLink: '隐私', termsLink: '条款', hipaa: '符合 HIPAA', cookies: 'Cookie 选项',
    cookiesBody: '本页不设置 Cookie，也没有分析工具，因此没有需要选择的内容。如果这一点改变，选项会最先出现在这里。', close: '关闭',
  },
  ja: {
    htmlLang: 'ja',
    privacyTitle: 'プライバシーポリシー', termsTitle: '利用規約',
    privacyDesc: `${L} が会社として個人情報をどのように扱うか。`, termsDesc: `${L} による本ウェブサイトの利用規約。`,
    updated: '2026年10月26日', last: '最終更新：{date}。', draft: '草案：まだ弁護士の確認を受けていません。', back: 'Tile Labs に戻る', homeAria: 'Tile Labs、ホーム',
    companyNo: '会社番号（UEN）', place: 'シンガポール', line: `${L}（${T} として事業を行う）`,
    switchLabel: '言語', note: 'この翻訳は最善を尽くしたものです。英語版が正式なものであり、この翻訳に法的効力はありません。',
    privacyLink: 'プライバシー', termsLink: '利用規約', hipaa: 'HIPAA 準拠', cookies: 'Cookie の選択',
    cookiesBody: 'このページは Cookie を設定せず、アナリティクスもないため、選択するものはありません。それが変わる場合は、まずここに選択肢が表示されます。', close: '閉じる',
  },
  ko: {
    htmlLang: 'ko',
    privacyTitle: '개인정보 처리방침', termsTitle: '이용약관',
    privacyDesc: `${L}이(가) 회사로서 개인정보를 처리하는 방식.`, termsDesc: `${L}이(가) 정한 이 웹사이트의 이용약관.`,
    updated: '2026년 10월 26일', last: '최종 수정: {date}.', draft: '초안: 아직 변호사의 검토를 받지 않았습니다.', back: 'Tile Labs로 돌아가기', homeAria: 'Tile Labs, 홈',
    companyNo: '회사 번호(UEN)', place: '싱가포르', line: `${L}, ${T}(으)로 영업`,
    switchLabel: '언어', note: '이 번역은 최선을 다해 작성되었습니다. 영어판이 우선하며 이 번역은 법적 효력이 없습니다.',
    privacyLink: '개인정보', termsLink: '약관', hipaa: 'HIPAA 준수', cookies: '쿠키 선택',
    cookiesBody: '이 페이지는 쿠키를 설정하지 않고 분석 도구도 없으므로 선택할 것이 없습니다. 이것이 바뀌면 선택지가 가장 먼저 여기에 표시됩니다.', close: '닫기',
  },
  pt: {
    htmlLang: 'pt',
    privacyTitle: 'Política de privacidade', termsTitle: 'Termos',
    privacyDesc: `Como a ${L} trata informações pessoais como empresa.`, termsDesc: `Os termos deste site, da ${L}.`,
    updated: '26 de outubro de 2026', last: 'Última atualização: {date}.', draft: 'Rascunho: ainda não revisado por um advogado.', back: 'Voltar para a Tile Labs', homeAria: 'Tile Labs, início',
    companyNo: 'UEN', place: 'Singapura', line: `${L}, que opera como ${T}`,
    switchLabel: 'Idioma', note: 'Traduzido da melhor forma possível. A versão em inglês é a que vale, e esta tradução não tem efeito legal.',
    privacyLink: 'Privacidade', termsLink: 'Termos', hipaa: 'Em conformidade com a HIPAA', cookies: 'Opções de cookies',
    cookiesBody: 'Esta página não define cookies e não tem análises, então não há nada a escolher. Se isso mudar, a escolha estará aqui primeiro.', close: 'Fechar',
  },
  ar: {
    htmlLang: 'ar',
    privacyTitle: 'سياسة الخصوصية', termsTitle: 'الشروط',
    privacyDesc: `كيف تتعامل ${L} مع المعلومات الشخصية بصفتها شركة.`, termsDesc: `شروط هذا الموقع، من ${L}.`,
    updated: '26 أكتوبر 2026', last: 'آخر تحديث: {date}.', draft: 'مسودة: لم يراجعها محامٍ بعد.', back: 'العودة إلى Tile Labs', homeAria: 'Tile Labs، الصفحة الرئيسية',
    companyNo: 'رقم الشركة (UEN)', place: 'سنغافورة', line: `${L}، وتعمل باسم ${T}`,
    switchLabel: 'اللغة', note: 'تُرجم هذا بأفضل ما نستطيع. النسخة الإنجليزية هي المعتمدة، وليس لهذه الترجمة أثر قانوني.',
    privacyLink: 'الخصوصية', termsLink: 'الشروط', hipaa: 'متوافق مع HIPAA', cookies: 'خيارات ملفات تعريف الارتباط',
    cookiesBody: 'لا تضع هذه الصفحة أي ملفات تعريف ارتباط ولا تحتوي على أدوات تحليل، لذا لا يوجد ما تختاره. إن تغيّر ذلك، فسيظهر الخيار هنا أولًا.', close: 'إغلاق',
  },
};

export const PRIVACY: Record<Lang, Block[]> = {
  en: [
    { p: '{legal}, doing business as {trading}, is a software company in {place}. This page says what we do with personal information as a company: when you visit this site, when you write to us, and when we build or run software for a client.' },
    { h: 'Who we are', p: '{line} (company number {uen}, {place}). We make software products, white-label versions that wear a client’s brand, and custom software built to a client’s specification.' },
    { h: 'This website', p: 'This site sets no cookies, has no analytics and loads no outside scripts or fonts. It collects nothing about you. The form under “Talk to us” opens your own email app with what you typed; nothing is sent from the page itself.' },
    { h: 'If you write to us', p: 'When you email us we receive your email address and what you wrote. We use them to answer you, and keep the conversation for as long as we need it to do that. Our address is {mail}.' },
    { h: 'Our products', p: 'The products we sell under the Snow AI name are owned and run by {legal}. What those apps collect, and why, is in their own privacy policy at {snowPrivacy}. A product sold under another name has its own notice.' },
    { h: 'Software we build for clients', p: 'A client decides what its own app holds and why. We handle that information only to build and run the software for the client, under our agreement with them. The privacy notice a client’s users read is the client’s. If you use a client’s app and have a question about your information, ask the client first; if you write to us, we will pass it on to them.' },
    { h: 'Your choices', p: 'You can ask us what we hold about you, to correct it, or to delete it. Write to {mail}.' },
    { h: 'Changes', p: 'If this policy changes, the date at the top changes with it.' },
  ],
  es: [
    { p: '{legal}, que opera como {trading}, es una empresa de software en {place}. Esta página explica qué hacemos con los datos personales como empresa: cuando visita este sitio, cuando nos escribe y cuando creamos o gestionamos software para un cliente.' },
    { h: 'Quiénes somos', p: '{line} (número de empresa {uen}, {place}). Creamos productos de software, versiones de marca blanca que llevan la marca del cliente y software a medida según las especificaciones del cliente.' },
    { h: 'Este sitio web', p: 'Este sitio no instala cookies, no tiene analítica y no carga scripts ni fuentes externos. No recopila nada sobre usted. El formulario de «Hable con nosotros» abre su propia aplicación de correo con lo que escribió; la página en sí no envía nada.' },
    { h: 'Si nos escribe', p: 'Cuando nos envía un correo recibimos su dirección de correo y lo que escribió. Los usamos para responderle y conservamos la conversación el tiempo que necesitemos para ello. Nuestra dirección es {mail}.' },
    { h: 'Nuestros productos', p: 'Los productos que vendemos con el nombre Snow AI son propiedad de {legal} y los gestiona esta empresa. Lo que esas aplicaciones recopilan y por qué figura en su propia política de privacidad en {snowPrivacy}. Un producto vendido con otro nombre tiene su propio aviso.' },
    { h: 'Software que creamos para clientes', p: 'Cada cliente decide qué guarda su propia aplicación y por qué. Tratamos esa información solo para crear y gestionar el software para el cliente, conforme a nuestro acuerdo con él. El aviso de privacidad que leen los usuarios de un cliente es el del cliente. Si usa la aplicación de un cliente y tiene una pregunta sobre su información, pregúntele primero al cliente; si nos escribe a nosotros, se la haremos llegar.' },
    { h: 'Sus opciones', p: 'Puede pedirnos que le digamos qué datos suyos tenemos, que los corrijamos o que los eliminemos. Escriba a {mail}.' },
    { h: 'Cambios', p: 'Si esta política cambia, cambia con ella la fecha de la parte superior.' },
  ],
  hi: [
    { p: '{legal}, जो {trading} के नाम से कारोबार करती है, {place} में स्थित एक सॉफ़्टवेयर कंपनी है। यह पृष्ठ बताता है कि एक कंपनी के रूप में हम व्यक्तिगत जानकारी के साथ क्या करते हैं: जब आप इस साइट पर आते हैं, जब आप हमें लिखते हैं, और जब हम किसी ग्राहक के लिए सॉफ़्टवेयर बनाते या चलाते हैं।' },
    { h: 'हम कौन हैं', p: '{line} (कंपनी संख्या {uen}, {place})। हम सॉफ़्टवेयर उत्पाद बनाते हैं, व्हाइट-लेबल संस्करण जो ग्राहक का ब्रांड पहनते हैं, और ग्राहक की विशिष्टताओं के अनुसार कस्टम सॉफ़्टवेयर।' },
    { h: 'यह वेबसाइट', p: 'यह साइट कोई कुकी नहीं लगाती, इसमें कोई एनालिटिक्स नहीं है और यह बाहरी स्क्रिप्ट या फ़ॉन्ट लोड नहीं करती। यह आपके बारे में कुछ भी एकत्र नहीं करती। “हमसे बात करें” के अंतर्गत दिया गया फ़ॉर्म आपका अपना ईमेल ऐप खोलता है और उसमें वही रखता है जो आपने टाइप किया; पृष्ठ स्वयं कुछ नहीं भेजता।' },
    { h: 'यदि आप हमें लिखते हैं', p: 'जब आप हमें ईमेल करते हैं तो हमें आपका ईमेल पता और आपका लिखा हुआ संदेश मिलता है। हम उनका उपयोग आपको उत्तर देने के लिए करते हैं, और बातचीत को उतने समय तक रखते हैं जितनी उस काम के लिए ज़रूरत हो। हमारा पता {mail} है।' },
    { h: 'हमारे उत्पाद', p: 'Snow AI नाम से बेचे जाने वाले उत्पादों का स्वामित्व और संचालन {legal} के पास है। वे ऐप क्या एकत्र करते हैं और क्यों, यह उनकी अपनी गोपनीयता नीति में {snowPrivacy} पर है। किसी अन्य नाम से बेचे गए उत्पाद की अपनी सूचना होती है।' },
    { h: 'ग्राहकों के लिए हमारा बनाया सॉफ़्टवेयर', p: 'ग्राहक का अपना ऐप क्या रखता है और क्यों, यह ग्राहक तय करता है। हम वह जानकारी केवल ग्राहक के लिए सॉफ़्टवेयर बनाने और चलाने के लिए, उसके साथ हमारे अनुबंध के तहत संभालते हैं। ग्राहक के उपयोगकर्ता जो गोपनीयता सूचना पढ़ते हैं, वह ग्राहक की होती है। यदि आप किसी ग्राहक का ऐप इस्तेमाल करते हैं और अपनी जानकारी के बारे में आपका कोई प्रश्न है, तो पहले ग्राहक से पूछें; यदि आप हमें लिखते हैं, तो हम उसे ग्राहक तक पहुँचा देंगे।' },
    { h: 'आपके विकल्प', p: 'आप हमसे पूछ सकते हैं कि हमारे पास आपके बारे में क्या है, उसे सुधारने या हटाने के लिए कह सकते हैं। {mail} पर लिखें।' },
    { h: 'बदलाव', p: 'यदि यह नीति बदलती है, तो ऊपर की तारीख भी बदल जाएगी।' },
  ],
  zh: [
    { p: '{legal}（以 {trading} 名义经营）是一家位于{place}的软件公司。本页说明我们作为一家公司如何处理个人信息：当您访问本网站、给我们写信，以及我们为客户开发或运营软件时。' },
    { h: '我们是谁', p: '{line}（公司编号 {uen}，{place}）。我们制作软件产品、贴上客户品牌的白标版本，以及按客户要求定制的软件。' },
    { h: '本网站', p: '本网站不设置 Cookie，没有分析工具，也不加载外部脚本或字体。我们不收集任何关于您的信息。“联系我们”下的表单会用您自己的邮件应用打开您输入的内容；页面本身不会发送任何东西。' },
    { h: '如果您给我们写信', p: '您给我们发送电子邮件时，我们会收到您的电子邮件地址和您所写的内容。我们用它们来回复您，并在回复所需的时间内保留这段往来。我们的地址是 {mail}。' },
    { h: '我们的产品', p: '以 Snow AI 名称销售的产品由 {legal} 拥有并运营。这些应用收集什么以及为什么收集，请见其自己的隐私政策：{snowPrivacy}。以其他名称销售的产品有各自的声明。' },
    { h: '我们为客户开发的软件', p: '客户自己的应用保存什么、为什么保存，由客户决定。我们仅为替客户开发和运行软件，并根据与客户的协议处理这些信息。客户的用户所阅读的隐私声明属于客户。如果您使用客户的应用并对您的信息有疑问，请先询问该客户；如果您写信给我们，我们会转交给客户。' },
    { h: '您的选择', p: '您可以要求我们告知持有您的哪些信息，也可以要求更正或删除。请写信至 {mail}。' },
    { h: '变更', p: '如果本政策有变更，顶部的日期也会随之更新。' },
  ],
  ja: [
    { p: '{trading} として事業を行う {legal} は、{place} のソフトウェア会社です。このページは、当社が会社として個人情報をどう扱うかを説明します。本サイトを訪れたとき、当社に連絡したとき、そしてクライアントのためにソフトウェアを構築・運用するときです。' },
    { h: '当社について', p: '{line}（会社番号 {uen}、{place}）。当社はソフトウェア製品、クライアントのブランドをまとったホワイトラベル版、クライアントの仕様に合わせたカスタムソフトウェアを作ります。' },
    { h: '本ウェブサイト', p: '本サイトは Cookie を設定せず、アナリティクスもなく、外部のスクリプトやフォントを読み込みません。あなたについて何も収集しません。「お問い合わせ」のフォームは、入力内容を載せてあなた自身のメールアプリを開きます。ページ自体からは何も送信されません。' },
    { h: '当社に連絡した場合', p: 'メールをいただくと、当社はあなたのメールアドレスと本文を受け取ります。これらは返信のために使い、そのために必要な期間だけやり取りを保管します。当社のアドレスは {mail} です。' },
    { h: '当社の製品', p: 'Snow AI の名前で販売する製品は {legal} が所有・運用しています。それらのアプリが何を、なぜ収集するかは、{snowPrivacy} の独自のプライバシーポリシーに記載しています。別の名前で販売される製品には、それぞれの通知があります。' },
    { h: 'クライアントのために構築するソフトウェア', p: 'クライアントは、自社のアプリが何を、なぜ保持するかを決めます。当社はその情報を、クライアントとの契約のもと、クライアントのためにソフトウェアを構築・運用する目的にのみ扱います。クライアントのアプリの利用者が読むプライバシー通知は、クライアントのものです。クライアントのアプリを利用していて自分の情報について質問がある場合は、まずクライアントにお尋ねください。当社に連絡があれば、クライアントに取り次ぎます。' },
    { h: 'あなたの選択', p: '当社があなたについて何を保持しているかの確認、訂正、削除を求めることができます。{mail} までご連絡ください。' },
    { h: '変更', p: 'このポリシーが変わる場合、冒頭の日付も変わります。' },
  ],
  ko: [
    { p: '{trading}(으)로 영업하는 {legal}은(는) {place}의 소프트웨어 회사입니다. 이 페이지는 회사로서 저희가 개인정보를 어떻게 다루는지 설명합니다. 이 사이트를 방문할 때, 저희에게 연락할 때, 그리고 고객사를 위해 소프트웨어를 만들거나 운영할 때입니다.' },
    { h: '저희는 누구인가', p: '{line}(회사 번호 {uen}, {place}). 저희는 소프트웨어 제품, 고객사의 브랜드를 입힌 화이트 라벨 버전, 고객사의 사양에 맞춘 맞춤 소프트웨어를 만듭니다.' },
    { h: '이 웹사이트', p: '이 사이트는 쿠키를 설정하지 않고, 분석 도구가 없으며, 외부 스크립트나 글꼴을 불러오지 않습니다. 당신에 대해 아무것도 수집하지 않습니다. "문의하기"의 양식은 입력한 내용을 담아 당신의 메일 앱을 엽니다. 페이지 자체에서는 아무것도 전송되지 않습니다.' },
    { h: '저희에게 연락하는 경우', p: '이메일을 보내주시면 저희는 이메일 주소와 쓰신 내용을 받습니다. 답장을 드리는 데 사용하며, 그에 필요한 기간 동안 대화를 보관합니다. 저희 주소는 {mail}입니다.' },
    { h: '저희 제품', p: 'Snow AI라는 이름으로 판매하는 제품은 {legal}이(가) 소유하고 운영합니다. 그 앱들이 무엇을, 왜 수집하는지는 {snowPrivacy}의 자체 개인정보 처리방침에 있습니다. 다른 이름으로 판매되는 제품은 각자의 고지가 있습니다.' },
    { h: '고객사를 위해 만드는 소프트웨어', p: '고객사는 자신의 앱이 무엇을, 왜 보관할지 결정합니다. 저희는 고객사와의 계약에 따라 고객사를 위해 소프트웨어를 만들고 운영하는 목적으로만 그 정보를 다룹니다. 고객사 앱의 사용자가 읽는 개인정보 고지는 고객사의 것입니다. 고객사의 앱을 쓰면서 자신의 정보에 대해 질문이 있다면 먼저 고객사에 문의하세요. 저희에게 연락하시면 고객사에 전달하겠습니다.' },
    { h: '당신의 선택', p: '저희가 당신에 대해 무엇을 보관하는지 묻고, 정정하거나 삭제해 달라고 요청할 수 있습니다. {mail}(으)로 연락하세요.' },
    { h: '변경', p: '이 방침이 바뀌면 맨 위의 날짜도 함께 바뀝니다.' },
  ],
  pt: [
    { p: 'A {legal}, que opera como {trading}, é uma empresa de software em {place}. Esta página diz o que fazemos com informações pessoais como empresa: quando você visita este site, quando escreve para nós e quando construímos ou operamos software para um cliente.' },
    { h: 'Quem somos', p: '{line} (número da empresa {uen}, {place}). Fazemos produtos de software, versões white label com a marca de um cliente e software personalizado feito conforme a especificação de um cliente.' },
    { h: 'Este site', p: 'Este site não define cookies, não tem análises e não carrega scripts ou fontes externos. Não coleta nada sobre você. O formulário em "Fale conosco" abre o seu próprio aplicativo de e-mail com o que você digitou; nada é enviado da página em si.' },
    { h: 'Se você escrever para nós', p: 'Quando você nos envia um e-mail, recebemos o seu endereço de e-mail e o que escreveu. Usamos isso para responder, e guardamos a conversa pelo tempo necessário para isso. Nosso endereço é {mail}.' },
    { h: 'Nossos produtos', p: 'Os produtos que vendemos sob o nome Snow AI pertencem à {legal} e são operados por ela. O que esses aplicativos coletam, e por quê, está na política de privacidade deles em {snowPrivacy}. Um produto vendido sob outro nome tem o seu próprio aviso.' },
    { h: 'Software que construímos para clientes', p: 'Um cliente decide o que o seu próprio aplicativo guarda e por quê. Tratamos essas informações apenas para construir e operar o software para o cliente, sob o nosso contrato com ele. O aviso de privacidade que os usuários de um cliente leem é do cliente. Se você usa o aplicativo de um cliente e tem uma dúvida sobre as suas informações, pergunte primeiro ao cliente; se escrever para nós, encaminharemos a ele.' },
    { h: 'Suas escolhas', p: 'Você pode nos perguntar o que guardamos sobre você, pedir para corrigir ou para excluir. Escreva para {mail}.' },
    { h: 'Alterações', p: 'Se esta política mudar, a data no topo muda com ela.' },
  ],
  ar: [
    { p: '{legal}، التي تعمل باسم {trading}، شركة برمجيات في {place}. توضح هذه الصفحة ما نفعله بالمعلومات الشخصية بصفتنا شركة: عندما تزور هذا الموقع، وعندما تراسلنا، وعندما نبني برمجيات لعميل أو نشغّلها له.' },
    { h: 'من نحن', p: '{line} (رقم الشركة {uen}، {place}). نصنع منتجات برمجية، ونسخًا بعلامة بيضاء تحمل علامة العميل التجارية، وبرمجيات مخصصة تُبنى وفق مواصفات العميل.' },
    { h: 'هذا الموقع', p: 'لا يضع هذا الموقع ملفات تعريف ارتباط، ولا يحتوي على أدوات تحليل، ولا يحمّل نصوصًا برمجية أو خطوطًا من الخارج. لا يجمع عنك شيئًا. النموذج في قسم «تحدّث إلينا» يفتح تطبيق البريد لديك بما كتبته، ولا يُرسل شيء من الصفحة نفسها.' },
    { h: 'إذا راسلتنا', p: 'عندما ترسل إلينا بريدًا إلكترونيًا نتلقى عنوان بريدك وما كتبته. نستخدمهما للرد عليك، ونحتفظ بالمحادثة طالما احتجنا إليها لذلك. عنواننا هو {mail}.' },
    { h: 'منتجاتنا', p: 'المنتجات التي نبيعها باسم Snow AI تملكها {legal} وتشغّلها. ما تجمعه تلك التطبيقات، ولماذا، موجود في سياسة الخصوصية الخاصة بها على {snowPrivacy}. والمنتج الذي يُباع باسم آخر له إشعاره الخاص.' },
    { h: 'البرمجيات التي نبنيها للعملاء', p: 'يقرر العميل ما يحتفظ به تطبيقه ولماذا. نتعامل مع تلك المعلومات فقط لبناء البرمجيات وتشغيلها للعميل، بموجب اتفاقنا معه. وإشعار الخصوصية الذي يقرؤه مستخدمو العميل هو إشعار العميل. إن كنت تستخدم تطبيق عميل ولديك سؤال عن معلوماتك، فاسأل العميل أولًا، وإن راسلتنا فسننقل سؤالك إليه.' },
    { h: 'خياراتك', p: 'يمكنك أن تسألنا عمّا نحتفظ به عنك، أو أن تطلب تصحيحه أو حذفه. راسلنا على {mail}.' },
    { h: 'التغييرات', p: 'إذا تغيرت هذه السياسة، يتغير التاريخ في أعلاها معها.' },
  ],
};

export const TERMS: Record<Lang, Block[]> = {
  en: [
    { p: 'These terms cover this website, tilelabs.si. It belongs to {line} (company number {uen}, {place}). Using the site means agreeing to them.' },
    { h: 'This website', p: 'The site tells you what we make and how to reach us. It is information, not an offer, and it is provided as it is. The examples on it are drawn with invented names and are examples only.' },
    { h: 'Our products', p: 'Each product has its own terms, which apply when you use it. The terms for the Snow AI family of apps are at {snowTerms}.' },
    { h: 'Work for clients', p: 'White-label versions and custom software are made under a written agreement for each client. That agreement, and not this page, sets what we deliver, who owns it and what it costs.' },
    { h: 'Using the site', p: 'Please do not misuse the site or try to break or overload it. The page’s text, drawings and code are ours unless they say otherwise.' },
    { h: 'Contact', p: 'Questions about these terms: {mail}. Our privacy policy is at {privacy}.' },
  ],
  es: [
    { p: 'Estos términos cubren este sitio web, tilelabs.si. Pertenece a {line} (número de empresa {uen}, {place}). Usar el sitio implica aceptarlos.' },
    { h: 'Este sitio web', p: 'El sitio explica lo que hacemos y cómo contactarnos. Es información, no una oferta, y se ofrece tal como está. Los ejemplos que contiene se dibujan con nombres inventados y son solo ejemplos.' },
    { h: 'Nuestros productos', p: 'Cada producto tiene sus propios términos, que se aplican cuando lo usa. Los términos de la familia de aplicaciones Snow AI están en {snowTerms}.' },
    { h: 'Trabajo para clientes', p: 'Las versiones de marca blanca y el software a medida se hacen con un acuerdo escrito para cada cliente. Ese acuerdo, y no esta página, establece qué entregamos, de quién es y cuánto cuesta.' },
    { h: 'Uso del sitio', p: 'Por favor, no haga un uso indebido del sitio ni intente dañarlo o sobrecargarlo. Los textos, dibujos y el código de la página son nuestros, salvo que indiquen lo contrario.' },
    { h: 'Contacto', p: 'Preguntas sobre estos términos: {mail}. Nuestra política de privacidad está en {privacy}.' },
  ],
  hi: [
    { p: 'ये शर्तें इस वेबसाइट, tilelabs.si, पर लागू होती हैं। यह {line} (कंपनी संख्या {uen}, {place}) की है। साइट का उपयोग करने का अर्थ है इनसे सहमत होना।' },
    { h: 'यह वेबसाइट', p: 'साइट यह बताती है कि हम क्या बनाते हैं और हमसे कैसे संपर्क करें। यह जानकारी है, कोई प्रस्ताव नहीं, और जैसी है वैसी ही दी जाती है। इसमें दिए गए उदाहरण काल्पनिक नामों से बनाए गए हैं और केवल उदाहरण हैं।' },
    { h: 'हमारे उत्पाद', p: 'हर उत्पाद की अपनी शर्तें हैं, जो उसका उपयोग करते समय लागू होती हैं। Snow AI ऐप परिवार की शर्तें {snowTerms} पर हैं।' },
    { h: 'ग्राहकों के लिए काम', p: 'व्हाइट-लेबल संस्करण और कस्टम सॉफ़्टवेयर हर ग्राहक के लिए लिखित अनुबंध के तहत बनाए जाते हैं। हम क्या देंगे, उसका स्वामित्व किसके पास होगा और उसकी कीमत क्या होगी, यह वही अनुबंध तय करता है, यह पृष्ठ नहीं।' },
    { h: 'साइट का उपयोग', p: 'कृपया साइट का दुरुपयोग न करें और इसे तोड़ने या इस पर अत्यधिक भार डालने की कोशिश न करें। पृष्ठ के पाठ, चित्र और कोड हमारे हैं, जब तक उन पर कुछ और न लिखा हो।' },
    { h: 'संपर्क', p: 'इन शर्तों के बारे में प्रश्न: {mail}। हमारी गोपनीयता नीति {privacy} पर है।' },
  ],
  zh: [
    { p: '本条款适用于本网站 tilelabs.si。本网站属于 {line}（公司编号 {uen}，{place}）。使用本网站即表示您同意这些条款。' },
    { h: '本网站', p: '本网站介绍我们制作什么以及如何联系我们。内容仅为信息，不构成要约，并按现状提供。网站上的示例使用虚构名称绘制，仅作示例。' },
    { h: '我们的产品', p: '每个产品都有自己的条款，在您使用该产品时适用。Snow AI 应用系列的条款见 {snowTerms}。' },
    { h: '为客户做的工作', p: '白标版本和定制软件按每位客户的书面协议制作。我们交付什么、归谁所有以及费用多少，由该协议而不是本页决定。' },
    { h: '使用本网站', p: '请勿滥用本网站，也不要试图破坏或使其过载。除非另有说明，页面的文字、图示和代码归我们所有。' },
    { h: '联系', p: '关于这些条款的问题：{mail}。我们的隐私政策见 {privacy}。' },
  ],
  ja: [
    { p: '本規約は、本ウェブサイト tilelabs.si に適用されます。本サイトは {line}（会社番号 {uen}、{place}）に帰属します。本サイトの利用は、本規約への同意を意味します。' },
    { h: '本ウェブサイト', p: '本サイトは、当社が何を作り、どう連絡できるかをお伝えするものです。情報であって申し出ではなく、現状のまま提供されます。掲載されている例は架空の名前で描かれたもので、あくまで例です。' },
    { h: '当社の製品', p: '各製品には独自の規約があり、その製品を利用する際に適用されます。Snow AI ファミリーのアプリの規約は {snowTerms} にあります。' },
    { h: 'クライアント向けの業務', p: 'ホワイトラベル版とカスタムソフトウェアは、クライアントごとの書面による契約のもとで作られます。当社が何を納め、誰がそれを所有し、費用がいくらかを定めるのは、このページではなくその契約です。' },
    { h: '本サイトの利用', p: '本サイトを悪用したり、壊したり、過負荷をかけたりしないでください。ページの文章、図、コードは、別段の記載がない限り当社のものです。' },
    { h: '連絡先', p: '本規約に関するご質問は {mail} まで。当社のプライバシーポリシーは {privacy} にあります。' },
  ],
  ko: [
    { p: '이 약관은 이 웹사이트 tilelabs.si에 적용됩니다. 이 사이트는 {line}(회사 번호 {uen}, {place})에 속합니다. 사이트를 이용하면 약관에 동의하는 것입니다.' },
    { h: '이 웹사이트', p: '이 사이트는 저희가 무엇을 만들고 어떻게 연락할 수 있는지 알려줍니다. 정보일 뿐 제안이 아니며, 있는 그대로 제공됩니다. 여기 있는 예시는 가상의 이름으로 그린 것이며 예시일 뿐입니다.' },
    { h: '저희 제품', p: '각 제품에는 고유한 약관이 있으며, 그 제품을 사용할 때 적용됩니다. Snow AI 앱 제품군의 약관은 {snowTerms}에 있습니다.' },
    { h: '고객사를 위한 작업', p: '화이트 라벨 버전과 맞춤 소프트웨어는 고객사별 서면 계약에 따라 만들어집니다. 저희가 무엇을 납품하고, 누가 소유하며, 비용이 얼마인지는 이 페이지가 아니라 그 계약이 정합니다.' },
    { h: '사이트 이용', p: '사이트를 오용하거나 망가뜨리거나 과부하를 주려 하지 마세요. 페이지의 글, 그림, 코드는 달리 명시하지 않는 한 저희의 것입니다.' },
    { h: '연락처', p: '이 약관에 대한 질문: {mail}. 저희 개인정보 처리방침은 {privacy}에 있습니다.' },
  ],
  pt: [
    { p: 'Estes termos cobrem este site, tilelabs.si. Ele pertence à {line} (número da empresa {uen}, {place}). Usar o site significa concordar com eles.' },
    { h: 'Este site', p: 'O site diz o que fazemos e como falar conosco. É informação, não uma oferta, e é fornecido como está. Os exemplos nele são desenhados com nomes inventados e são apenas exemplos.' },
    { h: 'Nossos produtos', p: 'Cada produto tem os seus próprios termos, que se aplicam quando você o usa. Os termos da família de aplicativos Snow AI estão em {snowTerms}.' },
    { h: 'Trabalho para clientes', p: 'Versões white label e software personalizado são feitos sob um contrato escrito para cada cliente. Esse contrato, e não esta página, define o que entregamos, quem é o dono e quanto custa.' },
    { h: 'Uso do site', p: 'Por favor, não faça mau uso do site nem tente quebrá-lo ou sobrecarregá-lo. O texto, os desenhos e o código da página são nossos, salvo indicação em contrário.' },
    { h: 'Contato', p: 'Dúvidas sobre estes termos: {mail}. Nossa política de privacidade está em {privacy}.' },
  ],
  ar: [
    { p: 'تشمل هذه الشروط هذا الموقع، tilelabs.si. وهو مملوك لـ {line} (رقم الشركة {uen}، {place}). استخدام الموقع يعني الموافقة عليها.' },
    { h: 'هذا الموقع', p: 'يخبرك الموقع بما نصنعه وكيف تتواصل معنا. إنه معلومات، وليس عرضًا، ويُقدَّم كما هو. الأمثلة فيه مرسومة بأسماء مختلَقة وهي أمثلة فقط.' },
    { h: 'منتجاتنا', p: 'لكل منتج شروطه الخاصة التي تسري عند استخدامه. شروط عائلة تطبيقات Snow AI موجودة على {snowTerms}.' },
    { h: 'العمل للعملاء', p: 'تُصنع النسخ ذات العلامة البيضاء والبرمجيات المخصصة بموجب اتفاق مكتوب لكل عميل. ذلك الاتفاق، لا هذه الصفحة، هو ما يحدد ما نسلّمه ومن يملكه وكم يكلّف.' },
    { h: 'استخدام الموقع', p: 'يُرجى عدم إساءة استخدام الموقع أو محاولة تعطيله أو إثقاله. نصوص الصفحة ورسومها وشيفرتها ملك لنا ما لم يُذكر خلاف ذلك.' },
    { h: 'التواصل', p: 'للأسئلة عن هذه الشروط: {mail}. سياسة الخصوصية لدينا على {privacy}.' },
  ],
};

/** The address of a page in a language: English has no prefix, the others do (/es, /es/privacy). */
export type Doc = 'home' | 'privacy' | 'terms';
export const pathFor = (lang: Lang, doc: Doc) => (doc === 'home' ? (lang === 'en' ? '/' : `/${lang}`) : lang === 'en' ? `/${doc}` : `/${lang}/${doc}`);
export const legalPath = (lang: Lang, doc: 'privacy' | 'terms') => pathFor(lang, doc);

/** The slots a paragraph may use. */
export const SLOTS = ['mail', 'privacy', 'snowPrivacy', 'snowTerms'] as const;
export const FILLS = ['legal', 'trading', 'place', 'uen', 'line'] as const;

/** A paragraph with the company's words filled in, the link slots left for the page to draw. */
export function fill(p: string, lang: Lang): string {
  const f = FRAME[lang];
  const v: Record<(typeof FILLS)[number], string> = { legal: COMPANY.legal, trading: COMPANY.trading, place: f.place, uen: COMPANY.uen, line: f.line };
  return p.replace(/\{(legal|trading|place|uen|line)\}/g, (_, k: (typeof FILLS)[number]) => v[k]);
}

/** hreflang for a page: each language's own address. */
export const alternates = (doc: Doc) => ({
  languages: Object.fromEntries(LANGS.map((l) => [htmlLang(l), pathFor(l, doc)])),
});
