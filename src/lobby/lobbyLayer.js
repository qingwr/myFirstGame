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

        this.showLeftView();
        this.showRightView();
        this.leftLayer.sx = this.leftLayer.x;
        this.leftLayer.x  = 0-this.leftLayer.width;
        this.rightLayer.sx = this.rightLayer.x;
        this.rightLayer.x  = size.width;

        var btn_showLeft = new ccui.Button();
        btn_showLeft.loadTextures(res.Button_Normal_png,res.Button_Press_png,res.Button_Disable_png)
        btn_showLeft.setScale9Enabled(true)
        btn_showLeft.setContentSize(cc.size(160,80))
        btn_showLeft.setPressedActionEnabled(true)
        btn_showLeft.titleText  = "左Layer"
        btn_showLeft.x = btn_showLeft.width/2;
        btn_showLeft.y = size.height-btn_showLeft.height/2;
        this.addChild(btn_showLeft,100)
        btn_showLeft.titleFontSize = 32;
        btn_showLeft.titleColor = cc.color(30,30,30)
        btn_showLeft.addClickEventListener(function () {
            btn_showLeft.setTouchEnabled(false)
            this.leftLayer.stopAllActions()
            btn_showLeft.stopAllActions()
            cc.log(Math.abs(Math.floor(this.leftLayer.x)))
            if(Math.abs(Math.floor(this.leftLayer.x))>2)
            {
                this.leftLayer.runAction(cc.sequence(cc.moveBy(0.3,cc.p(this.leftLayer.width,0))))
                btn_showLeft.runAction(cc.sequence(cc.moveBy(0.3,cc.p(this.leftLayer.width,0)),cc.callFunc(function () {
                    btn_showLeft.setTouchEnabled(true)
                    btn_showLeft.stopAllActions()
                })))
            }
            else
            {
                this.leftLayer.runAction(cc.sequence(cc.moveBy(0.3,cc.p(-this.leftLayer.width,0))))
                btn_showLeft.runAction(cc.sequence(cc.moveBy(0.3,cc.p(-this.leftLayer.width,0)),cc.callFunc(function () {
                    btn_showLeft.setTouchEnabled(true)
                    btn_showLeft.stopAllActions()
                })))
            }
        }.bind(this))
        this.btn_showLeft = btn_showLeft;

        //显示右方
        var btn_showRight = new ccui.Button();
        btn_showRight.loadTextures(res.Button_Normal_png,res.Button_Press_png,res.Button_Disable_png)
        btn_showRight.setScale9Enabled(true)
        btn_showRight.setContentSize(cc.size(160,80))
        btn_showRight.setPressedActionEnabled(true)
        btn_showRight.titleText  = "右Layer"
        btn_showRight.x = size.width-btn_showRight.width/2;
        btn_showRight.y = size.height-btn_showLeft.height/2;
        this.addChild(btn_showRight,100)
        btn_showRight.titleFontSize = 32;
        btn_showRight.titleColor = cc.color(30,30,30)
        btn_showRight.addClickEventListener(function () {
            btn_showRight.setTouchEnabled(false)
            this.rightLayer.stopAllActions()
            btn_showRight.stopAllActions()
            if(Math.abs(Math.floor(this.rightLayer.x)-this.rightLayer.sx)<=1)
            {
                this.rightLayer.runAction(cc.sequence(cc.moveBy(0.3,cc.p(-this.rightLayer.width,0))))
                btn_showRight.runAction(cc.sequence(cc.moveBy(0.3,cc.p(-this.rightLayer.width,0)),cc.callFunc(function () {
                    btn_showRight.setTouchEnabled(true)
                    btn_showRight.stopAllActions()
                })))
            }
            else
            {
                this.rightLayer.runAction(cc.sequence(cc.moveBy(0.3,cc.p(this.rightLayer.width,0))))
                btn_showRight.runAction(cc.sequence(cc.moveBy(0.3,cc.p(this.rightLayer.width,0)),cc.callFunc(function () {
                    btn_showRight.setTouchEnabled(true)
                    btn_showRight.stopAllActions()
                })))
            }
        }.bind(this))
        this.btn_showRight = btn_showRight;

        this.btn_showLeft.setVisible(false);
        this.btn_showRight.setVisible(false);
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
        leftLayer.width  = 200;
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
        rightLayer.width  = 200;
        rightLayer.height = 750;
        this.addChild(rightLayer,0)
        rightLayer.x = size.width;
        rightLayer.y = 0;
        rightLayer.setAnchorPoint(cc.p(0.5,0.5))
        rightLayer.color  = cc.color(200,200,200);
        this.rightLayer = rightLayer;
    },

    freshLobby:function () {
        this.btn_login.setVisible(false)
        this.btn_reg.setVisible(false)
        this.aLabel.setVisible(false)
        this.btn_showLeft.setVisible(true)
        this.btn_showLeft.setVisible(true);
        this.btn_showRight.setVisible(true);
        // this.showMainLayer();
    },

    
});