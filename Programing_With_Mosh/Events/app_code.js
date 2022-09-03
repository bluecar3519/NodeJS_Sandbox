var EventEmitter = require('events');
var emitter = new EventEmitter();

// Register a listener 
emitter.on('messageLogged', function(){
    console.log("The messageLogged heard event");
});

// Emit - Make a noise, produce ( signalling event has happen )
// Raise an event
emitter.emit('messageLogged');