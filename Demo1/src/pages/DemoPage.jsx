import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import '../index.css';

export default function DemoPage() {
  const [useClientId, setUseClientId] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login submitted')
  }

  return (
    <div className="min-h-screen bg-[#D6BB6F] flex items-center justify-center pt-[106.5px] pb-[120.5px] px-[20px]">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-[480px] flex flex-col justify-between h-full">
        <div className="flex justify-center mb-6 w-42 h-17">
          <img src="/public/Logo.svg" alt="SSF Khazana Logo" className="h-15 w-15" />
        </div>
        <h1 className="text-[#1F1F1F] text-center font-roc-grotesk text-[32px] font-bold leading-normal tracking-[-0.64px] self-stretch">Log in to your account.</h1>
        <p className="text-[#5C5C5C] text-center font-roc-grotesk text-[16px] font-normal leading-[168%] tracking-[0.24px] self-stretch mb-6">
          Welcome to SSF Khazana, Please put your login credentials below to start investing and earning.
        </p>

        <div className="rounded-md border border-[#F0F0F0] bg-[#FAFAFA] flex items-center p-2 mb-7">
          <button
            className={`flex-1 p-[14px] px-[24px] justify-center items-center rounded-l border border-[#EAEAEA] ${useClientId ? 'bg-gray-100 text-[#1A1B21]' : 'bg-white text-[#1A1B21]'} text-center leading-normal font-roc-grotesk text-[14px] font-normal font-medium`}
            onClick={() => setUseClientId(true)}
          >
            Use Client ID
          </button>
          <button
            className={`flex-1 p-[14px] px-[24px] justify-center items-center rounded-r border border-[#EAEAEA] ${!useClientId ? 'bg-gray-100 text-[#1A1B21]' : 'bg-white text-[#1A1B21]'} text-center leading-normal font-roc-grotesk text-[14px] font-normal font-medium`}
            onClick={() => setUseClientId(false)}
          >
            Use Email ID
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-900 text-xs font-medium leading-5 opacity-80" htmlFor="identifier">
              {useClientId ? 'Your Client ID' : 'Your Email'}
            </label>
            <input
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="identifier"
              type={useClientId ? "text" : "email"}
              placeholder={useClientId ? "Enter your Client ID" : "Enter your Email"}
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-900 text-xs font-medium leading-5 opacity-80" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash className="h-5 w-5 text-gray-500" /> : <FaEye className="h-5 w-5 text-gray-500" />}
              </button>
            </div>
            <div className="flex justify-end mt-2">
              <a href="" className="text-sm text-[#D4B96B] hover:underline">Forgot password?</a>
            </div>
          </div>
          <button
            className="mb-[28px] w-full text-white bg-[#D4B96B] hover:bg-[#C1A75E] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="mb-[16px] text-sm text-gray-600 text-center mt-6">
          Don't have an account? <a href="#" className="text-[#D6BB6F] hover:underline">Create account</a>
        </p>

        <div className="mt-6 mb-[40px]">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-[24px] mb-[24px]">
            <div>
              <a href="#" className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-500 hover:bg-gray-50">
                <img className="h-5 w-5 mr-2" src="/public/Google logo.svg" alt="Google logo" />
                <span className="text-[#1C1E2C] font-sans text-[16px] font-semibold leading-normal">Google</span>
              </a>
            </div>         
            <div>
              <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <img className="h-5 w-5" src="/public/Facebook logo.svg" alt="Facebook logo" />
                <span className="text-[#1C1E2C] font-sans text-[16px] font-semibold leading-normal">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}