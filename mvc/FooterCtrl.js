FooterCtrl = function (footerView, store) {

	var update = function() {
		footerView.updateSelectedItems(store.selectedItems.length);
	};
	footerView.on("updateFooterSelectedItems",update);
};
