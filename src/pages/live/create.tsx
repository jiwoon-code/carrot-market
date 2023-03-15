import type { NextPage } from "next";
import Button from "../../../components/button";
import Input from "../../../components/input";
import TextArea from "../../../components/textarea";
import Layout from "../../../components/layout";

const LiveCreate: NextPage = () => {
  return (
    <Layout canGoBack title="Go Live">
      <form className=" space-y-5 py-10 px-4">
        <Input required label="Name" name="name" type="text" />
        <Input
          required
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea name="description" label="Description" />
        <Button text="Go live" />
      </form>
    </Layout>
  );
};

export default LiveCreate;
