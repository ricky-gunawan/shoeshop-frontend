import { Navigate } from "react-router-dom";
import { Signup } from "../features/authentication";
import { useAppSelector } from "../redux/hooks";

type SignupPageProps = {};

export const SignupPage = ({}: SignupPageProps) => {
  const succeed = useAppSelector((store) => store.user.addUser.succeed);
  return (
    <>
      {succeed && <Navigate to={"/login"} />}
      <div className="mx-auto w-fit">
        <Signup />
      </div>
    </>
  );
};
