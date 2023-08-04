import { useState } from "react"
import { useForm } from "react-hook-form"
import ReactModal from "react-modal"
import { Outlet } from "react-router-dom"
import Input from "~/components/Input/Input"
import Button from "~/components/button"
import { Heading } from "~/components/heading/Heading"
import { useModal } from "~/contexts/modal.context"
import { CampaignPerk } from "~/modules/campaign"
import DashboardSidebar from "~/modules/dashboard/DashboardSidebar"
import DashboartTopbar from "~/modules/dashboard/DashboartTopbar"

export const DashboardLayout = () => {
  const { control } = useForm()
  const { openModal } = useModal()

  return <div className="p-6 lg:p-10 bg-inherit min-h-screen">
    {/* <ReactModal isOpen overlayClassName="modal-overlay fixed inset-0 bg-black/40 z-50 flex items-center justify-center" className="modal-content w-full max-w-[521px] bg-white dark:bg-darkSecondary rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-scroll scroll-hidden">

      <button type="button" className="w-10 h-10 flex items-center justify-center rounded hover:bg-error hover:text-white hover:border hover:border-strock absolute right-3 top-3 transition-all  text-text1 z-10 cursor-pointer dark:text-text3 dark:border-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      </button>
      <Heading className="font-bold text-[25px] text-center mb-10 dark:text-white" as="h2">Back this project</Heading>
      <p className="text-sm text-text3 mb-2">
        Enter the contribue amount
      </p>
      <Input hideError control={control} type="text" placeholder="$10" name="amount" className="w-full px-5 py-3 mb-5" />
      <p className="text-sm text-text3 mb-5">Contribution are not associatied with perks</p>
      <Button kind="primary">Continue</Button>
      <div className="mt-[60px]" />
      <div className="flex flex-col gap-y-10">
        {Array(3).fill(0).map((_, index) => (
          <CampaignPerk showButton key={index} />
        ))}
      </div>
    </ReactModal> */}

    <DashboartTopbar />
    <div className="flex items-start gap-x-10 mt-8">
      <DashboardSidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  </div>
}