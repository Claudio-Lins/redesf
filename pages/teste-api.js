import { useEffect } from "react";

export default function Teste({ conselhoInternacional }) {
  return (
    <div className='py-20'>
      {conselhoInternacional && conselhoInternacional.map((conselho) => (

        <div key={conselho.id}>
          <h2>{conselho.email}</h2>
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
