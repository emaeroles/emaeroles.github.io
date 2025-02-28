$(document).ready(function(){

    $("#formulario").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            email: {
                required: true,
                email: true
            },
        },
        messages:{
            nombre: {
                required: 'El nombre es requerido',
                minlength: jQuery.validator.format('El nombre debe tener al menos {0} caracteres.'),
                maxlength: jQuery.validator.format('El nombre debe tener como maximo {0} caracteres.')
            },
            email: {
                required: 'El email es requerido',
                email: 'El email debe tener un formato valido'
            },
        }
    });

    $('#formulario').submit((event) => {
        event.preventDefault();
        if ($('#formulario').valid()) {
            Swal.fire({
                confirmButtonColor: '#1f7c4f',
                title: "Gracias por tu comentario, en breve me pondré en contacto contigo"});
        }
    });
});