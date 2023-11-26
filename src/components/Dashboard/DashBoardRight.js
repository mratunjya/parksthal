import IndexRight from "./IndexRight";

const DashboardRight = ({ routerQuery }) => {
  return routerQuery === "index" && <IndexRight />;
};

export default DashboardRight;
