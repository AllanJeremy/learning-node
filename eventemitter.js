const EventEmitter = require("events").EventEmitter;

let emitter = new EventEmitter();

//Subscribe to event/signal ~ synchronous
emitter.on("someEvent", param1 => setImmediate(() => {console.log(`Square of ${param1} = ${param1*param1}`)}));

for (i=0;i<10;i++)
{
    //Emit signal
    emitter.emit("someEvent",(i+1));
}