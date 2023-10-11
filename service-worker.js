function getContacts() {
all = document.getElementsByTagName("span");
	for (i = 0; i < all.length; i++) {
		if (all[i].hasAttribute("title")) {
			ttl = all[i].getAttribute("title")
			csv = ttl.split(',')
			res = ""
			for (j = 0; j < csv.length; j++) {
				if (j > 5000) {
					break
				}
				console.log("jter " + j)
				console.log(csv[j])
				console.log(csv[j][0])
				next = csv[j].trim()
				if (next[0]== "+") {
					res += next + "," + '=HYPERLINK("https://wa.me/' + next.replace(/\D/g, '') + '")' + '\n'
				}
			}
			if (res.length > 3) {
				bl = new Blob([res], {type: "text/csv"})
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
