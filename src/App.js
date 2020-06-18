import React from 'react';
import './App.css';
import ContentWrapper from "./ContentWrapper/ContentWrapper";
import {BrowserRouter} from "react-router-dom"
import Header from './Components/Header/Header';

function App() {
    return (
        <BrowserRouter>
        <div className="main">
            <Header/>
            <ContentWrapper/>
        </div>
        </BrowserRouter>
    );
}

export default App;
