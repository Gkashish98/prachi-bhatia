window.onload = function(event) {
        let id = document.getElementById('ID');
        let idd = document.getElementById('IDD');
        let SCname = document.getElementById('name');
        let SCemail = document.getElementById('email');
        let SCaddress = document.getElementById('Address');
        let SCpin = document.getElementById('pin');
        let SCcontactNo = document.getElementById('contactNo');
        let SCpswd = document.getElementById('pswd');
        let loginpswd = document.getElementById('pwd');
        let SClocation = document.getElementById('location');   
        let SCsubmit = document.getElementById('schoolsubmit');
        let closebtn = document.getElementById('close');
        
        
        SCcontactNo.value=" ";
        SCemail.value=" ";
        id.value=" ";
        SCname.value=" ";
        SCaddress.value=" ";
        SCpin.value=" ";
        SCpswd.value="";
        SClocation.value=" ";
        loginpswd.value = "";
        idd.value=" ";
  }
SCsubmit.addEventListener('click',function(event){
    event.preventDefault()
    console.log('hello');
    let datas = {
        contact : SCcontactNo.value,
        email : SCemail.value,
        ID : id.value,
        schholname : SCname.value,
        address : SCaddress.value,
        pin : SCpin.value,
        pswd : SCpswd.value,
        location : SClocation.value
      }
    fetch('http://localhost:4296/register',{
    method : 'POST',
    body: JSON.stringify(datas),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(data => data.json())
    .then(resp => {
      if(resp.inserted){
        console.log(resp)
        swal({
            title: "SUCCESS!",
            text: "Registration successful!",
            icon: "success",
          });
         closebtn.click();
         window.onload();
      }
    })
});

