import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <div className="h-screen grid place-content-center bg-slate-200">
      <h1 className="text-9xl font-black mx-auto mb-10">404</h1>
      <h1 className="text-5xl font-bold mx-auto mb-10">Page Not Found!</h1>
      <Link className="btn btn-success mx-auto" to={"/"}>
        Back to Home
      </Link>
    </div>
  );
}

export default Error;
