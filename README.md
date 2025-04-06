Project – Skip Size Selector UI

A web-based React project that allows users to select skip sizes, view hiring periods, and dynamically display pricing based on their selection. This interface showcases core frontend concepts such as conditional rendering, API data handling, and user-driven UI updates.

Project Overview

• Users should be able to select a skip size from a dropdown list.
• Users should see a background image with overlaid information.
• Users should see detailed information after making a selection, including:
 - Skip size in yards
 - Hiring period in days
 - Price per week or a “contact us” message if no price is available
• Users should be able to interact with a Select → Continue / Back button flow.
• Data is retrieved dynamically from a public API.
• The layout is responsive and optimized for mobile and desktop.

Before you begin

Make sure you have the following tools installed:
	•	Node.js (Recommended: Latest LTS version)
	•	npm or yarn (Choose one)
	•	Git

Installation Steps

1. Clone the Repository

git clone https://github.com/your-username/skip-size-selector.git
cd skip-size-selector

2. Install Dependencies

Using npm:
npm install

Or using yarn:
yarn install

3. Running the Project Locally

To start the development server:
npm run dev
or
yarn dev

Then visit http://localhost:3000

4. Running Tests (Optional)

npm test
or
yarn test

5. Building the Project

npm run build
or
yarn build


Troubleshooting

If you encounter dependency issues:

rm -rf node_modules package-lock.json
npm cache clean –force
npm install

Make sure you’re using a compatible Node.js version (Latest LTS recommended).

Additional Notes

• Data is fetched from:
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

Contact

For questions, reach out to:
ioan_alexandru_tudor@yahoo.com
or open an issue on the GitHub repository.
