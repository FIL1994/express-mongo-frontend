import moment from "moment";

window.moment = moment;

export const MONGOOSE_FORMAT = "YYYY-MM-DDThh:mm:ssZ";
export const parseDate = date => moment(date, MONGOOSE_FORMAT);
export const formatDate = date => parseDate(date).format("LLL");
