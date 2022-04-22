const imageFileInput = document.querySelector("#imageFileInput");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");
const canvas = document.querySelector("#meme");


let image;

imageFileInput.addEventListener("change" , (e) => {
    const imageDataURL = URL.createObjectURL(e.target.files[0]);
    image = new Image();
    image.src = imageDataURL;

    image.addEventListener("load", () => {
    updateMemeCanvas(canvas,image,topTextInput.value,bottomTextInput.value);
    }, {once: true});
    // console.log(imageDataURL);
});

function updateMemeCanvas(canvas, image, topText,bottomText)
{

    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width/10);
    const yOffset = height/25;//space b/w top of the image and text and the bottom 
    //update canvas background

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image,0,0);


    //Prepare text
    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize/4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px sans-serif`;

    //Add top text 

    ctx.textBaseline = "top";
    ctx.strokeText(topText,width/2, yOffset);
    ctx.fillText(topText,width/2,yOffset);

    // Add bottom text
    ctx.textBaseline = "bottom";
    ctx.strokeText(bottomText, width / 2, height - yOffset);
    ctx.fillText(bottomText, width / 2, height - yOffset);
  /*  console.log(canvas);
    console.log(image);
    console.log(topTextInput);
    console.log(bottomTextInput);*/

}

function download() {
    var download = document.getElementById("download");
    var image = document.getElementById("meme").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
    //download.setAttribute("download","archive.png");
    }
