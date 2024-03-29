import Layout from "@layout";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ParkSthal = () => {
  const router = useRouter();

  useEffect(() => {
    router.isReady && router.push("log-in");
  }, [router]);

  return <Layout title={"ParkSthal"} />;
};

export default ParkSthal;
