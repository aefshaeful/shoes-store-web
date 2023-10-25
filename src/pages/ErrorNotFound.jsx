import { useRouteError } from "react-router-dom";

export default function ErrorNotFound() {
    const error = useRouteError();
    return (
        <div className="bg-blue-400 flex justify-center min-h-screen items-center flex-col">
            <h1 className="font-bold text-8xl text-red-600 mb-2">404</h1>
            <p className="text-gray-600 text-lg">{error?.statusText || error?.message}</p>
        </div>
    )
}


