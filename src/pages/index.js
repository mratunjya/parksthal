import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@layout";

const ParkSthal = () => {
  const router = useRouter();

  useEffect(() => {
    router.isReady && router.push("log-in");
  }, [router]);

  return <Layout title={"ParkSthal"}></Layout>;
};

export default ParkSthal;
