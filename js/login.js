var logForm=document.getElementById('logForm');
var emialForm=document.getElementById('form2Example1');
var passForm=document.getElementById('form2Example2');

logForm.addEventListener('submit',function(e){
 e.preventDefault();


 if ((emialForm.value == localStorage.getItem('emial')) && (passForm.value==localStorage.getItem('password'))){
  
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'successfully logined',
        showConfirmButton: false,
        timer: 3000
      })
}
else{
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'wrong emial or password',
        showConfirmButton: false,
        timer: 3000
      })
}
}
 
);