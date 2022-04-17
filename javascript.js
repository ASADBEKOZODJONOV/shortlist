let b = document.getElementById('btn').onclick = chexbox;
let a = document.getElementById('ins');

function chexbox() {
    if (a.value != "") {
        let node12 = document.createElement("button");
        let textnode12 = document.createTextNode("Delete");
        node12.appendChild(textnode12);

        document.getElementById("myList").appendChild(node12);

        node12.style.position = 'relative'
        node12.style.right = '-30%'
        node12.style.top = '20px'
        let noed = document.createElement("p");
        let textn = document.createTextNode(ins.value);
        a.value = ""
        noed.appendChild(textn);
        document.getElementById("myList").appendChild(noed);
        node12.onclick = deletes;
        node.style.position = "relative"

        function deletes() {
            node12.style.display = 'none'
            noed.style.display = 'none'
        }

    } else {
        alert("siz hech narsa kiritmadiz. iltimos kiriting!!!")
    }

};