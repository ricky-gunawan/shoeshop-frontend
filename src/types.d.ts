declare type RootState = ReturnType<typeof import("./app/store/index").store.getState>;
declare type AppDispatch = typeof import("./app/store/index").store.dispatch;

declare type Product = {
  _id: string;
  name: string;
  img: string;
  price: string;
  brand: string;
  color: string;
  description: string;
};

declare type ProductData = {
  name: string;
  img: string;
  price: string;
  brand: string;
  color: string;
  description: string;
};
