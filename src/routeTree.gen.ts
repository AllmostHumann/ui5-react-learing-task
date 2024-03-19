/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const HomeLazyImport = createFileRoute('/home')()
const DetailLazyImport = createFileRoute('/detail')()
const AboutLazyImport = createFileRoute('/about')()

// Create/Update Routes

const HomeLazyRoute = HomeLazyImport.update({
  path: '/home',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/home.lazy').then((d) => d.Route))

const DetailLazyRoute = DetailLazyImport.update({
  path: '/detail',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/detail.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/detail': {
      preLoaderRoute: typeof DetailLazyImport
      parentRoute: typeof rootRoute
    }
    '/home': {
      preLoaderRoute: typeof HomeLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  AboutLazyRoute,
  DetailLazyRoute,
  HomeLazyRoute,
])

/* prettier-ignore-end */
