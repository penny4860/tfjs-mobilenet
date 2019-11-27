
const IMAGE_SIZE = 224;
const CONTENTS_ELEMENT = document.getElementById('predictions');
const FILES_ELEMENT = document.getElementById('files');

document.getElementById('file-container').style.display = '';


FILES_ELEMENT.addEventListener('change', event => {
    let files = event.target.files;
    // Display thumbnails & issue call to predict each image.
    for (let i = 0, f; f = files[i]; i++) {
      // Only process image files (skip non image files)
      if (!f.type.match('image.*')) {
        continue;
      }
      let reader = new FileReader();
      reader.onload = e => {
        let img = document.createElement('img');
        img.src = e.target.result;
        img.width = IMAGE_SIZE;
        img.height = IMAGE_SIZE;
        img.onload = () => showImage(img);
      };
  
      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  });

async function showImage(imgElement) {
  const imgContainer = document.createElement('div');
  imgContainer.appendChild(imgElement);
  CONTENTS_ELEMENT.insertBefore(
      imgContainer, CONTENTS_ELEMENT.firstChild);
}
