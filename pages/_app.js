import wrapper from 'redux/store';
import 'resource/style.scss';

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
