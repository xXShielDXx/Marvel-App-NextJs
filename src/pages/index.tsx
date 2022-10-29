import type { NextPage } from 'next'
import { ApplicationWrapper } from '../components/layout/ApplicationWrapper'

const Home: NextPage = () => {
  return (
    <ApplicationWrapper title="Home" description= "Home of the Marvel Comics portal">
      <div className="grow flex flex-col justify-center items-center bg-[url('/images/marvel-home-bg.jpg')]">
        <div className='grow bg-black w-full justify-center items-center flex opacity-70'>
          <h1 className='text-7xl font-bold text-white'>Welcome to The Top Marvel Comics</h1>
        </div>
      </div>
    </ApplicationWrapper>
  )
}

export default Home
