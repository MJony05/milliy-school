import Layout from '../components/layout';
import NProgress from 'nprogress';
import Router from 'next/router';
import Context from '../context/context';
Router.onRouteChangeStar = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();
export default function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  );
}
