import IndexRight from "./IndexRight";

const DashboardRight = ({ routerQuery }) => {
  return !routerQuery && <IndexRight />;
};

export default DashboardRight;
