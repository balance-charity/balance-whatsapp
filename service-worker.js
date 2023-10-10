function getContacts() {
		all = document.getElementsByTagName("span");
		for (i = 0; i < all.length; i++) {
				if (all[i].hasAttribute("title")) {
						ttl = all[i].getAttribute("title")
						csv = ttl.split(',')
						if (csv.length > 100) {
								bl = new Blob([csv], {type: "text/csv"})
								window.open(window.webkitURL.createObjectURL(bl))
						}
				}
		}


}

chrome.action.onClicked.addListener((tab) => {
		if (!tab.url.includes('chrome://')) {
				chrome.scripting.executeScript({
						target: { tabId: tab.id },
						function: getContacts
				});
		}
});
