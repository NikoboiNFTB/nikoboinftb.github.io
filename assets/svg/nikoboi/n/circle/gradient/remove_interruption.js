function removeElement(element) {
	if(element && element.parentNode) {
		element.parentNode.removeChild(element);
	}
}

function removeById(id) {
	const element = document.getElementById(id);
	removeElement(element);
}

function removeByClass(className) {
	const elements = document.getElementsByClassName(className);
	if(elements.length < 1) {
		return;
	}
	removeElement(elements[0]);
}

function removeInterruptions(records, observer) {
	const interruptionClasses = [
		"rq25k",   // className for the pop up box
		"Cip2pk",  // className for the main div blur effect
		"Cto1rx",  // className for the bottom bar blur effect
		"D5an6",   // className for the top of the youtube player blur effect
		"Cek20l",  // className for the Banner ad link
		"C0d2hw",   // className for the "love songsterr?" pop up
	];
	const interruptionIds = [
		"Redesign_ATF_tab_page_728x90",  // Id for the banner ad. I think the race condition is too
		                                 // slow for this to have any effect...
	];
	for(const record of records) {
		for(const addedNode of record.addedNodes) {
			if(addedNode.parentNode &&
			   (
				   interruptionClasses.includes(addedNode.className) ||
				   interruptionIds.includes(addedNode.id)
			   )
			  ) {
				addedNode.parentNode.removeChild(addedNode);
			}
		}
	}
}

// Get rid of pesky pop up elements when they are added to the DOM
const observer = new MutationObserver(removeInterruptions);
observer.observe(document.body, { childList: true, subtree: true });

// Remove elements as soon as the page loads
const bannerId = "Redesign_ATF_tab_page_728x90";
window.onload = removeById(bannerId);

const lovePopUpClass = "C0d2hw";
window.onload = removeByClass(lovePopUpClass);
