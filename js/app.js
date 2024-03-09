// Setup basic Three.js scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('viewer-container').appendChild(renderer.domElement);

// Adjust camera
camera.position.z = 5;

// Add lighting
var ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// GLTF Loader
var loader = new THREE.GLTFLoader();
loader.load('models/cube.glb', function(gltf) {
    scene.add(gltf.scene);
}, undefined, function(error) {
    console.error(error);
});
