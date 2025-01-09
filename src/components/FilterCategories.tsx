// import React from "react";
// import ProductCard from "./ProductCard.tsx";
// // import { fetchProducts } from "../store/slices/ProductsSlice.ts";
// import { useSelector } from "react-redux";
// import { RootState } from "../store/store.ts";



// const FilterCategories: React.FC = () => {
//   const fetchProductsByCategory = useSelector(
//     (state: RootState) => state.fetchProductsByCategorySlice.products
//   );
//   const status = useSelector((state: RootState) => state.productSlice.status);
//   const error = useSelector((state: RootState) => state.productSlice.error);

//   if (status === "loading") {
//     return <p>Loading...</p>;
//   }

//   if (status === "failed") {
//     return <p>Error: {error}</p>;
//   }
//   return (
//     <div className="grid grid-cols-[repeat(auto-fit,minmax(308.83px,1fr))] justify-items-center  justify-center items-center gap-[26px] my-20 mx-[55px] ">
//       {fetchProductsByCategory.map((fetchProduct) => (
//         <ProductCard
//           className="border border-[#B6B6B6] rounded-[20px]  w-[308.83px] h-[313.75px] py-[22.74px]  px-[13.28px] flex flex-col"
//           key={fetchProduct.id}
//           title={fetchProduct.title}
//           price={fetchProduct.price}
//           image={fetchProduct.image}
//         />
//       ))}
//     </div>
//   );
// };

// export default FilterCategories;
