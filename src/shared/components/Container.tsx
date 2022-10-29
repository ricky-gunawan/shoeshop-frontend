type ContainerProps = {
  maxWidth: "lg" | "xl" | "2xl";
  children: JSX.Element | JSX.Element[];
};

export const Container = ({ maxWidth, children }: ContainerProps) => {
  return <div className={`mx-auto px-1 max-w-screen-${maxWidth}`}>{children}</div>;
};
