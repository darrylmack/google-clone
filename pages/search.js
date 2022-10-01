import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'
import ImageResults from '../components/ImageResults'

export const getServerSideProps = async (context) => {
  const startIndex = context.query.start || '1'
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CONTEXT_KEY
    }&q=${context.query.term}${
      context.query.searchType && '&searchType=image'
    }&start=${startIndex}`
  ).then((res) => res.json())

  return {
    props: {
      results: data
    }
  }
}

const Search = ({ results }) => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Page</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {router.query.searchType === 'image' ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  )
}

export default Search
