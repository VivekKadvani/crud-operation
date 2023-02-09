const create = document.getElementById("btn_create")
const p_name = document.getElementById("p_name")
const prise = document.getElementById("p_prise")
const description = document.getElementById("p_desc")
const image = document.getElementById("p_image")
if(localStorage.getItem("id")==undefined)
    localStorage.setItem("id",0)

create.addEventListener("click",()=>{
    console.log("clcicked")
    console.log(p_name.value)
    console.log(prise.value)
    console.log(description.value)
    console.log(image.value)
    let t_id=parseInt(localStorage.getItem("id"))+1
    const product = {
        p_id : t_id,
        p_name: p_name.value,
        prise : prise.value,
        desc : description.value,
        // image : image.value
    }
      localStorage.setItem('product'+t_id, JSON.stringify(product))
      console.log("product"+t_id)
      localStorage.setItem("id",t_id)
      document.cookie="id="+t_id
      document.getElementById("sec4").innerHTML = localStorage.getItem("product");
        // JSON.parse(string)
})
