import React from 'react';
import Menu from './Menu';

function Body() {
    return (
      <div
        style={{
          background:
            "linear-gradient(to right, rgb(168, 255, 120), rgb(120, 255, 214))",
        }}
      >
        <Menu />
      </div>
    );
}

export default Body
