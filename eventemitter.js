const EventEmitter = require("events").EventEmitter;

let emitter = new EventEmitter();

//Subscribe to event/signal ~ synchronous
emitter.on("someEvent",(param1,param2) => console.log(`Square of ${param1} is ${param1*param1} and 2nd param is${param2}`));

for (i=0;i<10;i++)
{
    //Emit signal
    emitter.emit("someEvent",(i+1));
}