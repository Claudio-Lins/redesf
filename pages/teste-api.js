
export default function Home( { page } ) {
  return (
    <div className="py-20 text-2xl text-center">
     { page.body.title }
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "http://localhost:1337/pages"
  );
  const page = await res.json();

  return {
    props: {
      page,
    },
  };
}