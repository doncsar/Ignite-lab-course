import {
   CaretRight,
   DiscordLogo,
   FileArrowDown,
   Lightning,
} from 'phosphor-react'

interface InfoRendererProps {
   title: string
   description: string
   teacherAvatar: string
   teacherBio: string
   teacherName: string
}

export default function InfoRenderer(props: InfoRendererProps) {
   return (
      <div className='p-8 max-w-[1100px] mx-auto'>
         <div className='flex items-start gap-16'>
            <div className='flex-1'>
               <h1 className='text-2xl font-bold'>{props.title}</h1>
               <p className='text-gray-200 mt-4 leading-relaxed'>
                  {props.description}
               </p>
               {props.teacherName && (
                  <div className='flex items-center gap-4 mt-6'>
                     <img
                        className='h-16 w-16 rounded-full border-2 border-green-500'
                        src={props.teacherAvatar}
                        alt='ProfessorPic'
                     />
                     <div className='leading-relaxed'>
                        <strong className='font-bold text-2xl block'>
                           {props.teacherName}
                        </strong>
                        <span className='text-gray-200 text-sm block'>
                           {props.teacherBio}
                        </span>
                     </div>
                  </div>
               )}
            </div>
            <div className='flex flex-col gap-4'>
               <a
                  href='#'
                  className='p-4 text-sm bg-green-300 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors'
               >
                  <DiscordLogo size={24} />
                  Comunidade Discord
               </a>
               <a
                  href='#'
                  className='p-4 text-sm border border-green-500 text-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-300 hover:text-gray-200 transition-colors'
               >
                  <Lightning size={24} />
                  Acesse o Desafio
               </a>
            </div>
         </div>
         <div className='gap-8 mt-20 grid grid-cols-2'>
            <a
               href='#'
               className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'
            >
               <div className='bg-green-700 h-full p-6 flex items-center'>
                  <FileArrowDown size={40} />
               </div>
               <div className='py-6 leading-relaxed'>
                  <strong className='text-2xl'>Material Complementar</strong>
                  <p className='text-sm text-gray-200 mt-2'>
                     Acesse o material complementar para acelerar seu
                     desenvolvimento
                  </p>
               </div>
               <div className='h-full p-6 flex items-center'>
                  <CaretRight size={24} />
               </div>
            </a>
            <a
               href='#'
               className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'
            >
               <div className='bg-green-700 h-full p-6 flex items-center'>
                  <FileArrowDown size={40} />
               </div>
               <div className='py-6 leading-relaxed'>
                  <strong className='text-2xl'>Walpapers Exclusivos</strong>
                  <p className='text-sm text-gray-200 mt-2'>
                     Baixe o Wallpaper exclusivo do Ignite Lab e personalize sua
                     Máquina
                  </p>
               </div>
               <div className='h-full p-6 flex items-center'>
                  <CaretRight size={24} />
               </div>
            </a>
         </div>
      </div>
   )
}
