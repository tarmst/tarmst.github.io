const resource = [
    /* --- CSS --- */
    '/tarmst.github.io/assets/css/style.css',

    /* --- PWA --- */
    '/tarmst.github.io/app.js',
    '/tarmst.github.io/sw.js',

    /* --- HTML --- */
    '/tarmst.github.io/index.html',
    '/tarmst.github.io/404.html',

    
        '/tarmst.github.io/about/',
    
        '/tarmst.github.io/resume/',
    
        '/tarmst.github.io/tags/',
    
        '/tarmst.github.io/categories/',
    
        '/tarmst.github.io/archive/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/tarmst.github.io/assets/img/favicons/android-chrome-192x192.png',
        '/tarmst.github.io/assets/img/favicons/android-chrome-512x512.png',
        '/tarmst.github.io/assets/img/favicons/apple-touch-icon.png',
        '/tarmst.github.io/assets/img/favicons/favicon-16x16.png',
        '/tarmst.github.io/assets/img/favicons/favicon-32x32.png',
        '/tarmst.github.io/assets/img/favicons/favicon.ico',
        '/tarmst.github.io/assets/img/favicons/mstile-150x150.png',
        '/tarmst.github.io/assets/js/dist/categories.min.js',
        '/tarmst.github.io/assets/js/dist/commons.min.js',
        '/tarmst.github.io/assets/js/dist/misc.min.js',
        '/tarmst.github.io/assets/js/dist/page.min.js',
        '/tarmst.github.io/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

