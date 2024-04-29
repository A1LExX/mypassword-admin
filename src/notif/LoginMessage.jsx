import { Notification } from "@douyinfe/semi-ui";

export function LoginNotification(){

        let opts = {
            position: 'bottom',
            content: '用户名或密码未输入',
            duration: 3,
            theme: 'light',
        }
        Notification.error(opts);
    } 

