
const IMAGE_SIZE = 224;
const CONTENTS_ELEMENT = document.getElementById('predictions');
const FILES_ELEMENT = document.getElementById('files');


function fileUploadListener(event)
{
    let files = event.target.files;
    for (let i = 0, f; f = files[i]; i++) {
      if (!f.type.match('image.*')) {
        continue;
      }
      let reader = new FileReader();
      reader.onload = e => imgLoader(e);
  
      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
}

function imgLoader(event)
{
    let img = document.createElement('img');
    img.src = event.target.result;
    img.width = IMAGE_SIZE;
    img.height = IMAGE_SIZE;
    img.onload = () => showImage(img);
}

async function showImage(imgElement) {
  const imgContainer = document.createElement('div');
  imgContainer.appendChild(imgElement);
  CONTENTS_ELEMENT.insertBefore(
      imgContainer, CONTENTS_ELEMENT.firstChild);
}


document.getElementById('file-container').style.display = '';
FILES_ELEMENT.addEventListener('change', e => fileUploadListener(e));
