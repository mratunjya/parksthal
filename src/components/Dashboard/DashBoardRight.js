import IndexRight from "./IndexRight";
import ManageParkingLot from "./Owner/ManageParkingLot";

const DashboardRight = ({ routerQuery, user }) => {
  if (routerQuery === "manage-parking-lots") {
    return <ManageParkingLot user={user} />;
  }
  return <IndexRight />;
};

export default DashboardRight;
