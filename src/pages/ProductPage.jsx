/************************* use fakestore api ***************/
// // import React, { useEffect, useState } from "react";
// import { NavbarComponent } from "../components/HeaderFooter/NavbarComponent";
// import {CardComponent} from '../components/ProductComponents/CardComponent'
// import { useGetProductsQuery } from "../redux/api";

// // export default function ProductPage() {
// //   // create states for products
// // const [products, setProducts] = useState([]);
// // const [loading, setLoading] = useState(true);
// // const [error, setError] = useState(null);
// //   // create useEffect to render products
// //   useEffect(() => {
// //   fetch("https://fakestoreapi.in/api/products")
// //     .then((res) => res.json())
// //     .then((res) => setProducts(res.products))
// //     .catch((err) => setError(err.message))
// //     .finally(() => setLoading(false));
// // }, []);
// // if (loading) return <p>Loading...</p>;
// // if (error) return <p>Error: {error}</p>;
// //   return (
// //     <>
// //       <NavbarComponent />

// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
// //         {products.map((pro) => (
// //           <CardComponent
// //             key={pro.id} // ✅ Add unique key
// //             image={pro.image}
// //             title={pro.title}
// //             description={pro.description}
// //           />
// //         ))}
// //       </div>
// //     </>
// //   );
// // }

// export default function ProductPage() {

//     const {data,isLoading,error} = useGetProductsQuery({
//       page: 1,
//       limit: 10
//     });
//     console.log(isLoading);
//     console.log(error);

//   return (
//     <div>
//          <NavbarComponent/>
//         <h1 className="text-center text-5xl pt-5">Our Products</h1>
//         <div className="grid container lg:grid-cols-4 p-8 gap-4">
//             {
//                 data?.map((pro,index)=>(
//                     <a href={`detail/${pro.id}`}>
//                        <CardComponent key={index} image={pro?.image}
//                     model={pro.model}
//                     description={pro.description}
//                     />
//                     </a>

//                 ))
//             }
//         </div>
//     </div>
//   )
// }

/**Use our api */
import { NavbarComponent } from "../components/HeaderFooter/NavbarComponent";
import { CardComponent } from "../components/ProductComponents/CardComponent";
import DatabTableComponent from "../components/ProductComponents/DataTableComponent";
import { useGetProductsQuery } from "../redux/api";

export default function ProductPage() {
  const { data, isLoading, error } = useGetProductsQuery({
    page: 1,
    limit: 8,
  });

  if (isLoading) {
    return (
      <div>
        <NavbarComponent />
        <h1 className="text-center text-5xl pt-5">Our Products</h1>
        <p className="text-center text-xl pt-10">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <NavbarComponent />
        <h1 className="text-center text-5xl pt-5">Our Products</h1>
        <p className="text-center text-xl pt-10 text-red-600">
          Error loading products: {error.message || error.toString()}
        </p>
      </div>
    );
  }

  return (
    <div>
      <NavbarComponent />
      <h1 className="text-center text-5xl pt-5">Our Products</h1>
      <div className="grid container lg:grid-cols-4 p-8 gap-4">
        {data?.map((pro) => (
          <a key={pro.id} href={`detail/${pro.id}`} className="block">
            <CardComponent
              image={pro?.image}
              model={pro.model}
              description={pro.description}
            />
          </a>
        ))}
      </div>
      <DatabTableComponent products={data} />
    </div>
  );
}
