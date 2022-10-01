/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header'

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div>
        {Object.values(providers).map((provider) => {
          return (
            <div
              key={provider.name}
              className="flex flex-col items-center mt-40">
              <img
                className="w-52 object-cover"
                src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
                alt="google-logo"
              />
              <p className="text-sm italic my-5 text-center">
                This website is created for learning purposes
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className="bg-green-500 p-3 text-white rounded-md hover:bg-green-600">
                Sign in with {provider.name}
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: { providers }
  }
}
