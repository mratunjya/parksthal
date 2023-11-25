import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

import Layout from "@layout";
import ConsumerProfile from "@components/Dashboard/ConsumerProfile";
import AttendantProfile from "@components/Dashboard/AttendantProfile";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getSession().then((session) => setUser(session?.session?.user));
  }, []);

  return (
    <Layout privateRoute>
      {user?.role === "consumer" && <ConsumerProfile />}
      {user?.role === "attendant" && <AttendantProfile />}
    </Layout>
  );
};

export default Profile;
