import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'


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
    <div className="min-h-screen bg-[#D6BB6F] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-[480px]">
        <div className="flex justify-center mb-6">
        {/* idhar image aaa gi  khanzana ki*/}
          <img src="/" alt="SSF Khazana Logo" className="h-15 w-15" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-center">Log in to your account.</h1>
        <p className="text-gray-600 text-center mb-8">
          Welcome to SSF Khazana, Please put your login credentials below
          to start investing and earning.
        </p>

        <div className="flex mb-6">
          <button
            className={`flex-1 py-3 px-4 text-sm font-medium ${useClientId ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-500'} rounded-l-lg`}
            onClick={() => setUseClientId(true)}
          >
            Use Client ID
          </button>
          <button
            className={`flex-1 py-3 px-4 text-sm font-medium ${!useClientId ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-500'} rounded-r-lg`}
            onClick={() => setUseClientId(false)}
          >
            Use Email ID
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="identifier">
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
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
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
              {/*idhar link add  karna hai*/}
              <a href="" className="text-sm text-[#D4B96B] hover:underline">Forgot password?</a>
            </div>
          </div>
          <button
            className="w-full text-white bg-[#D4B96B] hover:bg-[#C1A75E] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Don't have an account? <a href="#" className="text-[#D6BB6F] hover:underline">Create account</a>
        </p>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              {/* idhar google ka logo */}
              <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <img className="h-5 w-5" src="/public/Google logo.svg" alt="Google logo" />
              </a>
            </div>
            <div>
                {/* idhar google ka logo */}
              <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <img className="h-5 w-5" src="/public/Facebook logo.svg" alt="Facebook logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}