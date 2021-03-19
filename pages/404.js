import Layout from '../components/layout'
import Link from 'next/link'
import Head from 'next/head'

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <h1>404 - Page Not Found</h1>
    </Layout>
    )
  }