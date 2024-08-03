import './App.scss';
import { Navbar } from './components';
import { Footer, Header, Skills, Testimonial, Work } from './container';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            {/* <About /> */}
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    )
}


export default App