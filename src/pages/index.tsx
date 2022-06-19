import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { trpc } from '../utils/trpc';
import { getOptionsForVote } from "../utils/getRandomeDisneyCharacter";
import React, { useEffect, useState } from "react";

export default function Home(){
  const [ids,setids] = useState(()=>getOptionsForVote());

  const [first,second] = ids;
  
  const firstHero = trpc.useQuery(["hello",{ text: first.toString() }])
  const secondHero = trpc.useQuery(["hello",{ text: second.toString() }])

  if(firstHero.isLoading || secondHero.isLoading) return null;

  if(secondHero) console.log(firstHero.data?.name)

  return (
    <div className='w-screen h-screen flex flex-col justify-center'>
      <div className="text-2xl text-center">
        Which Super Hero is bettter for you ?
      </div>
      <div className="p-8">

      </div>
      <div className="border rounded p-8 flex justify-evenly items-center">
          <div>
            <img className='w-full h-64' src={firstHero.data?.image} alt="" />
            <div className='p-2'></div>
            <div className='text-xl text-center'>
              {firstHero.data?.name}
            </div>
          </div>
          <div className="text-2xl">
            vs
          </div>
          <div>
          <img className='w-full h-64' src={secondHero.data?.image} alt="" />
            <div className='p-2'></div>
            <div className='text-xl text-center'>
              {secondHero.data?.name}
            </div>
          </div>
      </div>
    </div>
  )
 
}
