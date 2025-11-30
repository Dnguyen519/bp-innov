"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ModernSidebarNav } from "./modern-sidebar-nav"
import { Button, Avatar, AvatarFallback, AvatarImage, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, Badge } from "@/components/ui"
import { Bell, LogOut, Settings, User } from "lucide-react"

interface ModernLayoutProps {
  children: ReactNode
  className?: string
}

export function ModernLayout({ children, className }: ModernLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <ModernSidebarNav />

      {/* Main Content Area */}
      <div className="md:pl-64">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center justify-between px-4 lg:px-6">
            {/* Left side - could contain breadcrumbs or page title on mobile */}
            <div className="flex items-center gap-2 md:hidden">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">BP</span>
              </div>
              <span className="font-semibold">BP Innov</span>
            </div>

            {/* Right side - notifications and user menu */}
            <div className="flex items-center gap-3 ml-auto">
              {/* Version indicator */}
              <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="outline" className="text-xs">
                  v2025.10.08
                </Badge>
              </div>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-4 w-4" />
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center"
                >
                  0
                </Badge>
              </Button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/avatar.jpg" alt="Manh Tam LY" />
                      <AvatarFallback>MT</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Manh Tam LY</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        admin@bpinnov.net
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Page d'accueil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Paramètres</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Se déconnecter</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className={cn("min-h-[calc(100vh-4rem)]", className)}>
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t bg-muted/50 px-4 py-4 lg:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>© 2025 BP Innov - Rénovation de l'habitat</span>
              <span>•</span>
              <a href="https://bpinnov.net" className="hover:text-foreground transition-colors">
                bpinnov.net
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span>Version DEV.2025.10.08</span>
              <span>•</span>
              <span>Développé par Tam</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

// Example usage with different page layouts
export function DashboardPage() {
  return (
    <ModernLayout>
      <div className="container mx-auto">
        {/* Dashboard content would go here */}
      </div>
    </ModernLayout>
  )
}

export function FullWidthPage({ children }: { children: ReactNode }) {
  return (
    <ModernLayout className="p-0">
      {children}
    </ModernLayout>
  )
}

export function ContainerPage({ children }: { children: ReactNode }) {
  return (
    <ModernLayout>
      <div className="container mx-auto py-6">
        {children}
      </div>
    </ModernLayout>
  )
}