import Image from "next/image";
import Head from 'next/head'

const ConselhoInternacional = () => {
  return (
    
    <div className="h-screen bg-gray-50 mt-28">
      <Head>
        <title>RedeSF - Conselho Internacional</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-bold text-center text-gray-800 text-3xl py-4 my-4">
        <h1>Conselho Inernacional</h1>
      </div>

      {/* Cards */}
      {/* Card COntent */}

      <div className="lg:flex p-8 lg:items-center lg:px-24 lg:py-2 xl:p-48">
        <div className="flex-grow bg-white shadow-lg rounded-md border p-6">
          <div className="sm:flex sm:items-center sm:mx-auto">
            <img
              src="/conselho-internacional/mocha.png"
              className="sm:flex-shrink-0 sm:mx-0 h-24 mx-auto mb-4"
            />
            <div className="sm:ml-4 sm:text-left text-center">
              <h4 className="">
                <strong className="text-sm text-gray-800">
                  Presidenta: Aida Garcia Naranjo | 
                </strong>
                <a
                  className="text-xs  ml-2 text-blue-400"
                  href="mailto:a.mocha@redesf.org"
                >
                  a.mocha@redesf.org
                </a>
              </h4>
              <p className="text-gray-600 text-sm font-light text-justify">
                Educadora, cientista política, pesquisadora social e política,
                especialista em gênero, em captação de recursos multilaterais e
                bilaterais, além de ser promotora cultural. Foi Embaixadora do
                Peru na República Oriental do Uruguai, representante do Peru na
                Associação Latino-americana de Integração (ALADI) e no MERCOSUL,
                foi presidenta do Comitê de Representantes da ALADI e Ministra
                da Mulher e do Desenvolvimento.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex p-8 lg:items-center lg:px-24 lg:py-2 xl:p-48">
        <div className="flex-grow bg-white shadow-lg rounded-md border p-6">
          <div className="sm:flex sm:items-center sm:mx-auto">
            <img
              src="/conselho-internacional/Valeria-Chiavetta.png"
              className="sm:flex-shrink-0 sm:mx-0 h-24 mx-auto mb-4"
            />
            <div className="sm:ml-4 sm:text-left text-center">
              <h4 className="">
                <strong className="text-sm text-gray-800">
                Valeria Chiavetta | 
                </strong>
                <a
                  className="text-xs ml-2 text-blue-400"
                  href="mailto:v.chiavetta@redesf.org"
                >
                v.chiavetta@redesf.org 
                </a>
              </h4>
              <p className="text-gray-600 text-sm font-light text-justify">
              Licenciada em Serviço Social, professora no Departamento de Práticas de Serviço Social e docente da Cátedra. Eletiva de Direitos Humanos da Faculdade de Ciências Políticas e Sociais da Universidade Nacional de Cuyo, em Mendoza, na Argentina. É presidenta da Associação Ecumênica de Cuyo, coordenadora do Projeto Migrantes da Associação Ecumênica de Cuyo e coordenadora nacional argentina do Programa Mercosul Social e Solidário (PMSS).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex p-8 lg:items-center lg:px-24 lg:py-2 xl:p-48">
        <div className="flex-grow bg-white shadow-lg rounded-md border p-6">
          <div className="sm:flex sm:items-center sm:mx-auto">
            <img
              src="/conselho-internacional/Patricia-Gainza.png"
              className="sm:flex-shrink-0 sm:mx-0 h-24 mx-auto mb-4"
            />
            <div className="sm:ml-4 sm:text-left text-center">
              <h4 className="">
                <strong className="text-sm text-gray-800">
                Patricia Gainza | 
                </strong>
                <a
                  className="text-xs ml-2 text-blue-400"
                  href="mailto:p.gainza@redesf.org"
                >
                p.gainza@redesf.org 
                </a>
              </h4>
              <p className="text-gray-600 text-sm font-light text-justify">
              Mestre em Sociologia com especialização em Integração, Mercosul e Desenvolvimento, exclusão social e redução da pobreza. Atualmente é diretora da Divisão de Direitos Humanos da Direção Nacional de Promoção Sociocultural, Ministério do Desenvolvimento Social (MIDES), em Montevideo, no Uruguai.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex p-8 lg:items-center lg:px-24 lg:py-2 xl:p-48">
        <div className="flex-grow bg-white shadow-lg rounded-md border p-6">
          <div className="sm:flex sm:items-center sm:mx-auto">
            <img
              src="/conselho-internacional/Alfonso-Ramiro.jpg"
              className="sm:flex-shrink-0 sm:mx-0 h-24 mx-auto mb-4"
            />
            <div className="sm:ml-4 sm:text-left text-center">
              <h4 className="">
                <strong className="text-sm text-gray-800">
                Alfonso Ramiro Hinojosa Gordonava | 
                </strong>
                <a
                  className="text-xs ml-2 text-blue-400"
                  href="mailto:a.hinojosa@redesf.org"
                >
                a.hinojosa@redesf.org 
                </a>
              </h4>
              <p className="text-gray-600 text-sm font-light text-justify">
              Sociólogo, mestre em Ciências Sociais com especialidade em Antropologia. Membro fundador da Rede Sem Fronteiras. Membro do Grupo de Trabalho sobre Migração e Cultura CLACSO (Conselho Latinoamericano de Ciências Sociais). Professor e pesquisador convidado do Instituto de Pesquisa, Interação e Pós-graduação da Carreira de Serviço Social da UMSA. Pesquisador da temática migratória para instituições como PIEB (Programa de Investigação Estratégica de Bolivia), CESU (Centro Universitário de Estudos Superiores), defensor do povo. Membro do CEDLA (Centro de Estudos para o Desenvolvimento do Trabalho e Agrário), Coordenador da Mulher, Oxfam Bolívia e da Fundação pela Paz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConselhoInternacional;
