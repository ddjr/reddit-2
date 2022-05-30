import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/outline'
interface Props {
	upvotes: number
}
function Votes({ upvotes }: Props) {
	return (
		<div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
			<ArrowUpIcon className="voteButtons hover:text-blue-400" />
			<p className="text-xs font-bold text-black">{upvotes}</p>
			<ArrowDownIcon className="voteButtons hover:text-red-400" />
		</div>
	)
}
export default Votes
