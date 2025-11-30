"use client"

import { useState } from "react"
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Checkbox } from "@/components/ui"
import { ChevronLeft, ChevronRight, Eye, FileText, Filter, Search, X } from "lucide-react"

interface Order {
  id: string
  code: string
  client: string
  address: string
  date: string
  status: "Validée" | "Enregistrée" | "En attente"
}

const mockOrders: Order[] = [
  {
    id: "2473",
    code: "2473",
    client: "Matthias et Stéphanie GOUIGNARD",
    address: "49260 MAZÉ",
    date: "10/01/2023",
    status: "Validée"
  },
  {
    id: "2472",
    code: "2472", 
    client: "Jonathan et emmanuelle BONDT",
    address: "37190 Rivarennes",
    date: "28/02/2023",
    status: "Enregistrée"
  },
  {
    id: "2471",
    code: "2471",
    client: "christiane lebreton",
    address: "49100 TRELAZE",
    date: "03/03/2023",
    status: "Validée"
  },
  {
    id: "2470",
    code: "2470",
    client: "Didier & Catherine Jort & Magri",
    address: "56890 Meucon",
    date: "28/02/2023", 
    status: "Validée"
  },
  {
    id: "2469",
    code: "2469",
    client: "SAS BP INNOV NANTES",
    address: "44980 SAINTE LUCE SUR LOIRE",
    date: "03/08/2025",
    status: "Validée"
  }
]

const statusVariants = {
  "Validée": "default",
  "Enregistrée": "secondary", 
  "En attente": "outline"
} as const

export function ModernDataTable() {
  const [showAll, setShowAll] = useState(false)
  const [searchFilters, setSearchFilters] = useState({
    orderNumber: "",
    client: "",
    vendor: "",
    agency: "",
    status: "",
    sortBy: ""
  })
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [displayLimit, setDisplayLimit] = useState(20)

  const handleSelectAll = (checked: boolean) => {
    setSelectedRows(checked ? mockOrders.map(order => order.id) : [])
  }

  const handleSelectRow = (orderId: string, checked: boolean) => {
    setSelectedRows(prev => 
      checked 
        ? [...prev, orderId]
        : prev.filter(id => id !== orderId)
    )
  }

  const clearFilters = () => {
    setSearchFilters({
      orderNumber: "",
      client: "",
      vendor: "",
      agency: "",
      status: "",
      sortBy: ""
    })
    setShowAll(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Commandes</h1>
          <p className="text-sm text-muted-foreground">
            Liste de commandes
          </p>
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Nouvelle commande
        </Button>
      </div>

      {/* Notice */}
      <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
        <CardContent className="pt-4">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>REMARQUE :</strong> Toute nouvelle commande doit être convertie à partir d'un devis
          </p>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <Card>
        <CardHeader className="bg-muted/50">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Search className="h-5 w-5" />
              Recherche de commandes
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          {/* Selection Parameters */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="show-all" 
                checked={showAll}
                onCheckedChange={setShowAll}
              />
              <Label htmlFor="show-all" className="font-medium">
                Afficher tout
              </Label>
            </div>
            <p className="text-sm text-muted-foreground">
              Ou entrez vos critères de sélection puis cliquez sur Rechercher
            </p>
          </div>

          {/* Filter Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="order-number">N° commande</Label>
              <Input
                id="order-number"
                value={searchFilters.orderNumber}
                onChange={(e) => setSearchFilters(prev => ({...prev, orderNumber: e.target.value}))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="client">Client</Label>
              <Input
                id="client"
                value={searchFilters.client}
                onChange={(e) => setSearchFilters(prev => ({...prev, client: e.target.value}))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vendor">Vendeur</Label>
              <Input
                id="vendor"
                value={searchFilters.vendor}
                onChange={(e) => setSearchFilters(prev => ({...prev, vendor: e.target.value}))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="agency">Agence</Label>
              <Select value={searchFilters.agency} onValueChange={(value) => setSearchFilters(prev => ({...prev, agency: value}))}>
                <SelectValue placeholder="Sélectionner une agence" />
                <SelectItem value="nantes">Nantes</SelectItem>
                <SelectItem value="angers">Angers</SelectItem>
                <SelectItem value="tours">Tours</SelectItem>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Statut</Label>
              <Select value={searchFilters.status} onValueChange={(value) => setSearchFilters(prev => ({...prev, status: value}))}>
                <SelectValue placeholder="Sélectionner un statut" />
                <SelectItem value="validee">Validée</SelectItem>
                <SelectItem value="enregistree">Enregistrée</SelectItem>
                <SelectItem value="en-attente">En attente</SelectItem>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sort">Trier les données</Label>
              <Select value={searchFilters.sortBy} onValueChange={(value) => setSearchFilters(prev => ({...prev, sortBy: value}))}>
                <SelectValue placeholder="Trier par..." />
                <SelectItem value="date-asc">Date croissant</SelectItem>
                <SelectItem value="date-desc">Date décroissant</SelectItem>
                <SelectItem value="client">Client</SelectItem>
                <SelectItem value="status">Statut</SelectItem>
              </Select>
            </div>
          </div>

          {/* Display Limit and Search Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Label htmlFor="limit" className="text-sm">Nombre de lignes affichées</Label>
              <Select value={displayLimit.toString()} onValueChange={(value) => setDisplayLimit(parseInt(value))}>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </Select>
            </div>
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Rechercher
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Liste des commandes</CardTitle>
            <div className="text-sm text-muted-foreground">
              {mockOrders.length} enregistrements sélectionnés
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={selectedRows.length === mockOrders.length}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead>N° Code</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Date commande</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(order.id)}
                      onCheckedChange={(checked) => handleSelectRow(order.id, checked as boolean)}
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="link" className="h-auto p-0 font-medium text-blue-600">
                      {order.code}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order.client}</div>
                      <div className="text-sm text-muted-foreground">{order.address}</div>
                    </div>
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariants[order.status]}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between pt-4">
            <div className="text-sm text-muted-foreground">
              Affichage de 1 à {mockOrders.length} sur {mockOrders.length} entrées
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="h-4 w-4" />
                Précédent
              </Button>
              <Button variant="outline" size="sm" disabled>
                Suivant
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}