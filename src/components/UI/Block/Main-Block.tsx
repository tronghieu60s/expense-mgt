import React from 'react';

interface Props {
  title?: string;
  children: JSX.Element;
}

const MainBlock: React.FC<Props> = (props) => {
  const { title, children } = props;

  return (
    <div className="expense-main-block shadow rounded bg-white p-3 mt-2">
      {title && <div className="mb-0 text-12 weight-600 text-uppercase mt-1 mb-2">{title}</div>}
      {children}
    </div>
  );
};

export default MainBlock;
