import ReactGA from "react-ga4";
const TRACKING_ID = process.env.REACT_APP_ENV === 'prod' ? 'G-K1YWN5KQ3G' : 'G-KZ135WRT5Q';
ReactGA.initialize(TRACKING_ID);

const setupGAEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

export default ReactGA;
export { setupGAEventTracker };