ListCtrl = function (listView, footerView, store) {

	var addElementToList = function(element) {  //funkcja dodajaca element do listy, wywolywany jest finalny apendchild w listView
		listView.addELement(listView.list,element);
		store.add(store.data,element);
	};
	var updateFooter = function(data) {
		footerView.updateAllItems(data);
	};
	var updateFooterSelectedItems = function(element) {
		if(store.checkItem(element)) {
			element.className = element.className + "active_element";
		} else {
			element.className = element.className.replace("active_element","");
		}
		footerView.updateSelectedItems(store.selectedItems.length);
	};
	
	//3 listenery odpowiedzialne kolejno za dodawanie elementu, aktualizacje stopki i informacja dla store o dodaniu elementu
	listView.on("addingElement",addElementToList);

	listView.on("updateFooterSelectedItems",updateFooterSelectedItems);

	store.on("elementAdded",updateFooter);

};
