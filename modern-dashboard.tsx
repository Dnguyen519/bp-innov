"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { 
  Bell, 
  Calendar, 
  ChevronRight, 
  Clock, 
  FileText, 
  Mail, 
  MessageSquare, 
  TrendingDown, 
  TrendingUp, 
  Users,
  AlertCircle,
  CheckCircle2,
  ExternalLink
} from "lucide-react"

interface NotificationCard {
  id: string
  title: string
  description: string
  count: number
  type: "info" | "warning" | "success" | "default"
  href: string
}

const notifications: NotificationCard[] = [
  {
    id: "messages",
    title: "Nouveaux messages",
    description: "Messages non lus",
    count: 0,
    type: "default",
    href: "/messages"
  },
  {
    id: "interventions",
    title: "Interventions en attente", 
    description: "Interventions à planifier",
    count: 0,
    type: "warning",
    href: "/interventions"
  },
  {
    id: "absences",
    title: "Demandes d'absence",
    description: "Demandes en attente de validation",
    count: 0,
    type: "info",
    href: "/absences"
  }
]

const quickStats = [
  {
    title: "Commandes du mois",
    value: "156",
    change: "+12%",
    trend: "up" as const,
    icon: FileText
  },
  {
    title: "Clients actifs",
    value: "2,847",
    change: "+5%", 
    trend: "up" as const,
    icon: Users
  },
  {
    title: "Interventions planifiées",
    value: "23",
    change: "-8%",
    trend: "down" as const,
    icon: Calendar
  },
  {
    title: "Devis en attente",
    value: "42",
    change: "+15%",
    trend: "up" as const,
    icon: Clock
  }
]

const recentActivity = [
  {
    id: "1",
    type: "order",
    title: "Nouvelle commande #2474",
    description: "Marie Dupont - Rénovation salle de bain",
    time: "Il y a 2h",
    status: "new"
  },
  {
    id: "2", 
    type: "intervention",
    title: "Intervention terminée",
    description: "Jean Martin - Installation fenêtres",
    time: "Il y a 4h",
    status: "completed"
  },
  {
    id: "3",
    type: "quote",
    title: "Devis approuvé #2471",
    description: "Sophie Laurent - Isolation combles",
    time: "Il y a 6h",
    status: "approved"
  },
  {
    id: "4",
    type: "message",
    title: "Nouveau message client",
    description: "Question sur planning intervention",
    time: "Il y a 8h",
    status: "pending"
  }
]

export function ModernDashboard() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Bienvenue dans votre espace de gestion BP Innov
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Aujourd'hui
          </Button>
          <Button size="sm">
            <FileText className="mr-2 h-4 w-4" />
            Nouveau devis
          </Button>
        </div>
      </div>

      {/* Notification Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {notifications.map((notification) => (
          <Card key={notification.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {notification.title}
              </CardTitle>
              <Badge 
                variant={notification.count > 0 ? "destructive" : "secondary"}
                className="ml-auto"
              >
                {notification.count}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground mb-3">
                {notification.description}
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-between h-8"
                disabled={notification.count === 0}
              >
                Voir tout
                <ChevronRight className="h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <IconComponent className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {stat.trend === "up" ? (
                    <TrendingUp className="mr-1 h-3 w-3 text-emerald-500" />
                  ) : (
                    <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                  )}
                  <span className={stat.trend === "up" ? "text-emerald-500" : "text-red-500"}>
                    {stat.change}
                  </span>
                  <span className="ml-1">par rapport au mois dernier</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Activity */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Activité récente
            </CardTitle>
            <CardDescription>
              Dernières actions et événements importants
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={activity.id}>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {activity.status === "completed" && (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    )}
                    {activity.status === "new" && (
                      <AlertCircle className="h-5 w-5 text-blue-500" />
                    )}
                    {activity.status === "approved" && (
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    )}
                    {activity.status === "pending" && (
                      <MessageSquare className="h-5 w-5 text-amber-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {activity.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.time}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
                {index < recentActivity.length - 1 && (
                  <Separator className="my-4" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Performance Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Performance du mois</CardTitle>
            <CardDescription>
              Indicateurs clés de performance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Objectif mensuel</span>
                <span className="font-medium">78%</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Satisfaction client</span>
                <span className="font-medium">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Délais respectés</span>
                <span className="font-medium">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <Separator />
            <Button variant="outline" className="w-full">
              Voir rapport détaillé
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Actions rapides</CardTitle>
          <CardDescription>
            Accès direct aux fonctionnalités les plus utilisées
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button variant="outline" className="h-auto flex-col space-y-2 p-4">
              <FileText className="h-5 w-5" />
              <span className="text-xs">Nouveau devis</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col space-y-2 p-4">
              <Users className="h-5 w-5" />
              <span className="text-xs">Ajouter client</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col space-y-2 p-4">
              <Calendar className="h-5 w-5" />
              <span className="text-xs">Planifier intervention</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col space-y-2 p-4">
              <Mail className="h-5 w-5" />
              <span className="text-xs">Envoyer facture</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}