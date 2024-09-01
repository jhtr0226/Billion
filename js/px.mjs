export default function pixels(container, width, height) {
    const pxsize = 1;

    container.style.width = `${width * pxsize}px`;
    container.style.height = `${height * pxsize}px`;

    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            const pixel = document.createElement('div');
            pixel.classList.add("pixel");
            pixel.style.width = `${pxsize}px`;
            pixel.style.height = `${pxsize}px`;
            container.appendChild(pixel);
        }
    }
}