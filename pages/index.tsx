import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'
import Feed from '../components/Feed'
import Communities from '../components/Communities'
const Home: NextPage = () => {
	return (
		<div className="my-7 mx-auto max-w-5xl">
			<Head>
				<title>Reddit 2.0 Clone</title>
			</Head>
			<PostBox />
			<div className="flex">
				<Feed />
				<Communities />
			</div>
		</div>
	)
}

export default Home
