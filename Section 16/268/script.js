const imgContainer = document.querySelector(".imgContainer");

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject("Error loading image");
    });
  });
};

let currentImg;

createImage("img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then(img => {
    currentImg = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none'
  })
  .catch((err) => {
    console.error(err);
  })

  const loadNPause = async function() {
    try {
      let img = await createImage("img/img-1.jpg");
      console.log("Image 1 loaded");
      await wait(2);
      img.style.display = "none";
      img = await createImage("img/img-2.jpg");
      console.log("Image 2 loaded");
      await wait(2);
      img.style.display = "none";
    } catch (err) {
      console.error(err);
    }
  }

  loadNPause();

  