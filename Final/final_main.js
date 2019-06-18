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
    var isovalue = iso;
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
        material = new THREE.MeshLambertMaterial();
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
    var normal = new THREE.Vector3(0,0,1);
    var slice = Orthoslice( volume, point, normal );
    screen.scene.add( slice );
    
    var slices = [ slice, slice ];
    
    document.addEventListener( 'mousemove', function() {
                              screen.light.position.copy( screen.camera.position );
                              });
    
    window.addEventListener( 'resize', function() {
                            screen.resize( [ window.innerWidth * 0.5, window.innerHeight ] );
                            });
    
    screen.loop();
    
    document.getElementById("rep").onclick = function() {
        for(var i=0; i < slices.length; i = i+1){
            screen.scene.remove( slices[i] );
        }
        var n1 = document.normalpoint.num1.value;
        var n2 = document.normalpoint.num2.value;
        var n3 = document.normalpoint.num3.value;
        var p1 = document.normalpoint.num4.value;
        var p2 = document.normalpoint.num5.value;
        var p3 = document.normalpoint.num6.value;
        var normal = new THREE.Vector3(n1, n2, n3);
        var point = new THREE.Vector3(p1, p2, p3);
        var newSlice = Orthoslice( volume, point, normal );
        screen.scene.add(newSlice);
        slices.push( newSlice );
    };
    document.getElementById("add").onclick = function() {
        var n1 = document.normalpoint.num1.value;
        var n2 = document.normalpoint.num2.value;
        var n3 = document.normalpoint.num3.value;
        var p1 = document.normalpoint.num4.value;
        var p2 = document.normalpoint.num5.value;
        var p3 = document.normalpoint.num6.value;
        var normal = new THREE.Vector3(n1, n2, n3);
        var point = new THREE.Vector3(p1, p2, p3);
        var newSlice = Orthoslice( volume, point, normal );
        screen.scene.add( newSlice );
        slices.push( newSlice );
    };
}
