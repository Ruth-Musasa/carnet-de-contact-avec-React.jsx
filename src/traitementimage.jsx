img.style.opacity = 0;

function showFile(event) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onload = () => {
        fileUrl = fileReader.result
        return true
    }
}