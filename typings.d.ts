type Comment = {
	created_at: string
	id: number
	post_id: number
	text: string
	username: string
}

type Vote = {
	created_at: string
	id: number
	post_id: number
	upvote: boolean
	username: string
}

type Subreddit = {
	created_at: string
	id: number
	topic: string
}

type Post = {
	body: string
	created_at: Date
	id: number
	image: string
	subreddit_id: number
	title: string
	username: string
	voteList: Vote[]
	commentList: Comment[]
	subreddit: Subreddit
}