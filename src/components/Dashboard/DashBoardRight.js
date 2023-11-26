import IndexRight from "./IndexRight";
import ManageParkingLot from "./Owner/ManageParkingLot";

const DashboardRight = ({ routerQuery, user, dashboardRightHeight }) => {
  if (routerQuery === "manage-parking-lots") {
    return (
      <ManageParkingLot
        user={user}
        dashboardRightHeight={dashboardRightHeight}
      />
    );
  }
  return <IndexRight />;
};

export default DashboardRight;
