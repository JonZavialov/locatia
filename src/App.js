import { NotificationContainer } from "react-notifications";
import Main from "./components/Main";
import MobileView from "./components/MobileView/MobileView";
import 'react-notifications/lib/notifications.css';

function App() {
  //check if user is on mobile
  const isMobile = window.innerWidth < 850;
  if (isMobile) {
    return (
      <MobileView />
    )
  }
  else {
    return (
      <>
        <Main />
        <NotificationContainer />
      </>
  );
  }
}

export default App;