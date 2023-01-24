import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { Bookmarks } from "./components/Bookmarks/Bookmarks";
import { NotesComponent } from "./components/notesComponents/NotesComponent";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<NotesComponent />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
    </Route>
  </Routes>
);
export default AppRoutes;
