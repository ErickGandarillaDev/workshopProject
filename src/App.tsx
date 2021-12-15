
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Layout from './layout/component';
import { userTokenSelector } from './redux/user/selectors';
import Addbike from './views/addbike/component';
import Error404 from './views/Error404/component';
import Home from './views/home/component';
import Login from './views/login/component';
import Summary from './views/summary/component';

function App() {

  const location= useLocation();
  const navigate= useNavigate();

  const tokenUser = useSelector(userTokenSelector);

  useEffect(() => { 
    if(tokenUser && tokenUser!== "" && (location.pathname==="/login" || location.pathname==="/login/")){
      navigate("/summary",{replace:true});
    }
  }, [tokenUser,location,navigate]);


  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/summary" element={<Summary/>}  />
          <Route path="/addbike" element={<Addbike/>}  />
          <Route path="/login" element={<Login/>}  />
          <Route path="*" element={<Error404/>}  />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
