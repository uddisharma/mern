import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export default function NotFund() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white py-14 px-6 sm:py-18 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Sorry, To explore this <br /> page you have to login first
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>

            <div className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <button
                onClick={() => loginWithRedirect()}
                // className="text-xl font-semibold leading-6 text-gray-900"
              >
                Login Here <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
