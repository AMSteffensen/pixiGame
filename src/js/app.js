
const Application = PIXI.Application;

const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
});

app.renderer.backgroundColor = 0x23395D;
app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;
const loader = PIXI.Loader.shared;

// const rectangle = new Graphics();
// rectangle.beginFill(0xAA33BB)
// .lineStyle(4, 0xFFEA00, 1)
// .drawRect(200, 200, 100, 120)
// .endFill();
//
//app.stage.addChild(rectangle);

// const poly = new Graphics();
// rectangle.beginFill(0xFF66FF)
// .drawPolygon([
//     600, 50,
//     800, 150,
//     900, 300,
//     400, 400
// ])
// .endFill();


// const circle = new Graphics();
// circle.beginFill(0x22AACC)
// .drawCircle(440, 200, 80)
// .endFill();

// app.stage.addChild(circle);
// app.stage.addChild(poly);

// const line = new Graphics();
// line.lineStyle(5, 0xFFEA00, 1)
// .moveTo(1500, 100)
// .lineTo(1500, 800);

// app.stage.addChild(line);

// const torus = new Graphics();
// torus.beginFill(0xfffddd)
// .drawTorus(100, 700, 80, 100, 0, Math.PI / 2)
// .endFill();

// app.stage.addChild(torus);


// const star = new Graphics();
// torus.beginFill(0xe5cc10)
// .drawStar(900, 700, 310, 100)
// .endFill();

// app.stage.addChild(star);


// const style = new PIXI.TextStyle({
//     fill: "white",
//     fontFamily: 'Montserrat',
//     fontSize: 32,

// })


// const menuButton = new PIXI.Text(' Menu', style);

// app.stage.addChild(menuButton);


// app.ticker.add(delta => loop(delta));

// function loop(delta) {
//     // char1Sprite.x += 1;
//     // char1Sprite.rotation += 0.01;
// }

// const char1Texture = PIXI.Texture.from('./images/char1.png');
// const char1Sprite = new PIXI.Sprite(char1Texture);
// app.stage.addChild(char1Sprite);


// char1Sprite.interactive = true;
// char1Sprite.buttonMode = true;
// char1Sprite.anchor.set(0.5, 0.5);

// char1Sprite.on('pointerdown', function() {
//     char1Sprite.scale.x += 0.1;
//     char1Sprite.scale.y += 0.1;
// })

// document.addEventListener('keydown', function(e){
//     if(e.key === 'ArrowRight')
//         char1Sprite.x += 10;
//     if(e.key === 'ArrowLeft')
//         char1Sprite.x -= 10;
// })

// const container = new PIXI.Container();

// const char2Sprite = PIXI.Sprite.from('./images/char2.png');
// container.addChild(char2Sprite);


// const char3Sprite = PIXI.Sprite.from('./images/char3.png');
// container.addChild(char3Sprite);
// ;

// app.stage.addChild(container)
// char2Sprite.position.set(1000, 500)

// container.x = 200;


// const particleContainer = new PIXI.ParticleContainer(1000, {
//     position: true,
//     rotation: true,
//     vertices: true,
//     tint: true,
//     uvs: true
// })



// loader.add(['./images/char4.png', './images/char5.png'])
// .load(setup)

// function setup(loader, resources) {
//     const char4Sprite = new PIXI.Sprite(
//         resources['./images/char4.png'].texture
//     )
//     char4Sprite.y = 400;
//     app.stage.addChild(char4Sprite)
// }

loader.add('tileset', './images/char1.png')
.load(setup)

function setup(loader, resources) {
    const texture1 = resources.tileset.texture;
    const rect1 = new PIXI.Rectangle(20, 150, 100, 110)
    texture1.frame = rect1;
    const spr1 = new PIXI.Sprite(texture1);
    spr1.scale.set(2, 2);
    app.stage.addChild(spr1)

}





loader.onLoad.add(function() {
    console.log('onload')

  
})

loader.onError.add(function() {
    console.log('on error')
})