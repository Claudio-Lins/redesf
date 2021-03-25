import fetch from 'isomorphic-unfetch'

export default function Teste(props) {
    return (
   
        <div className='py-16'>{props.posts.title}</div>
    );
}
 

export async function getStaticProps(context) {
    const postsRes = await fetch('https://cryptic-retreat-90035.herokuapp.com/posts')
    const posts = await postsRes.json();
    return {
      props: {
        posts,
      },
    }
}