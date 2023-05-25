// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import RoutingPage from "./components/pages/Root";
import HomePage from "./components/pages/HomePage";
import EventsPage from "./components/pages/EventsPage";
import EventDetailPage ,{loader as EventDetailLoader,action as deleteAction}from "./components/pages/EventDetailPage";
import NewEventPage, {action as newEventAction }from "./components/pages/NewEventPage";
import EventRoot from "./components/pages/EventRoot";
import EditEventPage from "./components/pages/EditEventPage";
import {action as addAction } from "../src/components/EventForm"
import {loader as eventLoader} from "./components/pages/EventsPage"
import ErrorPage from "./components/pages/ErrorPage";

function App() {

  const router = createBrowserRouter([
  {
    path:"/",element:<RoutingPage></RoutingPage>,
    errorElement:<ErrorPage></ErrorPage>,
  children:[
    {index:true,element:<HomePage></HomePage>},
    {path:"events",element:<EventRoot></EventRoot>,children:
    [
      {index:true,element:<EventsPage></EventsPage>,loader: eventLoader},
      {path:"new",element:<NewEventPage></NewEventPage>,action:addAction},

  {path:":id",id:"edit-event",loader:EventDetailLoader,children:
  [
    {index:true,element:<EventDetailPage></EventDetailPage>,action:deleteAction},
    {path:"edit",element:<EditEventPage></EditEventPage>,action:addAction}
  ]}
 
    ]},
  
]
},

  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
