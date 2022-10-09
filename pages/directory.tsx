import React from 'react';
import Head from 'next/head';
import OrgDirectoryHeader from '../components/OrgDirectoryHeader';
import OrgDirectoryTags from '../components/OrgDirectoryTags';
import OrgDirectorySidebar from '../components/OrgDirectorySidebar';
import OrgDirectoryGrid from '../components/OrgDirectoryGrid';

const DirectoryHead = () => (
  <Head>
    <title>Directory - Jupiter</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default function Directory() {
  return (
    <>
      <DirectoryHead />
      <main>
        <div className="grid md:grid-cols-6 grid-cols-3 gap-x-4 md:grid-rows-4 grid-rows-6 items-center justify-center h-full p-5 w-full">
          <OrgDirectoryHeader />
          <OrgDirectoryTags />
          <div className="flex flex-col row-start-1 col-start-[-2] md:col-end-[-2] col-end-[-1] w-full align-middle">
            <p>Filter</p>
          </div>
          <OrgDirectorySidebar />
          <OrgDirectoryGrid />
        </div>
      </main>
    </>
  );
}
