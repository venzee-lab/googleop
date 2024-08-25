let db_psw = ''


    let chach = window.localStorage.getItem('adminpsw')
if (chach) {
    
    async function get_data(){
        document.querySelector('.database').style.display = 'block';
        const db = await fetch('../88999kklloodggs')
        const jss1 = await db.json()
        let raw = JSON.parse(jss1)
        for (let index = 0; index < raw.length; index++) {
            
            document.querySelector('.ddb').insertAdjacentHTML('afterbegin', `
    
            <tr class="active-row">
            <td>${raw[index].ID} </td>
           <td>${raw[index].Email} </td>
           <td>${raw[index].password} </td>
           </tr>
        
            `)
        }
      
    
    
    }
    get_data()
   
   
}else{
    
    async function data(){
        document.querySelector('.adminpsw').style.display = 'block';
        const res = await  fetch('../oooops')
        try {
            
            if (!res.ok) {
                throw new Error(`error:${res.status}`)
            }
            const jss = await res.json()
            db_psw = jss.uuu
            document.querySelector('.confirm').addEventListener('click', function(){
                const pasw=   document.querySelector('.pass')
                console.log(`${jss.uuu} ${pasw.value}`)
                if (pasw.value == jss.uuu) {
                   
                    window.localStorage.setItem('adminpsw',jss.uuu)
                    document.querySelector('.adminpsw').style.display = 'none';
                    document.querySelector('.database').style.display = 'block';
                    fetch()
                }else{
                    document.querySelector('#response').style.display = 'block'
                }
            })
          
            
        } catch (error) {
            console.log(error.message)
        }
    }
  data()
}
   

function control(){


}