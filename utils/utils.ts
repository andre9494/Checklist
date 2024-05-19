import moment, { Moment } from "moment";

const compareDates = (date1: Moment, date2: Moment) =>
  date1.startOf("day").diff(date2.startOf("day"));

export const date1IsMoreRecent = (date1: Moment, date2: Moment) =>
  compareDates(date1, date2) > 0;

export const date1IsEqual = (date1: Moment, date2: Moment) =>
  compareDates(date1, date2) == 0;
