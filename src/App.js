import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Headlines from './components/Headlines';
import './styles/headlines.css'
import SearchNews from './components/SearchNews';
import Details from './components/Details';
import { NewsProvider } from './components/NewsContext.js';
import Categories from './components/Categories';
import Weather from './components/Weather';
import Main from './components/Main';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NewsProvider>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/headlines' element={<Headlines />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/search' element={<SearchNews />} />
            <Route path="/news" element={<Details />} />
            <Route path='/weather' element={<Weather />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
        </NewsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
