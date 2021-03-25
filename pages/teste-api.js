import fetch from 'isomorphic-unfetch'

export default function Teste(props) {
    return (
   
        <div className='py-16'>{props.posts.title}</div>
    );
}
 

export async function getStaticProps(context) {
    const res = await fetch('https://cryptic-retreat-90035.herokuapp.com/posts')
    const posts = await res.json();
    return {
      props: {
        posts,
      },
    }
}