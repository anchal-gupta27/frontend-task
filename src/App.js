import Companies from "./Components/Companies/Companies";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import Jobs from "./Components/Jobs/Jobs";
import Requirements from "./Components/Requirements/Requirements";
import Specialization from "./Components/Specialization/Specialization";
import Universities from "./Components/Universities/Universities";


function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Specialization />
      <Requirements />
      <Universities />
      <Companies />
      <Jobs />
    </div>
  );
}

export default App;
