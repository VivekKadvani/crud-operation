const create = document.getElementById("btn_create")
const update = document.getElementById("btn_Update_form")
const p_name = document.getElementById("p_name")
const prise = document.getElementById("p_prise")
const p_image = document.getElementById("p_image")
const description = document.getElementById("p_desc")

if (localStorage.getItem("id") == undefined)
    localStorage.setItem("id", 0)


    
    create.addEventListener("click", () => {
            if (p_name.value == null && p_name.value=="") {
                alert("enter name")
                return 1;
            }

            else if (prise.value == null) {
                alert("enter prise")
                return 1;
            }

            else if (description.value == null) {
                alert("enter Image Url")
                return 1;
            }

            else if (p_image.value == null) {
                alert("enter descrription")
                return 1;
            }
            else 
                create_product()
        

    })
    function create_product() {
        this.location.reload();
        let t_id = parseInt(localStorage.getItem("id")) + 1

        const product = {
            p_id: t_id,
            p_name: p_name.value,
            prise: prise.value,
            desc: description.value,
            image: p_image.value
        }
        var start = ""
        var end = ""
        var brk = "]"
        var str = localStorage.getItem("product")
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
    }

     
const l_data = JSON.parse(localStorage.getItem("product"))

for (let i = 0; i < l_data.length; i++) {
    document.getElementById("test").innerHTML += `<div id="p_card">
    <div id="c_p_image"><img id="c_p_image_data" src="`+ l_data[i].image + `"></div>
    <div id="c_p_n_p">
        <div id="c_n">`+ l_data[i].p_name + `</div>
        <div id="c_p">`+ l_data[i].prise + `</div>
    </div>
    <div id="c_p_desp">`+ l_data[i].desc + `
    </div>
    <a class="btn btn-danger" id="btn_delete" href="#?action=delete&id=`+ l_data[i].p_id + `">delete</a>
    <a class="btn btn-primary" id="btn_update" href="#?action=update&id=`+ l_data[i].p_id + `">Update</a>
</div>`
}

update.addEventListener("click", () => {
    let id_url = this.document.URL
    let regex_id = /id=(\w+)/;
    let match_id = id_url.match(regex_id);
    let id_val_str = match_id ? match_id[1] : null;
    let id_val = parseInt(id_val_str)
    const l_data = JSON.parse(localStorage.getItem("product"))

    for (let i = 0; i < l_data.length; i++) {
        if (l_data[i].p_id == id_val) {
            const product = {
                p_id: id_val,
                p_name: p_name.value,
                prise: prise.value,
                desc: description.value,
                image: p_image.value
            }
            l_data[i] = product
            localStorage.setItem("product", JSON.stringify(l_data))
            location.reload();
        }
    }

})
window.addEventListener('popstate', function (event) {
    // The URL changed...
    let id_url = this.document.URL
    let regex = /action=([^&]+)/;
    let match = id_url.match(regex);
    let action = match ? match[1] : null;

    let regex_id = /id=(\w+)/;
    let match_id = id_url.match(regex_id);
    let id_val_str = match_id ? match_id[1] : null;
    let id_val = parseInt(id_val_str)

    if (action == "delete") {
        for (let i = 0; i < l_data.length; i++) {
            if (l_data[i].p_id == id_val) {
                l_data.splice(i, 1)
                if (l_data.length == 0)
                    localStorage.clear()
                else
                    localStorage.setItem("product", JSON.stringify(l_data))
            }
        }
        this.location.reload();
    }

    else if (action == "update") {
        for (let i = 0; i < l_data.length; i++) {
            if (l_data[i].p_id == id_val) {
                p_name.value = l_data[i].p_name
                prise.value = l_data[i].prise
                p_image.value = l_data[i].image
                description.value = l_data[i].desc
                update.disabled = false;
            }
        }
    }
});