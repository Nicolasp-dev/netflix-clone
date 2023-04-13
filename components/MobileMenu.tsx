import React from 'react';
import MobileItem from './MobileItem';

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
  if(!visible) return null

  const mobileLabels: string[] = ['Home', 'Series', 'Films', 'New & Popular', 'My List', 'Browse by languages']
  
  return (
    <div className='bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex'>
      <div className="flex flex-col gap-4">
        {mobileLabels.map((label, i) => {
          return <MobileItem key={i} label={label}/>
        })}
        
      </div>
    </div>
  )
};

export default MobileMenu;