import React from 'react'
import SearchTabs from '@/components/ui/searchTabs'

const Home = () => {
  return (
    <div>
      <div className='h-20 rounded-xl p-5 flex items-center justify-center'>
  <h1 className="text-center">hello</h1>
</div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' ,backgroundImage: "url('./pattern.svg')"}}>
      <SearchTabs />
    </div>
    </div>
  )
}

export default Home