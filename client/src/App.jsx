// import { Route } from "react-router-dom";
// import "./App.css";
// import { Routes } from "react-router-dom";
// import MainContainer from "./components/main-container/MainContainer";
// import Login from "./components/login/Login";
// import Welcome from "./components/work-area/Welcome";
// import ChatArea from "./components/work-area/ChatArea";
// import UserGroups from "./components/work-area/UserGroups";
// import CreateGroups from "./components/work-area/CreateGroups";
// import Groups from "./components/work-area/Groups";

// function App() {
//   return (
//     <>
//       <div>
//         <Routes>
//           <Route path="*" element={<Login />}>
//             <Route path="app" element={<MainContainer />}></Route>
//             <Route path="welcome" element={<Welcome />}></Route>
//             {/* <Route path="chat" element={<ChatArea />}></Route> */}
//             <Route path="users" element={<UserGroups />}></Route>
//             <Route path="groups" element={<Groups />}></Route>
//             <Route path="create-groups" element={<CreateGroups />}></Route>
//           </Route>
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login"; // Import your Login component
import MainContainer from "./components/main-container/MainContainer"; // Import your MainContainer component
import Welcome from "./components/work-area/Welcome"; // Import your Welcome component
import ChatArea from "./components/work-area/ChatArea";
import Users from "./components/work-area/Users";
import CreateGroups from "./components/work-area/CreateGroups";
import Groups from "./components/work-area/Groups";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat" element={<ChatArea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="create-groups" element={<CreateGroups />}></Route>
          <Route path="groups" element={<Groups />}></Route>
        </Route>
        <Route path="/auth" element={<Login />} />
        {/* <Route path="/register" element={<Login />} /> */}
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </div>
  );
};

export default App;
