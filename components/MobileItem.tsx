import React from 'react';

interface MobileItemProps {
  label: string;
}

const  MobileItem: React.FC<MobileItemProps> = ({label}) => {
  return (
    <div className="px-3 text-center text-white hover:underline">{label}</div>
  )
}

export default  MobileItem