import Image from "next/image";

const Contact = () => {
  return (
    <div className="min-h-screen relative justify-center pt-44 pb-10 items-center">
      <div className="flex justify-center p-4">
        <Image
          className="rounded-full object-cover"
          src="/contacto/world.svg"
          alt="World"
          width={900}
          height={385}
        />
      </div>
      <div className="container mx-auto items-center p-4">
        <section className="sm:w-1/2 px-2 mx-auto justify-center flex">
          <div className="">
            <h1 className="text-3xl text-gray-700 text-center">
              Entre em contato conosco
            </h1>
            <p className="sm:px-32 py-2 text-sm text-center">
              Para representação internacional, a Rede Sem Fronteiras possui
              escritórios sediados na América do Sul, no Brasil, e na Europa, em
              Portugal. Entre em contato conosco!
            </p>
          </div>
        </section>
        <div className="justify-items-center mx-auto text-center grid grid-cols-2 space-x-4 my-8 sm:w-1/2">
          <div className="rounded-md shadow-md bg-gray-50 p-4 sm:w-1/2 w-full">
            <h3 className="font-semibold text-gray-800 text-xl text-center mb-2">
              América Latina
            </h3>
            <p className="text-sm font-thin">
              Sede em São Paulo, Brasil | Rua Luís Ferreira, n° 142, Tatuapé.
              +55 (11) 2257-3467
            </p>
            <a
              className="text-xs  ml-2 text-blue-400"
              href="americas@redesf.org"
            >
              E-mail: americas@redesf.org
            </a>
          </div>
          <div className="rounded-md shadow-md bg-gray-50 p-4 sm:w-1/2 w-full">
            <h3 className="font-semibold text-gray-800 text-xl text-center mb-2">
              Europa
            </h3>
            <p className="text-sm font-thin">
              Sede em Lisboa, Portugal | Praça do Junqueiro, n° 3, Loja,
              Carcavelos.
            </p>
            <a
              className="text-xs  ml-2 text-blue-400"
              href="americas@redesf.org"
            >
              E-mail: europa@redesf.org
            </a>
          </div>
        </div>
        <section className="sm:w-1/3 mx-auto rounded-md shadow-md px-4 py-2">
          <form>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full p-2 border rounded border-gray-300"
                placeholder="Nome completo"
              ></input>
            </div>
            <div className="mt-2 mb-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full p-2 border rounded border-gray-300"
                placeholder="E-mail"
              ></input>
            </div>
            <div className='flex items-center'>
                <input id='terms' type='checkbox' className='rounded border-gray-300 text-yellow-600 focus:ring-offset-yellow-600'/>
                <label for='terms' className='ml-2 block text-sm text-gray-800'>Eu concordo com os <a href='#' className=' hover:text-yellow-700'>Termos</a></label>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
