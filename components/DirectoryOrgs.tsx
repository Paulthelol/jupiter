import React, { FC } from 'react';
import { Org } from '../types/orgs';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Props {
  org: Org;
}
const OrgDirectoryCards: FC<Props> = ({ org }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/directory/${org.name}`);
  };
  return (
    <div
      className="md:w-full h-auto flex flex-col justify-between p-5 m-5 rounded-2xl cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <h4 className="text-xl font-bold text-center md:text-left">{org.name}</h4>
      <div className="w-auto h-40 relative justify-center rounded-sm p-2">
        <Image src={org.imageLink} alt={org.name} sizes='100vw' layout='fill' objectFit='contain'/>
      </div>
    </div>
  );
};

export default OrgDirectoryCards;
