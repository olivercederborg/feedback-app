import { auth } from '@/lib/firebase-admin';
import { getUserSites } from '@/lib/db-admin';

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);
    const { sites } = await getUserSites(uid);
    // console.log(user);
    res.status(200).json({ sites });
  } catch (error) {
    res.status(500).json({ error });
  }
};
