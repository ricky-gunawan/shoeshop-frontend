import { Link, useLocation } from "react-router-dom";

const CustomerNav = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];

  return (
    <div className="flex xs:gap-4">
      <Link to="/orders">
        <div className={`mr-2 cursor-pointer ${path == "orders" ? "border-b-2" : ""} border-white text-xl capitalize text-white`}>Orders</div>
      </Link>
      <Link to="/cart">
        <div className={`mr-2 cursor-pointer ${path == "cart" ? "border-b-2" : ""} border-white text-xl capitalize text-white`}>Cart</div>
      </Link>
    </div>
  );
};

export default CustomerNav;
