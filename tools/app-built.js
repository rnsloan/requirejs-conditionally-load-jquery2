define("app/main",["jquery"],function(e){e(function(){var t=e().jquery;e("#version").text(t)})}),requirejs.config({baseUrl:"js/lib",paths:{app:"../app",jquery:document.addEventListener?["//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min","jquery-2.0.2.min"]:["//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min","jquery-1.10.1.min"]}}),requirejs(["app/main"]),define("app",function(){});