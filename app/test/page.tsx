import { Button, Card, CardContent, CardHeader, CardTitle, Badge } from '../../components/ui'

export default function TestPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Styling Test Page</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Test Card with Styling</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              This card should have proper styling with background, borders, and spacing.
            </p>
            
            <div className="flex gap-3">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
            
            <div className="flex gap-2">
              <Badge>Default Badge</Badge>
              <Badge variant="secondary">Secondary Badge</Badge>
              <Badge variant="destructive">Destructive Badge</Badge>
            </div>
            
            <div className="p-4 border rounded-md bg-muted">
              <p>This is a muted background section with border and padding.</p>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4">
              <h3 className="font-semibold text-green-800">Green Card</h3>
              <p className="text-green-600 text-sm">With custom colors</p>
            </CardContent>
          </Card>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h3 className="font-semibold text-blue-800">Blue Card</h3>
              <p className="text-blue-600 text-sm">With custom colors</p>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-4">
              <h3 className="font-semibold text-purple-800">Purple Card</h3>
              <p className="text-purple-600 text-sm">With custom colors</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}