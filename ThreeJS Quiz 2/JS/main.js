const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.OrthographicCamera();
scene.background = new THREE.Color( 0x000000);
renderer.setSize( 800, 800 );
document.body.appendChild( renderer.domElement );

let xSpeed = 0.0029;
let ySpeed = 0.0039;

//Positional parameter

const planegeometry = new THREE.PlaneGeometry( 0.35, 0.2 );
const planematerial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const dvd = new THREE.Mesh( planegeometry, planematerial );
scene.add( dvd );





//const cubeGeometry = new THREE.BoxGeometry(10,5,5,5);
//const cubeMaterial= new THREE.MeshDepthMaterial();
//const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//scene.add(cube);


//console.log(cube.position.x);
//console.log(cube.position.y);
//console.log(cube.position.z);

camera.position.z=5;

//Changing Color
function  changeColor(){
    r = Math.floor(Math.random()*225);
    g = Math.floor(Math.random()*225);
    b = Math.floor(Math.random()*225);
    dvd.material.color.setRGB(Math.random(225),Math.random(225),Math.random(225));
}

function  minMax(){

}
function animate() {
	requestAnimationFrame( animate );
   dvd.position.x += xSpeed;
   

   if(dvd.position.x>1){
    xSpeed = -0.0029;

    dvd.scale.x -=0.2;
    dvd.scale.y -=0.2;
    
    changeColor()
   }
   if(dvd.position.x<-1){
    xSpeed = 0.0029;

    dvd.scale.x -=0.2;
    dvd.scale.y -=0.2;
    
    changeColor()
   }

   dvd.position.y += ySpeed;
   if(dvd.position.y > 1){
    ySpeed = -0.0029;

    
    dvd.scale.x -=0.2;
    dvd.scale.y -=0.2;

    changeColor()
   }
   if(dvd.position.y < -1){
    ySpeed = 0.0029;

    dvd.scale.x -=0.2;
    dvd.scale.y -=0.2;
    changeColor()
   }


    //Positioning
    //cube.position.x +=0.03;
    //cube.position.x -=0.02;
    //cube.position.y +=0.03;
    //cube.position.y -=0.02;
    //cube.position.z -=0.01;
    //Cube Rotation
    
    //Rotation
    //cube.rotation.x +=0.01;
    //cube.rotation.y +=0.01;

     //Torus Rotation
     //torus .rotation.x +=0.01;
     //torus .rotation.y +=0.01

	renderer.render( scene, camera );
}
animate();