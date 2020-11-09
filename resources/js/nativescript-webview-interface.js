var oWebViewInterface = window.nsWebViewInterface;

// register listener for any event from native app
oWebViewInterface.on('anyEvent', function(eventData){

});

// emit event to native app
oWebViewInterface.emit('anyEvent', eventData);

// function which can be called by native app
window.functionCalledByNative = function(arg1, arg2){
    // do any processing
    return dataOrPromise;
}