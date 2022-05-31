import ReactTimeago from 'react-timeago'
import Avatar from '../Avatar'
import Link from 'next/link'
type Props = {
	topic: string
	username: string
	created_at: string
}
function PostHeader({ topic, username, created_at }: Props) {
	return (
		<div className="flex items-center space-x-2">
			<Avatar seed={topic} />
			<p className="text-xs text-gray-400">
				<Link href={`/subreddit/${topic}`}>
					<span className="font-bold text-black hover:text-blue-400 hover:underline">
						r/{topic}
					</span>
				</Link>
				&nbsp;• Posted by u/{username} •&nbsp;
				<ReactTimeago date={created_at} />
			</p>
		</div>
	)
}
export default PostHeader
