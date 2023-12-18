import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('MilliySchool');
  switch (req.method) {
    case 'GET':
      const englishUsers = await db
        .collection('users_english')
        .find({})
        .toArray();
      const mathUsers = await db.collection('users_math').find({}).toArray();
      res.json({ status: 200, data: { englishUsers, mathUsers } });
      break;
  }
}
