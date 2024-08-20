import React from 'react'
import ReactFaq from '../Reactfaq'
import { MdCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { questions } from '../FaqItem';

export default function page() {
  return (
    <div>
       <div className='text-italic mx-auto max-w-[1170px] bg-[#f9f8fd] p-2'>
        <p className='text-slate-500'>Home Our/ Specialists Reconstructive / Urology Hypospadias / Surgery and Treatment</p>
       </div>

       <section className='w-[100%]'>
        <div className='mx-auto max-w-[1170px] grid grid-cols-[60%_auto]'>
           <div>
                 <h1 className='text-red-800 font-bold text-[30px] mt-5 pt-3'>Best Hypospadias Surgery Hospital in Delhi</h1>
                 <div className='mt-5'>
                    <img src="https://scihospital.com/public/assets/images/banner/9.png" alt="" />
                 </div>
                 <div>
                    <p className='pt-4'>Hypospadias is a medical condition when the meatus (hole) is not present at the tip of a penis. This is a common birth defect in up to one in every 200 boys.</p>
                    <p className='pt-4'>The meatus is usually present near the end (distal position) of a penis. In some people, it may be found in the center of the penile shaft to the penis’ base or within the scrotum (at the proximal position). This can only be treated with hypospadias surgery</p>
                    <p className='pt-4'>More than 80% of boys with this medical problem have distal hypospadias. On the other hand, only 15% of cases are of the “chordee” condition, where the penis curves slightly downward. When the meatus (hole) opens down the shaft, its curvature is found in more than 50% of the patients. Treatment is possible by surgery. Hypospadias surgery cost depends on several factors such as location, severity, etc. The same applies to hypospadias surgery cost in Delhi.</p>
                 </div>
                 <div>
                    <h5 className='text-red-800 font-bold text-[30px] mt-5 pt-3'>Symptoms of Hypospadias</h5>
                    <p className='pt-4'>In hypospadias, the meatus opening of the urethra is found on the penis’ underside instead of its tip. However, in many cases, this opening of the urethra is also found within the penis’ head. Less than often, this meatus opening is also found at the center or base of a penis. Rarely, this opening is beneath or within the scrotum.</p>
                    <p className='font-bold pt-4'>The common signs and symptoms of hypospadias are:</p>
                 </div>
                 <div>
                    <h5 className='text-red-800 font-bold text-[30px] mt-5 pt-3'>Causes of Hypospadias</h5>
                    <p className='pt-4'>Hypospadias is a congenital medical condition. This means it occurs when the baby is developing in the mother’s womb. When the fetus begins to grow, the tissue on the penis’ underside is not completely closed, hence shortening the passageway. In most cases, the foreskin of the penis also covers the penis glans or tip. This results in extra foreskin formation on the top of the penis and not the underside.</p>
                    <p className='mt-5'>Hypospadias has nothing to do with the negligence of parents before or during pregnancy. According to the researchers, however, this condition is known to run in families. Hypospadias is more common in boys whose father or male sibling also had the same condition and can be treated by hypospadias treatment.</p>
                 </div>


                 <div>
                    <h5 className='text-red-800 font-bold text-[30px] mt-5 pt-3'>What Happens if Hypospadias is Not Treated?</h5>
                    <p className='pt-4'>The risk factors of this condition are associated with the following:</p>
                    <p className='mt-5'>Family history: It occurs more often in infants with a usual family history of hypospadias.</p>
                    <p>Genetics: Some gene variations can also play a major role in hormonal disruption that further stimulates the development of male genitals.</p>
                    <p>Maternal age over 35: As per some studies, there can be a higher risk of hypospadias in male infants born to women who are older than 35 years.</p>
                    <p>Exposure to certain substances when pregnant: There are certain speculations associated with hypospadias and the mother’s exposure to some hormones or compounds like industrial chemicals or pesticides.</p>
                 </div>

                 <div>
                    <h5 className='text-red-800 font-bold text-[30px] mt-5 pt-3'>Hypospadias Surgery Options</h5>
                    <p className='pt-4'>Hypospadias can be treated only with surgery. It is recommended to perform these operations between the age of 6 and 15 months after birth when the psychological effects of genital surgery are minimal.</p>
                    <p className='mt-5'>At SCI Hospital, hypospadias surgery is done on an outpatient basis. This also minimizes the separation of the child from the parents while making the procedure quite affordable. Usually, we perform the surgery within one to three hours at our outpatient surgery center.</p>
                 </div>
           </div>

           <div className='mt-10'>
           <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <span class="block w-full text-xl uppercase font-bold mb-4 text-[#C0333D]">Consult Now</span>      
        <form class="mb-4" action="/" method="post">
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-xs mb-1">Username or Email</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Username or Email"/>
          </div>
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-xs mb-1">Phone</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Enter your mobile"/>
          </div>
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-xs mb-1">Password</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password"/>
          </div>
          <button class="bg-[#C0333D] hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Ask Now</button>
        </form>
        <a class="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>

       
        </div>
        <div className='mt-10 mx-4'>
         <h5 className='font-bold mb-4 text-[#C0333D] text-[20px]'>Our Services</h5>
          <ReactFaq/>

        </div>
        <div className='bg-[#C0333D] p-4 rounded-xl mx-4 mt-5'>
           <div className='text-white  mb-3'>
            <h5 className='font-bold'>Contact Info</h5>
             <div className='text-white flex gap-2 mt-3'>
             <p className='text-[25px]'><MdCall /></p>
              <p>+91-2456889583322 (For Appointment) 0093411-048553- (For General Queries)</p>
             </div>
             <div className='text-white flex gap-2 mt-3'>
             <p className='text-[25px]'><MdLocationPin /></p>
              <p>M 4, Near M Block Market, Greater Kailash-1, New Delhi, 110048</p>
             </div>
           </div>

        </div>
           </div>
          
           
        </div>

       </section>
       <section className='w-[100%]'>
         <div className=' mx-auto max-w-[1170px] flex gap-4'>
            <div className=' w-[350px] bg-slate-50 rounded-2xl p-4 mt-10'>
               <div className='text-center text-[14px]'>
                 <img src="https://scihospital.com/public/assets/images/doctors/dr-gautam-banga-new.png" alt=""  className='w-[150px] mx-[30%] mb-2'/>
                 <h5 className='font-bold text-center'>Dr. Gautam Banga</h5>
                 <p className='p-4'>MBBS, MS, M.Ch Reconstructive Urologist & <br /> Andrologist</p>
                 <p>18 years of experience</p>
                  <button className='bg-[#C0333D] mt-3 text-[14px] text-center text-white p-3 rounded-[30px]  w-[150px]'>Call Doctor</button>
               </div>
            </div>
            <div className=' w-[350px] bg-slate-50 rounded-2xl p-4 mt-10'>
               <div className='text-center text-[14px]'>
                 <img src="https://scihospital.com/public/assets/images/doctors/Dr-Vishal-Dutt-Gour-1.png" alt=""  className='w-[150px] mx-[30%] mb-2'/>
                 <h5 className='font-bold text-center'>Dr. Vishal Dutt Gour</h5>
                 <p className='p-4'>MBBS, MS, M.Ch Urologist and Andrologistt</p>
               
                  <button className='bg-[#C0333D] mt-3 text-[14px] text-center text-white p-3 rounded-[30px] w-[150px]'>Call Doctor</button>
               </div>
            </div>

         </div>

       </section>
       <section className='w-[100%]'>

         <div className='mx-auto max-w-[1170px] grid grid-cols-2'>
      

         </div>

       </section>
    </div>
  )
}
