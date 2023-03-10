import UserLogin from "./pages/UserLogin.js";
import UserRegister from "./pages/UserRegister.js";
import OtpScreen from "./pages/OtpScreen.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDashboard from "./pages/MainDashboard.js";
import SelectTopic from "./pages/SelectTopic.js";
import ChatRoom from "./pages/ChatRoom.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<MainDashboard />} />
            <Route exact path="login" element={<UserLogin />} />
            <Route exact path="signup" element={<UserRegister />} />
            <Route exact path="otp" element={<OtpScreen />} />
            <Route exact path="topic" element={<SelectTopic />} />
            <Route exact path="chatRoom" element={<ChatRoom />} />

            {/* <User_register/> */}
            {/* <User_login/> */}
            {/* <Main_dashboard /> */}
            {/* <Otp_screen/> */}
            {/* <Chat_room/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
