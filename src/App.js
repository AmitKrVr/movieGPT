import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Browse from "./components/Browse";
import MovieDetails from "./components/movieDetails/MovieDetails";
import GptSearchPage from "./components/GptSearchPage";

const App = () => {
    const AppLayout = () => {
        return (
            <>
                <Provider store={appStore}>
                    <Header />
                    <Outlet />
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
            ],
        },
    ]);

    return <RouterProvider router={appRouter} />;
};

export default App;
