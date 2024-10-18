import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-1">
        <div className="text-[44px] font-[600] text-blue-900 py-2 shadow-sm w-[100%] text-center">
          <p>Convert JSON To CSV</p>
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
