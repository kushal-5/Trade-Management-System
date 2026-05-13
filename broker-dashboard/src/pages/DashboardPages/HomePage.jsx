import React from 'react'
import UserFrame from '../../shared/UserFrame';
import UsersContent from './UserPage';

const HomeContent = () => {


  return (
    <div className='flex flex-col gap-4 scrollbar-hide'>
      <div className='flex flex-row gap-4 w-full text-[#E0E0E0] '>

  <UserFrame title="Total Turnover" value="RS 12,256,023" />
  <UserFrame title="Online Users" value="RS 12,256,023" />
  <UserFrame title="Offline Users" value="RS 12,256,023" />

  </div>
  <UsersContent/>
</div>
   
  )
}

export default HomeContent
