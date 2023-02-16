
const create = document.getElementById("btn_create")
const update = document.getElementById("btn_Update")
const p_name = document.getElementById("p_name")
const prise = document.getElementById("p_prise")
const p_image = document.getElementById("p_image")
const description = document.getElementById("p_desc")
const image = document.getElementById("p_image")
const btn_sort_id_a = document.getElementById("btn_sort_id_a")
const btn_sort_id_d = document.getElementById("btn_sort_id_d")
const btn_sort_name_a = document.getElementById("btn_sort_name_a")
const btn_sort_name_d = document.getElementById("btn_sort_name_d")
const btn_sort_price_a = document.getElementById("btn_sort_price_a")
const btn_sort_price_d = document.getElementById("btn_sort_price_d")
const nav_home = document.getElementById("nav_home")
const nav_about = document.getElementById("nav_about")
const nav_skill = document.getElementById("nav_skill")
const nav_career = document.getElementById("nav_career")
const search = document.getElementById("search")


if (localStorage.getItem("id") == undefined)
    localStorage.setItem("id", 0)

try {
    create.addEventListener("click", () => {
        function validate() {
            if (p_name.value == null) {
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
        }

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

}


catch (e) {
    console.log(e)
}

const l_data = JSON.parse(localStorage.getItem("product"))

for (let i = 1; i <= l_data.length; i++) {
    document.getElementById("test").innerHTML += `<div id="p_card">
    <div id="c_p_image"><img id="c_p_image_data" src="`+ l_data[i - 1].image + `"></div>
    <div id="c_p_n_p">
        <div id="c_n">`+ l_data[i - 1].p_name + `</div>
        <div id="c_p">`+ l_data[i - 1].prise + `</div>
    </div>
    <div id="c_p_desp">`+ l_data[i - 1].desc + `
    </div>
    </div>`

}

btn_sort_id_a.addEventListener("click", () => {
    l_data.sort(function (a, b) {
        return a.p_id - b.p_id;
    });
    localStorage.setItem("product", JSON.stringify(l_data))
    location.reload();
})

btn_sort_id_d.addEventListener("click", () => {
    l_data.sort(function (a, b) {
        return a.p_id - b.p_id;
    });
    l_data.reverse()
    localStorage.setItem("product", JSON.stringify(l_data))
    location.reload();
})

btn_sort_name_a.addEventListener("click", () => {

    l_data.sort(function (a, b) {
        if (a.p_name < b.p_name) return -1;
        if (a.p_name > b.p_name) return 1;
        return 0;
    });
    localStorage.setItem("product", JSON.stringify(l_data))
    location.reload();
})

btn_sort_name_d.addEventListener("click", () => {

    l_data.sort(function (a, b) {
        if (a.p_name < b.p_name) return -1;
        if (a.p_name > b.p_name) return 1;
        return 0;
    });
    l_data.reverse()
    localStorage.setItem("product", JSON.stringify(l_data))
    location.reload();
})

btn_sort_price_a.addEventListener("click", () => {
    l_data.sort(function (a, b) {
        return a.prise - b.prise;
    });
    localStorage.setItem("product", JSON.stringify(l_data))
    location.reload();
})


btn_sort_price_d.addEventListener("click", () => {
    l_data.sort(function (a, b) {
        return a.prise - b.prise;
    });
    l_data.reverse();
    localStorage.setItem("product", JSON.stringify(l_data))
    location.reload();
})

function search_item() {
    if (search.value === "") {
        console.log("main normal")
        document.getElementById("test").innerHTML=""
        for (let i = 1; i <= l_data.length; i++) {
            document.getElementById("test").innerHTML += `<div id="p_card">
    <div id="c_p_image"><img id="c_p_image_data" src="`+ l_data[i - 1].image + `"></div>
    <div id="c_p_n_p">
        <div id="c_n">`+ l_data[i - 1].p_name + `</div>
        <div id="c_p">`+ l_data[i - 1].prise + `</div>
    </div>
    <div id="c_p_desp">`+ l_data[i - 1].desc + `
    </div>
</div>`

        }
    }
    else {
        setTimeout(() => {
            const filteredData = l_data.filter(item => item.p_name === search.value);
            console.log(filteredData)
            let temp = filteredData[0].p_id

            for (let i = 0; i < l_data.length; i++) {
                if (l_data[i].p_id == temp) {
                    document.getElementById("test").innerHTML = ""
                    for (let i = 0; i <= filteredData.length; i++) {
                        document.getElementById("test").innerHTML += `<div id="p_card">
                    <div id="c_p_image"><img id="c_p_image_data" src="`+ filteredData[i].image + `"></div>
                    <div id="c_p_n_p">
                        <div id="c_n">`+ filteredData[i].p_name + `</div>
                        <div id="c_p">`+ filteredData[i].prise + `</div>
                    </div>
                    <div id="c_p_desp">`+ filteredData[i].desc + `
                    </div>
                </div>`

                    }
                    console.log(l_data[i])
                    // document.getElementById("p_card").style.display="block"
                }
                else {
                    console.log("normal")
                    // document.getElementById("p_card").style.display="none"
                }
            }
        }, 1000);
    }
}
