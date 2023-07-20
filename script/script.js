//Function to ease getting of DOM elements

const elem = (x) =>{
    return document.querySelector(x);
}

//Email check functionality

var email_form = elem("form.email_form"),
    email_input = elem("#email"),
    error_text = elem(".error_text"),
    error_icon = elem(".error_icon");

email_form.onsubmit = (e) =>{
    e.preventDefault();
}

const handleSubmit = (x) =>{
    let email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let email = email_input.value.toLowerCase();

    //Check if email matches the regex
    if(email.match(email_regex)){
        error_text.style.display = 'none';
        error_icon.style.display = 'none';
        email_input.className = '';

        email_input.value = "";
        email_input.placeholder = "Well Received, Thank You!";
        email_input.disabled = true;//Disable input after success
        x.disabled = true;//Disable the button after success

    }else{
        error_text.style.display = 'flex';
        error_icon.style.display = 'flex';
        email_input.className = 'active';

        email_input.placeholder = "Email Address"
    }
}
