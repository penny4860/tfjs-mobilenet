import * as tf from '@tensorflow/tfjs';

// HTML dependency
const IMG_ELEMENT = document.getElementById('cat');
const STATUS_ELEMENT = document.getElementById('status');

const MOBILENET_MODEL_PATH =
    'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json';

const IMAGE_SIZE = 224;

let mobilenet;
async function predDemo() {
    // 1. load model
    mobilenet = await tf.loadLayersModel(MOBILENET_MODEL_PATH);
    mobilenet.predict(tf.zeros([1, IMAGE_SIZE, IMAGE_SIZE, 3])).dispose();
    
    // 2. image element
    IMG_ELEMENT.style.display = '';

    // 3. IMG_ELEMENT -> pred_tensors 를 익명함수로 정의
    const logits = tf.tidy(() => {
        // 1) image tensor
        let img = tf.browser.fromPixels(IMG_ELEMENT).toFloat();

        // 2) preprocess
        const offset = tf.scalar(127.5);
        img = img.sub(offset).div(offset);
        const imgs = img.reshape([1, IMAGE_SIZE, IMAGE_SIZE, 3]);

        // 3) prediction
        return mobilenet.predict(imgs);
    });
    
    // 4. 익명함수를 실행해서 데이터를 뽑는다.
    const values = await logits.data();

    // 5. 출력
    const msg = values.length + ": " + values[0] + ", " + values[1];
    STATUS_ELEMENT.innerText = msg;
}

predDemo();
