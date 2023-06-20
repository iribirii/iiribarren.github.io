function changeBg(){
    const images = [
        'url(/assets/imagenes/publications/portada_catalyst.png)',
        'url(/assets/imagenes/publications/portada_eds.png)',
        'url(/assets/imagenes/publications/portada_metales.png)',
        'url(/assets/imagenes/publications/portada_hb.png)',
    ];

    const section = document.querySelector('.publications_bg');
    const bg = images[Math.floor(Math.random() * images.length)];

    section.style.backgroundImage = bg;
}

setInterval(changeBg,5000)