import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { firebase } from "../auth";

function Layout({ pathname, children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signOut = () => firebase.auth().signOut();

  return (
    <div>
      <Header pathname={pathname} user={user} signOut={signOut} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
