const boton=document.getElementById('registro')
boton.addEventListener('click', e=>{
    e.preventDefault()
    const username=document.getElementById('username').value
    const passaword=document.getElementById('passaword').value

    if(username==='' || passaword==='' ){
        alert ('ERROR!! NO SE HA INGRESADO DATOS')
        }

    if(username==='carlos' && passaword==='123456'){    
        document.body.style.background="purple"
        alert('BIENVENIDO')
       setTimeout(()=>{
            location="./nosotros.html"
        },1000) 
    }else{
        document.querySelector('#mensaje').style.display='block'
        setTimeout(()=>{
            document.querySelector('#mensaje').style.display='none'
        },3000)

    }