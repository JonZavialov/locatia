import { NotificationManager } from 'react-notifications'

function createNotification(type, message){
    switch (type) {
        case 'success':   
        NotificationManager.success(message, 'Success', 10000);
        break;
        case 'error':
            NotificationManager.error(message, 'Error!', 10000);
        break;
        default:
            break;
    };
}

export default createNotification