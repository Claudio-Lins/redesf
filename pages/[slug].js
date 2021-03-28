export default function Post({ post }) {
  return <div className='py-16 text-3xl font-bold'>{post.title}</div>;
}

export async function getStaticPaths() {
  const res = await fetch("https://cryptic-retreat-90035.herokuapp.com/posts");
  const post = await res.json();

  const paths = post.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
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
  }
}
