import * as THREE from "https://unpkg.com/three@0.108.0/build/three.module.js";
// import { OrbitControls } from "https://unpkg.com/three@0.108.0/examples/jsm/controls/OrbitControls.js";
import { FBXLoader } from "https://unpkg.com/three@0.108.0/examples/jsm/loaders/FBXLoader.js";

let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

let scene, camera, renderer;
let model = new THREE.Object3D();

let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

let windowHalfX = WIDTH / 2;
let windowHalfY = HEIGHT / 2;

const init = () => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 10000);
    camera.position.set(50, 50, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    //alpha : true 배경 투명으로
    renderer.setSize(WIDTH, HEIGHT);
    // renderer.shadowMap.enabled = true;
    renderer.setClearColor(0x0e2255); //배경 컬러
    document.querySelector("#canvasWrap").appendChild(renderer.domElement);

    {
        //조명 넣기
        var light = new THREE.HemisphereLight(0xffffff, 0x080820, 1);
        light.position.set(0, 0, 0);
        scene.add(light);
    }
    {
        //조명
        const color = 0xffffff;
        const intensity = 2;
        const light = new THREE.PointLight(color, intensity);
        light.position.set(140, 160, 150);
        scene.add(light);
    }

    fbxLoadFunc("./model/Blooper.FBX");

    // const controls = new OrbitControls( camera, renderer.domElement );
    // controls.enableDamping = true;
    // controls.target.set( 0, 12, 0 );
    // controls.update();

    document.addEventListener("mousemove", onDocumentMouseMove);
    //마우스 이벤트
};

const fbxLoadFunc = (modelName) => {
    const fbxLoader = new FBXLoader();
    fbxLoader.load(
        modelName,
        (object) => {
            console.log(object);
            //크기 조절
            let scaleNum = 0.5;
            object.scale.set(scaleNum, scaleNum, scaleNum);

            model.add(object.children[0]);
            model.rotation.set(0, 0, 0);
            scene.add(model);
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
            console.log(error);
        }
    );
};

const onDocumentMouseMove = (event) => {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
    // console.log(mouseY);
    // console.log(event.clientX, windowHalfX, mouseX);
};

const animate = () => {
    // model.rotation.y += 0.01;

    targetX = mouseX * 0.003;
    targetY = mouseY * 0.002;

    if (model) {
        model.rotation.y += 0.1 * (targetX - model.rotation.y);
        model.rotation.x += 0.1 * (targetY - model.rotation.x);
    }

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};

init();
animate();