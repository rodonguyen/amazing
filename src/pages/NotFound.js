import { changeWindowTitle } from "../components/utils";

const NotFound = () => {
  changeWindowTitle("Not found...");

  return (
    <div className="container notfound">
      <h1>Oopz, Page Not Found :P</h1>
      <p>
        Back to <a href="../">Home Page</a>
      </p>
    </div>
  );
};

export default NotFound;
