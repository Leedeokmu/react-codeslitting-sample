import React from 'react';
import Loadable from 'react-loadable';
import withSplitting from "../withSplitting";

const Loading = () => {
    return (<div>Loading...</div>);
};

export const Home = Loadable({
    loader: () => import("./Home"),
    loading: Loading
});


export const About = Loadable({
    loader: () => import("./About"),
    loading: Loading
});

// export const Home = withSplitting(() => import("./Home"));
// export const About = withSplitting(() => import("./About"));
