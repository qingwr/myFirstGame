var LobbyLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        this.showUnlogin();
        /*
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);
        */
        return true;
    },
    
    showUnlogin:function () {
        var size = cc.winSize;
        var helloLabel = new cc.LabelTTF("登录首页", "Arial", 48);
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        this.addChild(helloLabel, 5);
    },
    
    showLobby:function () {
        
    }
    
});