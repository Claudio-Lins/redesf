import Head from "next/head";
import Tabs from "../components/Tabs";

export default function Home( { homePage } ) {
  return (
    <div className="">
      <Head>
        <title>{homePage.title01}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative">
              <div className="items-center flex flex-wrap mx-auto">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="">
                    <h1 className="text-white font-semibold text-4xl tracking-wide">
                    {homePage.title01}
                    </h1>
                    <p className="mt-4 font-thin text-gray-100 tracking-wider">
                    {homePage.textContent01}
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

export async function getServerSideProps() {
  const res = await fetch(
    "https://cryptic-retreat-90035.herokuapp.com/home-page"
  );
  const homePage = await res.json();

  return {
    props: {
      homePage,
    },
  };
}