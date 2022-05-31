import SearchBar from './SearchBar'
import Logo from './Logo'
import HomeButton from './HomeButton'
import IconMenu from './IconMenu'

function Header() {
	return (
		<div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
			<Logo />
			<HomeButton />
			<SearchBar />
			<IconMenu />
		</div>
	)
}
export default Header
