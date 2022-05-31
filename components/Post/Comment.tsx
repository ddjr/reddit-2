import Avatar from '../Avatar'
import ReactTimeago from 'react-timeago'
type Props = {
	username: string
	created_at: string
	text: string
}
function Comment({ username, created_at, text }: Props) {
	return (
		<div className="relative flex items-center space-x-2 space-y-5">
			<hr className="absolute top-10 left-7 z-0 h-16 border" />
			<div>
				<Avatar seed={username} />
			</div>
			<div className="flex flex-col">
				<p className="py-2 text-xs text-gray-400">
					<span className="font-semibold text-gray-600">{username}</span> •
					<ReactTimeago date={created_at} />
				</p>
				<p>{text}</p>
			</div>
		</div>
	)
}
export default Comment
