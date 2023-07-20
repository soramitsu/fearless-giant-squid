import {Runtime} from '../../interfaces'
import {AccountId32} from './primitive'
import {pallet_balances, pallet_identity, pallet_indecies, pallet_system} from './pallet'

const prefix = 1

pallet_system.config = {
    AccountId: AccountId32.withPrefix(prefix),
    Lookup: pallet_indecies,
}

pallet_indecies.config = {
    ...pallet_system.config,
}

pallet_balances.config = {
    ...pallet_system.config,
}

pallet_identity.config = {
    ...pallet_system.config,
}

export const runtime: Runtime = {
    Balances: pallet_balances,
    System: pallet_system,
    Indecies: pallet_indecies,
    Identity: pallet_identity,
}
