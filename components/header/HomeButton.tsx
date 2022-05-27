import { ChevronDownIcon, HomeIcon } from "@heroicons/react/solid"

function HomeButton() {
  return (
    <div className="flex mx-7 items-center xl:min-w-[300px]">
      <HomeIcon className="h-5 w-5" />
      <p className="flex-1 ml-2 hidden lg:inline">Home</p>
      <ChevronDownIcon className="h-5 w-5" />
    </div>
  )
}
export default HomeButton
