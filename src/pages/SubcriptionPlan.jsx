import React from 'react'
import PriceStateCard from '../Components/PriceStateCard'
import PriceCard from '../Components/PriceCard'

function SubcriptionPlan() {
  return (
    <div className='p-4 mx-15 my-4 lg:mb-60'>
        <h1 className='font-medium text-lg'>Power Up Your Store With Premium Features</h1>
        <p>Choose a pricing plan that meets your needs!</p>
        <PriceStateCard />
        <div className='flex flex-col md:flex-row md:justify-between '>
        <PriceCard text={"Choose Creator Plan"} price={"$20"} title={"Creator"} videos={"20"}/>
        <PriceCard text={"Choose Scale Plan"} title={"Scale"} bg={"#303030"} textColor={"white"} price={"$40"} videos={"40"}/>
        <PriceCard text={"Choose Mastery Plan"} title={"Mastery"} price={"$60"} videos={"60"}/>
        </div>
    </div>
  )
}

export default SubcriptionPlan