import type { NextPage } from "next";

const EditProfile: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-6">
      <div className="flex flex-col space-y-5  items-center space-x-3 mb-20">
        <div className="w-20 h-20 rounded-full bg-slate-500" />
        <div className="flex space-x-3">
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-5 text-orange-500 border-gray-300 rounded-lg shadow-sm text-xs font-medium focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            photo
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-5 text-orange-500 border-gray-300 rounded-lg shadow-sm text-xs font-medium focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Avatar
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Adress
        </label>
        <input
          id="email"
          type="email"
          className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <div className="flex rounded-lg shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            +82
          </span>
          <input
            id="input"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-lg rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            type="number"
            required
          />
        </div>
      </div>
      <button className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white py-2 px-3 border border-transparent rounded-lg shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Update Profile
      </button>
    </div>
  );
};
export default EditProfile;
