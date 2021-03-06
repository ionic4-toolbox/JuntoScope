import * as express from "express";
import { firestore } from "../../services";

export async function deleteConnection(
  req: express.Request,
  res: express.Response
) {
  const uid = res.locals.user.uid;
  const connectionId = req.params.connectionId;
  await firestore
    .doc(`users/${uid}/connections/${connectionId}`)
    .delete()
    .then(
      () => {
        return res.status(201).send();
      },
      err => {
        return res.status(400).json({ message: err });
      }
    );
}
