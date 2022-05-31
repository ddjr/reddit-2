import { useMutation, useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Post from '../../components/Post'
import { GET_POST_BY_ID } from '../../graphql/queries'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ADD_COMMENT } from '../../graphql/mutations'
import toast from 'react-hot-toast'
import Comment from '../../components/Comment'
type FormData = {
	comment: string
}

function PostPage() {
	const router = useRouter()
	const { data: session } = useSession()
	const [addComment] = useMutation(ADD_COMMENT, {
		refetchQueries: [GET_POST_BY_ID, '']
	})
	const { loading, data, error } = useQuery(GET_POST_BY_ID, {
		variables: { id: router.query.postId }
	})
	const post: Post = data?.getPost

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors }
	} = useForm<FormData>()

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		// post comment here...
		console.log(data)
		const notification = toast.loading('posting your comment...')
		await addComment({
			variables: {
				post_id: router.query.postId,
				username: session?.user?.name,
				text: data.comment
			}
		})

		setValue('comment', '')
		toast.success('Comment posted!', {
			id: notification
		})
	}
	return (
		<div className="mx-auto my-7 max-w-5xl">
			<Post post={post} />
			<div className="-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pl-16 ">
				<p className="text-sm">
					Comment as <span className="text-red-500">{session?.user?.name}</span>
				</p>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-2"
				>
					<textarea
						{...register('comment')}
						disabled={!session}
						className="h-24 w-full rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50 "
						placeholder={
							session ? 'What are your thoughts?' : 'Please sign in to comment'
						}
					/>
					<button
						type="submit"
						className="rounded-full bg-red-500 p-3 font-semibold text-white disabled:bg-gray-200"
					>
						Comment
					</button>
				</form>
			</div>
			<div className="-my-5 rounded-b-md border-t-0 border-gray-300 bg-white py-5 px-10">
				<hr className="py-2" />
				{post?.commentList.map(({ username, id, text, created_at }) => (
					<Comment
						key={id}
						username={username}
						text={text}
						created_at={created_at}
					/>
				))}
			</div>
		</div>
	)
}
export default PostPage
