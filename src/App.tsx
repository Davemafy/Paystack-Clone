import Popup from "./components/Popup";
import Header from "./components/Header";

import Page from "./components/Page";
import "./App.css";

function App() {
    return (
        <div className="w-full text-oxfordBlue">
            <Popup />
            <Header />
            <Page />
        </div>
    );
}

export default App;
