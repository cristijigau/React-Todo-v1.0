import React from 'react';

const ThemeToggleButton = ({ toggleTheme }) => {
  return (
    <div className="theme-switch">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onClick={toggleTheme}
      />
      <label htmlFor="checkbox" className="label">
        <i className="fas fa-moon fa-xs"></i>
        <i className="fas fa-sun fa-xs"></i>
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default ThemeToggleButton;
