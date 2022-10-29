import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { IComics } from '../../components/ComicList/ComicList';
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';

interface TProps {
    comic: IComics
}

const ComicDetailPage: NextPage<TProps> = ({comic}) => {
  return (
    <ApplicationWrapper title="Comic Details">

    

        <section className="bg-[url('/images/marvel-details-bg.jpg')]">
        
           <Link href="/comics">
             <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Go back to Comics List</button>
           </Link>
        
        <div className="relative mx-auto max-w-screen-xl px-4 py-8 bg-black bg-opacity-90">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                <img className='rounded-xl box-content h-75 w-40.5' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`${comic.title} Poster`} />
            </div>

            <div className="sticky top-0">
                <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch]">
                        <h1 className="text-2xl font-bold">{comic.title}</h1>
                </div>
                </div>

                <details className="group relative mt-4">
                <summary className="block">
                    <div>
                    <div className="prose max-w-none text-justify">
                        <span className="text-1xl font-bold">Description: </span>
                        <p>{comic.description}</p>
                    </div>
                    <div className="prose max-w-none text-justify">
                        <br />
                        <span className="text-1xl font-bold">Release Date:</span>
                        <p>{comic.dates[0].date}</p>
                    </div>
                    <br />
                    </div>
                </summary>
                </details>
            </div>
            </div>
        </div>
        </section>
    </ApplicationWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) =>{
    const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/comics/" + context.params?.id
    )
    const comic = await res.json()

    return{
        props:{
            comic,
        }
    }
}
export default ComicDetailPage;