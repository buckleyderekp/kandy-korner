import React from "react"
import LocationList from "./Location/LocationList"
import { LocationProvider } from "./Location/LocationProvider"

export default () => (
    <>
     <LocationProvider>
         <LocationList />
     </LocationProvider>


    </>
)