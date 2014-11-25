UAM.InputView = function (inputView) {
	UAM.EventEmitter.call(this);
	
	this.buttonAdd = document.querySelector('#button');
	this.inputElement = document.querySelector('#inputValue');

		
	this.add = function() {
		var content = this.inputElement.value;
			if(content) {
				var liElement = document.createElement("li");
				liElement.textContent = content;
				this.inputElement.value = "";
				this.emit("addElement",liElement);
			}
	};

	this.buttonAdd.addEventListener("click",this.add.bind(this));	

};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);

