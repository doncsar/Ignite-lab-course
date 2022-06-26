import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { IgniteLogo } from '../Components/IgniteLogo'
import { useCreateSubscriberMutation } from '../graphql/generated'


export default function Home() {
   const navigate = useNavigate()

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')

   const [createSubscriber, {loading}] = useCreateSubscriberMutation()
   async function handleSubscription(event: FormEvent) {
      event.preventDefault()
      await createSubscriber({
         variables: {
            name,
            email,
         },
      })
      navigate('/event')
   }

   return (
      <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
         <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto'>
            <div className='max-w-[640px] '>
               <IgniteLogo />
               <h1 className='mt-12 text-[2.5rem] leading-tight'>
                  Construa uma{' '}
                  <strong className='text-green-300'>
                     {' '}
                     aplicação completa
                  </strong>
                  , do zero, com{' '}
                  <strong className='text-green-300'>ReactJS</strong>
               </h1>
               <p className='mt-8 text-gray-200 leading-relaxed'>
                  Em apenas uma semana você vai dominar na prática todas as
                  tecnologias mais utilizadas e com alta demanada para acessar
                  as melhores oportunidades do mercado
               </p>
            </div>
            <div className='p-8 bg-gray-700 border borger-gray-500 rounded'>
               <strong className='text-2xl mb-6 block'>Inscreva-se aqui</strong>
               <form
                  onSubmit={handleSubscription}
                  className='flex flex-col gap-2  min-w-[320px] w-full'
               >
                  <input
                     className='bg-gray-900 rounded px-5 h-14'
                     type='text'
                     placeholder='Seu Nome'
                     onChange={(e) => setName(e.target.value)}
                  />
                  <input
                     className='bg-gray-900 rounded px-5 h-14'
                     type='email'
                     placeholder='Seui Email'
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                     type='submit'
                     disabled={loading}
                     className='mt-4 bg-green-500 uppercase py-4 rounded font-bold hover:bg-green-700 transition-colors disabled:opacity-50'
                  >
                     Garantir vaga
                  </button>
               </form>
            </div>
         </div>
         <img
            src='/src/Assets/decor-coding.png'
            className='mt-10'
            alt=' Code Mockup'
         />
      </div>
   )
}
