import React, { createElement } from 'react';
import PropTypes from 'prop-types';

const Auth = (props) => {
  return (
    <div
      className="expense-auth"
      style={{
        backgroundImage: 'url(./images/bg-auth.jpg)',
      }}
    >
      <div className="expense-auth-form bg-secondary p-4 rounded">
        <div className="text-center mb-3">
          <h2 className="text-uppercase mb-0">{props.title}</h2>
          <p className="text-13">{props.slogan}</p>
        </div>
        {props.children}
      </div>
    </div>
  );
};

Auth.propTypes = {
  slogan: PropTypes.string,
  title: PropTypes.string,

  children: PropTypes.element,
};

Auth.defaultProps = {
  slogan: '',
  title: '',

  children: createElement('div'),
};

export default Auth;
