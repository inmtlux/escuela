/*swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    button: "Aww yiss!",
  });*/
  let objPeople = [
    {
      username: "jesusvaldivia@hotmail.com",
      password: "12345" 
    },
    {
      username: "alonso@hotmail.com",
      password: "jolape"
    },
    {
      username: "rousse@hotmail.com",
      password: "yosoy"
    },
  ]
  function getInfo(){
    let username = document.getElementById("correo").value
    let password = document.getElementById("contraseña").value

    for(i = 0; i< objPeople.length; i++){
      if(username == objPeople[i].username && password == objPeople[i].password){
        swal('Inicio de sesion correcta','Bienvenido','success');
        return
      }
    }
        {
          swal('Credenciales incorrectas','Correo o contraseña incorrectos','error')
    }
  }