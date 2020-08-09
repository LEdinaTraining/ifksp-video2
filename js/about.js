/*
<tr>
    <td>1</td>
    <td>Kiss</td>
    <td>János</td>
    <td>55</td>
    <td>
        <div class="btn-group">
        <button class="btn-info btn">
            <i class="fas fa-sync-alt"></i>
        </button>
        <button class="btn btn-danger">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
    </td>
</tr>
*/

let users = [
    { surname: "Berger", firstname: "Whitney", age: 22 },
    { surname: "Nagy", firstname: "Árpi", age: 33 },
    { surname: "Kiss", firstname: "Bence", age: 44 },
    { surname: "Doe", firstname: "John", age: 55 },
    { surname: "Jack", firstname: "Vadölő", age: 32 },
    { surname: "Rostás", firstname: "Márió", age: 45 },
    { surname: "Fehér", firstname: "Péter", age: 19 },
    { surname: "Piros", firstname: "Gizella", age: 39 }
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for (let value of Object.values(users)) {
        createTD(value, tr);
    }
    tableBody.appendChild(tr);
}