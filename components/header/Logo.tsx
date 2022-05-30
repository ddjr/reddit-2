import Image from 'next/image'

function Logo() {
  return (
    <div className="relative h-auto w-20 flex-shrink-0 cursor-pointer">
      <Image
        objectFit="contain"
        src="https://links.papareact.com/fqy"
        layout="fill"
      />
    </div>
  )
}
export default Logo
