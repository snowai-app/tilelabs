import { COMPANY } from './company.ts';

/** The company's privacy policy and terms in four languages (operator, 26 October 2026, T-3820). English governs; the others are translated to the best of our ability, written by Claude and not yet read by a native speaker. A correction is one line here.
    A paragraph may hold {legal} {trading} {place} {uen} {line} (filled from lib/company.ts and the language's own words) and the link slots {mail} {privacy} {snowPrivacy} {snowTerms}, which the page draws as links. */

export const LANGS = ['en', 'es', 'hi', 'zh'] as const;
export type Lang = (typeof LANGS)[number];
export const isLang = (s: string): s is Lang => (LANGS as readonly string[]).includes(s);
/** The switch's labels: the family's EN | ES | HI, and the language's own name for Chinese. */
export const SHORT: Record<Lang, string> = { en: 'EN', es: 'ES', hi: 'HI', zh: '中文' };
export const NAME: Record<Lang, string> = { en: 'English', es: 'Español', hi: 'हिन्दी', zh: '中文' };
export const OTHER = ['es', 'hi', 'zh'] as const;

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
};

/** The address of a legal page in a language: English has no prefix, the others do (/es/privacy). */
export const legalPath = (lang: Lang, doc: 'privacy' | 'terms') => (lang === 'en' ? `/${doc}` : `/${lang}/${doc}`);

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
export const alternates = (doc: 'privacy' | 'terms') => ({
  languages: Object.fromEntries(LANGS.map((l) => [l === 'zh' ? 'zh-Hans' : l, legalPath(l, doc)])),
});
