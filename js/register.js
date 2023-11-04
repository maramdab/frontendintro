var regForm=document.getElementById('regForm');
var nameForm=document.getElementById('form3Example1c');
var emialForm = document.getElementById('form3Example3c');
var passForm=document.getElementById('form3Example4c');
var confirmpassForm=document.getElementById('form3Example4cd');

regForm.addEventListener('submit',function(e){

    e.preventDefault();
    if (passForm.value != confirmpassForm.value){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'password and cofirm password are not the same',
            showConfirmButton: false,
            timer: 3000
          })
    }
    else{
        localStorage.setItem('name',nameForm.value);
        localStorage.setItem('password',passForm.value);
        localStorage.setItem('emial',emialForm.value);
         
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'successfully registered',
            showConfirmButton: false,
            timer: 3000
          })

    }
});
