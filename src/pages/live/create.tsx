import type { NextPage } from "next";

const LiveCreate: NextPage = () => {
  return (
    <div className="space-y-5 px-4 py-16">
      <div>
        <label
          className="block mb-1 text-sm font-medium text-gray-700"
          htmlFor="price"
        >
          Name
        </label>
        <div className="rounded-md flex items-center shoadow-sm relative">
          <input
            className="appearance-none pl-5  w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400  focus:ring-orange-500 focus:border-orange-500"
            id="price"
            type="text"
            placeholder="Write your product's name"
          />
        </div>
      </div>
      <div>
        <label
          className="block mb-1 text-sm font-medium text-gray-700"
          htmlFor="price"
        >
          Price
        </label>
        <div className="rounded-md flex items-center shoadow-sm relative">
          <div className="absolute pointer-events-none left-0 pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            className="appearance-none pl-7  w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400  focus:ring-orange-500 focus:border-orange-500"
            id="price"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          className="mt-1 shadow-sm w-full  focus:ring-orange-500 rounded-lg border-gray-300 focus:border-orange-500"
          rows={4}
        />
      </div>
      <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-3 border border-transparent rounded-lg shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ">
        Go Live
      </button>
    </div>
  );
};

export default LiveCreate;
