import Head from "next/head";
import Tabs from "../components/Tabs";

export default function Home() {
  return (
    <div className="mx-auto">
      <Head>
        <title>Rede Sem Fronteiras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                      A Rede Sem Fronteiras.
                    </h1>
                    <p className="mt-4 text-lg text-gray-100">
                    Somos uma rede de organizações da sociedade civil, associações de imigrantes, instituições acadêmicas e ativistas com atuação na defesa e na promoção dos direitos das pessoas migrantes e refugiadas e na articulação da diáspora latino americana.
                    </p>
                  </div>
                </div>

              </div>
          </div>
        </div>
        <div className='container mx-auto'>
          <Tabs />
        </div>
      </main>
    </div>
  );
}
