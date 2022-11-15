// import { Route, Routes } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
// import { Section } from '../components/Section';
// import { Notification } from '../components/Notification';
import { Layout } from 'components/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
};

// export default App;
