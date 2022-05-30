import {
	ArrowDownIcon,
	ArrowUpIcon,
	BookmarkIcon,
	ChatAltIcon,
	DotsHorizontalIcon,
	GiftIcon,
	ShareIcon
} from '@heroicons/react/outline'
import Avatar from '../Avatar'
import TimeAgo from 'react-timeago'
import Votes from './Votes'
import PostActions from './PostActions'

type Props = {
	post: Post
}
function Post({ post }: Props) {
	return (
		<div className="flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border-gray-600">
			{/* Votes */}
			<Votes upvotes={post.voteList?.length} />
			<div className="p-3 pb-1">
				{/* Header */}
				<div className="flex items-center space-x-2">
					<Avatar seed={post.subreddit?.topic} />
					<p className="text-xs text-gray-400">
						<span className="font-bold text-black hover:text-blue-400 hover:underline">
							r/{post.subreddit?.topic}
						</span>{' '}
						• Posted by u/{post.username} •&nbsp;
						<TimeAgo date={post.created_at} />
					</p>
				</div>
				{/* Body */}
				<div className="py-4 ">
					<h2 className="text-xl font-semibold">{post.title}</h2>
					<p className="mt-2 text-sm font-light">{post.body}</p>
				</div>
				{/* Image */}
				<img className="w-full" src={post.image} alt="" />
				{/* Footer */}
				<PostActions commentList={post.commentList} />
			</div>
		</div>
	)
}
export default Post
