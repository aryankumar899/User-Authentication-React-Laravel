import React from 'react';

const Success = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-green-100'>
      <div className='bg-white p-10 rounded-xl shadow-lg text-center'>
        <h2 className='text-3xl font-bold text-green-700 mb-4'>✅ Application Submitted</h2>
        <p className='text-lg text-gray-700'>Your application has been sent to the admins for review.</p>
      </div>
    </div>
  );
};

export default Success;
