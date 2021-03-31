import Head from "next/head";
import Tabs from "../components/Tabs";

export default function Home( { menuPage } ) {
  return (
    <div className="py-20 text-2xl text-center">
     { menuPage.title01 }
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "http://localhost:1337/home-page"
  );
  const menuPage = await res.json();

  return {
    props: {
      menuPage,
    },
  };
}