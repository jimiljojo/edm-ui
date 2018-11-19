import { API_ROOT } from './api-config';

let defaultClickTopicName;
let defaultPageLoadTopicName;

if(API_ROOT == "http://localhost:5000") {
  defaultClickTopicName = 'edm-ui-click-local'
  defaultPageLoadTopicName = 'edm-ui-pageload-local'
} else {
  defaultClickTopicName = 'edm-ui-click'
  defaultPageLoadTopicName = 'edm-ui-pageload'
}

const CLICK_KAFKA_TOPIC     = process.env.REACT_APP_CLICK_KAFKA_TOPIC || defaultClickTopicName;
const PAGE_LOAD_KAFKA_TOPIC = process.env.REACT_APP_PAGE_LOAD_KAFKA_TOPIC || defaultPageLoadTopicName;


module.exports = {
  CLICK_KAFKA_TOPIC,
  PAGE_LOAD_KAFKA_TOPIC
}