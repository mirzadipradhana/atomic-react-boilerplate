import React from 'react';
import RouteAsyncContainer from './routeAsyncContainer';

export const IndexPage = () => <RouteAsyncContainer load={import('../ui/domain/PageIndex')} />;
export const AboutPage = () => <RouteAsyncContainer load={import('../ui/domain/PageAbout')} />;
