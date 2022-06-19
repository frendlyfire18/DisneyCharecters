import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const {data,isLoading} = trpc.useQuery(["hello",{text:"FrendlyFire"}])

  if(data) return <div>{data.greeting}</div>

  return (
    <div className='w-screen h-screen flex flex-col justify-center'>
      <div className="text-2xl text-center">
        Which Disney Characters is bettter for you ?
      </div>
      <div className="p-8">

      </div>
      <div className="border rounded p-8 flex justify-evenly items-center">
          <div className="w-64 h-64 bg-pink-500">
            First character
          </div>
          <div className="text-2xl">
            vs
          </div>
          <div className="w-64 h-64 bg-pink-500">
            Second character
          </div>
      </div>
    </div>
  )
}

export default Home
