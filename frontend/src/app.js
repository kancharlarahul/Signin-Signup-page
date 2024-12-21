// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 {/* Define a default route */}
//                 <Route path="/" element={<SignIn />} />
//                 <Route path="/signup" element={<SignUp />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} /> {/* Redirect to /signup */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
