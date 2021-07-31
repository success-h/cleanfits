import React, { useState, useEffect } from "react";
import { db, firebase } from "../auth";

function useFirebaseSignup({ firstname, lastname, email, phone, password }) {
  const [createdUser, setCreatedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        if (user.user.uid) {
          // Signup  was successful
          // Now we proceed to add user data to cloud firestore
          db.collection("users")
            .add({ firstname, lastname, email, phone })
            .then(user => setCreatedUser(user))
            .catch(err => setError(err.message));
        }
      })
      .catch(err => {
        setError(err.message);
      });
  }, [firstname, lastname, email, phone]);

  return [createdUser, error];
}

export default useFirebaseSignup;
