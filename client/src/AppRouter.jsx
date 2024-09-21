import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Customers from './customer/Customers';

const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" component={""} />
        <Route path="/jobcards" component={"About"} />
        <Route path="/customers" component={<Customers />}/>
        <Route path="/vehicles" component={""} />
        <Route path="quotations" component={""} />
        <Route path="/invoices" component={""} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
