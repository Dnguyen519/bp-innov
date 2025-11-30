"use client"

import { useState } from "react"
import { Badge, Button } from "@/components/ui"
import { cn } from "@/lib/utils"
import {
  Building2,
  Calendar,
  Car,
  ClipboardList,
  FileText,
  HelpCircle,
  Home,
  Mail,
  Menu,
  MessageSquare,
  Package,
  Settings,
  TrendingUp,
  Users,
  Wrench,
  X
} from "lucide-react"

interface NavItem {
  title: string
  icon: React.ComponentType<{ className?: string }>
  badge?: number
  href: string
}

const navItems: NavItem[] = [
  { title: "Dashboard", icon: Home, href: "/" },
  { title: "Client", icon: Users, href: "/clients" },
  { title: "Devis", icon: FileText, href: "/quotes" },
  { title: "Prospect", icon: TrendingUp, href: "/prospects" },
  { title: "Appel clientèle", icon: MessageSquare, href: "/customer-calls" },
  { title: "Commande", icon: ClipboardList, href: "/orders" },
  { title: "Fiche de chantier", icon: Building2, href: "/job-sheets" },
  { title: "Planification", icon: Calendar, href: "/planning" },
  { title: "Intervention", icon: Wrench, href: "/interventions" },
  { title: "Facturation", icon: FileText, href: "/billing" },
  { title: "Écritures comptables", icon: FileText, href: "/accounting" },
  { title: "Produit", icon: Package, href: "/products" },
  { title: "Agence", icon: Building2, href: "/agencies" },
  { title: "Personnel", icon: Users, href: "/staff" },
  { title: "Messagerie", icon: Mail, badge: 0, href: "/messages" },
  { title: "Absence", icon: Calendar, href: "/absences" },
  { title: "Pointage", icon: Settings, href: "/time-tracking" },
  { title: "Requête", icon: MessageSquare, href: "/requests" },
  { title: "Documentation", icon: FileText, href: "/docs" },
  { title: "Véhicule", icon: Car, href: "/vehicles" },
  { title: "FAQ", icon: HelpCircle, href: "/faq" },
  { title: "Indicateurs de performance", icon: TrendingUp, href: "/analytics" }
]

export function ModernSidebarNav() {
  const [isOpen, setIsOpen] = useState(false)

  const NavContent = () => (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 p-6 border-b">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
          <span className="text-white font-bold text-sm">BP</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm">BP Innov</span>
          <span className="text-xs text-muted-foreground">Rénovation de l'habitat</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  "w-full justify-start h-10 px-3 font-normal",
                  "hover:bg-accent hover:text-accent-foreground",
                  "focus-visible:bg-accent focus-visible:text-accent-foreground"
                )}
              >
                <IconComponent className="mr-3 h-4 w-4 flex-shrink-0" />
                <span className="truncate text-left">{item.title}</span>
                {item.badge !== undefined && (
                  <Badge 
                    variant={item.badge > 0 ? "default" : "secondary"}
                    className="ml-auto h-5 px-1.5 text-xs"
                  >
                    {item.badge}
                  </Badge>
                )}
              </Button>
            )
          })}
        </div>
      </nav>

      <div className="border-t p-4">
        <Button variant="outline" className="w-full justify-start h-10">
          <Settings className="mr-3 h-4 w-4" />
          Paramètres
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Toggle */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
          <div className="fixed inset-y-0 left-0 w-80 bg-background" onClick={(e) => e.stopPropagation()}>
            <NavContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col min-h-0 border-r bg-card">
          <NavContent />
        </div>
      </div>
    </>
  )
}