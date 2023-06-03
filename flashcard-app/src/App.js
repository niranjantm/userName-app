import CreateFlashcard from "./pages/CreateFlashcard";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import CreateNew from "./pages/CreateNew";
import MyFlashcards from "./pages/MyFlashcards";
import FlashcardDetail from "./pages/FlashcardDetail";

function App() {
  const router = createBrowserRouter([
    {path:"/",element:<CreateFlashcard></CreateFlashcard>,
    children:[
      {index:true,element:<CreateNew></CreateNew>},
      {path:"flashcards",element:<MyFlashcards></MyFlashcards>},
      {path:"flashcardDetail",element:<FlashcardDetail></FlashcardDetail>}
    ]}
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  ) ;
}

export default App;