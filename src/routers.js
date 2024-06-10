import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Menu from "./Pages/Menu/Menu";
import BookTable from "./Pages/BookTable/BookTable";
import Error404 from "./Pages/Error404/Error404";

export const router = [
    { path: '/', element: <Home /> },
    { path: '/AboutUs', element: <AboutUs /> },
    { path: '/Menu', element: <Menu /> },
    { path: '/BookTable', element: <BookTable /> },
    { path: '*', element: <Error404 /> },
]
