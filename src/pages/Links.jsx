import React from 'react'
import Layout from './Layout'

const Links = () => {
  return (
    <Layout>
        
            <h1 className='mb-5 text-4xl font-medium '>Customize your links</h1>
            <p className='mb-8 text-gray-500 '>Add/edit/remove links below and share all your profiles with the world</p>
            <button className='w-full px-5 py-3 font-medium text-indigo-600 duration-150 border border-indigo-600 rounded-lg active:bg-indigo-100 active:border-indigo-400'>+ Add new link</button>
        
    </Layout>
  )
}

export default Links
