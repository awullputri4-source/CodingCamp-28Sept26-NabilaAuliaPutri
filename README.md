# Expense & Budget Visualizer

A mobile-friendly web application for tracking daily spending with real-time balance updates and visual spending distribution by category.

## 🚀 Quick Start

1. **Open the app**: Simply open `index.html` in your web browser
2. **No installation required** - it's a standalone HTML/CSS/JavaScript app
3. **Offline ready** - works completely offline with localStorage

## 📋 Features

### ✨ Add Transactions
- Enter item name, amount, and category (Food, Transport, Fun)
- Form validation ensures all fields are completed
- Amount must be greater than $0.00

### 💰 Track Balance
- Large, easy-to-read balance display at the top
- Updates automatically when transactions are added or removed
- Shows total spending across all categories

### 📊 Transaction History
- Scrollable list of all transactions
- Color-coded category badges
- Amount displayed in blue for easy scanning
- Delete individual transactions with one click

### 📈 Visual Chart
- Interactive pie/doughnut chart showing spending by category
- Color-coded to match category badges
- Hover over chart segments to see dollar amount and percentage
- Legend at the bottom with category names
- Updates in real-time as you add/remove transactions

## 📱 Mobile-Friendly Design

The app is optimized for all screen sizes:
- **Desktop**: Form on top, transactions and chart side-by-side
- **Tablet**: Single column layout with full-width sections
- **Mobile**: Touch-friendly buttons and optimized spacing

## 💾 Data Persistence

Your transactions are automatically saved to your browser's localStorage. This means:
- Transactions persist when you refresh the page
- No data is sent to any server
- Close and reopen the browser - your data is still there
- Clear browser data will remove all transactions

## 🛠️ Technical Details

- **HTML5** - Semantic markup for accessibility
- **CSS3** - Responsive design with Grid and Flexbox
- **Vanilla JavaScript** - No frameworks or build tools needed
- **Chart.js** - Popular charting library via CDN
- **localStorage API** - Client-side data persistence

## 📊 Category Examples

**Food**
- Coffee
- Lunch
- Groceries
- Dinner

**Transport**
- Gas
- Uber/Taxi
- Public transit
- Parking

**Fun**
- Movie tickets
- Games
- Entertainment
- Hobbies

## 🔒 Privacy

- All data is stored locally in your browser
- No data is sent to external servers
- No cookies or tracking
- No login required

## 🌐 Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

## 📝 How to Use

### Adding a Transaction
1. Fill in the "Item Name" field
2. Enter the "Amount" (e.g., 5.50)
3. Select a "Category" from the dropdown
4. Click "Add Transaction"
5. The form resets and your transaction appears in the list

### Deleting a Transaction
- Click the red "Delete" button next to any transaction
- The balance and chart update automatically

### Understanding the Chart
- Each colored slice represents spending in that category
- The larger the slice, the more you've spent in that category
- Hover over a slice to see the exact amount and percentage

## 💡 Tips

- **Frequent categories**: Choose from Food, Transport, or Fun based on your spending habits
- **Item descriptions**: Be specific with item names to track spending better
- **Regular review**: Check the chart weekly to see where most of your money goes
- **Budget planning**: Use the percentages to plan your budget by category

## 🐛 Troubleshooting

**Chart not showing?**
- Ensure Chart.js library is loaded (requires internet connection)
- Check browser console for errors

**Transactions disappeared?**
- They might have been cleared if you cleared browser data/cache
- Check if you're using a private/incognito window

**Can't add transaction?**
- Make sure all fields are filled in
- Amount must be greater than 0
- Category must be selected from the dropdown

## 📧 Support

For issues or suggestions, refer to the TEST_REPORT.md for detailed feature documentation.

---

**Version**: 1.0  
**Status**: Ready for use  
**Last Updated**: October 2026
