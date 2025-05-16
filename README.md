# Ice Cream Builder 🍦

A modern, interactive web application for building custom ice cream orders. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Interactive Builder**: Create custom ice cream orders by selecting flavors, sauces, and nuts
- 💰 **Real-time Pricing**: See the total price update as you add or remove items
- 📱 **Responsive Design**: Works seamlessly on both desktop and mobile devices
- 🌙 **Dark Mode Support**: Automatic dark mode detection and manual toggle
- 📋 **Order History**: View your past orders with detailed breakdowns
- 🎯 **Type Safety**: Built with TypeScript for better development experience

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks

## Project Structure

```
ice-cream/
├── app/                 # Next.js app router pages
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── MenuItemCard.tsx
│   └── OrderHistoryModal.tsx
├── hooks/              # Custom React hooks
│   ├── useOrder.ts
│   └── useOrderManager.ts
├── types/              # TypeScript type definitions
│   └── menu.ts
└── public/             # Static assets
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ice-cream.git
   cd ice-cream
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Usage

1. **Building an Order**
   - Select flavors from the available options
   - Add sauces to your ice cream
   - Choose nuts as toppings
   - See the total price update in real-time

2. **Managing Orders**
   - Click the basket icon to view order history
   - Add orders to your basket
   - Cancel orders if needed
   - View detailed breakdowns of past orders

## Development

### Key Components

- `MenuItemCard`: Displays individual menu items with add/remove functionality
- `OrderHistoryModal`: Shows order history with detailed breakdowns
- `useOrderManager`: Custom hook for managing order state and operations

### Styling

The project uses Tailwind CSS for styling with a custom color scheme:
- Primary: Orange (#f97316)
- Secondary: Gray (#6b7280)
- Success: Green (#22c55e)
- Danger: Red (#ef4444)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons provided by [Lucide Icons](https://lucide.dev)
- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
