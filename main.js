
const create = document.getElementById("btn_create")
const update = document.getElementById("btn_Update")
const p_name = document.getElementById("p_name")
const price = document.getElementById("p_price")
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


const l_data = JSON.parse(localStorage.getItem("product"))

for (let i = 1; i <= l_data.length; i++) {
    document.getElementById("test").innerHTML += `<div id="p_card">
    <div id="c_p_image"><img id="c_p_image_data" src="`+ l_data[i - 1].image + `"></div>
    <div id="c_p_n_p">
        <div id="c_n">`+ l_data[i - 1].p_name + `</div>
        <div id="c_p">`+ l_data[i - 1].price + `</div>
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
        return a.price - b.price;
    });
    localStorage.setItem("product", JSON.stringify(l_data))
    location.reload();
})


btn_sort_price_d.addEventListener("click", () => {
    l_data.sort(function (a, b) {
        return a.price - b.price;
    });
    l_data.reverse();
    localStorage.setItem("product", JSON.stringify(l_data))
    location.reload();
})

function search_item() {
    if (search.value === "") {
        console.log("main normal")
        document.getElementById("test").innerHTML = ""
        for (let i = 1; i <= l_data.length; i++) {
            document.getElementById("test").innerHTML += `<div id="p_card">
    <div id="c_p_image"><img id="c_p_image_data" src="`+ l_data[i - 1].image + `"></div>
    <div id="c_p_n_p">
        <div id="c_n">`+ l_data[i - 1].p_name + `</div>
        <div id="c_p">`+ l_data[i - 1].price + `</div>
    </div>
    <div id="c_p_desp">`+ l_data[i - 1].desc + `
    </div>
    </div>`
        }
    }
    else {
        setTimeout(() => {
            const filteredData = l_data.filter(item => item.p_name === search.value);
            let temp = filteredData[0].p_id

            for (let i = 0; i < l_data.length; i++) {
                if (l_data[i].p_id == temp) {
                    document.getElementById("test").innerHTML = ""
                    for (let i = 0; i <= filteredData.length; i++) {
                        document.getElementById("test").innerHTML += `<div id="p_card">
                    <div id="c_p_image"><img id="c_p_image_data" src="`+ filteredData[i].image + `"></div>
                    <div id="c_p_n_p">
                        <div id="c_n">`+ filteredData[i].p_name + `</div>
                        <div id="c_p">`+ filteredData[i].price + `</div>
                    </div>
                    <div id="c_p_desp">`+ filteredData[i].desc + `
                    </div>
                </div>`
                    }
                }
                else {
                    console.log("normal")
                }
            }
        }, 1000);
    }
}
