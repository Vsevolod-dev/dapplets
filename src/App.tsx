import BG from './assets/BG.png'
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Content from "./components/Content";

function App() {
    return (
        <div className="App">
            <img className={'background'} src={BG} alt="BG"/>
            <LeftSide/>
            <Content/>
            <RightSide/>
        </div>
    );
}

export default App;
