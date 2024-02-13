let selectCity = document.getElementById('select-city');
let selectDistrict = document.getElementById('select-district');

selectCity.addEventListener("change", function () {
    if (selectCity.value !== '') {
        selectDistrict.disabled = false;
    }
});


// Validation
let inputs = document.querySelectorAll("form .inputs input");
let textarea = document.querySelector("form textarea");

inputs.forEach(input => {
    input.addEventListener("blur", function () {
        if (this.value === "" || this.value.trim() == "") {
            this.style.borderBottom = "1px solid red";
            this.nextElementSibling.nextElementSibling.style.color = "red";
            this.parentNode.lastElementChild.style.opacity = "1";
        }
    })

    input.addEventListener("keyup", function () {
        if (this.value === "" || this.value.trim() == "") {
            this.style.borderBottom = "1px solid red";
            this.parentNode.lastElementChild.style.opacity = "1";
            this.nextElementSibling.nextElementSibling.style.color = "#999";
        }

        else {
            this.style.borderBottom = "1px solid #fdb813";
            this.parentNode.lastElementChild.style.opacity = "0";
            this.nextElementSibling.nextElementSibling.style.color = "#999";
        }
    })

    input.addEventListener("focus", function () {
        this.style.borderBottom = "1px solid #FDB813";
    })
})


textarea.addEventListener("blur", function () {
    if (this.value == "" || this.value.trim() == "") {
        this.style.borderBottom = "1px solid red";
        this.nextElementSibling.nextElementSibling.style.color = "red";
        this.parentNode.lastElementChild.style.opacity = "1";
    }
})

textarea.addEventListener("keyup", function () {
    if (this.value == "" || this.value.trim() == "") {
        this.style.borderBottom = "1px solid red";
        this.parentNode.lastElementChild.style.opacity = "1";
        this.nextElementSibling.nextElementSibling.style.color = "#999";
    }

    else {
        this.style.borderBottom = "1px solid #fdb813";
        this.parentNode.lastElementChild.style.opacity = "0";
        this.nextElementSibling.nextElementSibling.style.color = "#999";
    }
})

textarea.addEventListener("focus", function () {
    this.style.borderBottom = "1px solid #FDB813";
})

let submit = document.querySelector("form button");

submit.addEventListener("click", function (event) {
    event.preventDefault();

    let checkValidation = false;
    let countOfEmpty = 0;

    for (const input of inputs) {
        if (input.value == "") {
            input.style.borderBottom = "1px solid red";
            input.nextElementSibling.nextElementSibling.style.color = "#FDB813";
            input.parentNode.lastElementChild.style.opacity = "1";
            input.nextElementSibling.style.background = '#FDB813'

            textarea.style.borderBottom = "1px solid red";
            textarea.nextElementSibling.nextElementSibling.style.color = "#FDB813";
            textarea.nextElementSibling.style.background = '#FDB813'

            countOfEmpty++;
        }
    }

    if (countOfEmpty == 0) {
        checkValidation = true;
    }

    if (!checkValidation) {
        return;
    }

    window.location.reload();
})