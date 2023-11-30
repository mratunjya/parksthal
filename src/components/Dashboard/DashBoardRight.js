import IndexRight from "./IndexRight";
import ParkingHistory from "./Consumer/ParkingHistory";
import ManageParkingLot from "./Owner/ManageParkingLot";
import AvailableParkingSpots from "./Consumer/AvailableParkingSpots";

const DashboardRight = ({
  user,
  setTitle,
  routerQuery,
  dashboardRightHeight,
}) => {
  if (routerQuery === "manage-parking-lots") {
    setTitle("ParkSthal: Dashboard - Manage Parking Lots");
    return (
      <ManageParkingLot
        user={user}
        dashboardRightHeight={dashboardRightHeight}
      />
    );
  } else if (routerQuery === "available-parking-spots") {
    setTitle("ParkSthal: Dashboard - Available Parking Lots");
    return (
      <AvailableParkingSpots
        user={user}
        dashboardRightHeight={dashboardRightHeight}
      />
    );
  } else if (routerQuery === "booking-history") {
    setTitle("ParkSthal: Dashboard - Booking History");
    return (
      <ParkingHistory user={user} dashboardRightHeight={dashboardRightHeight} />
    );
  }
  return <IndexRight />;
};

export default DashboardRight;
