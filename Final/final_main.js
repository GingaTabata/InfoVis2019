function main01(iso)
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    
    screen.init( volume, {
        width: window.innerWidth * 0.5,
        height: window.innerHeight,
        targetDom: document.getElementById('display1'),
        enableAutoResize: false
    });
    
    var bounds = Bounds( volume );
    screen.scene.add( bounds );
    
    //Isosurface
    var material = new THREE.MeshLambertMaterial();
    var isovalue = iso;//document.getElementById("isovalue");
    var surfaces = Isosurfaces( volume, isovalue, material );
    screen.scene.add( surfaces );
    
    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });
    
    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth * 0.5, window.innerHeight ] );
    });
    width = window.innerWidth * 0.5;
    height = window.innerHeight;
    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    screen.scene.add( light );
    
    document.getElementById("Gou-Lam").onclick = function() {
        material = new THREE.ShaderMaterial({
                                                vertexColors: THREE.VertexColors,
                                            vertexShader: document.getElementById('gou-lam.vert').text,
                                            fragmentShader: document.getElementById('gou-lam.frag').text,
                                            });
        screen.scene.remove(surfaces);
        var elem = document.getElementById('isovalue');
        var newSurfaces = Isosurfaces(volume, elem.value, material);
        screen.scene.add(newSurfaces);
        surfaces = newSurfaces;
    }
    document.getElementById("Pho-Lam").onclick = function() {
        material = new THREE.ShaderMaterial({
                                                vertexColors: THREE.VertexColors,
                                                vertexShader: document.getElementById('pho-lam.vert').text,
                                                fragmentShader: document.getElementById('pho-lam.frag').text,
                                                });
        screen.scene.remove(surfaces);
        var elem = document.getElementById('isovalue');
        var newSurfaces = Isosurfaces(volume, elem.value, material);
        screen.scene.add(newSurfaces);
        surfaces = newSurfaces;
    }
    document.getElementById("Gou-Pho").onclick = function() {
        material = new THREE.ShaderMaterial({
                                                vertexColors: THREE.VertexColors,
                                                vertexShader: document.getElementById('gou-pho.vert').text,
                                                fragmentShader: document.getElementById('gou-pho.frag').text,
                                                });
        screen.scene.remove(surfaces);
        var elem = document.getElementById('isovalue');
        var newSurfaces = Isosurfaces(volume, elem.value, material);
        screen.scene.add(newSurfaces);
        surfaces = newSurfaces;
    }
    document.getElementById("Pho-Pho").onclick = function() {
        material = new THREE.ShaderMaterial({
                                                vertexColors: THREE.VertexColors,
                                                vertexShader: document.getElementById('pho-pho.vert').text,
                                                fragmentShader: document.getElementById('pho-pho.frag').text,
                                                });
        screen.scene.remove(surfaces);
        var elem = document.getElementById('isovalue');
        var newSurfaces = Isosurfaces(volume, elem.value, material);
        screen.scene.add(newSurfaces);
        surfaces = newSurfaces;
    }
    document.getElementById("Gou-Bli").onclick = function() {
        material = new THREE.ShaderMaterial({
                                            vertexColors: THREE.VertexColors,
                                            vertexShader: document.getElementById('gou-bli.vert').text,
                                            fragmentShader: document.getElementById('gou-bli.frag').text,
                                            });
        screen.scene.remove(surfaces);
        var elem = document.getElementById('isovalue');
        var newSurfaces = Isosurfaces(volume, elem.value, material);
        screen.scene.add(newSurfaces);
        surfaces = newSurfaces;
    }
    document.getElementById("Pho-Bli").onclick = function() {
        material = new THREE.ShaderMaterial({
                                            vertexColors: THREE.VertexColors,
                                            vertexShader: document.getElementById('pho-bli.vert').text,
                                            fragmentShader: document.getElementById('pho-bli.frag').text,
                                            });
        screen.scene.remove(surfaces);
        var elem = document.getElementById('isovalue');
        var newSurfaces = Isosurfaces(volume, elem.value, material);
        screen.scene.add(newSurfaces);
        surfaces = newSurfaces;
    }
    document.getElementById("Gou-Cook").onclick = function() {
        material = new THREE.ShaderMaterial({
                                            vertexColors: THREE.VertexColors,
                                            vertexShader: document.getElementById('gou-cook.vert').text,
                                            fragmentShader: document.getElementById('gou-cook.frag').text,
                                            });
        screen.scene.remove(surfaces);
        var elem = document.getElementById('isovalue');
        var newSurfaces = Isosurfaces(volume, elem.value, material);
        screen.scene.add(newSurfaces);
        surfaces = newSurfaces;
    }
    document.getElementById("Pho-Cook").onclick = function() {
        material = new THREE.ShaderMaterial({
                                            vertexColors: THREE.VertexColors,
                                            vertexShader: document.getElementById('pho-cook.vert').text,
                                            fragmentShader: document.getElementById('pho-cook.frag').text,
                                            });
        screen.scene.remove(surfaces);
        var elem = document.getElementById('isovalue');
        var newSurfaces = Isosurfaces(volume, elem.value, material);
        screen.scene.add(newSurfaces);
        surfaces = newSurfaces;
    }
    
    screen.loop();
    
    document.getElementById("change-isovalue-button").onclick = function() {
        screen.scene.remove( surfaces );
        var elem = document.getElementById('isovalue');
        var newSurfaces = Isosurfaces( volume, elem.value, material );
        screen.scene.add( newSurfaces );
        surfaces = newSurfaces;
    };
    
}

function main02()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    
    screen.init( volume, {
                width: window.innerWidth * 0.5,
                height: window.innerHeight,
                targetDom: document.getElementById('display2'),
                enableAutoResize: false
                });
    
    var bounds = Bounds( volume );
    screen.scene.add( bounds );
    
    //Slice
    var point = new THREE.Vector3(60,60,17);
    var normal = new THREE.Vector3(1,1,1);
    var surfaces = Slice( volume, point, normal );
    
    //Isosurface
    //var isovalue = 125;
    //var surfaces = Isosurfaces( volume, isovalue );
    screen.scene.add( surfaces );
    
    document.addEventListener( 'mousemove', function() {
                              screen.light.position.copy( screen.camera.position );
                              });
    
    window.addEventListener( 'resize', function() {
                            screen.resize( [ window.innerWidth * 0.5, window.innerHeight ] );
                            });
    
    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    screen.scene.add( light );
    
    /*var material = new THREE.ShaderMaterial({
                                            vertexColors: THREE.VertexColors,
                                            vertexShader: document.getElementById('phong.vert').text,
                                            fragmentShader: document.getElementById('phong.frag').text,
                                            });*/
    
    screen.loop();
    
    /*function(){
     var slider = document.getElementById('slider1');
     var output = document.getElementById('slider1o');
     
     var input = slider.getElementsByTagName('input')[0];
     var root = document.documentElement;
     var dragging = false;
     var value = output.value;// 初期位置
     var width = input.clientWidth / 2;
     
     var set_value = function (){
     // つまみのサイズ(input.clientWidth)だけ位置を調整
     input.style.left = (value - input.clientWidth/2) + 'px';
     output.value = value;
     };
     set_value();
     
     // 目盛り部分をクリックしたとき
     slider.onclick = function(evt){
     dragging = true;
     document.onmousemove(evt);
     document.onmouseup();
     };
     // ドラッグ開始
     input.onmousedown = function(evt){
     dragging = true;
     return false;
     };
     // ドラッグ終了
     document.onmouseup = function(evt){
     if (dragging) {
     dragging = false;
     output.value = value;
     }
     };
     document.onmousemove = function(evt){
     if(dragging){
     // ドラッグ途中
     if(!evt){
     evt = window.event;
     }
     var left = evt.clientX;
     var rect = slider.getBoundingClientRect();
     // マウス座標とスライダーの位置関係で値を決める
     value = Math.round(left - rect.left - width);
     // スライダーからはみ出したとき
     if (value < 0) {
     value = 0;
     } else if (value > slider.clientWidth) {
     value = slider.clientWidth;
     }
     set_value();
     return false;
     }
     };
     };*/
}
