import { createFileRoute } from '@tanstack/react-router'
import DetailsPage from '../pages/record_details'

export const Route = createFileRoute('/records/$dataId/$recordId')({
  component: DetailsPage,
})
