import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const PaginationButtons = () => {
  const router = useRouter()
  const { term, searchType, start } = router.query
  const startIndex = Number(start) || 1
  const paginationAmount = 10
  return (
    <div className="text-blue-700 flex px-9 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex > 10 && (
        <Link
          href={`/search?term=${term}&searchType=${searchType}&start=${
            startIndex - paginationAmount
          }`}>
          <div className="cursor-pointer flex flex-col items-center">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex < 90 && (
        <Link
          href={`/search?term=${term}&searchType=${searchType}&start=${
            startIndex + paginationAmount
          }`}>
          <div className="cursor-pointer flex flex-col items-center">
            <ChevronRightIcon className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  )
}

export default PaginationButtons
