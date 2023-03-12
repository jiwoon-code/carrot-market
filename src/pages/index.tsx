import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 xl:place-content-center py-20 px-20 grid lg:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen">
      <div className="bg-white dark:bg-black flex justify-between flex-col p-6 rounded-3xl shadow-3xl ">
        <span className="dark:text-white font-semibold text-3xl">
          Select Item
        </span>
        <ul>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between my-2 ">
              <span className="text-gray-500 dark:text-gray-100">
                Grey Chair
              </span>
              <span className="font-semibold dark:text-gray-50">$19</span>
            </div>
          ))}
        </ul>

        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button
          className="mt-5 block bg-blue-500 dark:bg-black dark:border-white dark:border dark:hover:bg-amber-300 text-white p-3 text-center rounded-xl w-3/4 mx-auto
        hover:bg-teal-500 hover:text-black
        "
        >
          Check Out
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className=" p-6 pb-14 xl:pb-40 landscape:bg-teal-500 portrait:bg-indigo-500">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 justify-between items-end">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-zinc-400 rounded-full group-hover:bg-red-300 transition" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="flex flex-col items-center relative -mt-10 -mb-5 ">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">NEW YORK, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅</span>
          <div className="space-x-3">
            <span>⭐4.9</span>
            <span className="shadow-sm p-2 rounded-md">❤</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium mb-1.5 text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className=" bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl rounded-lg text-gray-500">
                -
              </button>
              <span>1</span>
              <button className=" bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl rounded-lg text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-xs text-center text-white rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
