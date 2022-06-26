import { DefaultUi, Player, Youtube } from '@vime/react'
import InfoRenderer from './InfoRenderer'

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from '../graphql/generated'



interface VideoPlayerProps {
   lessonSlug: string
}

export default function VideoPlayer(props: VideoPlayerProps) {
   const { data } = useGetLessonBySlugQuery(
      {
         variables: {
            slug: props.lessonSlug,
         },
      }
   )

   if (!data || !data.lesson) {
      return (
         <div className='flex flex-1 '>            
            <span className='text-3xl upercase flex font-bold justify-center'>carregando...</span>
         </div>
      )
   }

   return (
      <div className='flex-1'>
         <div className='bg-black flex justify-center'>
            <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
               <Player>
                  <Youtube videoId={data.lesson.videoId} />
                  <DefaultUi />
               </Player>
            </div>
         </div>
         <InfoRenderer
            title={data.lesson.title}
            description={data.lesson.description}
         
            teacherAvatar={
               data.lesson.teacher ? data.lesson.teacher.avatarURL : '#'}
            teacherName={
               data.lesson.teacher
                  ? data.lesson.teacher.name
                  : 'Professor não informado'
            }
            teacherBio={
               data.lesson.teacher
                  ? data.lesson.teacher.bio
                  : 'Professor não informado'
            }
         />
      </div>
   )
}
