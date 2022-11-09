import React from 'react'

export default function Clients () {
  return (
    <section className='bg-primary'>
      <div className='max-w-7xl mx-auto flex flex-col gap-5'>
        <div className="flex flex-col items-center justify-center pt-44 pb-24">
            <h1 className="text-6xl font-fraunces72ptsupersoft font-semibold">❤️ from our clients</h1>
            <div className="w-14 h-1 bg-secondary mt-12"></div>
        </div>
        <div className='mx-auto flex flex-col gap-5 '>
            {/* Four slanted divs */}
          <div className='flex gap-10'>
            {/* First slanted div */}
            <div className='max-w-[32.375rem] mt-auto max-h-[36.875rem]  slanted  flex flex-col gap-10  '>
            <div className="py-8">
            <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b770510976c9e1777077786_susie.webp" className="rounded-3xl  w-20 mx-auto" />
            </div>
            <div className="flex flex-col items-end space-y-4">
            <h1 className=" text-secondary text-[1.4rem] font-[600] font-fraunces72ptsupersoft">“One of the top design professionals…”</h1>
            <div className="text-primary text-[1.3rem] font-fraunces72ptsupersoft  flex flex-col items-end"> 
            <p>I connect with hundreds of talented folks on a</p>
            <p>regular basis, and I can say with complete</p>
            <p> confidence that Lee is one of the best UX</p>
            <p>designers in Aquent/Vitamin Ts global</p>
            <p className="">network.</p>
            </div>
            <div className="flex flex-col items-end">
            <p className="font-[900] uppercase tracking-[0.23rem] text-primary text-[0.80rem]">SUSIE POLLASKY</p>
            <p className="text-[0.7rem] text-primary font-semibold">Now: Leadership Recruiting @ Product Design</p>
            <p className="text-[0.7rem] text-primary font-semibold">at Facebook</p>
            </div>
            </div>
            </div>
             {/* Second slanted div */}
             <div className='w-[26.125rem] h-[48.563] slanted2  flex flex-col gap-10'>
            <div className="py-8">
            <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b770510976c9e1777077786_susie.webp" className="rounded-3xl  w-20 mx-auto" />
            </div>
            <div className="flex flex-col items-end space-y-4">
            <h1 className="text-secondary text-[1.2rem] font-[600] font-fraunces72ptsupersoft">“They’re a very well-rounded organization…”</h1>
            <p className="text-primary text-[1.3rem] font-fraunces72ptsupersoft  flex flex-col"> 
            Cost per conversion and all of those metrics have dropped significantly. We used to pay an average of $100 per lead that converts… now we have that  down to about $20. Sessions and contacts have also gone up astronomically, at least threefold. Organic search and social media referrals have all continued to skyrocket. We’re really pleased.
            </p>
            <div className="flex mr-auto  flex-col">
            <p className="font-[900] uppercase tracking-[0.23rem] text-primary text-[0.80rem]">MARTIN SPRITZER</p>
            <p className="text-[0.7rem] text-primary font-semibold">General Manager @ iQuoteXpressn</p>
            </div>
            </div>
            </div>
          </div>
          {/* Seconds two divs */}
          <div className='flex gap-10 pb-32'>
            {/* First slanted div */}
            <div className='max-w-[32.375rem] mb-auto max-h-[36.875rem]  slanted3  flex flex-col gap-10  '>
            <div className="py-8">
            <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b770510976c9e1777077786_susie.webp" className="rounded-3xl  w-20 mx-auto" />
            </div>
            <div className="flex flex-col items-end space-y-4">
            <h1 className=" text-secondary text-[1.4rem] font-[600] font-fraunces72ptsupersoft">“One of the top design professionals…”</h1>
            <div className="text-primary text-[1.3rem] font-fraunces72ptsupersoft  flex flex-col items-end"> 
            <p>I connect with hundreds of talented folks on a</p>
            <p>regular basis, and I can say with complete</p>
            <p> confidence that Lee is one of the best UX</p>
            <p>designers in Aquent/Vitamin Ts global</p>
            <p className="">network.</p>
            </div>
            <div className="flex flex-col items-start">
            <p className="font-[900] uppercase tracking-[0.23rem] text-primary text-[0.80rem]">SUSIE POLLASKY</p>
            <p className="text-[0.7rem] text-primary font-semibold">Now: Leadership Recruiting @ Product Design</p>
            <p className="text-[0.7rem] text-primary font-semibold">at Facebook</p>
            </div>
            </div>
            </div>
             {/* Four slanted div */}
             <div className='max-w-[32.375rem] max-h-[36.875rem]  slanted4  flex flex-col gap-10'>
            <div className="py-8">
            <img src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b770510976c9e1777077786_susie.webp" className="rounded-3xl  w-20 mx-auto" />
            </div>
            <div className="flex flex-col items-end space-y-4">
            <h1 className="text-secondary text-[1.2rem] font-[600] font-fraunces72ptsupersoft">“They’re a very well-rounded organization…”</h1>
            <p className="text-primary text-[1.3rem] font-fraunces72ptsupersoft  flex flex-col"> 
            Cost per conversion and all of those metrics have dropped significantly. We used to pay an average of $100 per lead that converts… now we have that  down to about $20. Sessions and contacts have also gone up astronomically, at least threefold. Organic search and social media referrals have all continued to skyrocket. We’re really pleased.
            </p>
            <div className="flex mr-auto  flex-col">
            <p className="font-[900] uppercase tracking-[0.23rem] text-primary text-[0.80rem]">MARTIN SPRITZER</p>
            <p className="text-[0.7rem] text-primary font-semibold">General Manager @ iQuoteXpressn</p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
