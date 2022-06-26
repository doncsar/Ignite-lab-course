import { useParams } from 'react-router-dom'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import VideoPlayer from '../Components/VideoPlayer'

export default function Event() {
   const { slug } = useParams<{slug: string}>()

   return (
      <div className='flex flex-col min-h-screen'>
         <Header />
         <main className='flex flex-1'>
            {slug ? (
               <VideoPlayer lessonSlug={slug} />
            ) : (
               <VideoPlayer lessonSlug='abertura-do-evento-lgnite-lab' />
            )}
            <Sidebar />
         </main>
      </div>
   )
}
