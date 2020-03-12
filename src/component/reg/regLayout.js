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

    },

});