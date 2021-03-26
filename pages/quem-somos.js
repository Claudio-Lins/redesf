import Image from "next/image";
import Head from "next/head";
import LogosMembros from '../utils/LogosMembros'


export default function About( {aboutPage} ) {
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
        <p>
        {aboutPage.content02}
        </p>
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
                  <h3 className='font-bold text-5xl text-yellow-600'>1</h3>
                </div>
                <p className="leading-relaxed text-base">
                {aboutPage.textObjetivo01}
                </p>
              </div>
            </div>
            
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border flex items-center border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 p-6 flex items-center justify-center ">
                  <h3 className='font-bold text-5xl text-yellow-600'>2</h3>
                </div>
                <p className="leading-relaxed text-base">
                {aboutPage.textObjetivo02}
                </p>
              </div>
            </div>
            
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border flex items-center border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 p-6 flex items-center justify-center ">
                  <h3 className='font-bold text-5xl text-yellow-600'>3</h3>
                </div>
                <p className="leading-relaxed text-base">
                {aboutPage.textObjetivo03}
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border flex items-center border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 p-6 flex items-center justify-center ">
                  <h3 className='font-bold text-5xl text-yellow-600'>4</h3>
                </div>
                <p className="leading-relaxed text-base">
                {aboutPage.textObjetivo04}
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border flex items-center border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 p-6 flex items-center justify-center ">
                  <h3 className='font-bold text-5xl text-yellow-600'>5</h3>
                </div>
                <p className="leading-relaxed text-base">
                {aboutPage.textObjetivo05}
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border flex items-center border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 p-6 flex items-center justify-center ">
                  <h3 className='font-bold text-5xl text-yellow-600'>6</h3>
                </div>
                <p className="leading-relaxed text-base">
                {aboutPage.textObjetivo06}
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
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
          <div className='md:px-20 mt-6'>
          <LogosMembros/>
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