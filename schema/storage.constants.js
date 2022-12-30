const STORAGE_SIZE = {
  KB: 1024, //in bytes
  MB: 1048576, //in bytes
  GB: 1073741824,
};
const TIME = {
  // minute conversion
  MINUTES: 1,
  HOURS: 60,
};
const UNITS = {
  minutes: "minutes",
  hours: "hours",
  month: "month",
  student: "student",
  teacher: "teacher",
};

const LOW = "LOW";
const MEDIUM = "MEDIUM";
const HIGH = "HIGH";
const RECORDING_RESOLUTION_TYPE = [LOW, MEDIUM, HIGH];
const LICENSE_VALIDITY = {
  DUE_DATE: 7,
  MAX_GRACE_PERIOD: -7,
};
const PRORATE_LIMITS_FOR = [
  "liveConferenceWithAudio",
  "liveConferenceWithAudioAndVideo",
];
const LICENSE_TYPE={
  FREE:'FREE',
  PAID:'PAID',
}

const NA = "NA";
const DAILY = "DAILY";
const MONTHLY = "MONTHLY";
const WEEKLY = "WEEKLY";
const FREQUENCY_ENUM = [ NA, DAILY, WEEKLY, MONTHLY ];

module.exports = {
  STORAGE_SIZE,
  UNITS,
  TIME,
  LICENSE_VALIDITY,
  PRORATE_LIMITS_FOR,
  LICENSE_TYPE,
  LOW,
  MEDIUM,
  HIGH,
  RECORDING_RESOLUTION_TYPE,
  FREQUENCY_ENUM,
  NA,
  DAILY,
  WEEKLY,
  MONTHLY
};
