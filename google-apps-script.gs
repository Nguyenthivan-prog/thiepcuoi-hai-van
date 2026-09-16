/**
 * Google Apps Script nhận lời chúc từ thiệp cưới và ghi vào Google Sheet.
 * Dán toàn bộ file này vào: Google Sheet → Extensions → Apps Script.
 *
 * Lời chúc từ thiệp nhà gái (v.haivan.website) ghi vào tab "NhaGai",
 * từ thiệp nhà trai (h.haivan.website) ghi vào tab "NhaTrai".
 * Tab chưa có sẽ được tự tạo kèm dòng tiêu đề.
 *
 * Sau khi sửa script phải: Deploy → Manage deployments → ✏️ → Version: New version → Deploy
 * (URL giữ nguyên).
 */
var SHEET_BY_NGUON = { 'nha-gai': 'NhaGai', 'nha-trai': 'NhaTrai' };
var HEADER = ['Thời gian', 'Tên', 'Khách của', 'Lời chúc'];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var name = SHEET_BY_NGUON[data.nguon] || 'LoiChuc';
    var sheet = ss.getSheetByName(name) || ss.insertSheet(name);

    // Nếu sheet đang trống thì tự thêm dòng tiêu đề
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADER);
      sheet.getRange(1, 1, 1, HEADER.length).setFontWeight('bold');
    }

    sheet.appendRow([
      data.thoi_gian || new Date(),
      data.ten || '',
      data.khach_cua || '',
      data.loi_chuc || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', sheet: name }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
