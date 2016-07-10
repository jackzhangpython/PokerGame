
var StartLayer = cc.Layer.extend({
    ctor: function(){
        this._super();

        var startItem = new cc.MenuItemImage(
            resource.start_N,
            resource.start_S,
            function(){
                cc.log("menu is clicked!")
            },
            this
        );
        startItem.attr({
            x: cc.winSize.width / 2,
            y: cc.winSize.height / 2,
            anchorX : 0.5,
            anchorY : 0.5
        });

        var menu = new cc.Menu(startItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);
    }
});

var PokerGame = cc.Scene.extend({
    onEnter: function(){
        this._super();
        // var startSprite = cc.Sprite.create(resource.start);
        // startSprite.setPosition(cc.director.getWinSize().width / 2, cc.director.getWinSize().height / 2);
        // startSprite.setScale(0.8);
        // this.addChild(startSprite, 0);

        var startLayer = new StartLayer();
        this.addChild(startLayer);
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