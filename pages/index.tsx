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
        <div className="z-[-5] absolute min-h-[40vh] w-screen">
          <Image
            src={banner}
            alt="Jupiter"
            priority
            className="object-fill bg-cover md:h-[65vh] w-full h-[45vh]"
          />
        </div>
        <div className="justify-center flex flex-col min-h-[45vh] mx-auto md:w-[55vw] w-[75vw]">
          <p className="relative text-6xl md:text-8xl font-semibold text-white">
            Jupiter
          </p>
          <p className="relative text-base md:text-2xl font-semibold text-white">
            Get Connected on Campus.
          </p>
          <input
            className="relative mt-5 md:mt-10 rounded-md md:text-2xl w-full h-12 md:h-16 px-4 md:px-8 bg-white"
            placeholder="Search Organizations"
          />
        </div>
        <div className="p-8">
          <h1 className="font-medium text-2xl">Events</h1>
          <div className="md:grid md:grid-cols-4 grid-flow-row gap-4 w-full h-max">
            {events.map((event, key) => {
              return <EventCard key={key} name={event} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
