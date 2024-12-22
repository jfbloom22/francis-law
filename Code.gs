// Handle OPTIONS (preflight) requests
function doOptions(e) {
  return ContentService.createTextOutput()
    .setMimeType(ContentService.MimeType.TEXT)
    // Specifically allow only your domain
    .setHeader('Access-Control-Allow-Origin', 'https://www.francislawpractice.com')
    .setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type')
    .setHeader('Access-Control-Max-Age', '86400');
}

function doGet(e) {
  const params = e.parameter;
  const callback = params.callback;
  
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Save to spreadsheet
    sheet.appendRow([
      params.firstName,
      params.lastName,
      params.email,
      params.subject,
      params.message,
      params.timestamp
    ]);
    
    // Send email notification
    const recipientEmail = 'francislawpractice@gmail.com';
    const subject = `New Contact Form Submission: ${params.subject}`;
    const emailBody = `
      New contact form submission:
      
      Name: ${params.firstName} ${params.lastName}
      Email: ${params.email}
      Subject: ${params.subject}
      Message: ${params.message}
      Timestamp: ${params.timestamp}
    `;
    
    MailApp.sendEmail({
      to: recipientEmail,
      subject: subject,
      body: emailBody
    });

    // Return JSONP response
    return ContentService.createTextOutput(
      `${callback}({"result":"success"})`
    ).setMimeType(ContentService.MimeType.JAVASCRIPT);

  } catch (error) {
    // Return error in JSONP format
    return ContentService.createTextOutput(
      `${callback}({"result":"error","message":"${error.toString()}"})`
    ).setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
} 