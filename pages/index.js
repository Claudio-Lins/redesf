import Head from 'next/head'
import {getCurrentDate} from '../utils/Date'

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Rede Sem Fronteiras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-4xl text-red-600 font-semibold'>{getCurrentDate()}</h1>
    </div>
  )
}
