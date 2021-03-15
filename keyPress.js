function keyPressed () {
	if (keyCode === LEFT_ARROW) {
		helicopterSprite.x = helicopterSprite.x - 5;
		translation = {x: -5,y:0}
		Matter.Body.translate(packageBody, translation);

	} else if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x = helicopterSprite.x + 5;
		translation = {x:5, y:0}
		Matter.Body.translate(packageBody, translation);

	} else if (keyCode === DOWN_ARROW) {
	   Matter.Body.setStatic(packageBody, false);

   }
}