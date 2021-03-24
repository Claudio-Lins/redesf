export default function Teste(props) {
    return (
   
        <div className='py-16'>{props.apiStrapi.TesteApi}</div>
    );
}
 

export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:1337/teste')
    const apiStrapi = await res.json();
    return {
      props: {
        apiStrapi,
      }
    }
}