UAM.FooterView = function (footerView) {
	UAM.EventEmitter.call(this);
	this.allElements = 0;
	this.selectedItems = 0;
	
	this.updateFooterView = function() {
		footerView.textContent = 'Wykonano: ' + this.selectedItems + '/' + this.allElements;
	}
	this.updateFooterView.bind(this);
	this.updateFooterView();
	this.updateAllItems = function(data) {
		this.allElements = data.length;
		this.updateFooterView();
	};

	this.updateSelectedItems = function(selectedItems) {
		this.selectedItems = selectedItems;
		this.updateFooterView();
	}

};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);



