// import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Section } from '../components/Section';
// import { Notification } from '../components/Notification';
import { Layout } from '../components/Layout/Layout';

function App() {
  return (
    <>
      {/* <Layout /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
