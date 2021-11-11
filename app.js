// here we'll create a new hovereffect
new hoverEffect({
    // here is the parent you'll add the two images to
    // which we haven't created yet
    parent: document.querySelector('.output'),
    // you can mess with the intensity 
    // to image one type the path for the first image
    // to image two type the path for the second image
    intensity: 0.2,
    image1: 'dog1.jpg',
    image2: 'dog2.jpg',
    // here you'll type the path to the image you get from that github repo. I'll show you where you can find them.
    // but basically this image will kinda show the way how the images will blend
    // you can see I already have one in my folder.
    displacementImage: 'blendEffect.png'
    // you can see it looks awesome.
    // I personally like the blendEffect.png image effect
    // lol  I meant .png
    // here is the image I used
})