import { ChevronDownIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
function SignIn() {
  const { data: session } = useSession()
  return (
    <div
      className=" flex cursor-pointer items-center space-x-2 border border-gray-100 p-2"
      onClick={() => (session ? signOut() : signIn())}
    >
      <div className="relative h-5 w-5 flex-shrink-0">
        <Image
          src="https:links.papareact.com/23l"
          alt=""
          objectFit="contain"
          layout="fill"
        />
      </div>
      {session ? (
        <div className="flex items-center space-x-1">
          <div className=" flex-col text-xs">
            <p className="truncate">{session?.user.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <p className="truncate text-gray-400">Sign In</p>
      )}
    </div>
  )
}
export default SignIn
