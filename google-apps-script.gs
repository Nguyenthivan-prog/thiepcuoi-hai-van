/**
 * Google Apps Script nhận lời chúc từ thiệp cưới và ghi vào Google Sheet.
 * Dán toàn bộ file này vào: Google Sheet → Extensions → Apps Script.
 */
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('LoiChuc') || ss.getSheets()[0];

    // Nếu sheet đang trống thì tự thêm dòng tiêu đề
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Thời gian', 'Tên', 'Khách của', 'Lời chúc']);
    }

    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.thoi_gian || new Date(),
      data.ten || '',
      data.khach_cua || '',
      data.loi_chuc || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
