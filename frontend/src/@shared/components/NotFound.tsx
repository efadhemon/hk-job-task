import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h2 className="text-red-500 text-2xl font-bold">Not Found :(</h2>
      <Button className="mt-4" type="primary" onClick={() => navigate('/')}>
        Back To Home
      </Button>
    </div>
  );
};

export default NotFound;
