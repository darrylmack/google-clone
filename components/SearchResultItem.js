import React from 'react'
import Parser from 'html-react-parser'

const SearchResultItem = ({ result }) => {
  const { link, htmlSnippet, formattedUrl, title } = result
  return (
    <div key={link} className=" max-w-xl mb-8">
      <div className="group">
        <a href={link} className="text-sm truncate">
          {formattedUrl}
        </a>
        <a href={link} className="group-hover:underline decoration-blue-800">
          <h2 className="truncate text-xl font-medium text-blue-800">
            {title}
          </h2>
        </a>
      </div>
      <p className="text-gray-600">{Parser(htmlSnippet)}</p>
    </div>
  )
}

export default SearchResultItem
