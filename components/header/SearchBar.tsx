import { SearchIcon } from "@heroicons/react/solid"

function SearchBar() {
  return (
    <form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 py-1 px-3">
      <SearchIcon className="h-6 w-6 text-gray-400" />
      <input
        type="text"
        placeholder="Search Reddit"
        className="flex-1 bg-transparent outline-none"
      />
      <button type="submit" hidden />
    </form>
  )
}
export default SearchBar
