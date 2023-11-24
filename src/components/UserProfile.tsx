import React from "react";
import Image from 'next/image';

export const UserProfile = () => (
  <div className="flex items-center space-x-4">
    <p className="hidden cursor-not-allowed lg:inline">Kids</p>
    <Image
      src='/profile.png'
      alt='profile'
      width={36} height={36}
      className='rounded cursor-pointer' />
  </div>
);
