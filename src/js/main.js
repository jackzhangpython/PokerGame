var resourceList = {
    start :"src/images/Start.png"
};

var PokerGame = cc.Scene.extend({
    onEnter: function(){
        this._super();
        var startSprite = cc.Sprite.create("/src/images/Start.png");
        startSprite.setPosition(cc.director.getWinSize().width / 2, cc.director.getWinSize().height / 2);
        startSprite.setScale(0.8);
        this.addChild(startSprite, 0);
    }
});

window.load = function(){
    cc.game.onStart = function(){
        cc.LoaderScene.preload(["src/images/Start.png"], function(){
            cc.director.runScene(new PokerGame());
        });
    };
    cc.game.run("poker-game-canvas")
};