import Image from "next/image";
import Head from "next/head";

export default function Post() {
  return (
    <div>
      <Head>
        <title>RedeSF - Post</title>
        // {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <section className="bg-purple-800 py-12 px-4 md:py-20">
        <div className="md:w-1/3 mx-auto">
          <div className="text-gray-50 text-3xl font-semibold text-center">
            <h1>
              Debate e priorização de propostas em Assembleias de Convergência
            </h1>
          </div>
          <div className="flex text-gray-50 text-xs font-light text-center justify-center space-x-4 mt-4">
            <p>Author</p>
            <p>|</p>
            <p>25 Mar 2021</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 rounded-xl shadow-lg py-2 md:w-2/5 md:-mt-10 mx-auto">
        <div className="text-center px-4">
          <div className="rounded-lg p-2 -mt-10 md:mt-0">
            <Image
              className="rounded-xl shadow-xl text-center"
              src="/blog/blog-cover.jpg"
              alt="Blog - Rede Sem Fronteiras"
              width={680}
              height={450}
            />
          </div>
          <div className='text-sm font-light text-gray-700 px-4 py-2 md:p-8 tracking-wider text-justify'>
            <p>
              Em assembleia, participantes reuniram-se por dois dias para
              debater e priorizar as propostas geradas ao longo das atividades
              autogestionadas Por: Maria Lígia Vieira de Melo Entre os dias 23 e
              24 de março foram realizadas as Assembleias de Convergências do
              FSEM dos Eixos Econômico, Ambiental, Social e Cultural, Direitos
              Humanos e Direitos Políticos com apresentação das propostas
              formuladas pelas organizações que participaram das atividades
              autogestionadas, além de debates e elaboração das propostas finais
              a serem exibidas na nossa Assembleia Final no dia 26 de março as
              14 horas (horário de Lisboa). As primeiras assembleias trataram
              sobre os eixos: Direitos Econômicos e Direitos Ambientais, Sociais
              e Culturais No dia 23, tivemos a nossa primeira Assembleia de
              Convergência do Eixo Econômico com a apresentação das 21 propostas
              ao público para debate, pela Alexia Shellard da Diáspora Sem
              Fronteiras Portugal e com o objetivo de elaborar 3 propostas
              finais, as quais foram lidas pela Helena Schimitz da Diáspora sem
              Fronteiras, a primeira abordou a Defesa da Regularização dos
              Migrantes; a segunda, os Canais de Migração Regular e Segura e a
              terceira, a Aplicação de Tratados Internacionais e denúncia de não
              cumprimento. Com a brilhante intervenção dos participantes do
              fórum foi sugerido a junção da primeira e da segunda proposta, e a
              criação de uma proposta sobre o direito trabalhista e a
              precariedade laboral.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
