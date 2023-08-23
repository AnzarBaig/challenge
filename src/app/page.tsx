"use client"
import SummerReferral from "./components/SummerReferral"
import ZootoolsInsights from "./components/ZootoolsInsights"
import Cards from "./components/Cards"
export default function Home() {
return (

  <div className="mx-auto" style={{backgroundColor : "#f9fafb"}}>
    <SummerReferral/>
    <ZootoolsInsights/>
    <Cards/>
  </div>
)
}