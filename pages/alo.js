import Head from "next/head";
import React from 'react'
import Image from 'next/image'

export default function Home(props) {
  return (
    <div className="mx-auto py-16">
      <Head>
        <title>Rede Sem Fronteiras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          {props.conselhoInter.descritivo}

          {/* <Image
                className="rounded-full object-cover"
                src={imgUrl}
                alt="Aida Garcia Naranjo"
                width={80}
                height={80}
              /> */}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/conselho-inter-api')
  const conselhoInter = await res.json();
  return {
    props: {
      conselhoInter,
    }
  };
}
