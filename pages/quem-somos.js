import Image from "next/image";
import Head from "next/head";
//import LogosMembros from '../utils/LogosMembros'

export default function About({ aboutPage }) {
  return (
    <div className="min-h-screen bg-white mt-16 mb-20">
      <Head>
        <title>{aboutPage.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto py-4">
        <Image
          src={aboutPage.singleCover01.url}
          alt="Rede Sem Fronteiras"
          layout="responsive"
          width={1280}
          height={320}
        />
      </div>

      <section>
        <div className="container px-5 py-12 mx-auto">
          <div className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-left border-b">
            <h1>{aboutPage.subTitle01}</h1>
          </div>
          <div className="mx-auto text-justify font-light text-gray-600 body-font leading-relaxed">
            {aboutPage.content01}
          </div>

          <div className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 mt-10 text-left border-b">
            <h2>{aboutPage.subTitle02}</h2>
          </div>
          <div className="container mx-auto text-justify font-light text-gray-600 body-font leading-relaxed">
            <p>{aboutPage.content02}</p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-left border-b">
            <h2>{aboutPage.subTitle03}</h2>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border flex items-center border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 p-6 flex items-center justify-center ">
                  <h3 className="font-bold text-5xl text-yellow-600">1</h3>
                </div>
                <p className="leading-relaxed text-base">
                  {aboutPage.textObjetivo01}
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border flex items-center border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 p-6 flex items-center justify-center ">
                  <h3 className="font-bold text-5xl text-yellow-600">2</h3>
                </div>
                <p className="leading-relaxed text-base">
                  {aboutPage.textObjetivo02}
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border flex items-center border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 p-6 flex items-center justify-center ">
                  <h3 className="font-bold text-5xl text-yellow-600">3</h3>
                </div>
                <p className="leading-relaxed text-base">
                  {aboutPage.textObjetivo03}
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border flex items-center border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 p-6 flex items-center justify-center ">
                  <h3 className="font-bold text-5xl text-yellow-600">4</h3>
                </div>
                <p className="leading-relaxed text-base">
                  {aboutPage.textObjetivo04}
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border flex items-center border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 p-6 flex items-center justify-center ">
                  <h3 className="font-bold text-5xl text-yellow-600">5</h3>
                </div>
                <p className="leading-relaxed text-base">
                  {aboutPage.textObjetivo05}
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border flex items-center border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 p-6 flex items-center justify-center ">
                  <h3 className="font-bold text-5xl text-yellow-600">6</h3>
                </div>
                <p className="leading-relaxed text-base">
                  {aboutPage.textObjetivo06}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto text-gray-600 body-font">
        <div className="px-5 py-12">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              <h2>{aboutPage.subTitle04}</h2>
            </h2>
          </div>
          <Image
            src={aboutPage.singleCover02.url}
            alt="Rede Sem Fronteiras"
            layout="responsive"
            width={1920}
            height={480}
          />
          {/* <div className='md:px-20 mt-6'>
          <LogosMembros/>
          </div> */}
        </div>

        <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center space-y-2 items-center">
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/organizacao-filhos-do-mundo_lg.png"
              alt="Organização Filhos do Mundo"
              width={90}
              height={90}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/cdh-lg-200x142.png"
              alt="CDH"
              width={100}
              height={71}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/casa-do-brasil-de-lisboa-lg.png"
              alt="Casa do Brasil de Lisboa"
              width={90}
              height={90}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/cdhic-color-horizontal-espacio-sin-fronteras-esf-100x50.png"
              alt="CDHIC"
              width={100}
              height={50}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/proandes-lg-100x100.jpg"
              alt="Proandes"
              width={100}
              height={100}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/unifesp-lindomar-albuquerque-lg-166x100.png"
              alt="Unifesp"
              width={133}
              height={80}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/cedal-lg-100x100.png"
              alt="Cedal"
              width={100}
              height={100}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/fec-lg-100x100.jpg"
              alt="FEC"
              width={80}
              height={80}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/del-agora-lg.jpg"
              alt="Del"
              width={166}
              height={100}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/codhes-lg-144x50.png"
              alt="Codhes"
              width={144}
              height={50}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/coapy-lg-113x80.jpg"
              alt="Coapy"
              width={135}
              height={96}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/re-lg-159x70.jpg"
              alt="Del"
              width={159}
              height={70}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/pal-oriana-Jara-lg-113x80.png"
              alt="Pal Oriana Jara"
              width={113}
              height={80}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/coordenacao-direitos-sociais-Saude-e-seguridade-lg-120x85.jpg"
              alt="Coordenação Direitos Sociais Saude e Seguridade"
              width={120}
              height={85}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/alampyme-br-360x70.gif"
              alt="Del"
              width={288}
              height={56}
            />
          </div>
          <div className="p-4 hidden sm:flex">
            <Image
              src="/quem-somos/logos/image-blank-75x150.png"
              alt="image-blank"
              width={75}
              height={150}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/umsa-lg-74x150.png"
              alt="Codhes"
              width={74}
              height={150}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/Instituto-edesio-passos-lg-113x80.png"
              alt="Coapy"
              width={113}
              height={80}
            />
          </div>
          <div className="p-4">
            <Image
              src="/quem-somos/Logos/casa-da-gente-lg-80x120.png"
              alt="Casa da Gente"
              width={80}
              height={120}
            />
          </div>

          <div className="p-4 hidden sm:flex">
            <Image
              src="/quem-somos/logos/image-blank-75x150.png"
              alt="image-blank"
              width={75}
              height={150}
            />
          </div>

        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://cryptic-retreat-90035.herokuapp.com/about-page"
  );
  const aboutPage = await res.json();

  return {
    props: {
      aboutPage,
    },
  };
}
