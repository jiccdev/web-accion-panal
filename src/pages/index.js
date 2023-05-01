import React, { Fragment } from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutPage from '@/components/LayoutPage/LayoutPage';

const Home = () => (
  <Fragment>
    <HeadPage>
      <title>Unne | Inicio</title>
    </HeadPage>

    <LayoutPage></LayoutPage>
  </Fragment>
);

export default Home;
