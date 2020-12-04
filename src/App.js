import BigTile from "./common/tiles/BigTile";
import { GlobalStyle } from "./GlobalStyle";
import { skillset } from "./common/personalInfo";
import { plans } from "./common/personalInfo";

function App() {
  return (
    <>
      <GlobalStyle />
      <BigTile title={skillset.title} icon={skillset.icon} list={skillset.list} />
      <BigTile title={plans.title} icon={plans.icon} list={plans.list} />
    </>
  );
}

export default App;
