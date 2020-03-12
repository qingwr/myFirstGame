var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new LobbyLayer();
        this.addChild(layer);
    }
});

