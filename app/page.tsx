
import DropdownOptions from '@/components/DropdownOptions'
import InputBox from '@/components/InputBox'
import Button from '@/components/Buttons'
import SignInForm from '@/components/SignInForm'
import SignUpPage from './pagess/signup'
import SignUpForm from '@/components/SignUpForm'
export default function Home() {

  return (
   <section className='flex flex-col justify-center items-center my-10 '>
{/* //from flowbite */}
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">WeLcOmE To AbHiSeK QuIz</h1>
<section className='p-10 my-20 rounded-lg  w-[100%]'>

{/* Flowbite? */}
<InputBox/>

<DropdownOptions/>
<div className=" flex items-center justify-center">
<Button/>
</div>
<div className=" flex items-center justify-center p-10 my-10  ">
<SignUpForm/>
</div>

</section>
   </section>
  )
}
