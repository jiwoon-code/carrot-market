import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 p-5 bg-blue-500 focus-within:bg-blue-300">
      <input type="text" required placeholder="Username" />
      <input type="password" required placeholder="Password" />
      <input type="submit" value="login" className="bg-white" />
    </form>
  );
};
export default Home;
