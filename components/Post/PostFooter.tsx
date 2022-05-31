import {
	BookmarkIcon,
	ChatAltIcon,
	DotsHorizontalIcon,
	GiftIcon,
	ShareIcon
} from '@heroicons/react/outline'

interface Props {
	commentList: Comment[]
}
function PostFooter({ commentList }: Props) {
	return (
		<div className="flex space-x-4 text-gray-400">
			<div className="postButtons">
				<ChatAltIcon className="h-6 w-6" />
				<p className="">{commentList?.length} Comments</p>
			</div>
			<div className="postButtons">
				<GiftIcon className="h-6 w-6" />
				<p className="hidden sm:inline">Award</p>
			</div>
			<div className="postButtons">
				<ShareIcon className="h-6 w-6" />
				<p className="hidden sm:inline">Share</p>
			</div>
			<div className="postButtons">
				<BookmarkIcon className="h-6 w-6" />
				<p className="hidden sm:inline">Save</p>
			</div>
			<div className="postButtons">
				<DotsHorizontalIcon className="h-6 w-6" />
			</div>
		</div>
	)
}
export default PostFooter
