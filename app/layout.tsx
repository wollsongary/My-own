import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coupon Deal - Find the Best Deals and Coupons',
  description: 'Discover and share the best deals, discounts, and coupons online. Save money on your favorite brands and products.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-primary-600">
                  CouponDeal
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/search" className="text-gray-600 hover:text-primary-600">Search</a>
                <a href="/categories" className="text-gray-600 hover:text-primary-600">Categories</a>
                <a href="/login" className="text-gray-600 hover:text-primary-600">Login</a>
                <a href="/signup" className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
                  Sign Up
                </a>
              </div>
            </nav>
          </header>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">About Us</h3>
                  <p className="mt-4 text-gray-600">
                    Find and share the best deals and coupons online.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
                  <ul className="mt-4 space-y-2">
                    <li><a href="/about" className="text-gray-600 hover:text-primary-600">About</a></li>
                    <li><a href="/contact" className="text-gray-600 hover:text-primary-600">Contact</a></li>
                    <li><a href="/privacy" className="text-gray-600 hover:text-primary-600">Privacy Policy</a></li>
                    <li><a href="/terms" className="text-gray-600 hover:text-primary-600">Terms of Service</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
                  <ul className="mt-4 space-y-2">
                    <li><a href="/category/electronics" className="text-gray-600 hover:text-primary-600">Electronics</a></li>
                    <li><a href="/category/fashion" className="text-gray-600 hover:text-primary-600">Fashion</a></li>
                    <li><a href="/category/home" className="text-gray-600 hover:text-primary-600">Home & Garden</a></li>
                    <li><a href="/category/food" className="text-gray-600 hover:text-primary-600">Food & Dining</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
                  <p className="mt-4 text-gray-600">
                    Subscribe to get the latest deals and coupons.
                  </p>
                  <form className="mt-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <button
                      type="submit"
                      className="mt-2 w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} CouponDeal. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 