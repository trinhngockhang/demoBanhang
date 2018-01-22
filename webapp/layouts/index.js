import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/SharedComponent/Footer';


export default ({ children, title = 'Mesi.vn-Mua sắm online', description = 'mua hang online' }) => {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="stylesheet" href="/static/minify/bootstrap.min.css" />
                <link rel="stylesheet" href="/static/stylesheets/style.css" />
                <link rel="stylesheet" href="/static/stylesheets/responsive.css" />
                <script type="text/javascript" src="/static/minify/jquery.min.js"></script>
                <script type="text/javascript" src="/static/minify/tether.min.js" defer></script>
                <script type="text/javascript" src="/static/minify/bootstrap.min.js" defer></script>
                <script type="text/javascript" src="/static/minify/waypoints.min.js" defer></script>
                <script type="text/javascript" src="/static/minify/easing.js" defer></script>
                <script type="text/javascript" src="/static/minify/jquery.flexslider-min.js" defer></script>
                <script type="text/javascript" src="/static/minify/owl.carousel.js" defer></script>
                <script type="text/javascript" src="/static/minify/jquery.mCustomScrollbar.js" defer></script>
                <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtRmXKclfDp20TvfQnpgXSDPjut14x5wk&region=GB"></script>
                <script type="text/javascript" src="/static/minify/gmap3.min.js" defer></script>
                <script type="text/javascript" src="/static/minify/waves.min.js" defer></script>
                <script type="text/javascript" src="/static/minify/jquery.countdown.js" defer></script>

                <script type="text/javascript" src="/static/minify/main.js" defer></script>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
