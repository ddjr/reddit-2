import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  MenuIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
  XIcon,
} from '@heroicons/react/outline'
import { useState } from 'react'
import SignIn from './SignIn'
function IconMenu() {
  let [clicked, setClicked] = useState(false)
  return (
    <div>
      <div className="mx-2 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <GlobeIcon className="icon" />
        <SparklesIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
        <SignIn />
      </div>
      <div className="mx-2 flex lg:hidden">
        <SignIn />
        {clicked ? (
          <div>
            <XIcon
              className="icon ml-2 flex h-10 w-6 items-center "
              onClick={() => setClicked(!clicked)}
            />
            <div className="fixed right-4 top-16 z-50 items-center justify-center space-x-2 bg-white text-gray-500">
              <div className="flex flex-col">
                <GlobeIcon className="icon" />
                <SparklesIcon className="icon" />
                <VideoCameraIcon className="icon" />
                <hr className="w-10 border border-gray-100" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <PlusIcon className="icon" />
                <SpeakerphoneIcon className="icon" />
              </div>
            </div>
          </div>
        ) : (
          <MenuIcon
            className="icon ml-2 flex h-10 w-6 items-center justify-center"
            onClick={() => setClicked(!clicked)}
          />
        )}
      </div>
    </div>
  )
}
export default IconMenu
