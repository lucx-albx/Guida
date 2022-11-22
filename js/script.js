const copyContent = async () => {
    let text = document.getElementById('myInput').textContent;
    console.log(text)
    
    try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

const copyContent2 = async () => {
    let text = document.getElementById('myInput2').textContent;
    console.log(text)
    
    try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
} 
            