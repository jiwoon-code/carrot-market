import type { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";
import useSWR from "swr";

const Sold: NextPage = () => {
  const { data } = useSWR(`api/users/me/favs`);
  return (
    <Layout title="판매내역" canGoBack>
      <div className="flex flex-col space-y-5 py-10  divide-y">
        {data?.sales?.map((record) => (
          <Item
            id={record.product.id}
            key={record.id}
            title={record.product.name}
            price={record.product.price}
            comments={1}
            hearts={record.product._count.favs}
          />
        ))}
      </div>
    </Layout>
  );
};
export default Sold;
