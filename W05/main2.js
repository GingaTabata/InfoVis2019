function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    //    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
 
    var vertices = [
		    [-0.5, 0.5, 0.5], // v0
		    [-0.5,-0.5, 0.5], // v1
		    [ 0.5,-0.5, 0.5], // v2
		    [ 0.5, 0.5, 0.5], // v3 
		    [-0.5, 0.5,-0.5], // v4 
		    [-0.5,-0.5,-0.5], // v5 
		    [ 0.5,-0.5,-0.5], // v6 
		    [ 0.5, 0.5,-0.5]  // v7 
		    ];
    var faces = [
		 [0,1,2],
		 [2,3,0],
		 [4,0,3],
		 [3,7,4],
		 [3,2,6],
		 [6,7,3],
		 [4,5,1],
		 [1,0,4],
		 [7,6,5],
		 [5,4,7],
		 [1,5,6],
		 [6,2,1]
		 ];
    
    var v0 = new THREE.Vector3().fromArray( vertices[0] );
    var v1 = new THREE.Vector3().fromArray( vertices[1] );
    var v2 = new THREE.Vector3().fromArray( vertices[2] );
    var v3 = new THREE.Vector3().fromArray( vertices[3] );
    var v4 = new THREE.Vector3().fromArray( vertices[4] );
    var v5 = new THREE.Vector3().fromArray( vertices[5] );
    var v6 = new THREE.Vector3().fromArray( vertices[6] );
    var v7 = new THREE.Vector3().fromArray( vertices[7] );
    var id = faces[0];
    var f0 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[1];
    var f1 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[2];
    var f2 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[3];
    var f3 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[4];
    var f4 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[5];
    var f5 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[6];
    var f6 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[7];
    var f7 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[8];
    var f8 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[9];
    var f9 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[10];
    var f10 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[11];
    var f11 = new THREE.Face3( id[0], id[1], id[2] );


    var geometry = new THREE.Geometry();
    geometry.vertices.push( v0 );
    geometry.vertices.push( v1 );
    geometry.vertices.push( v2 );
    geometry.vertices.push( v3 );
    geometry.vertices.push( v4 );
    geometry.vertices.push( v5 );
    geometry.vertices.push( v6 );
    geometry.vertices.push( v7 );
    geometry.faces.push( f0 );
    geometry.faces.push( f1 );
    geometry.faces.push( f2 );
    geometry.faces.push( f3 );
    geometry.faces.push( f4 );
    geometry.faces.push( f5 );
    geometry.faces.push( f6 );
    geometry.faces.push( f7 );
    geometry.faces.push( f8 );
    geometry.faces.push( f9 );
    geometry.faces.push( f10 );
    geometry.faces.push( f11 );

    //    var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    var material = new THREE.MeshBasicMaterial();
    material.vertexColors = THREE.FaceColors;

    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
    }

    //mousedown関数
    document.addEventListener( 'mousedown', mouse_down_event );
    function mouse_down_event( event )
    {
	
    }
    var raycaster = new THREE.Raycaster( origin, direction );
    var intersects = raycaster.intersectObject( triangle );
    if ( intersects.length > 0 )
	{
	    intersects[0].face.color.setRGB( 1, 0, 0 );
	    intersects[0].object.geometry.colorsNeedUpdate = true;
	}
    var x_win = event.clientX;
    var y_win = event.clientY;
    var vx = renderer.domElement.offsetLeft;
    var vy = renderer.domElement.offsetTop;
    var vw = renderer.domElement.width;
    var vh = renderer.domElement.height;
    var x_NDC = 2 * ( x_win - vx ) / vw - 1;
    var y_NDC = -( 2 * ( y_win - vy ) / vh - 1 );
    var p_NDC = new THREE.Vector3( x_NDC, y_NDC, 1 );
    var p_wld = p_NDC.unproject( camera );

}