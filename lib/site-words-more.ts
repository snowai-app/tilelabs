import type { Site } from './site-words.ts';
import { CAPS } from './caps-words.ts';

/** The front page in Japanese, Korean and Portuguese (operator, 27 October 2026, T-3829). Written by Claude; no native speaker has read them. English governs.
    The products' own names, the invented people and brands, and the company's name are never translated. */

export const SITE_JA: Site = {
  caps: CAPS.ja,
  meta: { title: 'Tile Labs：ぴったりに仕立てたソフトウェア', description: 'Tile Labsは、ソフトウェア製品、お客様のブランドをまとったホワイトラベル版、仕様どおりに作るカスタムソフトウェアを提供します。' },
  navAria: 'セクション',
  theme: { label: 'ライトまたはダーク', light: 'ライトに切り替え', dark: 'ダークに切り替え' },
  nav: ['事業内容', '進め方', '製品', 'お問い合わせ'],
  hero: { eyebrow: 'ソフトウェアスタジオ', h1a: 'ソフトウェアを、', h1b: 'ぴったりに。', lede: 'Tile Labsは、ソフトウェア製品、お客様のブランドをまとったホワイトラベル版、仕様どおりに作るカスタムソフトウェアを提供します。', portfolio: 'ポートフォリオ', talk: 'お問い合わせ', stageTag: 'タイルを押すと機能が見られます', pause: '一時停止', play: '再生', pauseAria: '動きを止める', playAria: '動きを再生する' },
  what: {
    label: '事業内容', h: '必要なソフトウェアを手に入れる、3つの方法。', intro: '私たちがすでに運用しているものから始める、自社の名前を付ける、またはお客様のビジネスに必要なものを私たちが作る。',
    cards: [
      { h: '今日から始められる製品', p: '店舗運営、顧客への連絡、書類の署名、税の申告などの、すぐに使えるアプリ。一度サインインすれば、まとめて使えます。' },
      { h: 'お客様の名前で、ホワイトラベル', p: '私たちが運用する製品に、お客様の名前、色、アドレス、価格を付けます。お客様の顧客が私たちの名前を見ることはありません。' },
      { h: '仕様どおりに構築', p: '私たちが売っていないものが必要ですか。チームの働き方を教えてください。すでにうまくいっているものを土台に、それに合わせたソフトウェアを作ります。' },
    ],
    goals: ['今すぐ注文', 'クラスを予約', '私のプランを見る'], brandsAria: 'ブランドの例',
    spec: ['送信前の承認', '英語、スペイン語、ヒンディー語', '自社のサインイン', '1ページのレポート'],
  },
  how: { label: '進め方', h: '対話から、人が使うソフトウェアへ。', steps: [
    ['聞く', 'まず今の働き方から始めます。フォーム、スプレッドシート、誰も書き留めていない手順。'],
    ['形にする', '何かを作る前に、お客様の言葉と数字で、クリックして試せる版をお渡しします。'],
    ['作る', '目に見える段階ごとに作り、動くたびにお見せします。'],
    ['公開して改善', 'ソフトウェアが稼働し、更新のたびに新しいプロジェクトを立てることなく、良くなり続けます。'],
  ] },
  products: { label: '私たちの製品', h: '製品にはそれぞれの名前があります。', p: 'それぞれに独自のアドレスがあり、ひとつのサインインがすべてで使えます。このページは会社の紹介。製品は、使う場所です。', visit: '製品を見る', sr: ['Today、店舗向け', 'Engage、マーケティング', 'Sign、署名', 'Documents', 'Portal、顧客向け', 'Tax', 'CRM', 'Invoice', 'Voice、通話', 'Webinar', 'Campaigns', 'Rewards'] },
  promises: { label: 'すべての製品で', h: 'どれを選んでも得られるもの。', upd: '最新', cards: [
    { h: '標準でプライベート', p: '健康情報、身分証、口座番号は封印され、誰かが開くたびに記録されます。' },
    { h: 'あなたの言語で', p: '今日は英語、スペイン語、ヒンディー語。追加の言語はすべての製品に同時に加わります。' },
    { h: 'ひとつのサインイン', p: '一度サインインすれば、再度サインインせずに製品間を移動できます。' },
    { h: '常に最新', p: '改善は準備でき次第届きます。インストールするものはありません。' },
  ] },
  talk: { label: 'お問い合わせ', h: '必要なことをお聞かせください。', lead: '始めるための製品、私たちの製品にお客様のブランド、またはお客様のために作るもの。どれかを選び、ビジネスについて少し教えてください。', legend: 'お探しのものは？', kinds: ['製品', 'ホワイトラベル', 'カスタムソフトウェア'], nameL: 'お名前', emailL: '仕事用メール', aboutL: 'ビジネスについて', send: 'Tile Labsに送る', needEmail: '返信できるよう、仕事用メールを入力してください。', ok: 'メールアプリが開き、メッセージが用意されます。そこで送信するまで何も送られません。' },
  demo: { close: 'デモを閉じる', suits: '向いている方：', talkAbout: 'これについて問い合わせる', prev: '← 前の製品', next: '次の製品 →', example: '架空の名前で描いた例で、実際の製品ではありません。', videoAria: '{n}のデモ動画、15秒、音声なし', step: 'ステップ {n}', pause: '一時停止', play: '再生', signHere: 'ここに署名', paid: '支払済み', seeDemo: '{n}、{tag}。デモを見る。', wish: '{n}を見てみたいです。' },
};

export const SITE_KO: Site = {
  caps: CAPS.ko,
  meta: { title: 'Tile Labs: 딱 맞게 만든 소프트웨어', description: 'Tile Labs는 소프트웨어 제품, 고객의 브랜드를 입힌 화이트 라벨 버전, 그리고 사양에 맞춰 만든 맞춤 소프트웨어를 만듭니다.' },
  navAria: '섹션',
  theme: { label: '밝게 또는 어둡게', light: '밝은 화면으로', dark: '어두운 화면으로' },
  nav: ['하는 일', '일하는 방식', '제품', '문의하기'],
  hero: { eyebrow: '소프트웨어 스튜디오', h1a: '소프트웨어를,', h1b: '딱 맞게.', lede: 'Tile Labs는 소프트웨어 제품, 고객의 브랜드를 입힌 화이트 라벨 버전, 그리고 사양에 맞춰 만든 맞춤 소프트웨어를 만듭니다.', portfolio: '포트폴리오', talk: '문의하기', stageTag: '타일을 누르면 기능을 볼 수 있습니다', pause: '일시정지', play: '재생', pauseAria: '움직임 멈추기', playAria: '움직임 재생하기' },
  what: {
    label: '하는 일', h: '필요한 소프트웨어를 얻는 세 가지 방법.', intro: '저희가 이미 운영하는 것으로 시작하거나, 거기에 귀사의 이름을 붙이거나, 귀사의 사업에 꼭 필요한 것을 저희가 만들어 드립니다.',
    cards: [
      { h: '오늘부터 쓸 수 있는 제품', p: '매장 운영, 고객 연락, 문서 서명, 세금 신고 등을 위한 바로 쓰는 앱. 한 번 로그인하고 함께 사용하세요.' },
      { h: '귀사의 이름으로, 화이트 라벨', p: '저희가 운영하는 제품에 귀사의 이름, 색상, 주소, 가격을 입힙니다. 귀사의 고객은 저희 이름을 보지 않습니다.' },
      { h: '사양에 맞춰 제작', p: '저희가 팔지 않는 것이 필요하신가요? 팀이 일하는 방식을 알려주시면, 이미 잘 되는 것을 바탕으로 그에 맞는 소프트웨어를 만듭니다.' },
    ],
    goals: ['지금 주문', '수업 예약', '내 플랜 보기'], brandsAria: '브랜드 예시',
    spec: ['보내기 전 승인', '영어, 스페인어, 힌디어', '자체 로그인', '한 페이지 보고서'],
  },
  how: { label: '일하는 방식', h: '대화에서 사람들이 쓰는 소프트웨어로.', steps: [
    ['듣기', '지금 일하는 방식에서 시작합니다. 양식, 스프레드시트, 아무도 적어두지 않은 단계들.'],
    ['모양 잡기', '무언가를 만들기 전에, 귀사의 말과 숫자로 된 클릭해 볼 수 있는 버전을 받습니다.'],
    ['만들기', '눈에 보이는 단계로 만들고, 작동할 때마다 보여드립니다.'],
    ['출시와 개선', '소프트웨어가 가동되고, 업데이트마다 새 프로젝트 없이 계속 좋아집니다.'],
  ] },
  products: { label: '저희 제품', h: '제품마다 고유한 이름이 있습니다.', p: '각 제품에는 고유한 주소가 있고, 한 번의 로그인이 모두에 통합니다. 이 페이지는 회사이고, 제품은 사용하러 가는 곳입니다.', visit: '제품 보기', sr: ['Today, 매장용', 'Engage, 마케팅', 'Sign, 서명', 'Documents', 'Portal, 고객용', 'Tax', 'CRM', 'Invoice', 'Voice, 통화', 'Webinar', 'Campaigns', 'Rewards'] },
  promises: { label: '모든 제품에서', h: '어느 것을 고르든 얻는 것.', upd: '최신', cards: [
    { h: '기본으로 비공개', p: '건강 정보, 신분증, 계좌 번호는 봉인되고, 누군가 열 때마다 기록됩니다.' },
    { h: '당신의 언어로', p: '오늘은 영어, 스페인어, 힌디어. 추가되는 언어는 모든 제품에 한 번에 더해집니다.' },
    { h: '한 번의 로그인', p: '한 번 로그인하면 다시 로그인하지 않고 제품 사이를 오갑니다.' },
    { h: '항상 최신', p: '개선 사항은 준비되는 대로 도착합니다. 설치할 것은 없습니다.' },
  ] },
  talk: { label: '문의하기', h: '무엇이 필요한지 알려주세요.', lead: '시작할 제품, 저희 제품에 귀사의 브랜드, 또는 귀사를 위해 만든 것. 어느 것인지, 그리고 사업에 대해 몇 마디 적어주세요.', legend: '무엇을 찾으시나요?', kinds: ['제품', '화이트 라벨', '맞춤 소프트웨어'], nameL: '이름', emailL: '업무용 이메일', aboutL: '사업에 대해', send: 'Tile Labs에 보내기', needEmail: '답장을 드릴 수 있도록 업무용 이메일을 적어주세요.', ok: '메일 앱이 열리고 메시지가 준비됩니다. 거기서 보내기 전까지는 아무것도 전송되지 않습니다.' },
  demo: { close: '데모 닫기', suits: '적합한 대상:', talkAbout: '이것에 대해 문의하기', prev: '← 이전 제품', next: '다음 제품 →', example: '가상의 이름으로 그린 예시이며 실제 제품이 아닙니다.', videoAria: '{n} 데모 영상, 15초, 무음', step: '{n}단계', pause: '일시정지', play: '재생', signHere: '여기에 서명', paid: '결제됨', seeDemo: '{n}, {tag}. 데모 보기.', wish: '{n}을(를) 보고 싶습니다.' },
};

export const SITE_PT: Site = {
  caps: CAPS.pt,
  meta: { title: 'Tile Labs: software sob medida', description: 'A Tile Labs cria produtos de software, versões white label com a sua marca e software personalizado feito conforme a sua especificação.' },
  navAria: 'Seções',
  theme: { label: 'Claro ou escuro', light: 'Mudar para claro', dark: 'Mudar para escuro' },
  nav: ['O que fazemos', 'Como trabalhamos', 'Produtos', 'Fale conosco'],
  hero: { eyebrow: 'Estúdio de software', h1a: 'Software,', h1b: 'sob medida.', lede: 'A Tile Labs cria produtos de software, versões white label com a sua marca e software personalizado feito conforme a sua especificação.', portfolio: 'Portfólio', talk: 'Fale conosco', stageTag: 'Toque em uma peça para ver o que ela faz', pause: 'Pausar', play: 'Reproduzir', pauseAria: 'Pausar o movimento', playAria: 'Reproduzir o movimento' },
  what: {
    label: 'O que fazemos', h: 'Três maneiras de conseguir o software de que você precisa.', intro: 'Comece com algo que já operamos, coloque o seu próprio nome nele, ou peça que construamos exatamente o que o seu negócio precisa.',
    cards: [
      { h: 'Produtos para começar hoje', p: 'Aplicativos prontos para administrar uma loja, alcançar clientes, assinar documentos, declarar impostos e mais. Entre uma vez e use todos juntos.' },
      { h: 'White label, com o seu nome', p: 'Pegue um produto que já operamos e coloque o seu nome, cores, endereço e preços. Os seus clientes nunca veem o nosso.' },
      { h: 'Feito conforme a sua especificação', p: 'Precisa de algo que não vendemos? Conte como a sua equipe trabalha, e construímos o software em torno disso, a partir do que já funciona.' },
    ],
    goals: ['Pedir agora', 'Reservar uma aula', 'Ver meu plano'], brandsAria: 'Marcas de exemplo',
    spec: ['Aprovação antes de qualquer envio', 'Inglês, espanhol e hindi', 'Seu próprio login', 'Relatórios em uma página'],
  },
  how: { label: 'Como trabalhamos', h: 'De uma conversa a um software que as pessoas usam.', steps: [
    ['Ouvir', 'Começamos por como você trabalha hoje: os formulários, as planilhas e as etapas que ninguém anotou.'],
    ['Dar forma', 'Você recebe uma versão clicável, com as suas palavras e os seus números, antes de qualquer coisa ser construída.'],
    ['Construir', 'Construímos em etapas que você pode ver, e mostramos cada uma assim que funciona.'],
    ['Lançar e melhorar', 'O seu software entra no ar e continua melhorando, sem um novo projeto a cada atualização.'],
  ] },
  products: { label: 'Nossos produtos', h: 'Os produtos têm nome próprio.', p: 'Cada um tem o seu próprio endereço, e um único login funciona em todos. Esta página é a empresa; os produtos são onde você vai para usá-los.', visit: 'Ver os produtos', sr: ['Today, para lojas', 'Engage, marketing', 'Sign, assinaturas', 'Documents', 'Portal, para clientes', 'Tax', 'CRM', 'Invoice', 'Voice, chamadas', 'Webinar', 'Campaigns', 'Rewards'] },
  promises: { label: 'Em todo produto', h: 'O que você recebe, seja qual for a sua escolha.', upd: 'Atualizado', cards: [
    { h: 'Privado por padrão', p: 'Dados de saúde, documentos e números bancários ficam lacrados, e cada vez que alguém abre um deles, fica registrado.' },
    { h: 'No seu idioma', p: 'Inglês, espanhol e hindi hoje, com mais idiomas adicionados a todos os produtos de uma vez.' },
    { h: 'Um único login', p: 'Entre uma vez e passe de um produto a outro sem entrar de novo.' },
    { h: 'Sempre atual', p: 'As melhorias chegam assim que ficam prontas, sem nada para instalar.' },
  ] },
  talk: { label: 'Fale conosco', h: 'Conte o que você precisa.', lead: 'Um produto para começar, a sua marca em um dos nossos, ou algo feito para você. Diga qual, e algumas palavras sobre o seu negócio.', legend: 'O que você procura?', kinds: ['Um produto', 'White label', 'Software personalizado'], nameL: 'Seu nome', emailL: 'E-mail de trabalho', aboutL: 'Sobre o seu negócio', send: 'Enviar para a Tile Labs', needEmail: 'Informe um e-mail de trabalho para podermos responder.', ok: 'O seu aplicativo de e-mail deve abrir com a mensagem pronta. Nada é enviado até você enviar por lá.' },
  demo: { close: 'Fechar a demonstração', suits: 'Indicado para:', talkAbout: 'Fale conosco sobre isto', prev: '← Produto anterior', next: 'Próximo produto →', example: 'Um exemplo desenhado com nomes inventados, não o produto real.', videoAria: 'Vídeo de demonstração de {n}, 15 segundos, sem som', step: 'Etapa {n}', pause: 'Pausar', play: 'Reproduzir', signHere: 'Assine aqui', paid: 'PAGO', seeDemo: '{n}, {tag}. Ver uma demonstração.', wish: 'Gostaria de ver {n}.' },
};

/** Arabic (operator, 27 October 2026, T-3832). Read right to left: the page sets dir="rtl". Written by Claude; no native speaker has read it. English governs. */
export const SITE_AR: Site = {
  caps: CAPS.ar,
  meta: { title: 'Tile Labs: برمجيات على المقاس', description: 'تصنع Tile Labs منتجات برمجية، ونسخًا بعلامة بيضاء تحمل علامتك التجارية، وبرمجيات مخصصة تُبنى وفق مواصفاتك.' },
  navAria: 'الأقسام',
  theme: { label: 'فاتح أو داكن', light: 'التبديل إلى الفاتح', dark: 'التبديل إلى الداكن' },
  nav: ['ما نقوم به', 'كيف نعمل', 'المنتجات', 'تحدّث إلينا'],
  hero: { eyebrow: 'استوديو برمجيات', h1a: 'برمجيات،', h1b: 'على المقاس.', lede: 'تصنع Tile Labs منتجات برمجية، ونسخًا بعلامة بيضاء تحمل علامتك التجارية، وبرمجيات مخصصة تُبنى وفق مواصفاتك.', portfolio: 'أعمالنا', talk: 'تحدّث إلينا', stageTag: 'اضغط على مربع لترى ما يفعله', pause: 'إيقاف مؤقت', play: 'تشغيل', pauseAria: 'أوقف الحركة', playAria: 'شغّل الحركة' },
  what: {
    label: 'ما نقوم به', h: 'ثلاث طرق للحصول على البرمجيات التي تحتاجها.', intro: 'ابدأ بشيء نشغّله بالفعل، أو ضع اسمك عليه، أو اطلب منا أن نبني بالضبط ما يحتاجه عملك.',
    cards: [
      { h: 'منتجات تبدأ بها اليوم', p: 'تطبيقات جاهزة لإدارة متجر، والوصول إلى العملاء، وتوقيع المستندات، وتقديم الضرائب وغير ذلك. سجّل الدخول مرة واحدة واستخدمها معًا.' },
      { h: 'علامة بيضاء، باسمك', p: 'خذ منتجًا نشغّله بالفعل وضع عليه اسمك وألوانك وعنوانك وأسعارك. عملاؤك لا يرون اسمنا أبدًا.' },
      { h: 'مبنية وفق مواصفاتك', p: 'تحتاج شيئًا لا نبيعه؟ أخبرنا كيف يعمل فريقك، ونبني البرمجيات حول ذلك، انطلاقًا مما ينجح بالفعل.' },
    ],
    goals: ['اطلب الآن', 'احجز حصة', 'اعرض خطتي'], brandsAria: 'علامات تجارية للمثال',
    spec: ['موافقة قبل إرسال أي شيء', 'الإنجليزية والإسبانية والهندية', 'تسجيل دخول خاص بك', 'تقارير في صفحة واحدة'],
  },
  how: { label: 'كيف نعمل', h: 'من محادثة إلى برمجيات يستخدمها الناس.', steps: [
    ['نستمع', 'نبدأ بالطريقة التي تعمل بها اليوم: النماذج، وجداول البيانات، والخطوات التي لم يكتبها أحد.'],
    ['نشكّل', 'تحصل على نسخة يمكنك النقر عليها، بكلماتك وأرقامك، قبل أن يُبنى أي شيء.'],
    ['نبني', 'نبني على خطوات تستطيع رؤيتها، ونعرض عليك كل خطوة حين تعمل.'],
    ['نطلق ونحسّن', 'تنطلق برمجياتك وتواصل التحسن، دون مشروع جديد مع كل تحديث.'],
  ] },
  products: { label: 'منتجاتنا', h: 'لكل منتج اسمه الخاص.', p: 'لكل منتج عنوانه الخاص، وتسجيل دخول واحد يعمل في جميعها. هذه الصفحة هي الشركة، والمنتجات هي حيث تذهب لاستخدامها.', visit: 'زر المنتجات', sr: ['Today، للمتاجر', 'Engage، التسويق', 'Sign، التوقيعات', 'Documents', 'Portal، للعملاء', 'Tax', 'CRM', 'Invoice', 'Voice، المكالمات', 'Webinar', 'Campaigns', 'Rewards'] },
  promises: { label: 'في كل منتج', h: 'ما تحصل عليه أيًّا كان اختيارك.', upd: 'محدّث', cards: [
    { h: 'خاص افتراضيًا', p: 'تبقى البيانات الصحية والهويات وأرقام الحسابات المصرفية مختومة، وكل مرة يفتح فيها أحد شيئًا منها تُسجَّل.' },
    { h: 'بلغتك', p: 'الإنجليزية والإسبانية والهندية اليوم، وتُضاف لغات أخرى إلى كل المنتجات دفعة واحدة.' },
    { h: 'تسجيل دخول واحد', p: 'سجّل الدخول مرة واحدة وتنقّل بين المنتجات دون تسجيل الدخول مجددًا.' },
    { h: 'محدّث دائمًا', p: 'تصلك التحسينات فور جاهزيتها، دون أي شيء لتثبيته.' },
  ] },
  talk: { label: 'تحدّث إلينا', h: 'أخبرنا بما تحتاجه.', lead: 'منتج تبدأ به، أو علامتك التجارية على أحد منتجاتنا، أو شيء يُبنى لك. قل أيها، وبضع كلمات عن عملك.', legend: 'عمّ تبحث؟', kinds: ['منتج', 'علامة بيضاء', 'برمجيات مخصصة'], nameL: 'اسمك', emailL: 'بريد العمل', aboutL: 'عن عملك', send: 'أرسل إلى Tile Labs', needEmail: 'أضف بريد عمل حتى نتمكن من الرد.', ok: 'يُفترض أن يفتح تطبيق البريد لديك ورسالتك جاهزة. لا يُرسل شيء حتى ترسله من هناك.' },
  demo: { close: 'أغلق العرض', suits: 'يناسب:', talkAbout: 'تحدّث إلينا عنه', prev: '→ المنتج السابق', next: 'المنتج التالي ←', example: 'مثال مرسوم بأسماء مختلَقة، وليس المنتج الحقيقي.', videoAria: 'فيديو عرض {n}، 15 ثانية، بلا صوت', step: 'الخطوة {n}', pause: 'إيقاف مؤقت', play: 'تشغيل', signHere: 'وقّع هنا', paid: 'مدفوع', seeDemo: '{n}، {tag}. شاهد عرضًا.', wish: 'أودّ أن أرى {n}.' },
};
