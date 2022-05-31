import { ChevronUpIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Avatar from '../Avatar'
type Props = {
	index: number
	topic: string
}
function SubredditRow({ index, topic }: Props) {
	return (
		<div className="flex items-center space-x-2 border-t  bg-white px-4 py-2 last:space-x-1.5 last:rounded-b ">
			<p>{index + 1}</p>
			<ChevronUpIcon className="h-4 w-4 flex-shrink-0 text-green-400 " />
			<Avatar seed={`/subreddit/${topic}`} />
			<Link href={`/subreddit/${topic}`}>
				<p className="flex-1 cursor-pointer truncate hover:text-blue-600 hover:underline">
					r/{topic}
				</p>
			</Link>
			<Link href={`/subreddit/${topic}`}>
				<div className="cursor-pointer rounded-full bg-blue-500 px-3 text-white">
					view
				</div>
			</Link>
		</div>
	)
}
export default SubredditRow
