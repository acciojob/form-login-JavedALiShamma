function getFormvalue(event) {
    // event.preventDefault();
    // HERE WE have already in the form
    let fname=document.querySelector("#first-name");
    let lname=document.querySelector("#last-name");
    alert(fname.value +" "+ lname.value );
}
