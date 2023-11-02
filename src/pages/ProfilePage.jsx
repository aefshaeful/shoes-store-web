import useLogin from "../hooks/useLogin";

export default function ProfilePage() {
  const username = useLogin();
    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="font-semibold text-blue-600 text-3xl mb-2">Welcome back, {username}</h1>
        </div>
    );
}