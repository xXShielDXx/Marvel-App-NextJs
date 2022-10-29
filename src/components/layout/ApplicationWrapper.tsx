import React, {FC, PropsWithChildren} from 'react'
import Link from 'next/link'
import Head from 'next/head'

interface TProps {
    title: string;
    description?: string;
}

export const ApplicationWrapper: FC<PropsWithChildren <TProps>> = ({title, description, children}) => {
  return (
    <div className='bg-black min-h-screen flex flex-col'>
        <Head>
            <title>{title} | Top Marvel Comics</title>
            {description && <meta name='description' content={description} />}
            <link rel="icon" href="marvel.ico" />
        </Head>

        <header>
          <nav className="bg-Black">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                  <a className="flex items-center">
                      <img src="logo.png" className="mr-3 h-6 sm:h-9" alt="Marvel Logo" />
                      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Top Marvel Comics</span>
                  </a>
              </div>
          </nav>
          <nav className="bg-gray-800">
              <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                  <div className="flex items-center">
                      <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                          <li>
                            <Link href="/">
                              <a className="text-gray-900 dark:text-white" aria-current="page">Home</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/comics">
                              <a className="text-gray-900 dark:text-white ">Comics</a>
                            </Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
        </header>

        <main className='grow flex flex-col'>{children}</main>

        {/* <footer className='flex p-6 text-black bg-white items-center justify-center h-20'>
        <a
          href="https://rootstack.com/en"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{''}
        </a>
      </footer> */}

      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Top Marvel Comics. All Rights Reserved.
    </span>
</footer>

    </div>
  )
}
