import { Outlet } from "react-router-dom";

const PublicHomePage = () => {
  return (
    <>
      <PublicAppBar />
      <Outlet />
    </>
  );
};

export default PublicHomePage;
