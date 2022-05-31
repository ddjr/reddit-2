import { useMutation, useQuery } from '@apollo/client'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { ADD_VOTE } from '../../graphql/mutations'
import { GET_ALL_VOTES_BY_POST_ID } from '../../graphql/queries'
interface Props {
	post_id: number
}
function Vote({ post_id }: Props) {
	const [vote, setVote] = useState<boolean>()
	const { data: session } = useSession()

	const { data } = useQuery(GET_ALL_VOTES_BY_POST_ID, {
		variables: { post_id: post_id }
	})

	const [addVote] = useMutation(ADD_VOTE, {
		refetchQueries: [GET_ALL_VOTES_BY_POST_ID, 'getVotesByPostId']
	})

	const upVote = async (isUpvote: boolean) => {
		if (!session) {
			toast("You'll need to sign in before you can vote!")
			return
		}

		if (vote && isUpvote) return
		if (vote === false && !isUpvote) return

		await addVote({
			variables: {
				post_id: post_id,
				username: session.user?.name,
				upvote: isUpvote
			}
		})
	}

	useEffect(() => {
		const votes: Vote[] = data?.getVotesByPostId
		// latest vote (as we sorted by newely created first in SQL quiery)
		// Note: You could improve this by moving it to the original Query
		const vote = votes?.find(
			(vote) => vote.username == session?.user?.name
		)?.upvote

		setVote(vote)
	}, [data])

	const displayVotes = (data: any) => {
		const votes: Vote[] = data?.getVotesByPostId
		console.log('votes', votes)
		const displayNumber = votes?.reduce(
			(total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
			0
		)
		if (votes?.length === 0) return 0
		if (displayNumber === 0) return votes[0]?.upvote ? 1 : -1
		return displayNumber
	}

	return (
		<div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
			<ArrowUpIcon
				onClick={() => upVote(true)}
				className={`voteButtons hover:text-blue-400 ${vote && 'text-blue-400'}`}
			/>
			<p className={`text-xs font-bold text-black`}>{displayVotes(data)}</p>
			<ArrowDownIcon
				onClick={() => upVote(false)}
				className={`voteButtons hover:text-red-400 ${
					vote === false && 'text-red-400'
				}`}
			/>
		</div>
	)
}
export default Vote
