import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Email from "./components/Email";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigate to="/inbox" />} />
        <Route path="/:tag" element={<Email></Email>} />
      </Routes>
    </div>
  );
}

export default App;
