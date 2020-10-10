function showError() {
	getClass(".item__inputs-area p").classList.add("active");
}

function deleteError() {
	getClass(".item__inputs-area p").classList.remove("active");
}

function showArea(flag) {
	// Show password area after valedate function
	if (flag) getClass(".item__password p").classList.add("active");
	else getClass(".item__password p").classList.remove("active");
}

function pastePassword(text) {
	// Insert new password string
	showArea(true);
	getId("password__area").innerHTML = text;
}

function generatePassword(length, type) {
	// Password generating algorithm
	let password = "";
	for (let i = 0; i < length; i++) password += type.charAt(Math.floor(Math.random() * type.length));
	return password;
}

function completePassword(length, isNumbers, isSymbols, isHybrid) {
	// Choose path od password generating
	if (isHybrid)	pastePassword(generatePassword(length, hybrid));	
	else if (isNumbers) pastePassword(generatePassword(length, numbers));
	else if (isSymbols) pastePassword(generatePassword(length, letters));
}

function showPassword() {
	deleteError();

	let length = getId("string__length").value,
			isNumber = getId("is__number").checked,
			isSymbol = getId("is__symbol").checked,
			isHybrid = getId("is__hybrid").checked;
		
	if (getvalidateInput(length)) completePassword(length, isNumber, isSymbol, isHybrid);
	else showError();
}