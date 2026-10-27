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
};
