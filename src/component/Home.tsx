import { Link } from "react-router-dom";
import Bar from "./Bar";

const Home = () => {
  return (
    <div>
      <div className="link">
        <Link to={"/add"}>Add</Link>
      </div>
      <Bar />
    </div>
  );
};

export default Home;
