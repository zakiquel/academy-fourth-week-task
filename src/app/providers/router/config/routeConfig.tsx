import { type RouteProps } from 'react-router-dom'

import { CourseDetailsPage } from "@/pages/CourseDetailsPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { AppRoutes, getRouteCourseDetails, getRouteMain } from '@/shared/const/router'

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />
  },
  [AppRoutes.COURSE_DETAILS]: {
    path: getRouteCourseDetails(),
    element: <CourseDetailsPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />
  }
}
