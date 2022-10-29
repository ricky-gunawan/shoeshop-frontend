import { ChangeEvent } from "react";
import Filter from "../../entities/product/components/Filter";
import { setBrand, setColor } from "../../entities/product/models/filterSlice";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";

const ProductFilter = () => {
  const { brand, color } = useAppSelector((store) => store.filter);
  const dispatch = useAppDispatch();

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "brand") {
      dispatch(setBrand(value));
    } else if (name === "color") {
      dispatch(setColor(value));
    }
  };

  return <Filter brand={brand} color={color} handleFormChange={handleFormChange} />;
};

export default ProductFilter;
