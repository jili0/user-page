import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ContactForm from "./components/ContactForm.jsx";
import DisplayUser from "./components/DisplayUser.jsx";
import NotFound from "./components/NotFound.jsx";
import FriendsList from "./components/FriendsList.jsx";

import LayoutPage from "./LayoutPage.jsx";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutPage />}>
      <Route index element={<DisplayUser />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/friends" element={<FriendsList />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
);
