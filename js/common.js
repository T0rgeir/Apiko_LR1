function changeTasks() {
	// Click event for navigation 
	for (let i = 0; i < getId("nav").children.length; i++) {
		getId(`menu-task_${i + 1}`).addEventListener("click", () => {
			startTask(i + 1);
		});
	}
}

function startTask(num) {
	// Start new task
	for (let i = 0; i < getId("nav").children.length; i++) {
		getClass(`.menu-task_${i + 1}`).classList.remove("active");
		getClass(`.text-task_${i + 1}`).classList.remove("active");
		getClass(`.task_${i + 1}`).classList.remove("active");
	}
	
	getClass(`.menu-task_${num}`).classList.add("active");
	getClass(`.text-task_${num}`).classList.add("active");
	getClass(`.task_${num}`).classList.add("active");

	if (num === 1) showList(1);
	else if (num === 2) showArea(false);
}

document.addEventListener("DOMContentLoaded", () => {
	// Window onload
	startTask(1);
	changeTasks();
});