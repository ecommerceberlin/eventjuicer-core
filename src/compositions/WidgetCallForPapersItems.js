"use client"

import {apiFetch} from '../providers'
import { useQuery } from '@tanstack/react-query'


const WidgetCallForPapersItems = () => {

    const {data} = useQuery(apiFetch("callforpapers"))

    console.log(data)
   return <div>asd</div>
}

export default WidgetCallForPapersItems