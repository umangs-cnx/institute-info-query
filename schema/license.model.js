const mongoose = require("mongoose");
const {
  STORAGE_SIZE,
  UNITS,
  TIME,
  RECORDING_RESOLUTION_TYPE,
  FREQUENCY_ENUM,
  NA,
  DAILY,
  MONTHLY,
  LICENSE_TYPE
} = require('./storage.constants');

class License {
  constructor() {
    this.schema = new mongoose.Schema(
      {
        licenseType: { type: String, default: LICENSE_TYPE.FREE },
        /** License key  */
        key: { type: String, unique: true, required: true },
        // id: { type: String, required: false },
        instituteId: { type: String, required: false },

        /**Account types */
        accountType: { type: String, required: true },
        planName: { type: String, required: true },
        planGrade: { type: Number, required: true },
        /*LIMITING THE NUMBER OF FEATURES */
        casting: {
          enabled: { type: Boolean, default: false },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 1 },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        screenRecording: {
          enabled: { type: Boolean, default: false },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 10 },
          limitInMinutes: { type: Number, default: 20 },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        recording: {
          enabled:  { type: Boolean, default: true },
          resolutionType: {
            type: String,
            default: RECORDING_RESOLUTION_TYPE.LOW,
            enum: RECORDING_RESOLUTION_TYPE
          },
          deviceStorageAllowed: { type: Boolean, default: true },
          cloudStorageAllowed: { type: Boolean, default: false },
          limitInMinutes: { type: Number, default: 10 },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        handwritingRecognition: {
          enabled: { type: Boolean, default: true },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 30 },
          isActive: { type: Boolean, default: false },
          isTrialUsed: { type: Boolean, default: false },
          trialActivatedOn: { type: Date , default: undefined },
          trialValidTill: { type: Date , default: undefined },
        },
        // Share as PDF
        shareCanvasAsPDF: {
          enabled: { type: Boolean, default: false },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 10 },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        pdfGeneration: {
          enabled: { type: Boolean, default: false },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 1 },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        class: {
          enabled: { type: Boolean, default: false },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 1 },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        lessonPlan: {
          enabled: { type: Boolean, default: false },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 1 },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        selfStudy: {
          enabled: { type: Boolean, default: true },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 50 },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        assessment: {
          enabled: { type: Boolean, default: true },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 50 },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        aiCourseCreation: {
          enabled: { type: Boolean, default: false },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 10 },
          isActive: { type: Boolean, default: false },
          isTrialUsed: { type: Boolean, default: false },
          trialActivatedOn: { type: Date , default: undefined },
          trialValidTill: { type: Date , default: undefined },
          isRecurring: { type: Boolean, default: true },
          recurringFrequency: { type: String, default: MONTHLY, enum: FREQUENCY_ENUM },
        },
        aiQuestionGeneration: {
          enabled: { type: Boolean, default: false },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 10 },
          isActive: { type: Boolean, default: false },
          isTrialUsed: { type: Boolean, default: false },
          trialActivatedOn: { type: Date , default: undefined },
          trialValidTill: { type: Date , default: undefined },
          isRecurring: { type: Boolean, default: true },
          recurringFrequency: { type: String, default: MONTHLY, enum: FREQUENCY_ENUM },
        },
        goLiveBroadcast: {
          enabled: { type: Boolean, default: false },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 10 },
          isActive: { type: Boolean, default: false },
          isTrialUsed: { type: Boolean, default: false },
          trialActivatedOn: { type: Date , default: undefined },
          trialValidTill: { type: Date , default: undefined },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        goLiveOtherVC: {
          enabled: { type: Boolean, default: false },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 10 },
          isActive: { type: Boolean, default: false },
          isTrialUsed: { type: Boolean, default: false },
          trialActivatedOn: { type: Date , default: undefined },
          trialValidTill: { type: Date , default: undefined },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        basicInteractiveTeachingTools: {
          enabled: { type: Boolean, default: false },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 10 },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        admin: {
          enabled: { type: Boolean, default: false },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 10 },
        },
        attendance: {
          enabled: { type: Boolean, default: false },
          isActive: { type: Boolean, default: false },
          isTrialUsed: { type: Boolean, default: false },
          trialActivatedOn: { type: Date , default: undefined },
          trialValidTill: { type: Date , default: undefined },
          usedLimit: { type: Number, default: 0 },
        },
        communicationWall: {
          enabled: { type: Boolean, default: false },
          isActive: { type: Boolean, default: false },
          isTrialUsed: { type: Boolean, default: false },
          trialActivatedOn: { type: Date , default: undefined },
          trialValidTill: { type: Date , default: undefined },
          usedLimit: { type: Number, default: 0 },
        },
        adminPortalAccess: {
          enabled: { type: Boolean, default: true },
          isActive: { type: Boolean, default: true },
          isTrialUsed: { type: Boolean, default: false },
          trialActivatedOn: { type: Date , default: undefined },
          trialValidTill: { type: Date , default: undefined },
          usedLimit: { type: Number, default: 0 },
        },
        classPerformance: {
          enabled: { type: Boolean, default: true },
          isActive: { type: Boolean, default: true },
          isTrialUsed: { type: Boolean, default: false },
          trialActivatedOn: { type: Date , default: undefined },
          trialValidTill: { type: Date , default: undefined },
          usedLimit: { type: Number, default: 0 },
        },
        institutePerformance: {
          enabled: { type: Boolean, default: true },
          isActive: { type: Boolean, default: true },
          isTrialUsed: { type: Boolean, default: false },
          trialActivatedOn: { type: Date , default: undefined },
          trialValidTill: { type: Date , default: undefined },
          usedLimit: { type: Number, default: 0 },
        },
        parentAppAccess: {
          enabled: { type: Boolean, default: true },
          isActive: { type: Boolean, default: true },
          isTrialUsed: { type: Boolean, default: false },
          trialActivatedOn: { type: Date , default: undefined },
          trialValidTill: { type: Date , default: undefined },
          usedLimit: { type: Number, default: 0 },
        },
        teacher: {
          enabled: { type: Boolean, default: true },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 1 },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        student: {
          enabled: { type: Boolean, default: true },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 10 },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        pages: {
          enabled: { type: Boolean, default: false },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 1 },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        liveConferenceWithAudio: {
          type: {
            enabled: Boolean,
            unitForLimit: String,
            usedLimit: Number,
            totalLimit: Number,
            isRecurring: Boolean,
            recurringFrequency: String,
            durationLimitPerCall: Number,
          },
          default: {
            enabled: true,
            unitForLimit: UNITS.minutes,
            usedLimit: 0,
            totalLimit: 2000,
            durationLimitPerCall: 30 * TIME.MINUTES,
            isRecurring: false,
            recurringFrequency:  NA,
          },
          enum: {
            unitForLimit: [UNITS.minutes, UNITS.hours],
            recurringFrequency: FREQUENCY_ENUM
          }
        },
        liveConferenceWithAudioAndVideo: {
          type: {
            enabled: Boolean,
            unitForLimit: String,
            usedLimit: Number,
            totalLimit: Number,
            durationLimitPerCall: Number,
            isRecurring: Boolean,
            recurringFrequency: String,
          },
          default: {
            enabled: true,
            unitForLimit:  UNITS.minutes,
            usedLimit: 0,
            totalLimit: 200,
            durationLimitPerCall: 30 * TIME.MINUTES,
            isRecurring: false,
            recurringFrequency: NA,
          },
          enum: {
            unitForLimit: [UNITS.minutes, UNITS.hours],
            recurringFrequency: FREQUENCY_ENUM,
          }
        },
        liveConference: {
          enabled: { type: Boolean, default: false},
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 0 },
          isRecurring: { type: Boolean, default: true },
          recurringFrequency: { type: String, default: DAILY, enum: FREQUENCY_ENUM },
          durationLimitPerCall: { type: Number, default: 0 },
          simultaneousCallLimit: { type: Number, default: 0 },
          numberOfStudentsInACallLimit: { type: Number, default: 0},
        },
        collaborativeCanvas: {
          type: {
            enabled: Boolean,
            unitForLimit: String,
            usedLimit: Number,
            totalLimit: Number,
            isRecurring: Boolean,
            recurringFrequency: String,
          },
          default: {
            enabled: false,
            unitForLimit: UNITS.minutes,
            usedLimit: 0,
            totalLimit: 250 * (TIME.HOURS),
            isRecurring: false,
            recurringFrequency: NA,
          },
          enum: {
            unitForLimit: [UNITS.minutes, UNITS.hours],
            recurringFrequency: FREQUENCY_ENUM,
          }
        },
        curriculums: {
          enabled: { type: Boolean, default: true },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 50 },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        classSchedule: {
          enabled: { type: Boolean, default: true },
          isActive: { type: Boolean, default: false },
          isTrialUsed: { type: Boolean, default: false },
          trialActivatedOn: { type: Date , default: undefined },
          trialValidTill: { type: Date , default: undefined },
          usedLimit: { type: Number, default: 0 }
        },
        // MyCloud Search
        contentSearch: {
          enabled: { type: Boolean, default: false },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 50 },
          isRecurring: { type: Boolean, default: false },
          recurringFrequency: { type: String, default: NA, enum: FREQUENCY_ENUM },
        },
        // KSAR Search
        curriculumContentSearch: {
          enabled: { type: Boolean, default: false },
          usedLimit: { type: Number, default: 0 },
          totalLimit: { type: Number, default: 10 },
          isRecurring: { type: Boolean, default: true },
          recurringFrequency: { type: String, default: MONTHLY, enum: FREQUENCY_ENUM },
        },
        /* LICENSE ACTIVATION */
        isActivated: { type: Boolean, default: false },
        activatedOn: { type: Date },
        isDeleted: { type: Boolean, default: false },
        expiresAt: { type: Date },
        /* Payment */
        renewedAt: { type: Date },
        /**
         * paymentPlan can also be called as units/quantity
         * e.g:
         * if plan is purchased for
         * 1 month, paymentPlan is 1
         * 2 month, paymentPlan is 2
         */
        paymentPlan: { type: Number, default: 3 },
        //per user limit
        storage: {
          s3uuid: String,
          storageUsed: { type: Number, default: 0 },
          storageLimit: { type: Number },
          isRecurring: { type: Boolean, default: true },
          recurringFrequency: { type: String, default: MONTHLY, enum: FREQUENCY_ENUM },
        },
        comments: { type: String },
        planDuration: { type: Number, default: 30 }, //in days used for adding expiry date while activating license
        isTrial: { type: Boolean, default: false },
        migrated:{type:Boolean,default:false}
      },
      { timestamps: true }
    );
  }

  getCollection(connection) {
    return connection.model("License", this.schema);
  }
}

module.exports = License;
