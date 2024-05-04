import { Notification } from "@douyinfe/semi-ui";

export function RegisterMessages(message,state){
 
        if(state == "error"){
            let opts = {
                content: message,
                duration: 3,
                theme: 'light',
            }
            Notification.error(opts);
        }

        if(state == "ok"){
            let opts = {
                content: message,
                duration: 3,
                theme: 'light',
            }
            Notification.success(opts);
        }
        
    }