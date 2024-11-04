const rootStyles = document.documentElement.style;
const progressBarElement = document.getElementById('progressBar');
const progressTextElement = document.getElementById('pxMoved');
const rgbButtonElement = document.getElementById('rgbButton');
const hexButtonElement = document.getElementById('hexButton');
const mouseChaserElement = document.getElementById('mouseChaser');

/*- Crea un div de color rojo y colócalo en la parte superior
izquierda de tu web. Haz que tu web tenga un min-height de 500vh para generar scroll. 
El div deberá sincronizarse con el scroll, si estás arriba del todo medirá 0 de ancho 
y si está abajo del todo medirá el 100%, según vayas haciendo scroll el div deberá ir 
creciendo o encogiendo en función de si subes o bajas.*/

const progressBarWidth = event => {
    const availableHeigth = document.body.scrollHeight - window.innerHeight;
    const scrollDone = window.scrollY
    const windowWidth = window.innerWidth;
    rootStyles.setProperty('--width-progress-bar', windowWidth*((scrollDone / availableHeigth)) + 'px')
    console.log
}
window.addEventListener('scroll',progressBarWidth )

/*- Añade un h1 al ejercicio anterior que te diga cuantos px te has desplazado.*/

const progressText = event => {
    const scrollText = window.scrollY
    progressTextElement.textContent = Math.floor(scrollText)
}
window.addEventListener('scroll',progressText)

/*- Crea dos botones en tu web para que al pulsarlos generen un color aleatorio para el 
body y se aplique. Haz una función para generarlo en RGB y otra para generarlo en hexadecimal
y ejecuta cada una desde un botón*/

const generateRGB = event => {
    let partR = 0;
    let partG = 0;
    let partB = 0;
    let newRGB = ('');
    partR += Math.floor(Math.random() * 255);
    partG += Math.floor(Math.random() * 255);
    partB += Math.floor(Math.random() * 255);
    newRGB += 'rgb(' + partR + ', ' + partG + ', ' + partB + ')'
    rootStyles.setProperty('--bg-color',  newRGB );
}
rgbButtonElement.addEventListener('click', generateRGB);

const generateHex = event => {
    const charToChoose = '0123456789ABCDEF'
    let newHex = '#'
    for (let counter = 0; counter < 6; counter++){
        newHex += charToChoose.charAt(Math.floor(Math.random() * (charToChoose.length - 1)));
    }
    rootStyles.setProperty('--bg-color',  newHex );
}
hexButtonElement.addEventListener('click', generateHex)


/*- Crea un div de 20px x 20px y sincronizalo con el movimiento del ratón, el div deberá 
quedarse pegado a la flecha de tu ratón y moverse junto a él.*/


const mouseChaserBox = event => {
    const mouseTop = event.y;
    const mouseLeft = event.x;
    rootStyles.setProperty('--mouse-top', mouseTop + 'px');
    rootStyles.setProperty('--mouse-left', mouseLeft + 'px');
}
window.addEventListener('mousemove', mouseChaserBox);