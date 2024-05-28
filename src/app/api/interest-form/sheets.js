import { google } from 'googleapis';

const gsheets = google.sheets('v4');

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = process.env.SHEET_ID;
const SHEET_NAME = process.env.SHEET_NAME;

const authClient = new google.auth.GoogleAuth({
  scopes: SCOPES,
});
google.options({ auth: authClient });

export async function appendRow(row) {
  const resource = {
    values: [row],
  };
  // const auth = await getAuthToken()
  const res = await gsheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: SHEET_NAME,
    valueInputOption: 'USER_ENTERED',
    resource,
  });
  return res;
}