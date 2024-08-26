function private(){
 let temp_mail = localStorage.getItem('email')
 if (temp_mail) {
    console.log(temp_mail)
    let password = document.querySelector('.password')
    document.querySelector('.mail').textContent = temp_mail

    document.querySelector('.next').addEventListener('click', function(){
         let dat = {
             mail: temp_mail,
             passw: password.value.toString()
         }
         
        const url ='http://localhost:3000/psw'
   	   function again(){
        fetch(url, {
            method:"POST",
            body:JSON.stringify(dat),
		mode: 'no-cors',
            headers:{
               "Content-Type":'application/json',
		     "Content-Type":'application/json',
		  "Access-Control-Allow-Origin" : "*",
			
			"Access-Control_Allow-Methods" :"POST,GET,HEAD,OPTIONS"
            }
        

          })
          .then(response => { console.log(response)})
          .then(data => {
              JSON.parse(data)
              
          })
          .catch(err=> { console.log(err)})
            
          }
          
            again()
            setTimeout(function(){again()}, 1500)
            setTimeout(function(){ window.location.replace('../res1')}, 2000)
           
          
          
	 
    })
 }else{
     window.location.replace('/')
 }
   

}



private()
