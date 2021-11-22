
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import './styles/App.css';
import Modal from './components/Modal';
import { useState } from 'react';
import How from './components/How';
import LateSec from './components/LateSec';
import Slack from './components/Slack';
import Sub from './components/Sub';
import Footer from './components/Footer';

function App() {

const [open,setOpen] = useState(false);

const handleModal = ()=>{
  setOpen(!open);
}

window.onresize = ()=>{
  window.innerWidth > 1000 && setOpen(false);
}

  return (
    <div className="wrapper">
          <NavBar open={open} handleModal={handleModal}/>
          <Hero/>
          <Modal open={open}/>
          <How/>
          <LateSec/>
          <Slack/>
          <Sub/>
          <Footer/>
    </div>
  );
}

export default App;
