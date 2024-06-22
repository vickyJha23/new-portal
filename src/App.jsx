import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import ArticleDetail from "./pages/ArticleDetail";
const App = () => (
      <Router>
         <div>
             <NavBar />
          <Routes>
                <Route path ="/" element={< Home />}/>
                <Route path ="/article/:id" element={< ArticleDetail />}/>
           </Routes>
         </div>
      </Router>
)


export default App;