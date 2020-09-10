import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import wrapper from 'redux/store';
import 'resource/style.scss';

toast.configure();
const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
