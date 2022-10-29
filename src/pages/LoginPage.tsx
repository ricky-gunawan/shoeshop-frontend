import { Navigate } from "react-router-dom";
import { Login } from "../features/authentication";
import { useAppSelector } from "../redux/hooks";

type LoginPageProps = {};

export const LoginPage = ({}: LoginPageProps) => {
  const user = useAppSelector((store) => store.user.login.user);
  return (
    <>
      {user && <Navigate to={"/"} />}
      <div className="mx-auto w-fit">
        <Login />
      </div>
    </>
  );
};
