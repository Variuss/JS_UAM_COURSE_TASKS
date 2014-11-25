InputCtrl = function (inputView, listView, footerView, store) {
	
	var add = function(element) {
		listView.add(element);

	};
	inputView.on("addElement",add);


};
