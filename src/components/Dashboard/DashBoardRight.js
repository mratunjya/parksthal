import IndexRight from "./IndexRight";
import ParkingHistory from "./Consumer/ParkingHistory";
import ManageParkingLot from "./Owner/ManageParkingLot";
import AvailableParkingSpots from "./Consumer/AvailableParkingSpots";

const DashboardRight = ({ routerQuery, user, dashboardRightHeight }) => {
  if (routerQuery === "manage-parking-lots") {
    return (
      <ManageParkingLot
        user={user}
        dashboardRightHeight={dashboardRightHeight}
      />
    );
  } else if (routerQuery === "available-parking-spots") {
    return (
      <AvailableParkingSpots
        user={user}
        dashboardRightHeight={dashboardRightHeight}
      />
    );
  } else if (routerQuery === "booking-history") {
    return (
      <ParkingHistory user={user} dashboardRightHeight={dashboardRightHeight} />
    );
  }
  return <IndexRight />;
};

export default DashboardRight;
