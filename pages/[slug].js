import Head from "next/head";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div>
      <Head>
        <title>RedeSF - </title>
      </Head>

      <section className="bg-purple-800 py-12 px-4 md:py-20">
        <div className="md:w-1/3 mx-auto">
          <div className="text-gray-50 text-3xl font-semibold text-center">
            <h1>
            Titulo
            </h1>
          </div>
          <div className="flex text-white text-xs font-light text-center justify-center space-x-4 mt-4">
            <p>autor</p>
            <p>|</p>
            <p>data</p>
          </div>
        </div>
      </section>
      <section className="bg-white rounded-xl shadow-xl py-2 md:w-2/5 md:-mt-10 mx-auto">
        <div className="text-center px-4">
          <div className="rounded-lg p-2 -mt-10 lg:mt-0 lg:py-6">
            {/* <Image
              className="rounded-xl shadow-xl text-center"
              src={post.cover.url}
              alt="Blog - Rede Sem Fronteiras"
              layout='responsive'
              width={post.cover.width}
              height={post.cover.height}
              objectFit='contain'
            /> */}
          </div>
          <div className="flex text-gray-700 text-xs font-light text-center justify-center space-x-4 mt-0">
            <p>Categoria</p>
            <p>|</p>
            <p>Data</p>
          </div>
          <div className='text-sm font-light text-gray-700 px-4 py-2 md:p-8 tracking-wider text-justify'>
            <p>
            content
            </p>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://cryptic-retreat-90035.herokuapp.com/posts");
  const post = await res.json();

  const paths = post.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(
    `https://cryptic-retreat-90035.herokuapp.com/posts?slug=${slug}`
  );
  const data = await res.json();
  const post = data[0];

  return {
    props: { post },
  };
}
