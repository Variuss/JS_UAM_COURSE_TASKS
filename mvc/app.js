window.addEventListener('DOMContentLoaded', function () {

	var store = new UAM.Store();

	var inputView = new UAM.InputView(document.querySelector('#inputview'));
	var listView = new UAM.ListView(document.querySelector('#listview'));
	var footerView = new UAM.FooterView(document.querySelector('#footerview'));

	new InputCtrl(inputView, listView, store);
	new ListCtrl(listView, footerView, store);
	new FooterCtrl(footerView, store);
});
