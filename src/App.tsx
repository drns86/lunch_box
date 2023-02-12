import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./routes/Join";
import Login from "./routes/Login";
import Main from "./routes/Main";
import MyOrder from "./routes/MyOrder";
import Order from "./routes/Order";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  //
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>{<Route path="/" element={<Login />} />}</Routes>
          <Routes>{<Route path="/join" element={<Join />} />}</Routes>
          <Routes>{<Route path="main" element={<Main />} />}</Routes>
          <Routes>{<Route path="/myorder" element={<MyOrder />} />}</Routes>
          <Routes>{<Route path="/order" element={<Order />} />}</Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
