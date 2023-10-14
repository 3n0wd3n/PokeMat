import { Link } from "react-router-dom";
import reactLogo from "../assets/pokeball.png";
import { HomeMainContainer, HomeRotationContainer, HomeH1 } from "./Home.style";

export default function Home() {
  return (
    <>
      <HomeMainContainer>
        <HomeRotationContainer>
          <img src={reactLogo} className="logo pokeball" alt="React logo" />
        </HomeRotationContainer>
        <HomeH1>
          <Link to="/Main">See More</Link>
        </HomeH1>
      </HomeMainContainer>
    </>
  );
}
