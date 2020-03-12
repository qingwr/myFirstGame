var LoginLayout = ccui.Layout.extend({
    ctor:function () {
        this._super();
        this.addMainLayer()
        return true;
    },

    addMainLayer:function () {
        var size = cc.winSize;
        this.setTouchEnabled(true);
        this.setContentSize(size.width,size.height);
        this.setBackGroundColor(cc.color.BLACK);
        this.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        this.setBackGroundColorOpacity(0);
        this.addClickEventListener(function () {
            this.removeFromParent()
        }.bind(this))

        var size = cc.winSize;
        var layout = new ccui.Layout();
        layout.setTouchEnabled(true);
        layout.width  = 900;
        layout.height = 600;
        layout.setBackGroundColor(cc.color(100,100,100));
        layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        layout.setBackGroundColorOpacity(255);
        layout.x = (size.width-layout.width)/2;
        layout.y = (size.height-layout.height)/2;
        this.addChild(layout)

        var btn_login = new ccui.Button();
        btn_login.loadTextures(res.Button_Normal_png,res.Button_Press_png,res.Button_Disable_png)
        btn_login.setScale9Enabled(true)
        btn_login.setContentSize(cc.size(160,80))
        btn_login.setPressedActionEnabled(true)
        btn_login.titleText  = "登 录"
        btn_login.x = layout.width/2;
        btn_login.y = 100;
        layout.addChild(btn_login,100)
        btn_login.titleFontSize = 32;
        btn_login.titleColor = cc.color(30,30,30)
        btn_login.addClickEventListener(function () {
            this.parent.freshLobby();
            this.removeFromParent()
        }.bind(this));
    },

});