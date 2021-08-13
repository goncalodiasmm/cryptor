const SearchBar = ({ handleChange }) => {
  return (
    <input
      type='text'
      placeholder='Search'
      className='bg-gray-800 py-2 px-4 rounded placeholder-gray-300 outline-none focus:placeholder-gray-100 w-3/4 max-w-sm border-2 border-transparent focus:border-gray-100 transition-all ease-in-out'
      onChange={handleChange}
    />
  )
}

export default SearchBar
