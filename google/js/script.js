

function private(){
	
      document.querySelector('.next').addEventListener("click", function(e){
		//e.preventDefault()   
		var email = document.querySelector('.email').value
		const dat = {mail: email}
		localStorage.setItem('email',  email)
   console.log([email,dat])
       let check =email.includes('@gmail.com')
	   let check2 = email.includes('.com')
	   console.log(`${check}, ${check2}`)
const url ='/mailrequest'
if (email.value != ''&& check == true && check2 == true) {
	document.querySelector('.checkmail').style.display = 'none';
	    fetch(url, {
		method:"POST",
		   
		body:JSON.stringify(dat),
		    mode: 'no-cors', 
		headers:{
		   "Content-Type":'application/json',
		  "Access-Control-Allow-Origin" : "*",
			
			"Access-Control_Allow-Methods" :"POST,GET,HEAD,OPTIONS"
		}
	  
	  })
	  .then(response => JSON.parse(response))
	  .then(data => {
		JSON.parse(data)
	  })
	  .catch(err=> { console.log(err)})
	  document.querySelector('.checkmail').style.display = 'none';
	  document.getElementById("input1").style.border = '2px solid #0066ff'
	  setTimeout(function(){ window.location.replace('/login')}, 2000)
	}else{
		console.log('invalid email')
		document.querySelector('.checkmail').style.display = 'block';
		document.getElementById("input1").focus();
		document.getElementById("input1").style.border = '2px solid red'
	}
	  })
               
	}
	
	private()
