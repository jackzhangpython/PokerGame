

var PokerGame = cc.Scene.extend({
    onEnter: function(){
        this._super();
        var startSprite = cc.Sprite.create(resource.start);
        startSprite.setPosition(cc.director.getWinSize().width / 2, cc.director.getWinSize().height / 2);
        startSprite.setScale(0.8);
        this.addChild(startSprite, 0);
    }
});

window.onload = function(){
    cc.game.onStart = function(){
        cc.LoaderScene.preload([], function(){
            cc.director.runScene(new PokerGame());
        });
    };
    cc.game.run("poker-game-canvas")
};