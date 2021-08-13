import SearchBar from './SearchBar'
import Link from 'next/link'

const Header = ({ handleChange }) => {
  return (
    <div className='flex flex-col items-center gap-8 justify-center w-full p-8 lg:flex-row lg:justify-between'>
      <div className='flex items-center gap-8'>
        <Link href='/'>
          <h1 className='text-4xl font-bold cursor-pointer'>cryptor</h1>
        </Link>
        <p className='hidden lg:block uppercase tracking-widest text-xs text-gray-300 mt-3'>
          Cryptocurrency Price Tracker
        </p>
      </div>
      <SearchBar handleChange={handleChange} />
    </div>
  )
}

export default Header
