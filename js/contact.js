var contactForm=document.getElementById('contactForm');
var name=document.getElementById('name');
var email=document.getElementById('email')
var subject = document.getElementById('subject');

contactForm.addEventListener('submit', function(e){
e.preventDefault()
Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your Name:'+ name.value+'  your email:'+email.value+'  your subject:'+subject.value,
    showConfirmButton: false,
    timer: 6000
  })
});