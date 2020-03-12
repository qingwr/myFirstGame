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
        aLabel.color  = cc.color(100,100,100)
        this.addChild(aLabel, 5);
        this.aLabel = aLabel;

        var btn_login = new ccui.Button();
        btn_login.loadTextures(res.Button_Normal_png,res.Button_Press_png,res.Button_Disable_png)
        btn_login.setScale9Enabled(true)
        btn_login.setContentSize(cc.size(160,80))
        btn_login.setPressedActionEnabled(true)
        btn_login.titleText  = "登 录"
        btn_login.x = size.width/2+100;
        btn_login.y = size.height/2;
        this.addChild(btn_login,100)
        btn_login.titleFontSize = 32;
        btn_login.titleColor = cc.color(30,30,30)
        btn_login.addClickEventListener(function () {
            this.addChild(new LoginLayout(),100)
        }.bind(this));
        this.btn_login = btn_login;


        var btn_reg = new ccui.Button();
        btn_reg.loadTextures(res.Button_Normal_png,res.Button_Press_png,res.Button_Disable_png)
        btn_reg.setScale9Enabled(true)
        btn_reg.setContentSize(cc.size(160,80))
        btn_reg.setPressedActionEnabled(true)
        btn_reg.titleText  = "注 册"
        btn_reg.x = size.width/2+300;
        btn_reg.y = size.height/2;
        this.addChild(btn_reg,100)
        btn_reg.titleFontSize = 32;
        btn_reg.titleColor = cc.color(30,30,30)
        btn_reg.addClickEventListener(function () {
            this.addChild(new RegLayout(),100)
        }.bind(this))
        this.btn_reg = btn_reg;

    },

    /*
        大厅主页
    */
    showLobby:function () {
        
    },

    showMainLayer:function(){
        var size = cc.winSize;
        var mainLayer = new cc.LayerColor();
        mainLayer.width  = 1144;
        mainLayer.height = 750;
        this.addChild(mainLayer,0)
        mainLayer.x = (size.width-1144)/2;
        mainLayer.y = 0;
        mainLayer.setAnchorPoint(cc.p(0.5,0.5))
        mainLayer.color  = cc.color(80,80,80);
        this.mainLayer = mainLayer;
    },

    showLeftView:function (){
        var size = cc.winSize;
        var leftLayer = new cc.LayerColor();
        leftLayer.width  = (size.width-1144)/2;
        leftLayer.height = 750;
        this.addChild(leftLayer,0)
        leftLayer.x = 0;
        leftLayer.y = 0;
        leftLayer.setAnchorPoint(cc.p(0.5,0.5))
        leftLayer.color  = cc.color(200,200,200);
        this.leftLayer = leftLayer;
    },

    showRightView:function () {
        var size = cc.winSize;
        var rightLayer = new cc.LayerColor();
        rightLayer.width  = (size.width-1144)/2;
        rightLayer.height = 750;
        this.addChild(rightLayer,0)
        rightLayer.x = size.width-rightLayer.width;
        rightLayer.y = 0;
        rightLayer.setAnchorPoint(cc.p(0.5,0.5))
        rightLayer.color  = cc.color(200,200,200);
        this.rightLayer = rightLayer;
    },

    freshLobby:function () {
        this.btn_login.setVisible(false)
        this.btn_reg.setVisible(false)
        this.aLabel.setVisible(false)
        this.showMainLayer();
        this.showLeftView();
        this.showRightView();
    },

    
});