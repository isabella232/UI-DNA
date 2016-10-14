/**
 * Created by bgllj on 2016/10/12.
 */



var UI_model = {

    msg_bubble: {
        var_panel: {title: "", msg: "", show: false, color: "none"}


    }


}

var UI_action = {
    /**
     * 弹出气泡提示框
     * @param panel 面板区域名
     * @param title 提示标题文本
     * @param msg 提示文本
     * @param color 提示框颜色
     * @param time 额外显示时间（毫秒）
     */
    message_bubble: function (panel, title, msg, color, time)
    {
        var time = time || 0;
        var color = color ||  "none";

        UI_model.msg_bubble[panel].show = false;
        UI_model.msg_bubble[panel].title = title;
        UI_model.msg_bubble[panel].msg = msg;
        UI_model.msg_bubble[panel].color = color;
        UI_model.msg_bubble[panel].show = true;

        setTimeout(function ()
        {
            UI_model.msg_bubble[panel].show = false;
        }, 1000 * 2.5 + 1000 * ((msg + title).length / 5) + time)


    }


}

export {UI_model, UI_action}