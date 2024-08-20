import React from 'react'

export default function Login() {
  return (
    <div>
         <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
         
        <form class="mb-4" action="/" method="post">
          <div class="mb-4 md:w-full">
            <label for="email" class="block text-xs mb-1">Username or Email</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Username or Email"/>
          </div>
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-xs mb-1">Password</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password"/>
          </div>
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-xs mb-1">Phone</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Mobile Number"/>
          </div>
          <button class="bg-[#C0333D] hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 table mx-auto rounded">Conform Appointment</button>
        </form>
        <a class="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>
    </div>
    </div>
  )
}
