import Dashboard from "../Dashboard/Dashboard";
import OrderSettings from "../OrderSettings/OrderSettings";
import ProfileSettings from "../ProfileSettings/ProfileSettings";

export const adminPaths = {
  DASHBOARD: "/",
  SETTINGS: "/settings",
  PROFILE_SETTINGS: "/profile/settings",
};

export const adminRoutes = [
  { path: adminPaths.DASHBOARD, element: <Dashboard /> },
  { path: adminPaths.SETTINGS, element: <OrderSettings /> },
  { path: adminPaths.PROFILE_SETTINGS, element: <ProfileSettings /> },
];
