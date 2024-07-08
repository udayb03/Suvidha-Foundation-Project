
import './App.css';
import AboutUs from './components/AboutUs';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mentor from './components/Mentor';
import Cards from './components/Cards';
import Processes from './components/Processes';
import Qualityprocedure from './components/Qualityprocedure';
import Carousel from './components/Carousel';
import OrderProcess from './components/OrderProcess';
import Insights from './components/Insights';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <AboutUs/>
      <Mentor heading={'Our Mentors'} note={'Intellectual, Passionate, and Highly Collaborative'}/>
      <Cards/>
      <Processes/>
      <Qualityprocedure/>
      <Carousel/>
      <OrderProcess/>
      <Insights/>
      <Footer/>

      {/* <Router>
        <Navbar />
        <Routes> 
          Define your routes here
          <Route path="/about-us" component={AboutUs} />
          <Route path="/services" component={Services} />
          <Route path="/service1" component={Service1} />
          <Route path="/service2" component={Service2} />
          <Route path="/service3" component={Service3} />
          <Route path="/industries" component={Industries} />
          <Route path="/industry1" component={Industry1} />
          <Route path="/industry2" component={Industry2} />
          <Route path="/industry3" component={Industry3} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/help-guide" component={HelpGuide} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/hire-research-assistant" component={HireResearchAssistant} />
        </Routes>
      </Router> */}
    </>
  )
}

export default App
