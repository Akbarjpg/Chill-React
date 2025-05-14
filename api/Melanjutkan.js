import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'db.json');
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  res.status(200).json(jsonData.Melanjutkan || []);
}
