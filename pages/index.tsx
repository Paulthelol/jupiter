import ExploreSearchBar from '../components/ExploreSearchBar';
import Head from 'next/head';
import Image from 'next/image';
import EventCard from '../components/EventCard';
import banner from '../public/banner.png';
export default function Home() {
  const events = ['Event 1', 'Event 2', 'Event 3', 'Event 4'];

  return (
    <>
      <Head>
        <title>Jupiter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="z-[-5] absolute min-h-[45vh] w-screen">
          <Image
            src={banner}
            alt="Jupiter"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            style={{ zIndex: -5 }}
            priority
          />
        </div>
        <ExploreSearchBar />
        <div className="p-8">
          <h1 className="font-medium text-2xl">Events</h1>
          <div className="grid grid-cols-4 grid-flow-row gap-4 w-full h-max">
            {events.map((event, key) => {
              return <EventCard key={key} name={event} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
