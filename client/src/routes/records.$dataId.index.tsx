import { createFileRoute } from '@tanstack/react-router'
import DashboardPage from '../pages/records'

export const Route = createFileRoute('/records/$dataId/')({
  component: DashboardPage,
})

