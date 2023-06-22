import type { NextApiRequest, NextApiResponse } from "next";
import { todos } from "../../../../todos";

type Todo = {
  id: number;
  title: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo[]>
) {
  res.status(200).json(todos);
}
