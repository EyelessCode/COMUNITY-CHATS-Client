"use client"

import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router"
import UsersPage from "./UserPage"
import NewUserPage from "./NewUser"
import { UsersProvider } from "@/contexts/UserContext"


const rootRoute = createRootRoute({
  component: () => (
    <UsersProvider>
      <div className="p-8 bg-gray-100 min-h-screen">
        <Outlet />
      </div>
    </UsersProvider>
  ),
})

const usersRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: UsersPage,
})

const newUserRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/new",
    component: NewUserPage,
})

const routeTree = rootRoute.addChildren([
    usersRoute,
    newUserRoute,
])

const router = createRouter({ routeTree })

export default function HomePage() {
    return <RouterProvider router={router} />
}
