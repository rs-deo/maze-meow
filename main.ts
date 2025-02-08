mp.onScore(100, function (player2) {
    game.gameOver(true)
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
	
})
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 2 . . . . . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . 2 . . . 2 2 . . . . . . . . . 
    . 2 2 . . 2 2 . . . . . . . . . 
    . 2 2 . . 2 2 . . . . . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 8 8 . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 8 8 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . . . 2 . . . . . . . . . . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 100)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 8 . . . . . . . . . . 
    . . . . . 8 8 . . . . . . . . . 
    . . . . . 8 8 . . . . . . . . . 
    . 8 . . . 8 8 . . . . . . . . . 
    . 8 8 . . 8 8 . . . . . . . . . 
    . 8 8 . . 8 8 . . . . . . . . . 
    . 8 8 8 8 8 8 8 8 8 8 9 9 . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 9 9 . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . . 8 8 . . . . . . . . . 
    . . . . . 8 8 . . . . . . . . . 
    . . . . . 8 8 . . . . . . . . . 
    . . . . . 8 8 . . . . . . . . . 
    . . . . . 8 8 . . . . . . . . . 
    . . . . . 8 . . . . . . . . . . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 100)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 4 . . . . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . 4 . . . 4 4 . . . . . . . . . 
    . 4 4 . . 4 4 . . . . . . . . . 
    . 4 4 . . 4 4 . . . . . . . . . 
    . 4 4 4 4 4 4 4 4 4 4 8 8 . . . 
    . 4 4 4 4 4 4 4 4 4 4 4 8 8 . . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . . 4 . . . . . . . . . . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three), 100, 100)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 7 . . . . . . . . . . 
    . . . . . 7 7 . . . . . . . . . 
    . . . . . 7 7 . . . . . . . . . 
    . 7 . . . 7 7 . . . . . . . . . 
    . 7 7 . . 7 7 . . . . . . . . . 
    . 7 7 . . 7 7 . . . . . . . . . 
    . 7 7 7 7 7 7 7 7 7 7 8 8 . . . 
    . 7 7 7 7 7 7 7 7 7 7 7 8 8 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . . . 7 7 . . . . . . . . . 
    . . . . . 7 7 . . . . . . . . . 
    . . . . . 7 7 . . . . . . . . . 
    . . . . . 7 7 . . . . . . . . . 
    . . . . . 7 7 . . . . . . . . . 
    . . . . . 7 . . . . . . . . . . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four), 100, 100)
tiles.setCurrentTilemap(tilemap`1`)
let bullet = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
