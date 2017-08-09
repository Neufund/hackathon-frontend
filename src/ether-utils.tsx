import { isValidAddress } from 'ethereumjs-util';

// Accepts checksummed addresses too
const EtherAddress = (address :string) => isValidAddress(address);

export default EtherAddress;
