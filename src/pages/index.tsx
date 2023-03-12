import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2  p-5 ">
      <ul className="list-decimal marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      <input
        type="file"
        className="file:hover:text-purple-500 file:hover:bg-white file:hover:border-purple-500 file:hover:border file:transition-colors file:cursor-pointer file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-500"
      />
      <p className="first-letter:text-6xl first-letter:hover:text-purple-400">
        Hello everyone
      </p>
    </div>
  );
};
export default Home;
