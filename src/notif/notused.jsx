import { Notification } from "@douyinfe/semi-ui";

export function Notused(){

        let opts = {
            content: '此功能尚未启用',
            duration: 3,
            theme: 'light',
        }
        Notification.error(opts);
    } 

