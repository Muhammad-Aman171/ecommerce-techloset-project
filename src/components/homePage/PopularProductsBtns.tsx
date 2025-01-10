// import React, { useEffect } from "react";
import Button from "../buttons/button.tsx";
// import {
//   filterByCategory,
//   selectFilteredProducts,
// } from "../../store/slices/FilterCategoriesSlice.ts";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState, AppDispatch } from "../../store/store.ts";

// const PopularProducts = () => {
//   const allProducts = useSelector(
//     (state: RootState) => state.productSlice.products
//   );
//   const  categories = useSelector((state: RootState) => state.filterSlice.filteredProducts)

//   const dispatch = useDispatch<AppDispatch>();
//   const status = useSelector((state: RootState) => state.productSlice.status);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   const handleFilter = (category: string) => {
//     dispatch(filterByCategory({ category, products: allProducts }));
//   };

//   if (status === "loading") return <p>Loading categories...</p>;
//   if (status === "failed") return <p>Failed to load categories.</p>;

//   return (
//     <div>
//       {" "}
//       <div className="flex justify-between items-center my-20 mx-8 gap-x-4 max-md:flex-col max-md:items-start max-md:my-10">
//         <div className="w-[250px] ">
//           <h1 className="text-[27.38px] text-textColor leading-[41.07px] font-semibold text-nowrap  ">
//             Popular products
//           </h1>
//         </div>
//         {categories.map((category:any) => (
//           <div className="flex items-center flex-wrap gap-3 ">
//             <Button
//               key={category}
//               onClick={() => handleFilter(category)}
//               label={`${category} aman `}
//               // category="electronics"
//               // content="electronics"
//               className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
//             />
//           </div>
//         ))}
//         {/*
// <Button
// label="jewelery" category="jewelery"
// // content="jewelery"
// className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
// />
// <Button
// label="men's clothing" category="men's clothing"
// // content="men's clothing"
// className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
// />
// <Button
// label="women's clothing" category="women's clothing"
// // content="women's clothing"
// className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
// /> */}

//         {/* <div className="grid grid-cols-2 gap-3 md:hidden ">
//           <Swiper
//             modules={[Navigation, Pagination]} // Enable Navigation and Pagination
//             spaceBetween={30} // Gap between slides
//             slidesPerView={2} // Show 3 slides at a time
//             loop={true}
//             // navigation // Enable navigation arrows
//             // pagination={{ clickable: true }} // Enable pagination dots
//             // breakpoints={{
//             //   768: { slidesPerView: 2, spaceBetween: 20 },
//             //   0: { slidesPerView: 1, spaceBetween: 10 },
//             // }}
//           >

//             <SwiperSlide>
//               <Button
//                 content="Cameras"
//                 style="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Button
//                 content="Laptops"
//                 style="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Button
//                 content="Tablets"
//                 style="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Button
//                 content="Mouse"
//                 style="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
//               />
//             </SwiperSlide>
//           </Swiper>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default PopularProducts;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../../store/slices/ProductsSlice.ts";
import { filterByCategory } from "../../store/slices/FilterCategoriesSlice.ts";
import { RootState, AppDispatch } from "../../store/store.ts";
// import Button from "./Button";

const PopularProducts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const allProducts = useSelector(
    (state: RootState) => state.productSlice.products
  );
  const status = useSelector((state: RootState) => state.productSlice.status);

  const handleFilter = (category: string) => {
    dispatch(filterByCategory({ category, products: allProducts }));
  };

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center w-full my-20 mx-8 gap-x-4 max-md:flex-col max-md:items-start max-md:my-10">
        <div className="w-[250px] ">
          <h1 className="text-[27.38px] text-textColor leading-[41.07px] font-semibold text-nowrap  ">
            Popular products
          </h1>
        </div>
        <div className="flex items-center flex-wrap gap-3 ">
          <Button
            label="All"
            onClick={() => handleFilter("all")}
            className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
          />
          <Button
            label="Electronics"
            onClick={() => handleFilter("electronics")}
            className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
          />
          <Button
            label="Jewelry"
            onClick={() => handleFilter("jewelery")}
            className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
          />
          <Button
            label="Men's Clothing"
            onClick={() => handleFilter("men's clothing")}
            className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
          />
          <Button
            label="Women's Clothing"
            onClick={() => handleFilter("women's clothing")}
            className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
          />
        </div>
        {/* {categories.map((category: any) => (
          <div className="flex items-center flex-wrap gap-3 ">
            <Button
              key={category}
              onClick={() => handleFilter(category)}
              label={`${category} aman `}
              // category="electronics"
              // content="electronics"
              className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
            />
          </div>
        ))} */}
        {/*
// <Button
// label="jewelery" category="jewelery"
// // content="jewelery"
// className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
// />
// <Button
// label="men's clothing" category="men's clothing"
// // content="men's clothing"
// className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
// />
// <Button
// label="women's clothing" category="women's clothing"
// // content="women's clothing"
// className="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
// /> */}
        {/* <div className="grid grid-cols-2 gap-3 md:hidden ">
//           <Swiper
//             modules={[Navigation, Pagination]} // Enable Navigation and Pagination
//             spaceBetween={30} // Gap between slides
//             slidesPerView={2} // Show 3 slides at a time
//             loop={true}
//             // navigation // Enable navigation arrows
//             // pagination={{ clickable: true }} // Enable pagination dots
//             // breakpoints={{
//             //   768: { slidesPerView: 2, spaceBetween: 20 },
//             //   0: { slidesPerView: 1, spaceBetween: 10 },
//             // }}
//           >

//             <SwiperSlide>
//               <Button
//                 content="Cameras"
//                 style="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Button
//                 content="Laptops"
//                 style="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Button
//                 content="Tablets"
//                 style="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Button
//                 content="Mouse"
//                 style="text-[16.38px] font-medium leading-[24.57px] text-textColor border border-borderColor rounded-[20px] w-[139px] py-[10px]   "
//               />
//             </SwiperSlide>
//           </Swiper>
//         </div> */}
      </div>
    </div>
  );
};

// return (
//   <div>
//     <div className="filter-buttons">
//       <Button label="All" onClick={() => handleFilter("all")} />
//       <Button
//         label="Electronics"
//         onClick={() => handleFilter("electronics")}
//       />
//       <Button label="Jewelry" onClick={() => handleFilter("jewelery")} />
//       <Button
//         label="Men's Clothing"
//         onClick={() => handleFilter("men's clothing")}
//       />
//       <Button
//         label="Women's Clothing"
//         onClick={() => handleFilter("women's clothing")}
//       />
//     </div>

/* <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div> */

//     </div>
//   );
// };

export default PopularProducts;
