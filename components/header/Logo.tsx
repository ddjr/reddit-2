import Image from 'next/image'
import Link from 'next/link'
function Logo() {
	return (
		<div className="relative h-auto w-20 flex-shrink-0 cursor-pointer">
			<Link href="/">
				<Image
					objectFit="contain"
					src="https://links.papareact.com/fqy"
					layout="fill"
				/>
			</Link>
		</div>
	)
}
export default Logo
