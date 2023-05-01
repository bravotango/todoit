import React from 'react';

const Footer: React.FC = (): JSX.Element => {
  return (
    <div className='Footer'>
      &copy; Brian Tracy {new Date().getFullYear()}{' '}
      <a href='https://github.com/bravotango/todoit' target='_blank'>
        🌱 Git
      </a>
    </div>
  );
};

export default Footer;
