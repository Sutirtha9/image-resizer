const imgUpload = document.querySelector('.imgUpload');

const readFile = e =>
{
    const file = e.target.files[0];
    
    if(!file)
    {
        fileNotFound;
    }
    else
    {
        console.log(file);
    }
}

imgUpload.querySelector('#mainInput').addEventListener('change', readFile);
imgUpload.querySelector('#uploadBtn').addEventListener('click', ()=> imgUpload.querySelector('#mainInput').click());

const fileNotFound = () =>
{
    
    document.querySelector('.errModal').style.display = 'block';
    document.querySelector('#errModalBtn').click();
}