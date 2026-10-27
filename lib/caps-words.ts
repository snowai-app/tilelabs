import type { Lang } from './legal-words.ts';

/** The capabilities section (operator, 27 October 2026, T-3830), built from the mock-up https://claude.ai/artifact/9YVqTE4AZP9EEhzSkJViVw as it stands: four variations, A to D, chosen from a row of tabs inside the section.
    English governs; Spanish, Hindi and Chinese were written by Claude and no native speaker has read them. The products' names, the invented people and the software named (HubSpot, Salesforce, Zoho CRM) are never translated. */

export type CapKey = 'transcribe' | 'extract' | 'sign' | 'translate';
export const CAP_KEYS: CapKey[] = ['transcribe', 'extract', 'sign', 'translate'];
export type StepKind = 'have' | 'yours' | CapKey;
export type Cap = { n: string; p: string; short: string; land: string; verb: [string, string]; cTab: string; got: string };
export type Caps = {
  label: string;
  tabs: [{ n: string; s: string }, { n: string; s: string }, { n: string; s: string }, { n: string; s: string }];
  youHave: string; yours: string; tile: string; station: string; replay: string; talk: string; drawn: string; drawnSoft: string; yourSoftware: string; own: string; landsIn: string; youGet: string; show: string;
  cap: Record<CapKey, Cap>;
  a: { h: string; p: string; foot: string; paths: { n: string; steps: [StepKind, string][]; items: string[] }[] };
  b: { h: string; wheel: [string, string, string, string]; p: string; foot: string };
  c: { h: string; p: string; foot: string; before: Record<CapKey, string>; after: Record<CapKey, { t: string; rows: [[string, string], [string, string], [string, string]]; pill: string }> };
  d: { h: string; lines: [string, string, string, string]; p: string; foot: string; rec: string };
};

export const CAPS: Record<Lang, Caps> = {
  en: {
    label: 'Capabilities',
    tabs: [{ n: 'A · The line', s: 'Work travels station to station' }, { n: 'B · The wheel', s: 'One sentence, the result turns' }, { n: 'C · Before and after', s: 'What you have, what lands' }, { n: 'D · The dock', s: 'Capabilities snap into your software' }],
    youHave: 'You have', yours: 'Your software', tile: 'Tile Labs', station: 'Station {n}', replay: 'Play it again', talk: 'Talk to us about a capability', drawn: 'Drawn example with invented names.', drawnSoft: 'Drawn example with invented names. The software shown is only an example of what people already use.', yourSoftware: 'Your software', own: 'Your own software', landsIn: 'Lands in', youGet: 'You get', show: 'Show {n}',
    cap: {
      transcribe: { n: 'Transcribe', p: 'A call or a recording, written down, each speaker told apart.', short: 'Calls and recordings become text.', land: 'The transcript on the person’s record', verb: ['Hear', 'it.'], cTab: 'Calls and voicemails become words', got: 'Transcript · 6 min call' },
      extract: { n: 'Extract', p: 'The fields, tables and words in a PDF or a scan, pulled out where your team looks for them.', short: 'Forms and scans become fields.', land: 'The fields as a new record', verb: ['Read', 'it.'], cTab: 'Forms and scans become fields', got: 'Lease · 12 fields' },
      sign: { n: 'Sign', p: 'A document sent to be signed from a link, with a record of who saw what and when.', short: 'Agreements go out and come back signed.', land: 'The signed copy, filed', verb: ['Sign', 'it.'], cTab: 'Agreements go out and come back signed', got: 'Agreement · signed 9:40' },
      translate: { n: 'Translate', p: 'A document, a message or a transcript in the language your customer reads.', short: 'Anything in the language they read.', land: 'The translation, attached', verb: ['Say', 'it in theirs.'], cTab: 'Anything in the language they read', got: 'Mensaje · Español' },
    },
    a: { h: 'Your software stays. The work moves through ours.', p: 'A call, a scan or a PDF goes in at one end. Each station does its part. What comes out lands in the software you already use.', foot: 'One capability or several. Your developers can also call any of them from your own software, with one key.', paths: [
      { n: 'A call becomes a signed agreement', steps: [['have', 'A recorded call'], ['transcribe', 'Written down'], ['extract', 'Terms picked out'], ['sign', 'Sent to be signed'], ['yours', 'Saved in HubSpot']], items: ['A recorded call', 'A transcript', 'Name, date, plan', 'Signed from a phone', 'On the record'] },
      { n: 'Paper in, their language out', steps: [['have', 'A scanned form'], ['extract', 'Fields read'], ['translate', 'In their language'], ['yours', 'Saved in Salesforce']], items: ['A scanned form', 'Twelve fields', 'In Spanish', 'A new record'] },
      { n: 'A call in Spanish, notes in English', steps: [['have', 'A call in Spanish'], ['transcribe', 'Written down'], ['translate', 'Notes in English'], ['yours', 'Saved in Zoho CRM']], items: ['A call in Spanish', 'Spanish transcript', 'English notes', 'Both on the record'] },
    ] },
    b: { h: 'Turn a call into', wheel: ['a transcript.', 'a signed agreement.', 'a record in your CRM.', 'notes in Spanish.'], p: 'Four things your software cannot do by itself. Plug in one, or let them pass the work along. Nothing new to learn, nothing to switch.', foot: 'Each capability can also be called from your own software, with one key.' },
    c: { h: 'What you have on the left. What your team needs on the right.', p: 'Pick a capability. The left side is what arrives every day. The right side is what it becomes, in your software, without anyone retyping it.', foot: 'Use one, or put several together: a call becomes words, the words become fields, the fields go out to be signed.',
      before: { transcribe: 'Call · 14:32 · 6 min', extract: 'Scan · lease.pdf', sign: 'Draft · agreement.pdf', translate: 'Message · English' },
      after: {
        transcribe: { t: 'Transcript', rows: [['Maya', 'We’ll take the annual plan from May.'], ['Sam', 'Two seats, billed to the Austin office.'], ['Next', 'Send the agreement today.']], pill: 'Saved on the record' },
        extract: { t: 'Lease', rows: [['Tenant', 'Maya Patel'], ['Term', '1 May 2026 to 30 April 2027'], ['Rent', '2,150 a month']], pill: 'A new record' },
        sign: { t: 'Agreement', rows: [['Signed by', 'Maya Patel'], ['When', 'Today, 9:40, from a phone'], ['Seen', 'Opened twice, 4 pages']], pill: 'Signed copy filed' },
        translate: { t: 'Mensaje · Español', rows: [['Para', 'Maya Patel'], ['Asunto', 'Su contrato está listo para firmar'], ['También', 'Hindi, English']], pill: 'Attached to the record' },
      } },
    d: { h: 'Plug in what your software cannot do.', lines: ['Hear it.', 'Read it.', 'Sign it.', 'Say it in their language.'], p: 'Press a capability to dock it into your software. Each one drops its result straight onto the record your team already looks at.', foot: 'Your developers can call any capability from your own software, with one key.', rec: 'Maya Patel · Customer' },
  },
  es: {
    label: 'Capacidades',
    tabs: [{ n: 'A · La línea', s: 'El trabajo pasa de estación en estación' }, { n: 'B · La rueda', s: 'Una frase, y el resultado gira' }, { n: 'C · Antes y después', s: 'Lo que tiene, lo que llega' }, { n: 'D · El acople', s: 'Las capacidades encajan en su software' }],
    youHave: 'Usted tiene', yours: 'Su software', tile: 'Tile Labs', station: 'Estación {n}', replay: 'Verlo otra vez', talk: 'Hable con nosotros sobre una capacidad', drawn: 'Ejemplo dibujado con nombres inventados.', drawnSoft: 'Ejemplo dibujado con nombres inventados. El software mostrado es solo un ejemplo de lo que la gente ya usa.', yourSoftware: 'Su software', own: 'Su propio software', landsIn: 'Llega a', youGet: 'Usted recibe', show: 'Mostrar {n}',
    cap: {
      transcribe: { n: 'Transcribe', p: 'Una llamada o una grabación, por escrito, con cada interlocutor diferenciado.', short: 'Las llamadas y grabaciones se vuelven texto.', land: 'La transcripción en la ficha de la persona', verb: ['Escúchelo', 'ya.'], cTab: 'Llamadas y mensajes de voz se vuelven palabras', got: 'Transcripción · llamada de 6 min' },
      extract: { n: 'Extract', p: 'Los campos, tablas y palabras de un PDF o un escaneo, sacados adonde su equipo los busca.', short: 'Formularios y escaneos se vuelven campos.', land: 'Los campos como una ficha nueva', verb: ['Léalo', 'ya.'], cTab: 'Formularios y escaneos se vuelven campos', got: 'Contrato de alquiler · 12 campos' },
      sign: { n: 'Sign', p: 'Un documento enviado a firmar desde un enlace, con registro de quién vio qué y cuándo.', short: 'Los acuerdos salen y vuelven firmados.', land: 'La copia firmada, archivada', verb: ['Fírmelo', 'ya.'], cTab: 'Los acuerdos salen y vuelven firmados', got: 'Acuerdo · firmado a las 9:40' },
      translate: { n: 'Translate', p: 'Un documento, un mensaje o una transcripción en el idioma que lee su cliente.', short: 'Cualquier cosa en el idioma que leen.', land: 'La traducción, adjunta', verb: ['Dígalo', 'en su idioma.'], cTab: 'Cualquier cosa en el idioma que leen', got: 'Message · English' },
    },
    a: { h: 'Su software se queda. El trabajo pasa por el nuestro.', p: 'Una llamada, un escaneo o un PDF entra por un extremo. Cada estación hace su parte. Lo que sale llega al software que ya usa.', foot: 'Una capacidad o varias. Sus desarrolladores también pueden llamar a cualquiera desde su propio software, con una sola clave.', paths: [
      { n: 'Una llamada se vuelve un acuerdo firmado', steps: [['have', 'Una llamada grabada'], ['transcribe', 'Por escrito'], ['extract', 'Términos extraídos'], ['sign', 'Enviado a firmar'], ['yours', 'Guardado en HubSpot']], items: ['Una llamada grabada', 'Una transcripción', 'Nombre, fecha, plan', 'Firmado desde un teléfono', 'En la ficha'] },
      { n: 'Entra papel, sale en su idioma', steps: [['have', 'Un formulario escaneado'], ['extract', 'Campos leídos'], ['translate', 'En su idioma'], ['yours', 'Guardado en Salesforce']], items: ['Un formulario escaneado', 'Doce campos', 'En inglés', 'Una ficha nueva'] },
      { n: 'Una llamada en inglés, notas en español', steps: [['have', 'Una llamada en inglés'], ['transcribe', 'Por escrito'], ['translate', 'Notas en español'], ['yours', 'Guardado en Zoho CRM']], items: ['Una llamada en inglés', 'Transcripción en inglés', 'Notas en español', 'Ambas en la ficha'] },
    ] },
    b: { h: 'Convierta una llamada en', wheel: ['una transcripción.', 'un acuerdo firmado.', 'una ficha en su CRM.', 'notas en inglés.'], p: 'Cuatro cosas que su software no puede hacer solo. Conecte una, o deje que se pasen el trabajo entre ellas. Nada nuevo que aprender, nada que cambiar.', foot: 'Cada capacidad también puede llamarse desde su propio software, con una sola clave.' },
    c: { h: 'Lo que tiene, a la izquierda. Lo que su equipo necesita, a la derecha.', p: 'Elija una capacidad. A la izquierda está lo que llega cada día. A la derecha, en lo que se convierte, en su software, sin que nadie lo vuelva a escribir.', foot: 'Use una, o combine varias: una llamada se vuelve palabras, las palabras se vuelven campos, los campos salen a firmar.',
      before: { transcribe: 'Llamada · 14:32 · 6 min', extract: 'Escaneo · alquiler.pdf', sign: 'Borrador · acuerdo.pdf', translate: 'Mensaje · Español' },
      after: {
        transcribe: { t: 'Transcripción', rows: [['Maya', 'Tomamos el plan anual desde mayo.'], ['Sam', 'Dos puestos, facturados a la oficina de Austin.'], ['Siguiente', 'Enviar el acuerdo hoy.']], pill: 'Guardado en la ficha' },
        extract: { t: 'Alquiler', rows: [['Inquilino', 'Maya Patel'], ['Plazo', '1 de mayo de 2026 al 30 de abril de 2027'], ['Renta', '2.150 al mes']], pill: 'Una ficha nueva' },
        sign: { t: 'Acuerdo', rows: [['Firmado por', 'Maya Patel'], ['Cuándo', 'Hoy, 9:40, desde un teléfono'], ['Visto', 'Abierto dos veces, 4 páginas']], pill: 'Copia firmada archivada' },
        translate: { t: 'Message · English', rows: [['To', 'Maya Patel'], ['Subject', 'Your contract is ready to sign'], ['Also', 'Hindi, Español']], pill: 'Adjunto a la ficha' },
      } },
    d: { h: 'Conecte lo que su software no puede hacer.', lines: ['Escúchelo.', 'Léalo.', 'Fírmelo.', 'Dígalo en su idioma.'], p: 'Pulse una capacidad para acoplarla a su software. Cada una deja su resultado directamente en la ficha que su equipo ya mira.', foot: 'Sus desarrolladores pueden llamar a cualquier capacidad desde su propio software, con una sola clave.', rec: 'Maya Patel · Cliente' },
  },
  hi: {
    label: 'क्षमताएँ',
    tabs: [{ n: 'A · रेखा', s: 'काम एक स्टेशन से अगले तक जाता है' }, { n: 'B · पहिया', s: 'एक वाक्य, और नतीजा बदलता है' }, { n: 'C · पहले और बाद', s: 'आपके पास क्या है, क्या पहुँचता है' }, { n: 'D · जोड़', s: 'क्षमताएँ आपके सॉफ़्टवेयर में जुड़ जाती हैं' }],
    youHave: 'आपके पास है', yours: 'आपका सॉफ़्टवेयर', tile: 'Tile Labs', station: 'स्टेशन {n}', replay: 'फिर से चलाएँ', talk: 'किसी क्षमता के बारे में हमसे बात करें', drawn: 'काल्पनिक नामों वाला बनाया हुआ उदाहरण।', drawnSoft: 'काल्पनिक नामों वाला बनाया हुआ उदाहरण। दिखाया गया सॉफ़्टवेयर सिर्फ़ उसका उदाहरण है जो लोग पहले से इस्तेमाल करते हैं।', yourSoftware: 'आपका सॉफ़्टवेयर', own: 'आपका अपना सॉफ़्टवेयर', landsIn: 'यहाँ पहुँचता है', youGet: 'आपको मिलता है', show: '{n} दिखाएँ',
    cap: {
      transcribe: { n: 'Transcribe', p: 'कोई कॉल या रिकॉर्डिंग, लिखित रूप में, हर वक्ता अलग पहचाना हुआ।', short: 'कॉल और रिकॉर्डिंग टेक्स्ट बन जाती हैं।', land: 'व्यक्ति के रिकॉर्ड पर ट्रांसक्रिप्ट', verb: ['सुनिए', 'इसे।'], cTab: 'कॉल और वॉइसमेल शब्द बन जाते हैं', got: 'ट्रांसक्रिप्ट · 6 मिनट की कॉल' },
      extract: { n: 'Extract', p: 'किसी PDF या स्कैन के फ़ील्ड, तालिकाएँ और शब्द, वहाँ निकाले हुए जहाँ आपकी टीम उन्हें ढूँढती है।', short: 'फ़ॉर्म और स्कैन फ़ील्ड बन जाते हैं।', land: 'फ़ील्ड एक नए रिकॉर्ड के रूप में', verb: ['पढ़िए', 'इसे।'], cTab: 'फ़ॉर्म और स्कैन फ़ील्ड बन जाते हैं', got: 'किराया अनुबंध · 12 फ़ील्ड' },
      sign: { n: 'Sign', p: 'एक लिंक से हस्ताक्षर के लिए भेजा गया दस्तावेज़, इस रिकॉर्ड के साथ कि किसने क्या और कब देखा।', short: 'समझौते जाते हैं और हस्ताक्षरित लौटते हैं।', land: 'हस्ताक्षरित प्रति, फ़ाइल की हुई', verb: ['हस्ताक्षर', 'कीजिए।'], cTab: 'समझौते जाते हैं और हस्ताक्षरित लौटते हैं', got: 'समझौता · 9:40 पर हस्ताक्षरित' },
      translate: { n: 'Translate', p: 'कोई दस्तावेज़, संदेश या ट्रांसक्रिप्ट उस भाषा में जो आपका ग्राहक पढ़ता है।', short: 'कुछ भी, उस भाषा में जो वे पढ़ते हैं।', land: 'अनुवाद, संलग्न', verb: ['कहिए', 'उनकी भाषा में।'], cTab: 'कुछ भी, उस भाषा में जो वे पढ़ते हैं', got: 'Mensaje · Español' },
    },
    a: { h: 'आपका सॉफ़्टवेयर रहता है। काम हमारे से होकर गुज़रता है।', p: 'एक कॉल, स्कैन या PDF एक छोर से अंदर जाता है। हर स्टेशन अपना हिस्सा करता है। जो निकलता है वह उस सॉफ़्टवेयर में पहुँचता है जो आप पहले से इस्तेमाल करते हैं।', foot: 'एक क्षमता या कई। आपके डेवलपर किसी भी क्षमता को अपने सॉफ़्टवेयर से भी बुला सकते हैं, एक कुंजी से।', paths: [
      { n: 'एक कॉल हस्ताक्षरित समझौता बन जाती है', steps: [['have', 'एक रिकॉर्ड की गई कॉल'], ['transcribe', 'लिखित रूप में'], ['extract', 'शर्तें निकाली गईं'], ['sign', 'हस्ताक्षर के लिए भेजा'], ['yours', 'HubSpot में सहेजा']], items: ['एक रिकॉर्ड की गई कॉल', 'एक ट्रांसक्रिप्ट', 'नाम, तारीख, योजना', 'फ़ोन से हस्ताक्षरित', 'रिकॉर्ड पर'] },
      { n: 'कागज़ अंदर, उनकी भाषा बाहर', steps: [['have', 'एक स्कैन किया फ़ॉर्म'], ['extract', 'फ़ील्ड पढ़े गए'], ['translate', 'उनकी भाषा में'], ['yours', 'Salesforce में सहेजा']], items: ['एक स्कैन किया फ़ॉर्म', 'बारह फ़ील्ड', 'स्पेनिश में', 'एक नया रिकॉर्ड'] },
      { n: 'कॉल स्पेनिश में, नोट्स अंग्रेज़ी में', steps: [['have', 'स्पेनिश में एक कॉल'], ['transcribe', 'लिखित रूप में'], ['translate', 'अंग्रेज़ी में नोट्स'], ['yours', 'Zoho CRM में सहेजा']], items: ['स्पेनिश में एक कॉल', 'स्पेनिश ट्रांसक्रिप्ट', 'अंग्रेज़ी नोट्स', 'दोनों रिकॉर्ड पर'] },
    ] },
    b: { h: 'एक कॉल को बदलिए', wheel: ['एक ट्रांसक्रिप्ट में।', 'एक हस्ताक्षरित समझौते में।', 'आपके CRM के रिकॉर्ड में।', 'हिन्दी में नोट्स में।'], p: 'चार चीज़ें जो आपका सॉफ़्टवेयर अकेले नहीं कर सकता। एक जोड़िए, या उन्हें काम आगे बढ़ाने दीजिए। कुछ नया सीखना नहीं, कुछ बदलना नहीं।', foot: 'हर क्षमता को आपके अपने सॉफ़्टवेयर से भी बुलाया जा सकता है, एक कुंजी से।' },
    c: { h: 'बाईं ओर जो आपके पास है। दाईं ओर जो आपकी टीम को चाहिए।', p: 'एक क्षमता चुनिए। बाईं ओर वह है जो हर दिन आता है। दाईं ओर वह जो वह बन जाता है, आपके सॉफ़्टवेयर में, बिना किसी के दोबारा टाइप किए।', foot: 'एक इस्तेमाल कीजिए, या कई को जोड़िए: कॉल शब्द बनती है, शब्द फ़ील्ड बनते हैं, फ़ील्ड हस्ताक्षर के लिए जाते हैं।',
      before: { transcribe: 'कॉल · 14:32 · 6 मिनट', extract: 'स्कैन · lease.pdf', sign: 'ड्राफ़्ट · agreement.pdf', translate: 'संदेश · अंग्रेज़ी' },
      after: {
        transcribe: { t: 'ट्रांसक्रिप्ट', rows: [['Maya', 'हम मई से वार्षिक योजना लेंगे।'], ['Sam', 'दो सीटें, Austin कार्यालय के बिल पर।'], ['आगे', 'आज समझौता भेजें।']], pill: 'रिकॉर्ड पर सहेजा' },
        extract: { t: 'किराया अनुबंध', rows: [['किरायेदार', 'Maya Patel'], ['अवधि', '1 मई 2026 से 30 अप्रैल 2027'], ['किराया', '2,150 प्रति माह']], pill: 'एक नया रिकॉर्ड' },
        sign: { t: 'समझौता', rows: [['हस्ताक्षरकर्ता', 'Maya Patel'], ['कब', 'आज, 9:40, एक फ़ोन से'], ['देखा', 'दो बार खोला, 4 पृष्ठ']], pill: 'हस्ताक्षरित प्रति फ़ाइल की' },
        translate: { t: 'संदेश · हिन्दी', rows: [['प्रति', 'Maya Patel'], ['विषय', 'आपका अनुबंध हस्ताक्षर के लिए तैयार है'], ['साथ ही', 'English, Español']], pill: 'रिकॉर्ड से संलग्न' },
      } },
    d: { h: 'वह जोड़िए जो आपका सॉफ़्टवेयर नहीं कर सकता।', lines: ['सुनिए।', 'पढ़िए।', 'हस्ताक्षर कीजिए।', 'उनकी भाषा में कहिए।'], p: 'किसी क्षमता को दबाइए और वह आपके सॉफ़्टवेयर से जुड़ जाती है। हर एक अपना नतीजा सीधे उस रिकॉर्ड पर रखती है जिसे आपकी टीम पहले से देखती है।', foot: 'आपके डेवलपर किसी भी क्षमता को आपके अपने सॉफ़्टवेयर से बुला सकते हैं, एक कुंजी से।', rec: 'Maya Patel · ग्राहक' },
  },
  zh: {
    label: '能力',
    tabs: [{ n: 'A · 流水线', s: '工作逐站传递' }, { n: 'B · 转轮', s: '一句话，结果在变' }, { n: 'C · 前后对比', s: '您有什么，得到什么' }, { n: 'D · 对接', s: '能力嵌入您的软件' }],
    youHave: '您有', yours: '您的软件', tile: 'Tile Labs', station: '第 {n} 站', replay: '再播放一次', talk: '与我们谈谈某项能力', drawn: '绘制的示例，名称均为虚构。', drawnSoft: '绘制的示例，名称均为虚构。所示软件只是人们已在使用的软件的例子。', yourSoftware: '您的软件', own: '您自己的软件', landsIn: '存入', youGet: '您得到', show: '显示 {n}',
    cap: {
      transcribe: { n: 'Transcribe', p: '一通电话或一段录音，整理成文字，并区分每位发言人。', short: '通话和录音变成文字。', land: '文字记录存入此人的档案', verb: ['听', '见。'], cTab: '通话和语音留言变成文字', got: '文字记录 · 6 分钟通话' },
      extract: { n: 'Extract', p: 'PDF 或扫描件中的字段、表格和文字，提取到您的团队查找的地方。', short: '表单和扫描件变成字段。', land: '字段成为一条新记录', verb: ['读', '懂。'], cTab: '表单和扫描件变成字段', got: '租约 · 12 个字段' },
      sign: { n: 'Sign', p: '通过链接发送文件供签署，并记录谁在何时看过什么。', short: '协议发出，签好返回。', land: '已签署副本，已归档', verb: ['签', '好。'], cTab: '协议发出，签好返回', got: '协议 · 9:40 已签署' },
      translate: { n: 'Translate', p: '文件、消息或文字记录，译成您的客户阅读的语言。', short: '任何内容，用他们阅读的语言。', land: '译文，已附上', verb: ['说', '他们的语言。'], cTab: '任何内容，用他们阅读的语言', got: 'Mensaje · Español' },
    },
    a: { h: '您的软件不变。工作经过我们的能力。', p: '一通电话、一份扫描件或一个 PDF 从一端进入。每一站各司其职。出来的结果存入您已在使用的软件。', foot: '一项能力或多项。您的开发者也可以用一把密钥，从您自己的软件调用任何一项。', paths: [
      { n: '一通电话变成一份签好的协议', steps: [['have', '一段通话录音'], ['transcribe', '整理成文字'], ['extract', '提取条款'], ['sign', '发出签署'], ['yours', '存入 HubSpot']], items: ['一段通话录音', '一份文字记录', '姓名、日期、方案', '在手机上签署', '存入档案'] },
      { n: '纸质进，他们的语言出', steps: [['have', '一份扫描表单'], ['extract', '读取字段'], ['translate', '译成他们的语言'], ['yours', '存入 Salesforce']], items: ['一份扫描表单', '十二个字段', '西班牙语版', '一条新记录'] },
      { n: '西班牙语通话，中文记录', steps: [['have', '一通西班牙语通话'], ['transcribe', '整理成文字'], ['translate', '中文记录'], ['yours', '存入 Zoho CRM']], items: ['一通西班牙语通话', '西班牙语文字记录', '中文记录', '两份都在档案中'] },
    ] },
    b: { h: '把一通电话变成', wheel: ['一份文字记录。', '一份签好的协议。', '您 CRM 中的一条记录。', '中文记录。'], p: '四件您的软件自己做不到的事。接入一项，或让它们把工作接力传下去。无需学习新东西，无需更换。', foot: '每项能力也可以用一把密钥，从您自己的软件调用。' },
    c: { h: '左边是您有的。右边是您的团队需要的。', p: '选一项能力。左边是每天送来的东西。右边是它在您的软件里变成的样子，无需任何人重新录入。', foot: '用一项，或把几项连起来：通话变成文字，文字变成字段，字段发出签署。',
      before: { transcribe: '通话 · 14:32 · 6 分钟', extract: '扫描件 · lease.pdf', sign: '草稿 · agreement.pdf', translate: '消息 · 中文' },
      after: {
        transcribe: { t: '文字记录', rows: [['Maya', '我们从五月起采用年度方案。'], ['Sam', '两个席位，计入 Austin 办公室。'], ['下一步', '今天发出协议。']], pill: '已存入档案' },
        extract: { t: '租约', rows: [['租户', 'Maya Patel'], ['期限', '2026 年 5 月 1 日至 2027 年 4 月 30 日'], ['租金', '每月 2,150']], pill: '一条新记录' },
        sign: { t: '协议', rows: [['签署人', 'Maya Patel'], ['时间', '今天 9:40，在手机上'], ['查看', '打开两次，4 页']], pill: '已签署副本已归档' },
        translate: { t: 'Mensaje · Español', rows: [['Para', 'Maya Patel'], ['Asunto', 'Su contrato está listo para firmar'], ['También', '中文, English']], pill: '已附到档案' },
      } },
    d: { h: '接入您的软件做不到的事。', lines: ['听见。', '读懂。', '签好。', '说他们的语言。'], p: '按下一项能力，把它对接到您的软件。每一项都把结果直接放到您的团队已在查看的记录上。', foot: '您的开发者可以用一把密钥，从您自己的软件调用任何能力。', rec: 'Maya Patel · 客户' },
  },
  ja: {
    label: '機能',
    tabs: [{ n: 'A · ライン', s: '仕事がステーションからステーションへ' }, { n: 'B · ホイール', s: '一文で、結果が変わる' }, { n: 'C · ビフォー・アフター', s: '手元にあるもの、届くもの' }, { n: 'D · ドック', s: '機能があなたのソフトウェアに接続' }],
    youHave: '手元にあるもの', yours: 'あなたのソフトウェア', tile: 'Tile Labs', station: 'ステーション {n}', replay: 'もう一度見る', talk: '機能について問い合わせる', drawn: '架空の名前で描いた例です。', drawnSoft: '架空の名前で描いた例です。表示しているソフトウェアは、すでに使われているものの一例にすぎません。', yourSoftware: 'あなたのソフトウェア', own: '自社のソフトウェア', landsIn: '保存先', youGet: '得られるもの', show: '{n}を表示',
    cap: {
      transcribe: { n: 'Transcribe', p: '通話や録音を、話者ごとに区別して文字に起こします。', short: '通話と録音がテキストになります。', land: '文字起こしがその人の記録に', verb: ['聞く', '。'], cTab: '通話と留守番電話が言葉になります', got: '文字起こし · 6分の通話' },
      extract: { n: 'Extract', p: 'PDFやスキャンの項目、表、文字を、チームが探す場所に取り出します。', short: 'フォームとスキャンが項目になります。', land: '項目が新しい記録として', verb: ['読む', '。'], cTab: 'フォームとスキャンが項目になります', got: '賃貸契約 · 12項目' },
      sign: { n: 'Sign', p: 'リンクから署名してもらう書類。誰がいつ何を見たかも記録します。', short: '契約書が送られ、署名されて戻ります。', land: '署名済みの控えを保管', verb: ['署名する', '。'], cTab: '契約書が送られ、署名されて戻ります', got: '契約書 · 9:40に署名' },
      translate: { n: 'Translate', p: '書類、メッセージ、文字起こしを、お客様が読む言語で。', short: '何でも、相手が読む言語で。', land: '翻訳を添付', verb: ['伝える', '、相手の言語で。'], cTab: '何でも、相手が読む言語で', got: 'Mensaje · Español' },
    },
    a: { h: 'あなたのソフトウェアはそのまま。仕事が私たちの機能を通ります。', p: '通話、スキャン、PDFが一方の端から入ります。各ステーションが自分の役割を果たします。出てきたものは、すでに使っているソフトウェアに届きます。', foot: '機能はひとつでも複数でも。開発者は、ひとつのキーで自社のソフトウェアからどの機能も呼び出せます。', paths: [
      { n: '通話が署名済みの契約書に', steps: [['have', '録音した通話'], ['transcribe', '文字に起こす'], ['extract', '条件を取り出す'], ['sign', '署名に送る'], ['yours', 'HubSpotに保存']], items: ['録音した通話', '文字起こし', '名前、日付、プラン', 'スマホから署名', '記録に保存'] },
      { n: '紙が入り、相手の言語で出る', steps: [['have', 'スキャンしたフォーム'], ['extract', '項目を読み取る'], ['translate', '相手の言語で'], ['yours', 'Salesforceに保存']], items: ['スキャンしたフォーム', '12の項目', 'スペイン語で', '新しい記録'] },
      { n: 'スペイン語の通話、日本語のメモ', steps: [['have', 'スペイン語の通話'], ['transcribe', '文字に起こす'], ['translate', '日本語のメモ'], ['yours', 'Zoho CRMに保存']], items: ['スペイン語の通話', 'スペイン語の文字起こし', '日本語のメモ', '両方を記録に'] },
    ] },
    b: { h: '通話を変える、', wheel: ['文字起こしに。', '署名済みの契約書に。', 'CRMの記録に。', '日本語のメモに。'], p: 'あなたのソフトウェアだけではできない4つのこと。ひとつ接続するか、仕事を次々に渡していくか。新しく学ぶことも、乗り換えることもありません。', foot: '各機能は、ひとつのキーで自社のソフトウェアからも呼び出せます。' },
    c: { h: '左に手元にあるもの。右にチームが必要とするもの。', p: '機能を選んでください。左は毎日届くもの。右はそれがあなたのソフトウェアの中で変わった姿。誰も打ち直しません。', foot: 'ひとつ使うか、いくつか組み合わせるか。通話が言葉になり、言葉が項目になり、項目が署名に送られます。',
      before: { transcribe: '通話 · 14:32 · 6分', extract: 'スキャン · lease.pdf', sign: '下書き · agreement.pdf', translate: 'メッセージ · 日本語' },
      after: {
        transcribe: { t: '文字起こし', rows: [['Maya', '5月から年間プランにします。'], ['Sam', '2席、Austinオフィスに請求で。'], ['次', '今日、契約書を送る。']], pill: '記録に保存' },
        extract: { t: '賃貸契約', rows: [['借主', 'Maya Patel'], ['期間', '2026年5月1日から2027年4月30日'], ['家賃', '月額 2,150']], pill: '新しい記録' },
        sign: { t: '契約書', rows: [['署名者', 'Maya Patel'], ['日時', '今日 9:40、スマホから'], ['閲覧', '2回開封、4ページ']], pill: '署名済みの控えを保管' },
        translate: { t: 'Mensaje · Español', rows: [['Para', 'Maya Patel'], ['Asunto', 'Su contrato está listo para firmar'], ['También', '日本語, English']], pill: '記録に添付' },
      } },
    d: { h: 'あなたのソフトウェアにできないことを接続する。', lines: ['聞く。', '読む。', '署名する。', '相手の言語で伝える。'], p: '機能を押すと、あなたのソフトウェアに接続します。それぞれが、チームがすでに見ている記録に結果を直接置きます。', foot: '開発者は、ひとつのキーで自社のソフトウェアからどの機能も呼び出せます。', rec: 'Maya Patel · 顧客' },
  },
  ko: {
    label: '기능',
    tabs: [{ n: 'A · 라인', s: '일이 정거장에서 정거장으로' }, { n: 'B · 휠', s: '한 문장, 결과가 바뀝니다' }, { n: 'C · 전과 후', s: '가진 것, 도착하는 것' }, { n: 'D · 도킹', s: '기능이 소프트웨어에 결합됩니다' }],
    youHave: '가진 것', yours: '당신의 소프트웨어', tile: 'Tile Labs', station: '{n}번 정거장', replay: '다시 보기', talk: '기능에 대해 문의하기', drawn: '가상의 이름으로 그린 예시입니다.', drawnSoft: '가상의 이름으로 그린 예시입니다. 표시된 소프트웨어는 사람들이 이미 쓰는 것의 한 예일 뿐입니다.', yourSoftware: '당신의 소프트웨어', own: '자체 소프트웨어', landsIn: '저장 위치', youGet: '얻는 것', show: '{n} 보기',
    cap: {
      transcribe: { n: 'Transcribe', p: '통화나 녹음을 화자별로 구분해 글로 옮깁니다.', short: '통화와 녹음이 글이 됩니다.', land: '녹취록이 그 사람의 기록에', verb: ['듣', '기.'], cTab: '통화와 음성 메시지가 글이 됩니다', got: '녹취록 · 6분 통화' },
      extract: { n: 'Extract', p: 'PDF나 스캔의 항목, 표, 글자를 팀이 찾는 곳으로 꺼냅니다.', short: '양식과 스캔이 항목이 됩니다.', land: '항목이 새 기록으로', verb: ['읽', '기.'], cTab: '양식과 스캔이 항목이 됩니다', got: '임대 계약 · 12개 항목' },
      sign: { n: 'Sign', p: '링크로 서명받는 문서. 누가 언제 무엇을 봤는지도 기록합니다.', short: '계약서가 나가고 서명되어 돌아옵니다.', land: '서명본, 보관됨', verb: ['서명', '하기.'], cTab: '계약서가 나가고 서명되어 돌아옵니다', got: '계약서 · 9:40 서명' },
      translate: { n: 'Translate', p: '문서, 메시지, 녹취록을 고객이 읽는 언어로.', short: '무엇이든, 상대가 읽는 언어로.', land: '번역본, 첨부됨', verb: ['말하', '기, 상대의 언어로.'], cTab: '무엇이든, 상대가 읽는 언어로', got: 'Mensaje · Español' },
    },
    a: { h: '당신의 소프트웨어는 그대로. 일은 저희 기능을 거칩니다.', p: '통화, 스캔, PDF가 한쪽 끝으로 들어갑니다. 각 정거장이 제 몫을 합니다. 나온 결과는 이미 쓰고 있는 소프트웨어에 저장됩니다.', foot: '기능 하나든 여럿이든. 개발자는 키 하나로 자체 소프트웨어에서 어떤 기능이든 호출할 수 있습니다.', paths: [
      { n: '통화가 서명된 계약서가 됩니다', steps: [['have', '녹음된 통화'], ['transcribe', '글로 옮김'], ['extract', '조건 추출'], ['sign', '서명 요청 발송'], ['yours', 'HubSpot에 저장']], items: ['녹음된 통화', '녹취록', '이름, 날짜, 플랜', '휴대폰에서 서명', '기록에 저장'] },
      { n: '종이가 들어가고, 상대의 언어로 나옵니다', steps: [['have', '스캔한 양식'], ['extract', '항목 읽기'], ['translate', '상대의 언어로'], ['yours', 'Salesforce에 저장']], items: ['스캔한 양식', '열두 개 항목', '스페인어로', '새 기록'] },
      { n: '스페인어 통화, 한국어 메모', steps: [['have', '스페인어 통화'], ['transcribe', '글로 옮김'], ['translate', '한국어 메모'], ['yours', 'Zoho CRM에 저장']], items: ['스페인어 통화', '스페인어 녹취록', '한국어 메모', '둘 다 기록에'] },
    ] },
    b: { h: '통화를 바꾸세요,', wheel: ['녹취록으로.', '서명된 계약서로.', 'CRM의 기록으로.', '한국어 메모로.'], p: '당신의 소프트웨어 혼자서는 못 하는 네 가지. 하나를 연결하거나, 일을 차례로 넘기게 하세요. 새로 배울 것도, 바꿀 것도 없습니다.', foot: '각 기능은 키 하나로 자체 소프트웨어에서도 호출할 수 있습니다.' },
    c: { h: '왼쪽은 가진 것. 오른쪽은 팀에 필요한 것.', p: '기능을 고르세요. 왼쪽은 매일 들어오는 것. 오른쪽은 그것이 당신의 소프트웨어 안에서 바뀐 모습. 아무도 다시 입력하지 않습니다.', foot: '하나를 쓰거나 여럿을 이으세요. 통화가 글이 되고, 글이 항목이 되고, 항목이 서명하러 나갑니다.',
      before: { transcribe: '통화 · 14:32 · 6분', extract: '스캔 · lease.pdf', sign: '초안 · agreement.pdf', translate: '메시지 · 한국어' },
      after: {
        transcribe: { t: '녹취록', rows: [['Maya', '5월부터 연간 플랜으로 하겠습니다.'], ['Sam', '두 자리, Austin 사무실로 청구.'], ['다음', '오늘 계약서를 보냅니다.']], pill: '기록에 저장됨' },
        extract: { t: '임대 계약', rows: [['임차인', 'Maya Patel'], ['기간', '2026년 5월 1일부터 2027년 4월 30일'], ['임대료', '월 2,150']], pill: '새 기록' },
        sign: { t: '계약서', rows: [['서명자', 'Maya Patel'], ['시간', '오늘 9:40, 휴대폰에서'], ['열람', '두 번 열람, 4쪽']], pill: '서명본 보관됨' },
        translate: { t: 'Mensaje · Español', rows: [['Para', 'Maya Patel'], ['Asunto', 'Su contrato está listo para firmar'], ['También', '한국어, English']], pill: '기록에 첨부됨' },
      } },
    d: { h: '당신의 소프트웨어가 못 하는 것을 연결하세요.', lines: ['듣기.', '읽기.', '서명하기.', '상대의 언어로 말하기.'], p: '기능을 누르면 당신의 소프트웨어에 결합됩니다. 각 기능은 팀이 이미 보는 기록에 결과를 바로 놓습니다.', foot: '개발자는 키 하나로 자체 소프트웨어에서 어떤 기능이든 호출할 수 있습니다.', rec: 'Maya Patel · 고객' },
  },
  pt: {
    label: 'Capacidades',
    tabs: [{ n: 'A · A linha', s: 'O trabalho passa de estação em estação' }, { n: 'B · A roda', s: 'Uma frase, e o resultado gira' }, { n: 'C · Antes e depois', s: 'O que você tem, o que chega' }, { n: 'D · O encaixe', s: 'As capacidades se encaixam no seu software' }],
    youHave: 'Você tem', yours: 'Seu software', tile: 'Tile Labs', station: 'Estação {n}', replay: 'Ver de novo', talk: 'Fale conosco sobre uma capacidade', drawn: 'Exemplo desenhado com nomes inventados.', drawnSoft: 'Exemplo desenhado com nomes inventados. O software mostrado é só um exemplo do que as pessoas já usam.', yourSoftware: 'Seu software', own: 'Seu próprio software', landsIn: 'Vai para', youGet: 'Você recebe', show: 'Mostrar {n}',
    cap: {
      transcribe: { n: 'Transcribe', p: 'Uma chamada ou uma gravação, por escrito, com cada pessoa distinguida.', short: 'Chamadas e gravações viram texto.', land: 'A transcrição no registro da pessoa', verb: ['Ouça', 'isso.'], cTab: 'Chamadas e recados de voz viram palavras', got: 'Transcrição · chamada de 6 min' },
      extract: { n: 'Extract', p: 'Os campos, tabelas e palavras de um PDF ou de uma digitalização, extraídos para onde a sua equipe os procura.', short: 'Formulários e digitalizações viram campos.', land: 'Os campos como um novo registro', verb: ['Leia', 'isso.'], cTab: 'Formulários e digitalizações viram campos', got: 'Contrato de aluguel · 12 campos' },
      sign: { n: 'Sign', p: 'Um documento enviado para assinatura por um link, com registro de quem viu o quê e quando.', short: 'Contratos saem e voltam assinados.', land: 'A cópia assinada, arquivada', verb: ['Assine', 'isso.'], cTab: 'Contratos saem e voltam assinados', got: 'Contrato · assinado às 9:40' },
      translate: { n: 'Translate', p: 'Um documento, uma mensagem ou uma transcrição no idioma que o seu cliente lê.', short: 'Qualquer coisa no idioma que eles leem.', land: 'A tradução, anexada', verb: ['Diga', 'no idioma deles.'], cTab: 'Qualquer coisa no idioma que eles leem', got: 'Mensaje · Español' },
    },
    a: { h: 'Seu software fica. O trabalho passa pelo nosso.', p: 'Uma chamada, uma digitalização ou um PDF entra por uma ponta. Cada estação faz a sua parte. O que sai vai para o software que você já usa.', foot: 'Uma capacidade ou várias. Seus desenvolvedores também podem chamar qualquer uma delas do seu próprio software, com uma única chave.', paths: [
      { n: 'Uma chamada vira um contrato assinado', steps: [['have', 'Uma chamada gravada'], ['transcribe', 'Por escrito'], ['extract', 'Termos extraídos'], ['sign', 'Enviado para assinatura'], ['yours', 'Salvo no HubSpot']], items: ['Uma chamada gravada', 'Uma transcrição', 'Nome, data, plano', 'Assinado pelo celular', 'No registro'] },
      { n: 'Papel entra, o idioma deles sai', steps: [['have', 'Um formulário digitalizado'], ['extract', 'Campos lidos'], ['translate', 'No idioma deles'], ['yours', 'Salvo no Salesforce']], items: ['Um formulário digitalizado', 'Doze campos', 'Em espanhol', 'Um novo registro'] },
      { n: 'Uma chamada em espanhol, notas em português', steps: [['have', 'Uma chamada em espanhol'], ['transcribe', 'Por escrito'], ['translate', 'Notas em português'], ['yours', 'Salvo no Zoho CRM']], items: ['Uma chamada em espanhol', 'Transcrição em espanhol', 'Notas em português', 'As duas no registro'] },
    ] },
    b: { h: 'Transforme uma chamada em', wheel: ['uma transcrição.', 'um contrato assinado.', 'um registro no seu CRM.', 'notas em português.'], p: 'Quatro coisas que o seu software não faz sozinho. Conecte uma, ou deixe que passem o trabalho adiante. Nada novo para aprender, nada para trocar.', foot: 'Cada capacidade também pode ser chamada do seu próprio software, com uma única chave.' },
    c: { h: 'O que você tem, à esquerda. O que a sua equipe precisa, à direita.', p: 'Escolha uma capacidade. À esquerda está o que chega todo dia. À direita, no que isso se transforma, no seu software, sem ninguém digitar de novo.', foot: 'Use uma, ou junte várias: uma chamada vira palavras, as palavras viram campos, os campos saem para assinatura.',
      before: { transcribe: 'Chamada · 14:32 · 6 min', extract: 'Digitalização · lease.pdf', sign: 'Rascunho · agreement.pdf', translate: 'Mensagem · Português' },
      after: {
        transcribe: { t: 'Transcrição', rows: [['Maya', 'Vamos ficar com o plano anual a partir de maio.'], ['Sam', 'Duas vagas, faturadas para o escritório de Austin.'], ['Próximo', 'Enviar o contrato hoje.']], pill: 'Salvo no registro' },
        extract: { t: 'Contrato de aluguel', rows: [['Inquilino', 'Maya Patel'], ['Prazo', '1 de maio de 2026 a 30 de abril de 2027'], ['Aluguel', '2.150 por mês']], pill: 'Um novo registro' },
        sign: { t: 'Contrato', rows: [['Assinado por', 'Maya Patel'], ['Quando', 'Hoje, 9:40, pelo celular'], ['Visto', 'Aberto duas vezes, 4 páginas']], pill: 'Cópia assinada arquivada' },
        translate: { t: 'Mensaje · Español', rows: [['Para', 'Maya Patel'], ['Asunto', 'Su contrato está listo para firmar'], ['También', 'Português, English']], pill: 'Anexado ao registro' },
      } },
    d: { h: 'Conecte o que o seu software não faz.', lines: ['Ouça.', 'Leia.', 'Assine.', 'Diga no idioma deles.'], p: 'Toque em uma capacidade para encaixá-la no seu software. Cada uma deixa o resultado direto no registro que a sua equipe já consulta.', foot: 'Seus desenvolvedores podem chamar qualquer capacidade do seu próprio software, com uma única chave.', rec: 'Maya Patel · Cliente' },
  },
};
