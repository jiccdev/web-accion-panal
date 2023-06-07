import React from 'react';

const Alert = ({ errorMsg }) => {
  return (
    <div
      className="flex p-4 text-sm rounded-full mt-3 text-red-800 bg-red-50"
      role="alert"
    >
      {errorMsg}
    </div>
  );
};

export default Alert;
