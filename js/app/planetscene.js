var width = window.innerWidth, height = window.innerHeight / 2;
var size = 256;

var leftside = document.getElementById('boxside-01');
var rightside = document.getElementById('boxside-02');
//var ctx_left = leftside.getContext('2d');
//var ctx_right = rightside.getContext('2d');
        //dtx = rightside.getContext('2d');
//var image0 = document.createElement("img");
//var image1 = new Image();

//var image0 = this.leftside.toDataURL("textures/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
//window.location.href=image; // it will save locally
//var Image1 = Canvas2Image.saveAsPNG(leftside);


var camera, scene, renderer, geometry, texture, mesh, controls;

function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);
    
    scene = new THREE.Scene();
  
    camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
    camera.position.z = 700;
    scene.add(camera);
            
    //var canvas = document.getElementById('boxside-01'),
    texture = new THREE.Texture(rightside);
    texture2 = new THREE.Texture(leftside);
    
    textureSide1 = new THREE.MeshBasicMaterial( {map: texture})
    textureSide2 = new THREE.MeshBasicMaterial( {map: texture2});



    // image0.onload = function() {
    //     ctx_left.drawImage(leftside, 10, 10);
    //     texture.needsUpdate = true;
    // };

    // image0.src = 'textures/leftside.jpg';

    //new THREE.MeshBasicMaterial({ map: texture }),
    var MaterialArray = [];
    MaterialArray.push(textureSide2); //left
    MaterialArray.push(textureSide2); //right
    MaterialArray.push(textureSide1); //top
    MaterialArray.push(textureSide1); //bottom
    MaterialArray.push(textureSide1); //front
    MaterialArray.push(textureSide1); //back
    var WorldMaterial = new THREE.MeshFaceMaterial(MaterialArray);
    

    texture.needsUpdate = true;
    texture2.needsUpdate = true;
    

    leftside.width = leftside.height = size;
    //rightside.width = rightside.height = size;
    
    var controls;
    controls = new THREE.OrbitControls( camera );
    

    geometry = new THREE.BoxGeometry( 300, 300, 300, 7, 7, 7 );
    mesh = new THREE.Mesh( geometry, WorldMaterial );
    scene.add( mesh );//controls.addEventListener( 'change', renderer );

    //Turn the Cube into a Sphere
    for ( var i = 0, l = geometry.vertices.length; i < l; i ++ ) {
        var vertex = geometry.vertices[ i ];
        vertex.normalize().multiplyScalar( 300 );
    };

}
function animate() {
    requestAnimationFrame(animate);
  
    //changeCanvas();
    //controls.update();
    texture.needsUpdate = true;
    //mesh.rotation.y += 0.001;
    renderer.render(scene, camera);
}


init();
animate();    

