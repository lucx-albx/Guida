const copyContent = async () => {
    let text = document.getElementById('myInput').textContent;
    console.log(text)
    
    try {
        await navigator.clipboard.writeText(text);
        showAlert()
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
    
}

const copyContent2 = async () => {
    let text = document.getElementById('myInput2').textContent;
    console.log(text)
    
    try {
        await navigator.clipboard.writeText(text);
        showAlert()
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
} 

const showAlert =()=> {
    const myTimeout = setTimeout(chiudiConferma, 1500);
    let annuncio = document.querySelector(".confermaAlert");
    annuncio.classList.remove("invisible");

}

const chiudiConferma =()=> {
    let annuncio = document.querySelector(".confermaAlert");
    annuncio.classList.add("invisible");
}
   