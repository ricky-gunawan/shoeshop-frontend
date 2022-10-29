// import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/outline";
// import { Link } from "react-router-dom";
// import { useAppSelector } from "../redux/hooks";
// import { AdminNav } from "./AdminNav";
// import { NonAdminNav } from "./NonAdminNav";

// export const AppBar = () => {
//   const user = useAppSelector((store) => store.user.login.user);
//   const items = useAppSelector((store) => store.cart.userCart.cart?.items);

//   let totalItems = 0;
//   items?.forEach((product) => {
//     totalItems = totalItems + product.quantity;
//   });

//   return (
//     <div className="flex h-16 w-full items-center bg-green-700 px-2 text-neutral-50 shadow-lg md:px-6">
//       <Link to="/" title="Home" className="flex items-center">
//         <img className="hidden xs:block" src="/shoeshop.svg" width={36} alt="logo" />
//         <div className="ml-2 text-xl font-extrabold">Shoeshop</div>
//       </Link>
//       <span className="grow"></span>
//       {user?.isAdmin ? (
//         <div className="group mr-2 flex h-10 w-fit cursor-pointer items-center justify-center overflow-clip bg-green-700 text-center">
//           <div className="mr-2 text-xl capitalize text-white">Admin</div>
//           <div className="absolute top-3/4 m-1 hidden cursor-pointer rounded-md border bg-neutral-50 p-2 text-black group-hover:block">
//             <AdminNav />
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//       <Link to="/cart" title="Cart" className="relative">
//         {items && <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-md bg-orange-400 px-1 text-white">{totalItems}</div>}
//         <ShoppingCartIcon className="h-6 w-6 text-neutral-50" />
//       </Link>
//       <div className="group ml-5 flex h-10 w-fit cursor-pointer items-center justify-center overflow-clip bg-green-700 text-center">
//         {user ? <div className="mr-1 hidden text-xl capitalize text-white md:block">{user.name.split(" ")[0]}</div> : ""}
//         <UserCircleIcon className="mb-1 h-10 w-10 bg-green-700" />
//         <div className="absolute top-3/4 right-2 m-1 hidden cursor-pointer rounded-md border bg-neutral-50 p-2 text-black group-hover:block md:right-4">
//           {user ? (
//             <NonAdminNav />
//           ) : (
//             <Link to="/login">
//               <div className="rounded-md py-1 px-2 hover:bg-slate-200">Log In</div>
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
