window.onload = function(){
    
    var widthScreen = document.documentElement.clientWidth;
    var heightScreen = document.documentElement.clientHeight;

    var canvas = document.querySelector(".canvas");
    canvas.width=widthScreen; // size width canvas
    canvas.height=heightScreen; // size height canvas
    var dots=50;
    var lines=50;
    
        //camera
        var camera = new THREE.PerspectiveCamera(40, widthScreen/heightScreen, 1, 1000);
        camera.position.set(0,0,300);
        //camera
    
    var renderer = new THREE.WebGLRenderer({
        canvas:canvas,
        antialias:true
    });
    renderer.setClearColor(0x999999);
    renderer.setPixelRatio(window.devicePixelRatio>1?2:1);
    renderer.setSize(widthScreen,heightScreen);
    
    
    //scene
    var scene = new THREE.Scene();
    var group = new THREE.Group();
    scene.add(group);
    //scene

    var radius=4;
    var sphereGeometry = new THREE.SphereGeometry(radius,10,10);
    var sphereMaterial = new THREE.MeshBasicMaterial(
        {color: 0x000000, wireframe: true});
    var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
    sphere.position.x = 0;
    sphere.position.y = 0;
    sphere.position.z = 200;
    group.add(sphere);

   
    var speed=0.3;

    function sphereMove(){
        if(sphere.position.x>-(70-radius)){
        
            sphere.position.x+=speed;
            sphere.rotation.z-=0.05;
        }
        
        if(sphere.position.x>68+radius){
            speed=-0.3;
            sphere.position.x+=speed;
            sphere.rotation.z+=0.05;
            
        }
        sphere.position.y=0;
        
        
    }    

    function loop (){
        window.requestAnimationFrame(loop);
        renderer.render(scene,camera);  
        sphereMove();



    }
    loop();
};