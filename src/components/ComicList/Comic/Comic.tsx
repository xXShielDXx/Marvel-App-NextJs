import Link from 'next/link'
import React, {FC} from 'react'
import { IComics } from '../ComicList'

interface TProps {
    comic: IComics;
}

export const Comic: FC<TProps> = ({comic}) => {
  return (
    <li>
        <Link href={`/comics/${comic.id}`}>
            <img className='cursor-pointer scale-95 hover:scale-100' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`${comic.title} Poster`} />
        </Link>
        <strong className='text-lg m-1'>{comic.title}</strong>
    </li>
  )
}