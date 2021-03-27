import Image from "next/image";

export default function Teste({ conselhoInternacional }) {
  return (
    <div className="py-20">
      {conselhoInternacional &&
        conselhoInternacional.map((conselho) => (
          <div key={conselho.ordem}>
            <div className="lg:flex p-8 lg:items-center md:px-48 lg:py-2">
              <div className="flex-grow bg-white shadow-lg rounded-md border p-6">
                <div className="sm:flex sm:items-center sm:mx-auto">
                  <div className=" flex-shrink-0 mb-2 flex justify-center sm:items-center">
                    <Image
                      className="rounded-full object-cover"
                      src={conselho.picture.url}
                      alt=""
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="sm:ml-4 sm:text-left text-center">
                    <h4 className="">
                      <strong className="text-sm text-gray-800">
                        {conselho.cargo}
                        {conselho.nome}
                      </strong>
                      <a
                        className="text-xs ml-2 text-blue-400"
                        href={conselho.email}
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

export async function getStaticProps() {
  const res = await fetch(
    "https://cryptic-retreat-90035.herokuapp.com/conselho-internacionals"
  );
  const conselhoInternacional = await res.json();

  return {
    props: {
      conselhoInternacional,
    },
  };
}
