import {Wrapper} from '../components'
import {PublicApi} from '../providers'
import WidgetCallForPapersItems from './WidgetCallForPapersItems'



const WidgetCallForPapers = () => {

    return <PublicApi endpoint="callforpapers"><Wrapper>
        
        <WidgetCallForPapersItems />

        </Wrapper></PublicApi>
}

export default WidgetCallForPapers