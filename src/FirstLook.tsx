import React from 'react';
import './FirstLook.css';

const FirstLook = ({ onClick }: { onClick: () => void }) => (
  <div className="first-look" onClick={onClick}>
    💬
  </div>
);

export default FirstLook;