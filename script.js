function storeRec(){
    let car={
        carBrand:carBrand.value,
        Price:price.value,
        key:key.value
    }
  if(carBrand.value==""||price.value==""||key.value==""){
    alert("Pleade Fullfill the Data")
  }else{
    if(car.key in localStorage){
        alert("This Key Already Exist")
      } 
      else{
        localStorage.setItem(car.key,JSON.stringify(car))
        alert("Data Added Successfully")
      }
  }
}
// retriving data 
 function retriveRec(Event){
    // Event.prevent.default
let x= document.getElementById("RetriveKey").value

if( x in localStorage){
    alert("This Item Alredy Exists")
}else{
    alert("This Key is Not Present")
}
let data= JSON.parse(localStorage.getItem(x))
console.log(data);
if(x == ""){
    alert("Please Enter a Key")
 }else if(x==data.key){
//     let dis=document.getElementById("display")
// dis.innerHTML=JSON.stringify(data)
// dis.style.color="red"
// dis.style.width="30px"
alert(
JSON.stringify(data)
) }
}

// Deleting data 
 function removeRec(){
    let a=document.getElementById("DeleteKey").value
    console.log(a);
    if ( a in localStorage){
        console.log(true)
        const x=confirm("Do you Want To Delete This Key if yes press okay")
        console.log(x);
        if(x==true){
            localStorage.removeItem(a)
            alert("Item Removed Successfully")
        }
    }
 }

//  clear 
function deleteAll(){
    localStorage.clear()
}