import Head from "next/head";
import React from 'react'
import Image from 'next/image'

export default function Home({imgUrl}) {
  return (
    <div className="mx-auto py-16">
      <Head>
        <title>Rede Sem Fronteiras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          {/* {descritivo} */}

          <Image
                className="rounded-full object-cover"
                src={imgUrl}
                alt="Aida Garcia Naranjo"
                width={80}
                height={80}
              />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/conselho-inter-api')
  const json = await res.json();
  return {
    props: {
      name: json.name,
      descritivo: json.descritivo,
      imgUrl: json.imgUrl
    }
  };
}
