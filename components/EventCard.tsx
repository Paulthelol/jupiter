import React from 'react';
import Image from 'next/image';

type Props = { name: string };

export const EventCard = ({ name }: Props) => {
  return (
    <div className="flex flex-col justify-center w-full h-full text-center">
      <Image
        src="https://about.utdnebula.com/assets/images/nebula-logo-wordmark-dark-900bab4faa8fb95f53466ab5b5072b90.png"
        height={200}
        width={200}
        className="bg-gray-300"
        alt="Event Image"
      />
      <div>{name}</div>
    </div>
  );
};
export default EventCard;
