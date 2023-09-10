import { NotificationManager } from 'react-notifications'

function createNotification(type, message){
    switch (type) {
        case 'success':   
        NotificationManager.success(message, 'Success', 3000);
        break;
        case 'error':
            NotificationManager.error(message, 'Error!', 3000);
        break;
        default:
            break;
    };
}

export default createNotification