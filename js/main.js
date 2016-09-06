var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var level1=[[1,1,1,1,1,1,1,1,1,1],
			[1,2,1,2,1,2,1,2,1,1],
			[1,0,1,0,1,0,1,0,3,1],
			[1,0,1,0,1,0,1,1,1,1],
			[1,0,1,0,1,0,0,0,3,1],
			[1,0,1,0,1,1,1,1,1,1],
			[1,0,1,0,0,0,0,0,3,1],
			[1,0,1,1,1,1,1,1,1,1],
			[1,0,0,0,0,0,0,0,3,1],
			[1,1,1,1,1,1,1,1,1,1]]

function preload() {
	//game.load.image("background_tile","../assets/background_block_32x32.png");
	game.load.image("background_tile","../assets/back.bmp"); //0
	game.load.image("wall_tile","../assets/wall.bmp"); //1
}

function create() {

	backgroundTiles = game.add.group();
	wallTiles = game.add.group();

	//add game tiles

	for(var y = 0; y<level1.length; y++){
		for(var x = 0; x<level1[y].length; x++){
			if(level1[y][x]>='0'){
				backgroundTiles.create(x*16,y*16,"background_tile");
			}
			if(level1[y][x]=='1'){
				wallTiles.create(x*16,y*16,"wall_tile");
			}
		}
	}
	
}

function update() {
	
}