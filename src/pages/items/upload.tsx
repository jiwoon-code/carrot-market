import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="space-y-5 px-4 py-16">
      <div>
        <label className="cursor-pointer w-full text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input className="hidden" type="file" />
        </label>
      </div>
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
        Upload product
      </button>
    </div>
  );
};

export default Upload;
