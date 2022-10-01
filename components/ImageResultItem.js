/* eslint-disable @next/next/no-img-element */
import { Result } from 'postcss'
import React from 'react'
import PaginationButtons from './PaginationButtons'

const ImageResultItem = ({ result }) => {
  const { image, link, title, displayLink } = result
  return (
    <div key={link} className="mb-8">
      <div className="group">
        <a href={image.contextLink}>
          <img
            className="group-hover:shadow-xl w-full h-60 object-contain"
            src={link}
            alt={title}
          />
        </a>
        <a className="group-hover:underline">
          <h2 className="truncate text-xl">{title}</h2>
        </a>
        <a
          href={image.contextLink}
          className="group-hover:underline text-sm text-gray-600">
          <p>{displayLink}</p>
        </a>
      </div>
    </div>
  )
}

export default ImageResultItem
