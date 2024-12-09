import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { AboutMe } from './layout/aboutMe/AboutMe';
import { Contact } from './layout/contact/Contact';
import { Footer } from './layout/footer/Footer';

function App() {
    return (
        <div className="App">
          <Header/>
          <Main/>
          <Skills/>
          <Works/>
          <AboutMe/>
          <Contact/>
          <Footer/>
        </div>
    );
}

export default App;

