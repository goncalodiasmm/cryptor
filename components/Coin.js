import Link from 'next/link'

const Coin = ({
  name,
  id,
  price,
  symbol,
  marketCap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <Link href='/[id]' as={`/${id}`}>
      <div className='flex items-center justify-between border-b-2 border-gray-800 py-6 px-3 w-4/5 hover:bg-gray-800 transition-all cursor-pointer'>
        <div className='flex flex-1 items-center gap-2'>
          <img src={image} alt={name} className='w-6' />
          <h1>{name}</h1>
        </div>
        <p className='uppercase flex-1'>{symbol}</p>
        <p className='flex-1'>${price}</p>
        <p className='flex-1'>${volume}</p>
        <p
          className={`flex-1 ${
            priceChange > 0 ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {priceChange}%
        </p>
        <p className='flex items-center flex-1'>
          Market Cap:<span>{marketCap}</span>
        </p>
      </div>
    </Link>
  )
}

export default Coin
