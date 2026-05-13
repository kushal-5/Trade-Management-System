

import { useState, useEffect } from "react"
import { ArrowLeft, X } from "lucide-react"

const PasswordChangeForm = ({ onBack }) => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordStrength, setPasswordStrength] = useState("")
  const [strengthColor, setStrengthColor] = useState("")

  useEffect(() => {
    if (newPassword === "") {
      setPasswordStrength("")
      return
    }

    if (newPassword.length < 6) {
      setPasswordStrength("Weak")
      setStrengthColor("#ff4d4f") 
    } else if (newPassword.length < 10) {
      setPasswordStrength("Medium")
      setStrengthColor("#faad14")
    } else {
      setPasswordStrength("Strong")
      setStrengthColor("#52c41a") 
    }
  }, [newPassword])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Changing password...")
  }

  return (
    <div className="fixed right-0 top-0 h-screen w-[300px] bg-[#141414] shadow-lg overflow-hidden z-50">
      <div className="flex items-center justify-between p-4 mb-6">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Back to Settings"
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </button>

        <button onClick={onBack} className="p-2 hover:bg-gray-800 rounded-lg transition-colors" aria-label="Close">
          <X className="h-5 w-5 text-white" />
        </button>
      </div>

      <div className="px-4">
        <h1 className="text-xl font-semibold text-white mb-6">Change your password</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Old password"
            className="w-full px-4 py-3 bg-[#1D1D1D] border border-[#333] rounded-lg text-white"
          />

          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full px-4 py-3 bg-[#1D1D1D] border border-[#333] rounded-lg text-white"
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="w-full px-4 py-3 bg-[#1D1D1D] border border-[#333] rounded-lg text-white"
          />

          {/* Password strength indicator */}
          {passwordStrength && (
            <div className="flex justify-between items-center text-sm">
              <span className="text-white">Password Strength</span>
              <span style={{ color: strengthColor }}>{passwordStrength}</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-[#F7DF1E] text-black font-medium rounded-lg mt-4 hover:bg-opacity-90 transition-colors"
            disabled={!oldPassword || !newPassword || newPassword !== confirmPassword}
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default PasswordChangeForm

