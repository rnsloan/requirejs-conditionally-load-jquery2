requirejs.config({
    // where to look for files, relative to this config file
    baseUrl: "js/lib",

    // shortcut names for various dependencies
    paths: {
        "app": "../app",
        "jquery": (document.addEventListener) ?
            ['//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min','jquery-2.0.2.min']
            :
            ['//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min','jquery-1.10.1.min']
    }
});

requirejs(["app/main"]);