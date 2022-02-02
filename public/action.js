

let messages = document.querySelector('.messages');

main();
function main(){
    document.addEventListener('DOMContentLoaded', bringMessages);
}

function bringMessages(){
//ask data, find out how this works 
let data=axios.get('/test')
  .then(function (response) {
    let data=response.data;
    data.forEach(myFunction);
    function myFunction(value){
        let tbody= document.querySelector('.showHere');
        let tr = document.createElement('tr');
        tr.innerHTML = `<tr class="mesages">
        <td>${value.id}</td>
        <td>${value.email}</td>
        <td>${value.message}</td>
      </tr>`
      tbody.appendChild(tr)

    }   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })  

}