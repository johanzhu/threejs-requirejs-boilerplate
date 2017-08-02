define(['three','tween','util'],function(THREE,TWEEN){

	function Scene2(world,preload) {
		
		var scope = this;
		
		this.world = world;
		
		this.item = new THREE.Mesh(
			new THREE.BoxGeometry(5,5,5),
			new THREE.MeshBasicMaterial({color:0xff0000})
		);
		
	}	
		
	Scene2.prototype = {
		
		constructor: Scene2,
		
		init : function(nextScene){
			
			var scope = this;
			
			changeScene();
			
			addMan();
			
			scope.start(nextScene);
			
			
			function addMan() {
				
				scope.world.scene.add(scope.item);
				
			}
			
			function changeScene() {
				scope.changeScene(scope.world);
			}
			
			
		},
		
		start: function(nextScene) {
			
			console.log('start2');
		
		},
		
		update : function() {
			
			var scope = this;
			
			scope.item.rotation.x += Math.PI/500;
			scope.item.rotation.z += Math.PI/500;
			
		},
		
		changeScene: function(world) {
			
			var scope = this;
			
			var scene2 = new THREE.Scene();
			scene2.name = 'scene2';
			
			var camera2 = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,2000);
			camera2.name = 'camera2';
			
			camera2.position.set(0,0,100);
			
			world.changeScene(scene2,camera2);	
			
		},
		
		dispose: function() {
			
			var scope = this;
			
			THREE.util.dispose(scope.world.scene);
			
		}
		
		
	}
	  
	    
	return Scene2;

});