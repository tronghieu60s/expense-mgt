import React from 'react';

interface Props {
  slogan: string;
  title: string;
  children: JSX.Element;
}

const Auth: React.FC<Props> = (props) => {
  const { title, slogan, children } = props;
  return (
    <div
      className="expense-auth"
      style={{
        backgroundImage: 'url(./images/bg-auth.jpg)',
      }}
    >
      <div className="expense-auth-form bg-secondary p-4 rounded">
        <div className="text-center mb-3">
          <h2 className="text-uppercase mb-0">{title}</h2>
          <p className="text-13">{slogan}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Auth;
