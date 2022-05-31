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
import Vote from './Vote'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'
import PostBody from './PostBody'
import Link from 'next/link'
import { Jelly } from '@uiball/loaders'
import toast from 'react-hot-toast'
type Props = {
	post: Post
}
function Post({ post }: Props) {
	if (!post) {
		return (
			<div className="flex w-full items-center justify-center p-10 text-xl">
				<Jelly size={50} color="#ff4501" />
			</div>
		)
	}
	return (
		<div className="flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border-gray-600">
			<Vote post_id={post?.id} />
			<Link href={`/post/${post?.id}`}>
				<div className="p-3 pb-1">
					<PostHeader
						topic={post.subreddit?.topic}
						username={post.username}
						created_at={post.created_at}
					/>
					<PostBody title={post.title} body={post.body} image={post.image} />
					<PostFooter commentList={post.commentList} />
				</div>
			</Link>
		</div>
	)
}
export default Post
