import Logs from '@/components/Logs'
import Navbar from '@/components/Navbar'
import { NewLog } from '@/components/NewLog'
import { Calendar } from '@/components/ui/calendar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="px-5 space-y-10 ">
      <Navbar />
      <NewLog />
      <Calendar />
      <Logs />
    </main>
  )
}
