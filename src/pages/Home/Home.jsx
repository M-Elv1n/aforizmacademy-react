import React from 'react';
import Header from "../../components/header";
import Slideshow from "./container/Slideshow"
import Footer from "../../components/Footer";
import Lessons from './container/Lesson';
import ExameHome from './container/ExamHome';

export default function Home() {
  return (
    <div>
      <Header/>
      <Slideshow/>
      <Lessons/>
      <ExameHome/>
      <Footer/>
    </div>
  )
}
