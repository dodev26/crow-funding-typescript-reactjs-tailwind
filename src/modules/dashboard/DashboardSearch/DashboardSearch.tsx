import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion";
import { motionBlur } from "~/utils/motion";


export const DashboardSearch = () => {
  const [showSearch, setShowSearch] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)
  const groupInputRef = useRef<HTMLDivElement>(null)

  const handleOnClickOutside = (e: any) => {
    if (groupInputRef.current && resultRef.current) {
      if (groupInputRef.current.contains(e.target) || resultRef.current.contains(e.target)) return
      setShowSearch(false)
    }
  }

  useEffect(() => {
    window.addEventListener("click", (e) => handleOnClickOutside(e))
    return () => window.removeEventListener("click", handleOnClickOutside)
  }, [])

  useEffect(() => {
    if (showSearch) {
      window.scrollTo(0, 0)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [showSearch])

  return (
    <div className="relative z-50">
      <div ref={groupInputRef} className='bg-white dark:bg-darkSecondary dark:border-none border  dark:shadow-none border-strock flex items-center z-10 relative rounded-full shadow-[10px_10px_20px_0px_rgba(218,_213,_213,_0.15)]  p-2'>
        <div className="flex-1 pr-5">
          <input onClick={() => setShowSearch(true)} type="text" placeholder='Do fundrise now' className="pl-4 text-sm w-full dark:text-white bg-transparent placeholder:text-text4 text-text1" />
        </div>
        <button className="flex items-center justify-center w-[72px] rounded-full bg-primary text-white h-10 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>
      </div>
      {showSearch && (
        <>
          <div className="fixed inset-0 bg-text1/60"></div>

          <motion.div
            {...motionBlur}
            ref={resultRef} className="search-results pb-6 pt-3 pl-6 pr-3 w-full lg:w-[843px] bg-white absolute top-full  left-0 z-10 translate-y-5  overflow-hidden rounded-3xl">
            <div className="flex items-center justify-between  bg-graySoft">
              <span className="text-text1 text-sm font-medium underline">See all 10,124 fundraisier</span>
              <button onClick={() => setShowSearch(false)} className="w-[72px] flex items-center justify-center h-[50px] rounded-xl bg-error/20 text-error">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-5">
              <div className="flex flex-col gap-y-5 mb-6">
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
              </div>
              <h3 className="text-sm font-semibold mb-5">Related searchs</h3>
              <div className="flex flex-col gap-y-3">
                <p className="text-sm text-text2"><strong>education</strong> fun</p>
                <p className="text-sm text-text2"><strong>education</strong> fun</p>
              </div>
            </div>
          </motion.div>

        </>
      )
      }
    </div >
  )
}


function SearchItem() {
  return <div className="flex items-center gap-x-5">
    <img src="https://images.unsplash.com/photo-1688748628506-4b1acfc6b82b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80" alt="" className="w-[50px] h-[50px] rounded-lg object-cover" />
    <div className="flex-1 text-sm">
      <h3 className="mb-1"><strong>Education</strong> fund for Durgham Family</h3>
      <p className="text-text3">By Durgham Family</p>
    </div>
  </div>
}