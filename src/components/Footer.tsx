import React from 'react';

const Footer: React.FC = (): JSX.Element => {
  return (
    <div className='Footer'>&copy; Brian Tracy {new Date().getFullYear()}</div>
  );
};

export default Footer;
