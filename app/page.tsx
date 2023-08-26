import React from 'react'
import SearchTabs from '@/components/ui/searchTabs'

const Home = () => {
  return (
    <div>
      <div className='h-20 rounded-xl p-5 flex items-center justify-center'>
  <img src="B For.png" alt="" />
</div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '1000px' ,backgroundImage: "url('./pattern.svg')"}}>
      <SearchTabs />
    </div>
    </div>
  )
}

export default Home