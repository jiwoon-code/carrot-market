import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req;
  const stream = await client.stream.findUnique({
    where: {
      id: +id!.toString(),
    },
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      name: true,
      price: true,
      description: true,
      userId: true,
      cloudflareId: true,
      messages: {
        select: {
          id: true,
          message: true,
          user: {
            select: {
              avatar: true,
              id: true,
            },
          },
        },
      },
    },
  });
  const isOwner = stream?.userId === user?.id;
  const ownedStream = await client.stream.findUnique({
    where: {
      id: +id!.toString(),
    },
    include: {
      messages: {
        select: {
          id: true,
          message: true,
          user: {
            select: {
              avatar: true,
              id: true,
            },
          },
        },
      },
    },
  });
  res.json({ ok: true, stream: isOwner ? ownedStream : stream });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
