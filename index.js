const InstituteAccount = require('./schema/InstituteAccount.model');
const User = require('./schema/User.model');
const LicenseModel = require('./schema/license.model');
const { connectMongoDB, disconnectMongoDB } = require('./mongo');
const createExcel = require('./createExcel');

async function startImport () {
  try {
    const connection = await connectMongoDB();
    const License = new LicenseModel().getCollection(connection);
    const institutesFound = await InstituteAccount.find({});
    let outputJson = [];
    for (let institute of institutesFound) {
      if (institute.admins.length > 0) {
        let licenseDetails = await License.findOne({instituteId: institute.kneuraId, isDeleted: false});
        let admin = institute.admins[0].user;
        admin = await User.findOne({kneuraId: admin});
        let completeInfo = {
          'instituteName': institute.name,
          'instituteId': institute.kneuraId,
          'adminName': admin.firstName,
          'adminPhone': admin.phone,
          'adminEmail': admin.email,
          'licenseKey': licenseDetails == null ? 'No License Found' : licenseDetails.key,
          'planName': licenseDetails == null ? 'No License Found' : licenseDetails.planName,
          'teachers': institute.teachers.length,
          'students': institute.learners.length,
          'licenseCreationDate': licenseDetails == null ? 'No License Found' : new Date(licenseDetails.createdAt).toDateString()
        }
        outputJson.push(completeInfo);
      }
      await createExcel(outputJson);
    }
    disconnectMongoDB();
  } catch (error) {
    console.log(error);
  }
}

console.log('Starting the script');
startImport();
