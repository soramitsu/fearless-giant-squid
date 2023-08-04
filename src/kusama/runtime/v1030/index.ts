import {Runtime} from '../../interfaces'
import pallet_balances from './pallet/balances'
import pallet_identity from './pallet/identity'
import pallet_indecies from './pallet/indecies'
import pallet_session from './pallet/session'
import pallet_staking from './pallet/staking'
import pallet_system from './pallet/system'
import {AccountId32} from './primitive'

const prefix = 2

export const runtime: Runtime = {
    Balances: pallet_balances(),
    System: pallet_system(),
    Indecies: pallet_indecies(),
    Staking: pallet_staking(),
    Session: pallet_session(),
    Identity: pallet_identity(),
}

runtime.System.Config = {
    AccountId: AccountId32(prefix),
    Lookup: pallet_indecies,
}

runtime.Balances.Config = {
    ...runtime.System.Config,
}

runtime.Staking.Config = {
    ...runtime.System.Config,
}

runtime.Indecies.Config = {
    ...runtime.System.Config,
}

runtime.Session.Config = {
    SessionManager: runtime.Staking,
}

runtime.Identity.Config = {
    ...runtime.System.Config,
}
