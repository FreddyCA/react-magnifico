import ButtonUsage from "./components/Button/Button";
import NavBar from "./components/NavBar/NavBar";
import ResetStyles from "./style/ResetStyles/ResetStyles";

const App = () => {
  return (
    <>
      <ResetStyles />
      <NavBar></NavBar>
      <ButtonUsage></ButtonUsage>
    </>
  );
};
export default App;
