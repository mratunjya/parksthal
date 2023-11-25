import Layout from "@layout";
import { SessionUser } from "@Auth";
import ConsumerProfile from "@components/Dashboard/ConsumerProfile";

const Profile = () => {
  const user = SessionUser();

  return (
    <Layout privateRoute>
      {user?.role === "consumer" && <ConsumerProfile />}
    </Layout>
  );
};

export default Profile;
