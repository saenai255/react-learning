import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "./shared/components/Loading";
import NotFound from "./shared/components/NotFound";

const HomePage = lazy(() => import('./modules/home/HomePage'));
const LoginPage = lazy(() => import('./modules/login/LoginPage'));
const ProfilePage = lazy(() => import('./modules/profile/ProfilePage'));
const RegisterPage = lazy(() => import('./modules/register/RegisterPage'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={<Loading />}>
            <HomePage />
        </Suspense>,

    },
    {
        path: '/login',
        element: <Suspense fallback={<Loading />}>
            <LoginPage />
        </Suspense>,
    },
    {
        path: '/register',
        element: <Suspense fallback={<Loading />}>
            <RegisterPage />
        </Suspense>,
    },
    {
        path: '/profile',
        element: <Suspense fallback={<Loading />}>
            <ProfilePage />
        </Suspense>,
    },
    {
        path: '*',
        element: <NotFound />
    }
])