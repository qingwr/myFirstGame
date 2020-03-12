var RegLayout = ccui.Layout.extend({
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

        var reg_login = new ccui.Button();
        reg_login.loadTextures(res.Button_Normal_png,res.Button_Press_png,res.Button_Disable_png)
        reg_login.setScale9Enabled(true)
        reg_login.setContentSize(cc.size(160,80))
        reg_login.setPressedActionEnabled(true)
        reg_login.titleText  = "注 册"
        reg_login.x = size.width/2+300;
        reg_login.y = size.height/2;
        reg_login.x = layout.width/2;
        reg_login.y = 100;
        layout.addChild(reg_login,100)
        reg_login.titleFontSize = 32;
        reg_login.titleColor = cc.color(30,30,30)
        reg_login.addClickEventListener(function () {
            this.parent.freshLobby();
            this.removeFromParent()
        }.bind(this))

    },

});