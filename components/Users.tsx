import * as React from 'react';
import { Outlet } from 'react-router-dom';

export const Users = (props: any) => {
  console.log('ghler');
  return (
    <div>
      {' '}
      <p> Users </p>
      <Outlet />
    </div>
  );
};
