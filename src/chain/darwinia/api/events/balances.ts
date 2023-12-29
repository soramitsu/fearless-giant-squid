import { UnknownVersionError } from '../../../../utils'
import { BalancesTransferEvent } from '../../types/events'
import { ChainContext, Event } from '../../types/support'

const Transfer = {
  decode(ctx: ChainContext, event: Event) {
    let e = new BalancesTransferEvent(ctx, event)
    return e.asV6100
  },
}

export default {
  Transfer,
}
