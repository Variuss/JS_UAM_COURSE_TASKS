(function (global) {
var EE;
if (!global.UAM) {
global.UAM = {};
}
EE = function () {
// store the listeners somewhere
this.listeners = Array();
};
EE.prototype.on = function (eventName, listener, context) {

if (this.listeners[eventName] == undefined) {

	this.listeners[eventName] = Array();

}

//dodanie listenera do tablicy array, zgodnie z podpowiedzia uzylem bind'a

var eventFunc = listener.bind(context);
this.listeners[eventName].push(eventFunc);

//usuwanie listenerów, wykorzystalem splice

var removeList = this.listeners[eventName];

return function () {

	for (i = 0; i < removeList.length; i++) {
		if (removeList[i] == eventFunc) {
			removeList.splice(i, 1);
		}
	}
};

};

EE.prototype.emit = function (eventName) {

//z pomoc¹ kolegi, gdy¿ sam mia³em problemy

var argss = Array.prototype.slice.call(arguments, 0);

argss.shift(); 

for (i = 0; i < this.listeners[eventName].length; i++) {

	this.listeners[eventName][i].apply(this, argss);

}

};

// var ee = new EE();
//
// var removeListener = ee.on('test', function (arg1, arg2) {
// console.log(arg1, arg2, this.key);
// }, { key: 'value' });
//
// ee.emit('test', 1, 2); // 1, 2 value
//
// removeListener(); //removes my listener from the event emitter;
//
// ee.emit('test'); //nothing will execute

global.UAM.EventEmitter = EE;

}(window));