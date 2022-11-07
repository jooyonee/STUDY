window.onload = function() {
    const pw_eye = document.querySelector('.pw_eye');

    const input_id = document.querySelector('input[type=text]')
    const input_pw = document.querySelector('input[type=password]')

    const id_error = document.querySelector('.id_error')
    const pw_error = document.querySelector('.pw_error')


    input_id.addEventListener('click', function() {
        id_error.style.display = 'block';
    })

    input_pw.addEventListener('click', function() {
        pw_error.style.display = 'block';
    })



    let i = true;
    pw_eye.addEventListener('click', function() {
        if(i == true){
            i = false;
            pw_eye.style.backgroundPosition = '-126px 0';

        }else {
            i = true;
            pw_eye.style.backgroundPosition = '-105px 0';

        }
    })

} //onload end