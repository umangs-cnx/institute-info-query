const excelJS = require('exceljs');
async function createExcel (outputJson) {
    const workbook = new excelJS.Workbook();
    const worksheet = workbook.addWorksheet("New Institute Info");
    const path = "./";
    worksheet.columns = [
        { header: "S no.", key: "s_no", width: 10 }, 
        { header: "Institute Name", key: "instituteName", width: 25 },
        { header: "Institute ID", key: "instituteId", width: 25 },
        { header: "Admin Name", key: "adminName", width: 25},
        { header: "Admin Phone", key: "adminPhone", width: 25},
        { header: "Admin Email", key: "adminEmail", width: 25},
        { header: "License Key", key: "licenseKey", width: 25},
        { header: "Plan Name", key: "planName", width: 25},
        { header: "Teachers", key: "teachers", width: 10},
        { header: "Students", key: "students", width: 25},
        { header: "License Creation Date", key: "licenseCreationDate", width: 25},
    ];
    let counter = 1;
    outputJson.forEach((json) => {
        json.s_no = counter;
        worksheet.addRow(json);
        counter++;
    });
    worksheet.getRow(1).eachCell((cell) => {
        cell.font = {bold: true};
    });
    const data = await workbook.xlsx.writeFile(`${path}/info.xlsx`)
}

module.exports = createExcel;