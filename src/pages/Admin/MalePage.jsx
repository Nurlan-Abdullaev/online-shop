import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminCard } from "../../components/Admin/AdminCard";
import { getProductsByCategory } from "../../redux/slices/adminSlice";

export const MalePage = () => {
  const { isLoading, products } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsByCategory("MALE"));
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      {products.map(
        ({
          id,
          title,
          price,
          image,
          category,
          sizes,
          color,
          dateOfCreation,
        }) => (
          <AdminCard
            key={id}
            product={{
              id,
              title,
              price,
              image,
              category,
              sizes,
              color,
              dateOfCreation,
            }}
            onDelete={() => {}}
            onEdit={() => {}}
            getById={() => {}}
          />
        )
      )}
    </>
  );
};
