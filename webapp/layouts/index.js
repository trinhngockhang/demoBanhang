import React from 'react';
import Head from 'next/head';

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
                {/* <link rel="stylesheet" href="/static/minify/slick.css" />
                <link rel="stylesheet" href="/static/minify/slick-theme.css" /> */}
                <link rel="stylesheet" href="/static/stylesheets/style.css" />
                <link rel="stylesheet" href="/static/stylesheets/responsive.css" />
            </Head>
            {children}
            <script type="text/javascript" src="/static/minify/jquery.min.js"></script>
            <script type="text/javascript" src="/static/minify/tether.min.js"></script>
            <script type="text/javascript" src="/static/minify/bootstrap.min.js"></script>
            <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtRmXKclfDp20TvfQnpgXSDPjut14x5wk&region=GB"></script>
            <script type="text/javascript" src="/static/minify/script.js"></script>
        </div>
    )
}
