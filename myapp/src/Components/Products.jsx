// import React, { useEffect } from "react";
// import {useDispatch,useSelector} from "react"
// import {getProductData} from '../Redux/actions'
// import { Select } from "./Styled";
// import { Grid } from "./Styled";

// export const Products = () => {
//   const [isLoading,isError,products]= useSelector((state)=>state.products)
//   const dispatch=useDispatch();
//   useEffect(() => {
  

//     // fetch ProductsData using redux-thunk on every mount
//     dispatch(getProductData())
//   }, [dispatch]);
//   const handleSort = (e) => {
//     // dispatch sort products on change
//   };
//   return (
//     <>
//       <h2>Products</h2>
//       <Select data-testid="product-sort-order" onChange={handleSort}>
//         <option>Sort by--</option>
//         <option value="asc">Low to High</option>
//         <option value="desc">High to Low</option>
//       </Select>
//       <Grid data-testid="products-container">
//         {/* iterate data and show each POroduct card */
//         products.map((item)=>{
//           return(
//             <div key={item.id}> 
//             <h3>{item.title}</h3>
//           <img src={item.image}/>
//            <h3>{item.brand}</h3>
//            <p>Price:{item.price}</p>
//             </div>
//           )

//         })
//       }
//       </Grid>
//     </>
//   );
// };