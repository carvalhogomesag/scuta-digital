/**
 * PrivacyPolicy.tsx — Scuta Digital
 * Política de Privacidade completa
 * Conformidade: RGPD (UE/Portugal) · LGPD (Brasil) · UK GDPR
 */

import { motion } from 'motion/react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { Language } from '../lib/constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ---------------------------------------------------------------------------
// CONTEÚDO LEGAL POR IDIOMA
// ---------------------------------------------------------------------------

const CONTENT = {
  'pt-pt': {
    title: 'Política de Privacidade',
    updated: 'Última atualização: 1 de Janeiro de 2025',
    intro: 'A Scuta Digital ("nós", "nosso") está comprometida com a proteção dos seus dados pessoais. Esta política explica quais os dados que recolhemos, como os usamos, com base em que fundamento legal, e quais os seus direitos ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD — Regulamento UE 2016/679) e da legislação aplicável.',
    sections: [
      {
        title: '1. Quem é o responsável pelo tratamento',
        content: 'Scuta Digital, com sede em Portugal. Contacto do responsável pelo tratamento: appschedy@gmail.com. Para questões relativas à proteção de dados, pode contactar-nos através deste endereço de email.',
      },
      {
        title: '2. Que dados recolhemos e porquê',
        items: [
          { label: 'Formulário de contacto', text: 'Nome, endereço de email, tipo de negócio e mensagem. Base legal: execução de medidas pré-contratuais a pedido do titular (Art. 6.º, n.º 1, al. b) do RGPD). Finalidade: responder ao seu pedido de orçamento.' },
          { label: 'Google Analytics', text: 'Endereço IP anonimizado, tipo de browser, sistema operativo, páginas visitadas, duração da visita, fonte de tráfego. Base legal: consentimento (Art. 6.º, n.º 1, al. a) do RGPD) — só recolhemos estes dados após o seu consentimento explícito no banner de cookies. Finalidade: análise do desempenho do site para fins de melhoria do serviço.' },
          { label: 'Cookies técnicos', text: 'Preferências de cookies e idioma. Base legal: interesse legítimo (Art. 6.º, n.º 1, al. f) do RGPD). Finalidade: funcionamento básico do site.' },
        ],
      },
      {
        title: '3. Cookies e tecnologias de rastreio',
        content: 'Utilizamos os seguintes tipos de cookies:\n\n• Cookies essenciais — necessários para o funcionamento do site. Não requerem consentimento.\n• Cookies de análise (Google Analytics) — só são ativados com o seu consentimento explícito. O Google Analytics é configurado com anonimização de IP ativa. Os dados são transferidos para servidores do Google nos Estados Unidos com base nas Cláusulas Contratuais Padrão da Comissão Europeia.\n\nPode gerir ou revogar o seu consentimento a qualquer momento através do banner de cookies ou limpando os dados do browser.',
      },
      {
        title: '4. Com quem partilhamos os seus dados',
        content: 'Não vendemos nem cedemos os seus dados pessoais a terceiros para fins comerciais. Os seus dados podem ser partilhados com:\n\n• Google LLC (Google Analytics) — transferência para os EUA com base em Cláusulas Contratuais Padrão.\n• WhatsApp/Meta — apenas quando utiliza o botão de contacto direto, os dados que partilha são processados pela Meta nos termos da sua política de privacidade.\n\nNão realizamos qualquer outra transferência internacional de dados.',
      },
      {
        title: '5. Por quanto tempo guardamos os seus dados',
        content: '• Dados do formulário de contacto: 12 meses após o último contacto, salvo obrigação legal de conservação mais longa.\n• Dados de analytics: 14 meses (configuração padrão do Google Analytics GA4).\n• Preferências de cookies: 12 meses (armazenamento local no seu browser).',
      },
      {
        title: '6. Os seus direitos',
        content: 'Ao abrigo do RGPD, tem os seguintes direitos:\n\n• Direito de acesso — saber que dados temos sobre si.\n• Direito de retificação — corrigir dados incorretos.\n• Direito de apagamento ("direito a ser esquecido").\n• Direito de limitação do tratamento.\n• Direito de portabilidade dos dados.\n• Direito de oposição ao tratamento.\n• Direito de retirar o consentimento a qualquer momento, sem afetar a licitude do tratamento anterior.\n\nPara exercer qualquer um destes direitos, contacte-nos em appschedy@gmail.com. Tem também o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD) em www.cnpd.pt.',
      },
      {
        title: '7. Segurança',
        content: 'Adotamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra acesso não autorizado, perda ou destruição. A comunicação entre o seu browser e o nosso site é encriptada via HTTPS.',
      },
      {
        title: '8. Alterações a esta política',
        content: 'Podemos atualizar esta política periodicamente. A data de "última atualização" no topo desta página indica quando foi revista pela última vez. Em caso de alterações significativas, notificaremos os utilizadores através de aviso no site.',
      },
      {
        title: '9. Contacto',
        content: 'Para qualquer questão sobre esta política ou sobre o tratamento dos seus dados pessoais, contacte-nos em: appschedy@gmail.com',
      },
    ],
  },

  'pt-br': {
    title: 'Política de Privacidade',
    updated: 'Última atualização: 1 de Janeiro de 2025',
    intro: 'A Scuta Digital ("nós", "nosso") está comprometida com a proteção dos seus dados pessoais. Esta política explica quais dados coletamos, como os usamos, com base em qual fundamento legal, e quais são os seus direitos nos termos da Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e do RGPD europeu.',
    sections: [
      {
        title: '1. Controlador dos dados',
        content: 'Scuta Digital, com sede em Portugal. Contato do encarregado de dados (DPO): appschedy@gmail.com.',
      },
      {
        title: '2. Dados que coletamos e por quê',
        items: [
          { label: 'Formulário de contato', text: 'Nome, e-mail, tipo de negócio e mensagem. Base legal (LGPD): execução de contrato ou procedimentos preliminares (Art. 7º, V). Finalidade: responder ao seu pedido de orçamento.' },
          { label: 'Google Analytics', text: 'IP anonimizado, tipo de navegador, sistema operacional, páginas visitadas, duração da visita, fonte de tráfego. Base legal (LGPD): consentimento (Art. 7º, I) — só coletamos após seu consentimento explícito no banner de cookies. Finalidade: análise de desempenho do site.' },
          { label: 'Cookies técnicos', text: 'Preferências de cookies e idioma. Base legal: legítimo interesse (Art. 7º, IX da LGPD). Finalidade: funcionamento básico do site.' },
        ],
      },
      {
        title: '3. Cookies e tecnologias de rastreamento',
        content: 'Utilizamos os seguintes tipos de cookies:\n\n• Cookies essenciais — necessários para o funcionamento do site. Não requerem consentimento.\n• Cookies de análise (Google Analytics) — só são ativados com o seu consentimento explícito. O Google Analytics é configurado com anonimização de IP ativa.\n\nVocê pode gerenciar ou revogar seu consentimento a qualquer momento pelo banner de cookies ou limpando os dados do navegador.',
      },
      {
        title: '4. Com quem compartilhamos seus dados',
        content: 'Não vendemos nem cedemos seus dados pessoais a terceiros para fins comerciais. Seus dados podem ser compartilhados com:\n\n• Google LLC (Google Analytics) — transferência internacional com base em Cláusulas Contratuais Padrão.\n• WhatsApp/Meta — apenas quando você usa o botão de contato direto.\n\nNenhuma outra transferência internacional de dados é realizada.',
      },
      {
        title: '5. Por quanto tempo guardamos seus dados',
        content: '• Dados do formulário de contato: 12 meses após o último contato.\n• Dados de analytics: 14 meses (configuração padrão do Google Analytics GA4).\n• Preferências de cookies: 12 meses (armazenamento local no seu navegador).',
      },
      {
        title: '6. Seus direitos (LGPD)',
        content: 'Nos termos da LGPD, você tem os seguintes direitos:\n\n• Confirmação da existência de tratamento.\n• Acesso aos dados.\n• Correção de dados incompletos, inexatos ou desatualizados.\n• Anonimização, bloqueio ou eliminação de dados desnecessários.\n• Portabilidade dos dados.\n• Eliminação dos dados tratados com consentimento.\n• Informação sobre compartilhamento.\n• Revogação do consentimento a qualquer momento.\n• Peticionar à Autoridade Nacional de Proteção de Dados (ANPD) em www.gov.br/anpd.\n\nPara exercer qualquer direito, contate-nos em: appschedy@gmail.com',
      },
      {
        title: '7. Segurança',
        content: 'Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, perda ou destruição. A comunicação é encriptada via HTTPS.',
      },
      {
        title: '8. Alterações nesta política',
        content: 'Podemos atualizar esta política periodicamente. A data de "última atualização" indica quando foi revisada pela última vez.',
      },
      {
        title: '9. Contato',
        content: 'Para qualquer dúvida sobre esta política: appschedy@gmail.com',
      },
    ],
  },

  'en': {
    title: 'Privacy Policy',
    updated: 'Last updated: 1 January 2025',
    intro: 'Scuta Digital ("we", "our") is committed to protecting your personal data. This policy explains what data we collect, how we use it, the legal basis for doing so, and your rights under the UK General Data Protection Regulation (UK GDPR), the EU General Data Protection Regulation (GDPR — Regulation EU 2016/679), and applicable data protection law.',
    sections: [
      {
        title: '1. Data Controller',
        content: 'Scuta Digital, based in Portugal. Data protection contact: appschedy@gmail.com.',
      },
      {
        title: '2. Data we collect and why',
        items: [
          { label: 'Contact form', text: 'Name, email address, business type, and message. Legal basis: pre-contractual measures at the request of the data subject (Art. 6(1)(b) GDPR). Purpose: to respond to your enquiry.' },
          { label: 'Google Analytics', text: 'Anonymised IP address, browser type, operating system, pages visited, session duration, traffic source. Legal basis: consent (Art. 6(1)(a) GDPR) — collected only after your explicit consent via the cookie banner. Purpose: site performance analysis to improve our service.' },
          { label: 'Technical cookies', text: 'Cookie preferences and language settings. Legal basis: legitimate interests (Art. 6(1)(f) GDPR). Purpose: basic site functionality.' },
        ],
      },
      {
        title: '3. Cookies and tracking technologies',
        content: 'We use the following types of cookies:\n\n• Essential cookies — required for the site to function. No consent required.\n• Analytics cookies (Google Analytics) — only activated with your explicit consent. IP anonymisation is enabled. Data is transferred to Google servers in the United States under Standard Contractual Clauses approved by the European Commission.\n\nYou can manage or withdraw your consent at any time via the cookie banner or by clearing your browser data.',
      },
      {
        title: '4. Who we share your data with',
        content: 'We do not sell or share your personal data with third parties for commercial purposes. Your data may be shared with:\n\n• Google LLC (Google Analytics) — transfer to the US under Standard Contractual Clauses.\n• WhatsApp/Meta — only when you use the direct contact button; data is then processed by Meta under their privacy policy.\n\nNo other international data transfers take place.',
      },
      {
        title: '5. How long we keep your data',
        content: '• Contact form data: 12 months after the last interaction, unless a longer retention period is required by law.\n• Analytics data: 14 months (Google Analytics GA4 default).\n• Cookie preferences: 12 months (stored locally in your browser).',
      },
      {
        title: '6. Your rights',
        content: 'Under the UK GDPR and EU GDPR, you have the following rights:\n\n• Right of access — to know what data we hold about you.\n• Right to rectification — to correct inaccurate data.\n• Right to erasure ("right to be forgotten").\n• Right to restriction of processing.\n• Right to data portability.\n• Right to object to processing.\n• Right to withdraw consent at any time, without affecting the lawfulness of processing before withdrawal.\n\nTo exercise any of these rights, contact us at appschedy@gmail.com. You also have the right to lodge a complaint with the Information Commissioner\'s Office (ICO) at www.ico.org.uk (UK) or your local supervisory authority (EU).',
      },
      {
        title: '7. Security',
        content: 'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or destruction. All communication between your browser and our site is encrypted via HTTPS.',
      },
      {
        title: '8. Changes to this policy',
        content: 'We may update this policy from time to time. The "last updated" date at the top of this page indicates when it was last revised. For material changes, we will notify users via a notice on the site.',
      },
      {
        title: '9. Contact',
        content: 'For any questions about this policy or our data processing: appschedy@gmail.com',
      },
    ],
  },

  'es': {
    title: 'Política de Privacidad',
    updated: 'Última actualización: 1 de enero de 2025',
    intro: 'Scuta Digital ("nosotros") está comprometida con la protección de tus datos personales. Esta política explica qué datos recopilamos, cómo los usamos, la base legal para hacerlo y tus derechos conforme al Reglamento General de Protección de Datos (RGPD — Reglamento UE 2016/679) y la normativa aplicable.',
    sections: [
      {
        title: '1. Responsable del tratamiento',
        content: 'Scuta Digital, con sede en Portugal. Contacto: appschedy@gmail.com.',
      },
      {
        title: '2. Datos que recopilamos y por qué',
        items: [
          { label: 'Formulario de contacto', text: 'Nombre, correo electrónico, tipo de negocio y mensaje. Base legal: medidas precontractuales a petición del interesado (Art. 6.1.b RGPD). Finalidad: responder a tu solicitud de presupuesto.' },
          { label: 'Google Analytics', text: 'IP anonimizada, tipo de navegador, sistema operativo, páginas visitadas, duración de la visita, fuente de tráfico. Base legal: consentimiento (Art. 6.1.a RGPD) — solo se recopilan tras tu consentimiento explícito en el banner de cookies. Finalidad: análisis del rendimiento del sitio.' },
          { label: 'Cookies técnicas', text: 'Preferencias de cookies e idioma. Base legal: interés legítimo (Art. 6.1.f RGPD). Finalidad: funcionamiento básico del sitio.' },
        ],
      },
      {
        title: '3. Cookies y tecnologías de seguimiento',
        content: 'Utilizamos los siguientes tipos de cookies:\n\n• Cookies esenciales — necesarias para el funcionamiento del sitio. No requieren consentimiento.\n• Cookies de análisis (Google Analytics) — solo se activan con tu consentimiento explícito. La anonimización de IP está activada. Los datos se transfieren a servidores de Google en EE.UU. bajo Cláusulas Contractuales Estándar.\n\nPuedes gestionar o revocar tu consentimiento en cualquier momento desde el banner de cookies.',
      },
      {
        title: '4. Con quién compartimos tus datos',
        content: 'No vendemos ni cedemos tus datos personales a terceros con fines comerciales. Tus datos pueden compartirse con:\n\n• Google LLC (Google Analytics) — transferencia a EE.UU. bajo Cláusulas Contractuales Estándar.\n• WhatsApp/Meta — solo cuando usas el botón de contacto directo.\n\nNo se realizan otras transferencias internacionales de datos.',
      },
      {
        title: '5. Durante cuánto tiempo conservamos tus datos',
        content: '• Datos del formulario de contacto: 12 meses tras el último contacto.\n• Datos de analytics: 14 meses (configuración estándar de Google Analytics GA4).\n• Preferencias de cookies: 12 meses (almacenamiento local en tu navegador).',
      },
      {
        title: '6. Tus derechos',
        content: 'Conforme al RGPD, tienes los siguientes derechos:\n\n• Derecho de acceso.\n• Derecho de rectificación.\n• Derecho de supresión ("derecho al olvido").\n• Derecho a la limitación del tratamiento.\n• Derecho a la portabilidad.\n• Derecho de oposición.\n• Derecho a retirar el consentimiento en cualquier momento.\n\nPara ejercer tus derechos, contáctanos en appschedy@gmail.com. También puedes reclamar ante la Agencia Española de Protección de Datos (AEPD) en www.aepd.es o ante tu autoridad supervisora local.',
      },
      {
        title: '7. Seguridad',
        content: 'Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos personales frente al acceso no autorizado, pérdida o destrucción. La comunicación está cifrada mediante HTTPS.',
      },
      {
        title: '8. Cambios en esta política',
        content: 'Podemos actualizar esta política periódicamente. La fecha de "última actualización" indica cuándo fue revisada por última vez.',
      },
      {
        title: '9. Contacto',
        content: 'Para cualquier consulta sobre esta política: appschedy@gmail.com',
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// TIPOS
// ---------------------------------------------------------------------------
type Section = {
  title: string;
  content?: string;
  items?: { label: string; text: string }[];
};

// ---------------------------------------------------------------------------
// COMPONENTE
// ---------------------------------------------------------------------------
export default function PrivacyPolicy({
  lang,
  setLang,
}: {
  lang: Language;
  setLang: (l: Language) => void;
}) {
  const c = CONTENT[lang] ?? CONTENT['pt-pt'];

  return (
    <div className="min-h-screen bg-scuta-primary">
      <Navbar lang={lang} setLang={setLang} />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Voltar */}
            <a
              href="/"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-scuta-silk text-xs font-bold uppercase tracking-widest mb-10 transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Voltar ao site
            </a>

            {/* Cabeçalho */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-scuta-highlight/10 border border-scuta-highlight/20 flex items-center justify-center shrink-0">
                <ShieldCheck size={24} className="text-scuta-highlight" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-scuta-silk tracking-tighter">
                {c.title}
              </h1>
            </div>
            <p className="text-slate-500 font-mono text-xs mb-4 ml-16">{c.updated}</p>

            {/* Badges de conformidade */}
            <div className="flex flex-wrap gap-2 mb-12 ml-16">
              {['RGPD / EU GDPR', 'LGPD', 'UK GDPR'].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-scuta-highlight/10 text-scuta-highlight border border-scuta-highlight/20"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Introdução */}
            <div className="p-6 rounded-3xl bg-scuta-surface/50 border border-white/5 mb-12">
              <p className="text-slate-300 leading-relaxed font-medium">{c.intro}</p>
            </div>

            {/* Secções */}
            <div className="space-y-10">
              {c.sections.map((section: Section, index: number) => (
                <section key={index} className="space-y-4">
                  <h2 className="text-xl font-black text-scuta-highlight tracking-tight">
                    {section.title}
                  </h2>

                  {/* Conteúdo simples */}
                  {section.content && (
                    <div className="text-slate-400 leading-relaxed text-base font-medium whitespace-pre-line">
                      {section.content}
                    </div>
                  )}

                  {/* Lista de itens com label em destaque */}
                  {section.items && (
                    <div className="space-y-4">
                      {section.items.map((item, i) => (
                        <div
                          key={i}
                          className="p-5 rounded-2xl bg-scuta-surface/50 border border-white/5"
                        >
                          <p className="text-scuta-silk font-black text-sm mb-2">
                            {item.label}
                          </p>
                          <p className="text-slate-400 text-sm leading-relaxed font-medium">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Rodapé da página */}
            <div className="mt-16 pt-8 border-t border-white/5 text-center">
              <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
                Scuta Digital · appschedy@gmail.com
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}