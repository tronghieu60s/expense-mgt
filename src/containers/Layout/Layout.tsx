import React from 'react';
import { useSelector } from 'react-redux';
import Layout from 'src/components/Layout/Layout';
import Loading from 'src/components/UI/Loading/Loading';

interface Props {
  title: string;
  children: JSX.Element;
}

const LayoutContainer: React.FC<Props> = (props): JSX.Element => {
  const { title, children } = props;
  const loading = useSelector((state) => state.ui.loading);

  return (
    <>
      {loading ? <Loading /> : null}
      <Layout title={title}>{children}</Layout>
    </>
  );
};

export default LayoutContainer;
