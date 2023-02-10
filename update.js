const create = document.getElementById("btn_create")
const p_name = document.getElementById("p_name")
const prise = document.getElementById("p_prise")
const description = document.getElementById("p_desc")
const image = document.getElementById("p_image")
if (localStorage.getItem("id") == undefined)
    localStorage.setItem("id", 0)
try {
    create.addEventListener("click", () => {
        let t_id = parseInt(localStorage.getItem("id")) + 1
        const product = {
            p_id: t_id,
            p_name: p_name.value,
            prise: prise.value,
            desc: description.value,
            // image : image.value
        }

        var start = ""
        var end = ""
        var brk = "]"
        var str = localStorage.getItem("product")
        console.log(str)
        if (str == null) {
            str = ""
            start = "["
        }
        else {
            start = ""
            end = ","
        }
        var n_str = str.substring(0, str.length - 1)
        localStorage.setItem("product", start + n_str + end + JSON.stringify(product) + brk)
        localStorage.setItem("id", t_id)
    })
}
catch (e) { console.log(e) }
const l_data = JSON.parse(localStorage.getItem("product"))
// console.log(l_data[1])
for (let i = 0; i < l_data.length; i++) {

    document.getElementById("test").innerHTML += `<div id="p_card">
    <div id="c_p_image"><img id="c_p_image_data" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80"></div>
    <div id="c_p_n_p">
        <div id="c_n">`+ l_data[i].p_name + `</div>
        <div id="c_p">`+ l_data[i].prise + `</div>
    </div>
    <div id="c_p_desp">`+ l_data[i].desc + `
    </div>
    <a class="btn btn-primary" id="btn_delete" href="#?id=`+ l_data[i].p_id + `">delete</a>
</div>`

}

window.addEventListener('popstate', function (event) {
    // The URL changed...
    let id_url = this.document.URL
    let id_val = parseInt(id_url.substring(id_url.length - 1, id_url.length))
    console.log(id_url + " : " + id_url.substring(id_url.length - 1, id_url.length))


    for (let i = 0; i < l_data.length; i++) {
        if (l_data[i].p_id == id_val) {
            console.log("l_data[i].p_id : " + l_data[i].p_id)
            console.log("id_val : " + id_val)
            console.log("i : "+i)
            console.log("before deelete :"+l_data)
            l_data.splice(i, 1)
            if (l_data.length == 0) { console.log("lenght 0")
        localStorage.clear() }
        else
            localStorage.setItem("product", JSON.stringify(l_data))
            console.log("after deldete : "+l_data)
        }
    }

});
// const btn_del= document.getElementById("btn_del")
// btn_del.addEventListener("click",()=>{
//     console.log("clicked delete")
// })