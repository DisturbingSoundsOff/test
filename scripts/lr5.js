let img_container = document.getElementById("lab5_images_container");

// for (let i = 1; i < 30; i += 2) {
//     let img = document.createElement("img");
//     img.style = `
//         content:url("../photoOut/image${i}.jpg");
//         width: 30%;
//     `;
//     img.onmouseenter = () => {
//         img.style = `
//         content:url("../photoOut/image${i + 1}.jpg");
//         width: 30%;
//         `
//     }
//     img.onmouseleave = () => {
//         img.style = `
//         content:url("../photoOut/image${i}.jpg");
//         width: 30%;
//         `
//     }
//     img_container.appendChild(img);
// }

let images = [];
let imagesAlter = [];

for (let i = 1; i <= 30; i++) {
    if (i % 2 != 0) {
        images.push(`image${i}`);
    } else {
        imagesAlter.push(`image${i}`);
    }
}

for (let i = 0; i < images.length; i++) {
    let img = document.createElement("img");
    img.style = `
        content:url("../photoOut/${images[i]}.jpg");
        width: 30%;
    `;
    img.onmouseenter = () => {
        img.style = `
        content:url("../photoOut/${imagesAlter[i]}.jpg");
        width: 30%;
        `
    }
    img.onmouseleave = () => {
        img.style = `
        content:url("../photoOut/${images[i]}.jpg");
        width: 30%;
        `
    }
    img_container.appendChild(img);
}
