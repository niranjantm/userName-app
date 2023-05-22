import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route,} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Products";
import RouteLayout from "./pages/RouteLayout";
import ErrorElement from "./pages/ErrorPage";
import ProductDetail from "./pages/ProductDetail";

function App() {
  // const routeDefination = createRoutesFromElements(
  //   <Route>
  //     <Route path="/"element={<HomePage/>} ></Route>
  //     <Route path="/product" element = {<Product/>}></Route>
  //   </Route>
  // )

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouteLayout></RouteLayout>,
      errorElement:<ErrorElement></ErrorElement>,
      children: [
        { index:true, element: <HomePage></HomePage> },
        { path: "products", element: <Product></Product> },
        { path: "products/:productId", element: <ProductDetail></ProductDetail> },
      ],
    },
  ]);
  // const router = createBrowserRouter(routeDefination)
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
