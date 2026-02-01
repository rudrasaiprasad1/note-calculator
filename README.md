💰 ₹500 Note Volume Calculator (React + TypeScript)

A simple React (TSX) application that calculates the physical volume of ₹500 currency notes and determines how many cash bags are required to store them based on predefined volume constraints.

The app visually represents:

Full cash bags

Remaining ₹500 notes

A warning when no extra notes are left

🚀 Features

✅ Select ₹500 denomination (extendable)

🔢 Enter number of notes

📐 Calculates total volume in mm³

🎒 Determines number of full cash bags required

🧾 Displays remaining notes visually

🔴 Shows warning text when 0 notes are left

⚛️ Built using React + TypeScript (TSX)

🎨 Clean and minimal UI

📏 Volume Rules Used
Item	Volume (mm³)
₹500 Note	1,089 mm³
Cash Bag Capacity	16,200,000 mm³
🧠 Calculation Logic
Total Volume = Number of Notes × 1089

Full Bags = floor(Total Volume ÷ 16,200,000)

Remaining Volume = Total Volume % 16,200,000

Remaining Notes = floor(Remaining Volume ÷ 1089)

🖼️ Visual Output Behavior

📦 Displays one bag image per full bag

💵 Displays remaining ₹500 note images

🔴 If remaining notes = 0, shows:

“0 notes left — bag is enough for this number of notes.”

🛠️ Tech Stack

React.js

TypeScript

CSS / Tailwind CSS (optional)

Client-side only logic

📂 Project Structure (Example)
src/
├── components/
│   └── Rs500VolumeCalculator.tsx
├── public/
│   ├── bag.png
│   └── 500-note.png
└── README.md

▶️ How to Run Locally
npm install
npm run dev


or (for CRA):

npm start


Then open:
http://localhost:3000

🔧 Customization Ideas

➕ Add ₹100 / ₹200 / ₹2000 denominations

📱 Make it mobile-first

🎞️ Animate bag filling

📊 Show exact remaining volume

🧮 Auto-calculate without button click

⚠️ Disclaimer

This project is for educational and visualization purposes only.
The note volume values are assumed for demonstration and may not represent real-world currency dimensions.

👨‍💻 Author

Saiprasad
React & TypeScript Developer
