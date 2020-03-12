/**
 *  前厅页面/登录注册页/大厅主页
 */
var LobbyLayer = cc.Layer.extend({
    spriteBg:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.spriteBg = new cc.Sprite(res.INDEX_BG_png);
        this.spriteBg.x = size.width/2;
        this.spriteBg.y = size.height/2;
        this.addChild(this.spriteBg, 0);
        this.showUnlogin();
        return true;
    },

    /*
        登录注册页
    */
    showUnlogin:function () {
        var size = cc.winSize;
        var aLabel = new cc.LabelTTF("登录首页", "Arial", 48);
        aLabel.x = size.width-150;
        aLabel.y = size.height-50;
        aLabel.color  = cc.color(60,60,60)
        this.addChild(aLabel, 5);
    },

    /*
        大厅主页
    */
    showLobby:function () {
        
    }
    
});