import React, { useEffect, useState } from 'react'
import { Comic } from './Comic/Comic'

export interface IComics{
    "id": number,
    "digitalId": number,
    "title": string,
    "issueNumber": number,
    "variantDescription": string | null,
    "description": string | null,
    "modified": string,
    "isbn": string | null,
    "upc": string,
    "diamondCode": string | null,
    "ean": string | null,
    "issn": string | null,
    "format": string,
    "pageCount": number,
    "textObjects": [],
    "resourceURI": string,
    "urls": [
        {
            "type": string,
            "url": string
        },
        {
            "type": string,
            "url": string
        }
    ],
    "series": {
        "resourceURI": string,
        "name": string
    },
    "variants": [
        {
            "resourceURI": string,
            "name": string
        },
        {
            "resourceURI": string,
            "name": string
        },
        {
            "resourceURI": string,
            "name": string
        }
    ],
    "collections": [],
    "collectedIssues": [],
    "dates": [
        {
            "type": string,
            "date": string
        },
        {
            "type": string,
            "date": string
        }
    ],
    "prices": [
        {
            "type": string,
            "price": number
        }
    ],
    "thumbnail": {
        "path": string,
        "extension": string
    },
    "images": [
        {
            "path": string,
            "extension": string
        }
    ],
    "creators": {
        "available": number,
        "collectionURI": string,
        "items": [
            {
                "resourceURI": string,
                "name": string,
                "role": string
            },
            {
                "resourceURI": string,
                "name": string,
                "role": string
            },
            {
                "resourceURI": string,
                "name": string,
                "role": string
            },
            {
                "resourceURI": string,
                "name": string,
                "role": string
            },
            {
                "resourceURI": string,
                "name": string,
                "role": string
            },
            {
                "resourceURI": string,
                "name": string,
                "role": string
            }
        ],
        "returned": number
    },
    "characters": {
        "available": number,
        "collectionURI": string,
        "items": [],
        "returned": number
    },
    "stories": {
        "available": number,
        "collectionURI": string,
        "items": [
            {
                "resourceURI": string,
                "name": string,
                "type": string
            },
            {
                "resourceURI": string,
                "name": string,
                "type": string
            }
        ],
        "returned": number
    },
    "events": {
        "available": number,
        "collectionURI": string,
        "items": [],
        "returned": number
    }
}

const useComics = () =>{
    const [comics, setComics] = useState<IComics[]>([])

    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_API_URL + '/comics')
        .then(res =>res.json())
        .then((data: IComics[])=>setComics(data.slice(0, 20)))
        .catch((error)=>console.error(error))
    }, [])

    return comics;
}

export const ComicList = () => {
    const comics = useComics();
  return (
    <div className='flex flex-col justify-center text-white items-center p-6'>
        <ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
            {comics.map(comic=>(
                <Comic key={comic.id} comic={comic} />
            ))}
        </ul>
    </div>
  )
}
