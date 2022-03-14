//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}

function check_form()
{
    var email = $("#email").val();
    var password = $("#password").val();
    var fullname = $("#fullname").val();
    var birthday = $("#birthday").val();
    var country = $("#country").val();
    var gender = [];

    $("#gender").each(function(){
        if($(this).is(":checked"))
        {
            gender.push($(this).val());
        }
    });

    gender = gender.toString();

    if(email == '' || password == '' || fullname == '' || birthday == '' || country == '' || gender == '')
    {
        $("#form_error").html("Please fill all fields !!");
    }
    else
    {
        $("#form_error").html("");
        $("#login-form")[0].reset();

        html = '';
        html += 'Email : '+email+'/ ';
        html += 'Password : '+password+'/ ';
        html += 'Fullname : '+fullname+'/ ';
        html += 'Date of birth : '+birthday+'/ ';
        html += 'Country : '+country+'/ ';
        html += 'Gender : '+gender+'/ ';

        alert(html);
    }
}
