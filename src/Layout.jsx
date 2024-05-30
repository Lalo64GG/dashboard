import React from 'react';
import { Outlet } from 'react-router-dom';
import { Dashboard } from './Dashboard';

export const Layout = () => {
  return (
    <div className=''>
      <Dashboard />
    </div>
  );
};
