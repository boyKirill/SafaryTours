let allTr = document.querySelectorAll('tr');
let arrNames = [];

for (let tr of allTr) {
	arrNames.push(tr.value)

}

arrNames.sort();
alert(arrNames);