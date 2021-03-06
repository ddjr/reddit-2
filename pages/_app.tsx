import '../styles/globals.css'
import Header from '../components/Header'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
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
