import Header from '../components/Header'
import { BiDislike, BiLike } from 'react-icons/bi'

const CoinDetails = ({ coin }) => {
  const regex = /(<([^>]+)>)/gi
  const coinDescription = coin.description.en.replace(regex, '')

  return (
    <div>
      <Header />
      <div className='flex flex-col lg:flex-row items-start p-8 gap-8'>
        <div className='flex flex-col gap-4 flex-1'>
          <span className='bg-yellow-500 px-4 py-2 rounded-full'>
            Rank #{coin.market_cap_rank}
          </span>
          <div className='flex items-center gap-4'>
            <img src={coin.image.small} alt={coin.name} />
            <h1 className='text-6xl'>{coin.name}</h1>
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex gap-2 items-center'>
              <BiLike className='text-green-500 text-2xl' />
              <p>{coin.sentiment_votes_up_percentage}%</p>
              <p>Hello World</p>
            </div>
            <div className='flex gap-2 items-center'>
              <BiDislike className=' text-red-500 text-2xl' />
              <p>{coin.sentiment_votes_down_percentage}%</p>
            </div>
          </div>
        </div>
        <p className='flex-1'>{coinDescription}</p>
      </div>
    </div>
  )
}

export default CoinDetails

export const getServerSideProps = async (context) => {
  const { id } = context.query

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

  const data = await res.json()

  return {
    props: {
      coin: data,
    },
  }
}
