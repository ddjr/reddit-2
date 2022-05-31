import { useQuery } from '@apollo/client'
import { GET_SUBREDDITS_WITH_LIMIT } from '../../graphql/queries'
import SubredditRow from './SubredditRow'

function Communities() {
	const { data } = useQuery(GET_SUBREDDITS_WITH_LIMIT, {
		variables: { limit: 10 }
	})
	const subreddits: Subreddit[] = data?.getSubredditListLimit
	return (
		<div className="sticky top-36 ml-5 mt-5  hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline">
			<p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>
			<div>
				{subreddits?.map((subreddit, index) => (
					<SubredditRow
						key={subreddit.id}
						topic={subreddit.topic}
						index={index}
					/>
				))}
			</div>
		</div>
	)
}
export default Communities
