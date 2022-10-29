import { ReactNode } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";
import { NothingToDisplay } from "./NothingToDisplay";

type LoadingAndErrorHandlerProps = {
  children: ReactNode | ReactNode[];
  isLoading: boolean | undefined;
  failed: boolean | undefined;
  data: any;
};

export const LoadingAndErrorHandler = ({ isLoading, failed, data, children }: LoadingAndErrorHandlerProps) => {
  return (
    <>
      {isLoading ? (
        <div className="mt-48">
          <Loader />
        </div>
      ) : failed ? (
        <div className="mt-48">
          <ErrorMessage />
        </div>
      ) : data && !Array.isArray(data) ? (
        <>{children}</>
      ) : Array.isArray(data) && data.length ? (
        <>{children}</>
      ) : (
        <div className="mt-48">
          <NothingToDisplay />
        </div>
      )}
    </>
  );
};
