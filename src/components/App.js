import React, {useRef} from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import MovieInfo from "./MovieInfo/MovieInfo";
import Actors from "./Actors/Actors";
import Movies from "./Movies/Movies";
import Profile from "./Profile/Profile";
import NavBar from "./NavBar/NavBar";
import useStyles from '../styles';
import useAlan from "./Alan";
import Footer from "./Footer/Footer";

function App() {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  useAlan();
  return (
    <>
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInfo />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Movies />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer}/>
    </div>
    <Footer />
  </>
  );
}

export default App;
