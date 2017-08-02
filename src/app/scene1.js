define(['three','tween','util','orbitcontrols'],function(THREE,TWEEN){

	function Scene1(world,preload) {
	
		var scope = this;
		
		this.world = world;
		
		this.item = new THREE.Mesh(
			new THREE.BoxGeometry(5,5,5),
			new THREE.MeshLambertMaterial({color:0x444444})
		);
		
		
	}
	
	Scene1.prototype = {
		
		constructor: Scene1,
		
		init: function(nextScene) {
			
			var scope = this;
			
			addBg();
			
			scope.start(nextScene);
			
			function addBg() {
				
				scope.world.scene.add(scope.item);
				
				var pos = THREE.util.toScreenXY(scope.item.position,scope.world.camera,scope.world.renderer);
				
			}
			
		},
		
		start: function(nextScene) {
			
			console.log('start');
			
			setTimeout(function() {
				nextScene && nextScene.apply(this);
			},2000);
	

		},
	
		update: function() {
			
			var scope = this;
			
			scope.item.rotation.x += Math.PI/500;
			scope.item.rotation.z += Math.PI/500;
		
		},
		
		dispose: function() {
			
			var scope = this;
			
			THREE.util.dispose(scope.world.scene);
			
		}
	
	}
	
    return Scene1;

});