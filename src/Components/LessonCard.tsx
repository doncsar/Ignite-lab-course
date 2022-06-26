import { CheckCircle, Lock } from 'phosphor-react'
import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom'

interface LessonsProps {
  title: string;
  slug: string;
  avaliableAt: Date;
  type: 'live' | 'class'
}

export default function LessonCard(props: LessonsProps) {
  const isLessonAvaliable = isPast(props.avaliableAt)
  const avaliabeDateFormatted = format(
     props.avaliableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
       locale: ptBR,
     }
  )

  return (
     <Link to={`/event/lesson/${props.slug}`} className='group'>
        <span className='text-gray-300 '>{avaliabeDateFormatted}</span>
        <div className='rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 group-active:bg-green-500'>
           <header className='flex items-center justify-between'>
              {isLessonAvaliable ? (
                 <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
                    <CheckCircle size={20} />
                    Conterudo Liberado
                 </span>
              ) : (
                 <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
                    <Lock size={20} />
                    Em breve
                 </span>
              )}
              <span className='text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold'>
                 {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
              </span>
           </header>
           <strong className='text-gray-200 mt-5 block'>{props.title}</strong>
        </div>
     </Link>
  )
}
