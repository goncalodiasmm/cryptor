import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import CoinList from '../components/CoinList'
import Footer from '../components/Footer'

export default function Home({ data }) {
  const [search, setSearch] = useState('')

  const filterCoins = data.filter((coin) => {
    if (search === '') {
      return coin
    } else if (coin.name.toLowerCase().includes(search.toLowerCase())) {
      return coin
    }
  })

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
  }

  return (
    <div className='flex flex-col items-center'>
      <Head>
        <title>cryptor | Cryptocurrency Price Tracker</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header handleChange={handleChange} />
      <CoinList data={filterCoins} />
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price&per_page=64&page=1&sparkline=false'
  )

  const data = await res.json()

  return {
    props: { data },
  }
}
