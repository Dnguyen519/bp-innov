"use client"

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui'
import { Button } from '../../components/ui'

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">BP Innov - Modern Design Variations</h1>
        <p className="text-lg text-gray-600 mb-8">
          Modern CMS design variations using shadcn/ui components
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Dashboard Variation */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-green-700">Modern Dashboard</CardTitle>
              <CardDescription>
                Clean dashboard with notification cards, quick stats, and activity feed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="bg-green-50 p-2 rounded text-xs">
                  ✅ Notification cards with badges
                </div>
                <div className="bg-green-50 p-2 rounded text-xs">
                  ✅ Performance metrics with progress bars
                </div>
                <div className="bg-green-50 p-2 rounded text-xs">
                  ✅ Recent activity feed
                </div>
                <div className="bg-green-50 p-2 rounded text-xs">
                  ✅ Quick action buttons
                </div>
              </div>
              <Link href="/">
                <Button className="w-full">
                  View Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Data Table Variation */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-blue-700">Advanced Data Table</CardTitle>
              <CardDescription>
                Sophisticated table with filtering, search, and data management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="bg-blue-50 p-2 rounded text-xs">
                  ✅ Advanced search & filters
                </div>
                <div className="bg-blue-50 p-2 rounded text-xs">
                  ✅ Status badges with color coding
                </div>
                <div className="bg-blue-50 p-2 rounded text-xs">
                  ✅ Interactive checkboxes & selection
                </div>
                <div className="bg-blue-50 p-2 rounded text-xs">
                  ✅ Responsive table design
                </div>
              </div>
              <Link href="/commandes">
                <Button className="w-full">
                  View Data Table
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Navigation Variation */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-purple-700">Responsive Navigation</CardTitle>
              <CardDescription>
                Modern sidebar with mobile-responsive design and branding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="bg-purple-50 p-2 rounded text-xs">
                  ✅ Collapsible sidebar navigation
                </div>
                <div className="bg-purple-50 p-2 rounded text-xs">
                  ✅ Mobile-first responsive design
                </div>
                <div className="bg-purple-50 p-2 rounded text-xs">
                  ✅ BP Innov branding integration
                </div>
                <div className="bg-purple-50 p-2 rounded text-xs">
                  ✅ Icon system with Lucide React
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Visible on dashboard and table pages
              </p>
            </CardContent>
          </Card>

          {/* Design System */}
          <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-gray-700">Design System Features</CardTitle>
              <CardDescription>
                Modern component library based on shadcn/ui with BP Innov branding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-green-700">Visual Elements</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Card-based layouts</li>
                    <li>• Color-coded status indicators</li>
                    <li>• Consistent spacing & typography</li>
                    <li>• Shadow depth for hierarchy</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-blue-700">Interactive Components</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Modern buttons with variants</li>
                    <li>• Advanced form controls</li>
                    <li>• Progress indicators</li>
                    <li>• Hover & focus states</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-purple-700">Technical Features</h4>
                  <ul className="text-sm space-y-1">
                    <li>• TypeScript for type safety</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Mobile-first responsive</li>
                    <li>• Accessibility ready</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Links */}
        <div className="mt-8 p-6 bg-white rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/">
              <Button variant="outline">Dashboard Home</Button>
            </Link>
            <Link href="/commandes">
              <Button variant="outline">Orders Management</Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => window.open('https://github.com/Dnguyen519/bp-innov', '_blank')}
            >
              View Source Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}