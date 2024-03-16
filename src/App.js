import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Browse from "./components/Browse";
import MovieDetails from "./components/movieDetails/MovieDetails";
import GptSearchPage from "./components/GptSearchPage";
import Footer from "./components/Footer";
import Loder from "./components/Loder";
import { Login2 } from "./components/Login2";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
    const AppLayout = () => {
        return (
            <>
                <Provider store={appStore}>
                    <Header />
                    <Outlet />
                    <Footer />
                </Provider>
            </>
        );
    };

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body />,
                },
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/browse",
                    element: <Browse />,
                },
                {
                    path: "browse/:movieId",
                    element: <MovieDetails />,
                },
                {
                    path: "/search",
                    element: <GptSearchPage />,
                },
                {
                    path: "/password-recovery",
                    element: <ForgotPassword />,
                },
                {
                    path: "*",
                    element: <Body />,
                },
            ],
        },
    ]);

    return <RouterProvider router={appRouter} />;
};

export default App;
