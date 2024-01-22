import { useState } from "react";

const HomeFeeds = () => {

  const [feeds, setFeeds] = useState([
    {
      src: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      caption: 'What a great view!',
      engagement: {
        like: '10k',
        comments: '12k',
        share: '9k'
      },
      profile_picture: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      src: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      caption: 'What a great view!',
      engagement: {
        like: '8k',
        comments: '7k',
        share: '9k'
      },
      profile_picture: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ]);

  return (
    <div className="flex flex-col h-screen w-screen">
      <div
        id="stickyHeader"
        className="flex flex-row justify-between border shadow p-2 fixed top-0 w-full bg-white bg-opacity-80"
      >
        <div id="logo">
          <a href="#">My Insta</a>
        </div>
        <a id="profile" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </a>
      </div>
      <div id="feeds" className="flex flex-col items-center pt-12 px-2 space-y-5 h-full w-full overflow-scroll">
        {feeds.length > 0 && feeds.map(feed => <Feed item={feed} />)}
      </div>
    </div>
  );
}

export default HomeFeeds;

const Feed = ({ item }) => {
  const [loved, setLoved] = useState(false);
  return (
    <div id="feed" className="border shadow rounded-md w-full p-2 space-y-5">
      <div id="feedHeader" className="flex flex-row justify-between">
        <img src={item.profile_picture} className="h-8 w-8 rounded-full border shadow" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      <div id="feedContent" className="flex flex-row w-full">
        <img
          className="flex flex-row h-96 w-full bg-gray-200 border rounded-md"
          src={item.src}
        />
      </div>
      <div id="feedAction" className="flex flex-row w-full space-x-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill={loved ? "red" : "none"} onClick={e => {
          setLoved(!loved)
        }} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
        {item.engagement.like}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
        </svg>
        {item.engagement.comments}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
        </svg>
        {item.engagement.share}
      </div>
      <div id="feedCaption">
        {item.caption}
      </div>
    </div>
  )
}