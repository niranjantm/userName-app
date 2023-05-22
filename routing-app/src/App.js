import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route,} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Products";
import RouteLayout from "./pages/RouteLayout";
import ErrorElement from "./pages/ErrorPage";

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
        { path: "/", element: <HomePage></HomePage> },
        { path: "/products", element: <Product></Product> },
      ],
    },
  ]);
  // const router = createBrowserRouter(routeDefination)
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
