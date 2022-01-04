// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { fauna } from '../../../services/fauna';
import { Client, query as q, Ref } from 'faunadb';

export default async function GetGenrer(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }

  try {
    const dbs = await fauna.query(
      q.Map(
        q.Filter(
          q.Paginate(q.Documents(q.Collection('Users')), { size: 500 }),
          q.Lambda(
            'userRef',
            q.ContainsStr(
              q.LowerCase(q.Select(['data', 'cor'], q.Get(q.Var('userRef')))),
              'branca'
            )
          )
        ),
        q.Lambda('userRef', q.Get(q.Var('userRef')))
      )
    );

    //@ts-ignore
    return res.status(200).json(dbs.data);
  } catch (err) {
    console.log(err.message, 'deu erro');
  }
}
