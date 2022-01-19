import Image from "next/image";
import Head from "next/head";

export default function ConselhoInternacional({ conselhoInternacional }) {
  return (
    <div className="py-16 lg:w-4/5 mx-auto">
      <Head>
        <title>RedeSF - Conselho Internacional</title>
      </Head>
      <div className='text-center font-semibold text-4xl text-blue-800 mb-8'>
      <h1>Conselho Internacional</h1>
      </div>
      {conselhoInternacional &&
        conselhoInternacional.map((conselho) => (
          <div key={conselho.id}>
            <div className="lg:flex p-8 lg:items-center md:px-48 lg:py-2">
              <div className="flex-grow bg-white shadow-lg rounded-md border p-6">
                <div className="sm:flex sm:items-center sm:mx-auto">
                  <div className=" flex-shrink-0 mb-2 flex justify-center sm:items-center">
                    <Image
                      className="rounded-full object-cover"
                      src={conselho.picture.url}
                      alt={conselho.nome}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="sm:ml-4 sm:text-left text-center">
                    <h4 className="">
                      <strong className="text-sm text-gray-800">
                        {/* {conselho.cargo} */}
                        {conselho.nome}
                      </strong>
                      <a
                        className="text-xs ml-2 text-blue-400"
                        href="mailto:{conselho.email}"
                      >
                        {conselho.email}
                      </a>
                    </h4>
                    <p className="text-gray-600 text-sm font-light text-justify">
                      {conselho.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://cryptic-retreat-90035.herokuapp.com/conselho-internacionals"
  );
  const conselhoInternacional = await res.json();

  return {
    props: {
      conselhoInternacional,
    },
    revalidate: 10,
  };
}