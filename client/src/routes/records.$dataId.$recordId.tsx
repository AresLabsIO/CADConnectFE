import { createFileRoute } from '@tanstack/react-router'
import RecordDetailsPage from '../pages/record_details'

export const Route = createFileRoute('/records/$dataId/$recordId')({
  component: RecordDetailsPage,
})
