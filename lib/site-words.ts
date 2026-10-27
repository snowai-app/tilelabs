import type { Lang } from './legal-words.ts';
import { CAPS, type Caps } from './caps-words.ts';
import { SITE_JA, SITE_KO, SITE_PT } from './site-words-more.ts';

/** The front page's words in seven languages (operator, 26 October 2026, T-3821; Japanese, Korean and Portuguese in lib/site-words-more.ts, 27 October 2026, T-3829). English governs; every other language was written by Claude and no native speaker has read them. A correction is one line here, or in lib/product-words.src.txt for the products' drawn screens.
    The products' own names (Today, Engage, Sign…), the invented people and brands in examples, and the company's name are never translated. */

export type Site = {
  meta: { title: string; description: string };
  navAria: string;
  theme: { label: string; light: string; dark: string };
  nav: [string, string, string, string];
  hero: { eyebrow: string; h1a: string; h1b: string; lede: string; portfolio: string; talk: string; stageTag: string; pause: string; play: string; pauseAria: string; playAria: string };
  what: { label: string; h: string; intro: string; cards: [{ h: string; p: string }, { h: string; p: string }, { h: string; p: string }]; goals: [string, string, string]; brandsAria: string; spec: [string, string, string, string] };
  how: { label: string; h: string; steps: [string, string][] };
  products: { label: string; h: string; p: string; visit: string; sr: string[] };
  promises: { label: string; h: string; cards: { h: string; p: string }[]; upd: string };
  talk: { label: string; h: string; lead: string; legend: string; kinds: [string, string, string]; nameL: string; emailL: string; aboutL: string; send: string; needEmail: string; ok: string };
  caps: Caps;
  demo: { close: string; suits: string; talkAbout: string; prev: string; next: string; example: string; videoAria: string; step: string; pause: string; play: string; signHere: string; paid: string; seeDemo: string; wish: string };
};

export const SITE: Record<Lang, Site> = {
  en: {
    caps: CAPS.en,
    meta: { title: 'Tile Labs: software, cut to fit', description: 'Tile Labs makes software products, white-label versions that wear your brand, and custom software built to your specification.' },
    navAria: 'Sections',
    theme: { label: 'Light or dark', light: 'Switch to light', dark: 'Switch to dark' },
    nav: ['What we do', 'How we work', 'Products', 'Talk to us'],
    hero: { eyebrow: 'Software studio', h1a: 'Software,', h1b: 'cut to fit.', lede: 'Tile Labs makes software products, white-label versions that wear your brand, and custom software built to your specification.', portfolio: 'Portfolio', talk: 'Talk to us', stageTag: 'Press a tile to see what it does', pause: 'Pause', play: 'Play', pauseAria: 'Pause the motion', playAria: 'Play the motion' },
    what: {
      label: 'What we do', h: 'Three ways to get the software you need.', intro: 'Start with something we already run, put your own name on it, or have us build exactly what your business needs.',
      cards: [
        { h: 'Products you can start today', p: 'Ready-made apps for running a shop, reaching customers, signing documents, filing taxes and more. Sign in once and use them together.' },
        { h: 'White label, in your name', p: 'Take a product we already run and put your name, colours, address and prices on it. Your customers never see ours.' },
        { h: 'Built to your specification', p: 'Need something we do not sell? Tell us how your people work, and we build software around it, starting from what already works.' },
      ],
      goals: ['Order now', 'Book a class', 'See my plan'], brandsAria: 'Example brands',
      spec: ['Approval before anything is sent', 'English, Spanish and Hindi', 'Your own sign-in', 'Reports on one page'],
    },
    how: { label: 'How we work', h: 'From a conversation to software people use.', steps: [
      ['Listen', 'We start with how you work today: the forms, the spreadsheets and the steps nobody wrote down.'],
      ['Shape', 'You get a version you can click, in your words and with your numbers, before anything is built.'],
      ['Build', 'We build in steps you can see, and show you each one as it works.'],
      ['Launch and improve', 'Your software goes live and keeps getting better, without a new project for every update.'],
    ] },
    products: { label: 'Our products', h: 'The products have a name of their own.', p: 'Each one has its own address, and one sign-in works across all of them. This page is the company; the products are where you go to use them.', visit: 'Visit the products', sr: ['Today, for shops', 'Engage, marketing', 'Sign, signatures', 'Documents', 'Portal, for clients', 'Tax', 'CRM', 'Invoice', 'Voice, calls', 'Webinar', 'Campaigns', 'Rewards'] },
    promises: { label: 'In every product', h: 'What you get whichever one you choose.', upd: 'Up to date', cards: [
      { h: 'Private by default', p: 'Health details, IDs and bank numbers are kept sealed, and every time someone opens one, it is logged.' },
      { h: 'In your language', p: 'English, Spanish and Hindi today, with more added for every product at once.' },
      { h: 'One sign-in', p: 'Sign in once and move between products without signing in again.' },
      { h: 'Always current', p: 'Improvements reach you as soon as they are ready, with nothing to install.' },
    ] },
    talk: { label: 'Talk to us', h: 'Tell us what you need.', lead: 'A product to start with, your own brand on one of ours, or something built for you. Say which, and a few words about your business.', legend: 'What are you looking for?', kinds: ['A product', 'White label', 'Custom software'], nameL: 'Your name', emailL: 'Work email', aboutL: 'About your business', send: 'Send to Tile Labs', needEmail: 'Add a work email so we can reply.', ok: 'Your email app should open with your message ready. Nothing is sent until you send it there.' },
    demo: { close: 'Close the demo', suits: 'Suits:', talkAbout: 'Talk to us about it', prev: '← Previous product', next: 'Next product →', example: 'A drawn example with invented names, not the real product.', videoAria: '{n} demo video, 15 seconds, no sound', step: 'Step {n}', pause: 'Pause', play: 'Play', signHere: 'Sign here', paid: 'PAID', seeDemo: '{n}, {tag}. See a demo.', wish: 'I would like to see {n}.' },
  },
  es: {
    caps: CAPS.es,
    meta: { title: 'Tile Labs: software a su medida', description: 'Tile Labs crea productos de software, versiones de marca blanca que llevan su marca y software a medida según sus especificaciones.' },
    navAria: 'Secciones',
    theme: { label: 'Claro u oscuro', light: 'Cambiar a claro', dark: 'Cambiar a oscuro' },
    nav: ['Lo que hacemos', 'Cómo trabajamos', 'Productos', 'Hable con nosotros'],
    hero: { eyebrow: 'Estudio de software', h1a: 'Software,', h1b: 'a su medida.', lede: 'Tile Labs crea productos de software, versiones de marca blanca que llevan su marca y software a medida según sus especificaciones.', portfolio: 'Portafolio', talk: 'Hable con nosotros', stageTag: 'Pulse una pieza para ver qué hace', pause: 'Pausar', play: 'Reanudar', pauseAria: 'Pausar el movimiento', playAria: 'Reanudar el movimiento' },
    what: {
      label: 'Lo que hacemos', h: 'Tres maneras de conseguir el software que necesita.', intro: 'Empiece con algo que ya usamos, póngale su propio nombre o pídanos que construyamos justo lo que su negocio necesita.',
      cards: [
        { h: 'Productos para empezar hoy', p: 'Aplicaciones listas para llevar una tienda, llegar a los clientes, firmar documentos, presentar impuestos y más. Inicie sesión una vez y úselas juntas.' },
        { h: 'Marca blanca, con su nombre', p: 'Tome un producto que ya manejamos y póngale su nombre, sus colores, su dirección y sus precios. Sus clientes nunca ven los nuestros.' },
        { h: 'Hecho a su medida', p: '¿Necesita algo que no vendemos? Cuéntenos cómo trabaja su gente y construimos el software a su alrededor, partiendo de lo que ya funciona.' },
      ],
      goals: ['Pedir ahora', 'Reservar una clase', 'Ver mi plan'], brandsAria: 'Marcas de ejemplo',
      spec: ['Aprobación antes de enviar nada', 'Inglés, español e hindi', 'Su propio inicio de sesión', 'Informes en una sola página'],
    },
    how: { label: 'Cómo trabajamos', h: 'De una conversación a software que la gente usa.', steps: [
      ['Escuchar', 'Empezamos por cómo trabaja hoy: los formularios, las hojas de cálculo y los pasos que nadie escribió.'],
      ['Dar forma', 'Recibe una versión en la que puede hacer clic, con sus palabras y sus cifras, antes de construir nada.'],
      ['Construir', 'Construimos por etapas que usted puede ver, y le mostramos cada una funcionando.'],
      ['Lanzar y mejorar', 'Su software sale a producción y sigue mejorando, sin un proyecto nuevo para cada actualización.'],
    ] },
    products: { label: 'Nuestros productos', h: 'Los productos tienen nombre propio.', p: 'Cada uno tiene su propia dirección, y un solo inicio de sesión sirve para todos. Esta página es la empresa; los productos son donde se usan.', visit: 'Visitar los productos', sr: ['Today, para tiendas', 'Engage, marketing', 'Sign, firmas', 'Documents', 'Portal, para clientes', 'Tax', 'CRM', 'Invoice', 'Voice, llamadas', 'Webinar', 'Campaigns', 'Rewards'] },
    promises: { label: 'En cada producto', h: 'Lo que obtiene sea cual sea el que elija.', upd: 'Al día', cards: [
      { h: 'Privado por defecto', p: 'Los datos de salud, los documentos de identidad y los números bancarios se guardan sellados, y cada vez que alguien abre uno queda registrado.' },
      { h: 'En su idioma', p: 'Inglés, español e hindi hoy, y se añaden más para todos los productos a la vez.' },
      { h: 'Un solo inicio de sesión', p: 'Inicie sesión una vez y pase de un producto a otro sin volver a hacerlo.' },
      { h: 'Siempre actualizado', p: 'Las mejoras le llegan en cuanto están listas, sin nada que instalar.' },
    ] },
    talk: { label: 'Hable con nosotros', h: 'Cuéntenos qué necesita.', lead: 'Un producto para empezar, su propia marca en uno de los nuestros o algo hecho para usted. Díganos cuál, y unas palabras sobre su negocio.', legend: '¿Qué busca?', kinds: ['Un producto', 'Marca blanca', 'Software a medida'], nameL: 'Su nombre', emailL: 'Correo de trabajo', aboutL: 'Sobre su negocio', send: 'Enviar a Tile Labs', needEmail: 'Añada un correo de trabajo para que podamos responderle.', ok: 'Su aplicación de correo debería abrirse con el mensaje listo. No se envía nada hasta que lo envíe allí.' },
    demo: { close: 'Cerrar la demostración', suits: 'Ideal para:', talkAbout: 'Hable con nosotros sobre esto', prev: '← Producto anterior', next: 'Producto siguiente →', example: 'Un ejemplo dibujado con nombres inventados, no el producto real.', videoAria: 'Vídeo de demostración de {n}, 15 segundos, sin sonido', step: 'Paso {n}', pause: 'Pausar', play: 'Reanudar', signHere: 'Firme aquí', paid: 'PAGADA', seeDemo: '{n}, {tag}. Ver una demostración.', wish: 'Me gustaría ver {n}.' },
  },
  hi: {
    caps: CAPS.hi,
    meta: { title: 'Tile Labs: आपके नाप का सॉफ़्टवेयर', description: 'Tile Labs सॉफ़्टवेयर उत्पाद बनाती है, व्हाइट-लेबल संस्करण जो आपका ब्रांड पहनते हैं, और आपकी विशिष्टताओं के अनुसार कस्टम सॉफ़्टवेयर।' },
    navAria: 'अनुभाग',
    theme: { label: 'हल्का या गहरा', light: 'हल्के रंग पर जाएँ', dark: 'गहरे रंग पर जाएँ' },
    nav: ['हम क्या करते हैं', 'हम कैसे काम करते हैं', 'उत्पाद', 'हमसे बात करें'],
    hero: { eyebrow: 'सॉफ़्टवेयर स्टूडियो', h1a: 'सॉफ़्टवेयर,', h1b: 'आपके नाप का।', lede: 'Tile Labs सॉफ़्टवेयर उत्पाद बनाती है, व्हाइट-लेबल संस्करण जो आपका ब्रांड पहनते हैं, और आपकी विशिष्टताओं के अनुसार कस्टम सॉफ़्टवेयर।', portfolio: 'पोर्टफ़ोलियो', talk: 'हमसे बात करें', stageTag: 'किसी टाइल को दबाकर देखें कि वह क्या करती है', pause: 'रोकें', play: 'चलाएँ', pauseAria: 'गति रोकें', playAria: 'गति चलाएँ' },
    what: {
      label: 'हम क्या करते हैं', h: 'आपको जिस सॉफ़्टवेयर की ज़रूरत है, उसे पाने के तीन तरीके।', intro: 'किसी ऐसी चीज़ से शुरू करें जो हम पहले से चलाते हैं, उस पर अपना नाम लगाएँ, या हमसे वही बनवाएँ जो आपके व्यवसाय को चाहिए।',
      cards: [
        { h: 'ऐसे उत्पाद जो आज शुरू हो सकते हैं', p: 'दुकान चलाने, ग्राहकों तक पहुँचने, दस्तावेज़ों पर हस्ताक्षर कराने, कर भरने और बहुत कुछ के लिए तैयार ऐप। एक बार साइन इन करें और सबको साथ इस्तेमाल करें।' },
        { h: 'व्हाइट लेबल, आपके नाम से', p: 'हमारा चलाया हुआ कोई उत्पाद लें और उस पर अपना नाम, रंग, पता और कीमतें लगाएँ। आपके ग्राहक हमारा नाम कभी नहीं देखते।' },
        { h: 'आपकी विशिष्टताओं के अनुसार बना', p: 'कुछ ऐसा चाहिए जो हम नहीं बेचते? हमें बताएँ कि आपके लोग कैसे काम करते हैं, और हम उसके इर्द-गिर्द सॉफ़्टवेयर बनाते हैं, उसी से शुरू करके जो पहले से कारगर है।' },
      ],
      goals: ['अभी ऑर्डर करें', 'कक्षा बुक करें', 'मेरी योजना देखें'], brandsAria: 'उदाहरण ब्रांड',
      spec: ['कुछ भी भेजने से पहले मंज़ूरी', 'अंग्रेज़ी, स्पेनिश और हिन्दी', 'आपका अपना साइन-इन', 'एक पृष्ठ पर रिपोर्टें'],
    },
    how: { label: 'हम कैसे काम करते हैं', h: 'बातचीत से लेकर ऐसे सॉफ़्टवेयर तक जिसे लोग इस्तेमाल करें।', steps: [
      ['सुनना', 'हम इससे शुरू करते हैं कि आप आज कैसे काम करते हैं: फ़ॉर्म, स्प्रेडशीट और वे कदम जो किसी ने लिखे नहीं।'],
      ['आकार देना', 'कुछ भी बनने से पहले आपको एक ऐसा संस्करण मिलता है जिस पर आप क्लिक कर सकते हैं, आपके शब्दों और आपके आँकड़ों के साथ।'],
      ['बनाना', 'हम ऐसे चरणों में बनाते हैं जो आप देख सकें, और हर चरण चलते हुए दिखाते हैं।'],
      ['शुरू करना और सुधारना', 'आपका सॉफ़्टवेयर चालू हो जाता है और बेहतर होता रहता है, हर अपडेट के लिए नया प्रोजेक्ट बनाए बिना।'],
    ] },
    products: { label: 'हमारे उत्पाद', h: 'उत्पादों का अपना एक नाम है।', p: 'हर एक का अपना पता है, और एक ही साइन-इन सब पर चलता है। यह पृष्ठ कंपनी है; उत्पाद वे जगहें हैं जहाँ आप उन्हें इस्तेमाल करने जाते हैं।', visit: 'उत्पाद देखें', sr: ['Today, दुकानों के लिए', 'Engage, मार्केटिंग', 'Sign, हस्ताक्षर', 'Documents', 'Portal, ग्राहकों के लिए', 'Tax', 'CRM', 'Invoice', 'Voice, कॉल', 'Webinar', 'Campaigns', 'Rewards'] },
    promises: { label: 'हर उत्पाद में', h: 'आप जो भी चुनें, यह सब मिलता है।', upd: 'अद्यतन', cards: [
      { h: 'डिफ़ॉल्ट रूप से निजी', p: 'स्वास्थ्य संबंधी जानकारी, पहचान-पत्र और बैंक नंबर सीलबंद रखे जाते हैं, और जब भी कोई इन्हें खोलता है, उसका रिकॉर्ड रखा जाता है।' },
      { h: 'आपकी भाषा में', p: 'आज अंग्रेज़ी, स्पेनिश और हिन्दी, और आगे हर उत्पाद के लिए एक साथ और भाषाएँ जुड़ेंगी।' },
      { h: 'एक साइन-इन', p: 'एक बार साइन इन करें और दोबारा साइन इन किए बिना एक उत्पाद से दूसरे पर जाएँ।' },
      { h: 'हमेशा ताज़ा', p: 'सुधार तैयार होते ही आप तक पहुँच जाते हैं, कुछ इंस्टॉल किए बिना।' },
    ] },
    talk: { label: 'हमसे बात करें', h: 'हमें बताएँ कि आपको क्या चाहिए।', lead: 'शुरुआत के लिए कोई उत्पाद, हमारे किसी उत्पाद पर आपका अपना ब्रांड, या आपके लिए कुछ बनवाना। बताएँ कौन सा, और अपने व्यवसाय के बारे में कुछ शब्द।', legend: 'आप क्या ढूँढ रहे हैं?', kinds: ['एक उत्पाद', 'व्हाइट लेबल', 'कस्टम सॉफ़्टवेयर'], nameL: 'आपका नाम', emailL: 'काम का ईमेल', aboutL: 'आपके व्यवसाय के बारे में', send: 'Tile Labs को भेजें', needEmail: 'काम का ईमेल जोड़ें ताकि हम जवाब दे सकें।', ok: 'आपका ईमेल ऐप आपके संदेश के साथ खुलना चाहिए। जब तक आप वहाँ से नहीं भेजते, कुछ नहीं भेजा जाता।' },
    demo: { close: 'डेमो बंद करें', suits: 'किसके लिए:', talkAbout: 'इसके बारे में हमसे बात करें', prev: '← पिछला उत्पाद', next: 'अगला उत्पाद →', example: 'काल्पनिक नामों वाला एक बनाया हुआ उदाहरण, असली उत्पाद नहीं।', videoAria: '{n} का डेमो वीडियो, 15 सेकंड, बिना आवाज़', step: 'चरण {n}', pause: 'रोकें', play: 'चलाएँ', signHere: 'यहाँ हस्ताक्षर करें', paid: 'भुगतान हुआ', seeDemo: '{n}, {tag}। डेमो देखें।', wish: 'मैं {n} देखना चाहता हूँ।' },
  },
  zh: {
    caps: CAPS.zh,
    meta: { title: 'Tile Labs：量身定制的软件', description: 'Tile Labs 制作软件产品、贴上您品牌的白标版本，以及按您的要求定制的软件。' },
    navAria: '栏目',
    theme: { label: '浅色或深色', light: '切换到浅色', dark: '切换到深色' },
    nav: ['我们做什么', '我们如何合作', '产品', '联系我们'],
    hero: { eyebrow: '软件工作室', h1a: '软件，', h1b: '量身定制。', lede: 'Tile Labs 制作软件产品、贴上您品牌的白标版本，以及按您的要求定制的软件。', portfolio: '作品集', talk: '联系我们', stageTag: '点按一块瓷砖，看看它能做什么', pause: '暂停', play: '播放', pauseAria: '暂停动画', playAria: '播放动画' },
    what: {
      label: '我们做什么', h: '获得您所需软件的三种方式。', intro: '从我们已在运行的产品开始，换上您自己的名字，或者请我们为您的业务量身开发。',
      cards: [
        { h: '今天就能上手的产品', p: '现成的应用，用来经营商店、联系客户、签署文件、报税等等。登录一次，就能一起使用。' },
        { h: '白标版本，用您的名字', p: '选一款我们已在运行的产品，换上您的名称、颜色、网址和价格。您的客户永远看不到我们的名字。' },
        { h: '按您的要求定制', p: '需要我们没有的东西？告诉我们您的团队怎么工作，我们围绕它来开发软件，从已经行之有效的做法出发。' },
      ],
      goals: ['立即下单', '预约课程', '查看我的方案'], brandsAria: '示例品牌',
      spec: ['发送任何内容前先经批准', '英语、西班牙语和印地语', '您自己的登录方式', '报表一页看完'],
    },
    how: { label: '我们如何合作', h: '从一次交谈，到人们真正使用的软件。', steps: [
      ['倾听', '我们先了解您今天怎么工作：那些表单、电子表格，以及没人写下来的步骤。'],
      ['成形', '在开发任何东西之前，您先得到一个可以点击的版本，用的是您的措辞和您的数字。'],
      ['开发', '我们分阶段开发，每一阶段都让您看到它运行起来的样子。'],
      ['上线与改进', '您的软件正式上线并不断改进，每次更新都不必另起一个项目。'],
    ] },
    products: { label: '我们的产品', h: '这些产品各有自己的名字。', p: '每一款都有自己的网址，一次登录即可通用。本页代表公司；产品则是您去使用它们的地方。', visit: '访问产品', sr: ['Today，面向商店', 'Engage，营销', 'Sign，签名', 'Documents', 'Portal，面向客户', 'Tax', 'CRM', 'Invoice', 'Voice，通话', 'Webinar', 'Campaigns', 'Rewards'] },
    promises: { label: '每款产品都具备', h: '无论选哪一款，您都能得到这些。', upd: '已是最新', cards: [
      { h: '默认私密', p: '健康信息、证件和银行账号都被密封保存，每次有人打开，都会留下记录。' },
      { h: '用您的语言', p: '目前支持英语、西班牙语和印地语，之后会同时为所有产品添加更多语言。' },
      { h: '一次登录', p: '登录一次，即可在各产品之间切换，无需再次登录。' },
      { h: '始终是最新版', p: '改进一经就绪就会送达，无需安装任何东西。' },
    ] },
    talk: { label: '联系我们', h: '告诉我们您需要什么。', lead: '可以是先用一款产品，在我们的产品上换成您自己的品牌，或者为您专门开发。请说明是哪一种，再简单介绍一下您的业务。', legend: '您在找什么？', kinds: ['一款产品', '白标版本', '定制软件'], nameL: '您的姓名', emailL: '工作邮箱', aboutL: '关于您的业务', send: '发送给 Tile Labs', needEmail: '请填写工作邮箱，以便我们回复。', ok: '您的邮件应用应会带着写好的内容打开。在您从那里发送之前，不会发出任何内容。' },
    demo: { close: '关闭演示', suits: '适合：', talkAbout: '就此联系我们', prev: '← 上一款产品', next: '下一款产品 →', example: '这是用虚构名称绘制的示例，不是真实产品。', videoAria: '{n} 演示视频，15 秒，无声', step: '第 {n} 步', pause: '暂停', play: '播放', signHere: '在此签名', paid: '已付款', seeDemo: '{n}，{tag}。观看演示。', wish: '我想看看 {n}。' },
  },
  ja: SITE_JA,
  ko: SITE_KO,
  pt: SITE_PT,
};
