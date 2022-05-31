import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
import Header from '../components/Header/index'
import client from '../apollo-client'

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
	return (
		<ApolloProvider client={client}>
			<SessionProvider session={session}>
				<Toaster />
				<div className="h-screen overflow-y-scroll bg-slate-200">
					<Header />
					<Component {...pageProps} />
				</div>
			</SessionProvider>
		</ApolloProvider>
	)
}

export default MyApp
