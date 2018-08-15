import React from 'react';
import { Layout } from 'antd';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default class HomePage extends React.PureComponent {

  render(){
    return (
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    )
  }
}