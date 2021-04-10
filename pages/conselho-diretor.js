import Image from "next/image";
import Head from "next/head";
import ConselhoDiretorComp from "../components/quem-somos/conselhos/ConselhoDiretorComp";

export default function ConselhoDiretor() {
  return (
    <div className="py-16 lg:w-4/5 mx-auto">
      <Head>
        <title>RedeSF - Conselho Diretor</title>
      </Head>
      <div className="text-center font-semibold text-4xl text-blue-800 mb-8">
        <h1>Conselho Diretor</h1>
        <ConselhoDiretorComp />
      </div>
    </div>
  );
}
