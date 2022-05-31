import { LinkIcon, PhotographIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import Avatar from '../Avatar'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_POST, ADD_SUBREDDIT } from '../../graphql/mutations'
import client from '../../apollo-client'
import { GET_ALL_POSTS, GET_SUBREDDIT_BY_TOPIC } from '../../graphql/queries'
import toast from 'react-hot-toast'

type FormData = {
	postTitle: string
	postBody: string
	postImage: string
	subreddit: string
}
type Props = {
	subreddit?: string
}
function PostBox({ subreddit }: Props) {
	const { data: session } = useSession()
	const [addPost] = useMutation(ADD_POST, {
		refetchQueries: [GET_ALL_POSTS, 'getPostList']
	})
	const [addSubreddit] = useMutation(ADD_SUBREDDIT)
	const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false)
	const {
		register,
		setValue,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<FormData>()
	const onSubmit = handleSubmit(async (formData) => {
		console.log('formData', formData)
		const notification = toast.loading('creating new post...')
		try {
			// Query for the subreddit topic...
			const {
				data: { getSubredditByTopic }
			} = await client.query({
				query: GET_SUBREDDIT_BY_TOPIC,
				variables: {
					topic: subreddit || formData.subreddit
				}
			})
			const subredditExists = getSubredditByTopic.length > 0
			if (!subredditExists) {
				// create new subreddit...
				console.log('Creating a NEW subreddit...')
				const {
					data: { insertSubreddit: newSubreddit }
				} = await addSubreddit({
					variables: {
						topic: subreddit || formData.subreddit
					}
				})
				console.log(newSubreddit)
				var subreddit_id = newSubreddit.id
			} else var subreddit_id = getSubredditByTopic[0].id
			console.log(subreddit_id)
			const image = formData.postImage || ''

			const {
				data: { insertPost: newPost }
			} = await addPost({
				variables: {
					body: formData.postBody,
					image: image,
					subreddit_id: subreddit_id,
					title: formData.postTitle,
					username: session?.user?.name
				}
			})
			console.log('new post added:', newPost)
			setValue('postBody', '')
			setValue('postTitle', '')
			setValue('postImage', '')
			setValue('subreddit', '')
			toast.success('New post created', { id: notification })
		} catch (error) {
			toast.error('Whoops something went wrong', { id: notification })
		}
	})

	return (
		<form
			onSubmit={onSubmit}
			className="sticky top-[3.8rem] z-50 rounded-md border border-gray-300 bg-white p-2"
		>
			<div className="flex items-center space-x-3">
				<Avatar />
				<input
					{...register('postTitle', { required: true })}
					disabled={!session}
					className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
					type="text"
					placeholder={
						session
							? subreddit
								? `Create a post in r/${subreddit}`
								: 'Create a post by entering a title!'
							: 'Sign in to post'
					}
				/>
				<PhotographIcon
					className={`h-6 cursor-pointer text-gray-300 ${
						imageBoxOpen && 'text-blue-300'
					}`}
					onClick={() => setImageBoxOpen(!imageBoxOpen)}
				/>
				<LinkIcon className={`h-6 text-gray-300`} />
			</div>

			{/* Dropdown */}
			{!!watch('postTitle') && (
				<div className="flex flex-col pt-2">
					{/* Body */}
					<div className="flex items-center pl-2">
						<p className="min-w-[90px]">Body:</p>
						<input
							className="m-2 mr-0 flex-1 rounded-md bg-blue-50 px-2 outline-none"
							{...register('postBody')}
							type="text"
							placeholder="Text (optional)"
						/>
					</div>
					{!subreddit && (
						<div className="flex items-center pl-2">
							<p className="min-w-[90px]">Subreddit:</p>
							<input
								className="m-2 mr-0 flex-1 rounded-md bg-blue-50 px-2 outline-none"
								{...register('subreddit', { required: true })}
								type="text"
								placeholder="i.e reactjs"
							/>
						</div>
					)}
					{imageBoxOpen && (
						<div className="flex items-center pl-2">
							<p className="min-w-[90px]">Image URL:</p>
							<input
								className="m-2  mr-0 flex-1 rounded-md bg-blue-50 px-2 outline-none"
								{...register('postImage')}
								type="text"
								placeholder="Optional..."
							/>
						</div>
					)}
					{/* Errors */}
					{Object.keys(errors).length > 0 && (
						<div className="space-y-2 p-2 text-red-500">
							{errors.postTitle?.type === 'required' && (
								<p>- A post title is required</p>
							)}
							{errors.subreddit?.type === 'required' && (
								<p>- A subreddit is required</p>
							)}
						</div>
					)}
					{!!watch('postTitle') && (
						<button
							type="submit"
							className="w-full rounded-lg bg-blue-400 p-2 text-white"
						>
							Create Post
						</button>
					)}
				</div>
			)}
		</form>
	)
}
export default PostBox
