import moment from "moment";

window.moment = moment;

export const MONGOOSE_FORMAT = "2018-10-08T21:32:26.852Z";
export const parseDate = date => moment(date, MONGOOSE_FORMAT);
export const formatDate = date => parseDate(date).format("LLL");
