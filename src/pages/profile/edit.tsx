import type { NextPage } from "next";
import Button from "../../../components/button";
import Input from "../../../components/input";
import Layout from "../../../components/layout";

const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack title="Edit Profile">
      <form className="py-10 px-4 space-y-4">
        <div className="flex flex-col space-y-5  items-center space-x-3 mb-20">
          <div className="w-20 h-20 rounded-full bg-slate-500" />
          <div className="flex space-x-3">
            <label
              htmlFor="picture"
              className="cursor-pointer py-2 px-5 text-orange-500 border border-gray-300 rounded-lg shadow-sm text-sm font-semibold focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Photo
              <input
                id="picture"
                type="file"
                className="hidden"
                accept="image/*"
              />
            </label>
            <label
              htmlFor="picture"
              className="cursor-pointer py-2 px-5 text-orange-500 border border-gray-300 rounded-lg shadow-sm text-sm font-semibold focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
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
        <Input required label="Email address" name="email" type="email" />
        <Input
          required
          label="Phone number"
          name="phone"
          type="number"
          kind="phone"
        />
        <Button text="Update profile" />
      </form>
    </Layout>
  );
};
export default EditProfile;
