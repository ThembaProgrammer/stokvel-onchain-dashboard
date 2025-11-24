export const formatAddress = (address: string): string => {
    if (address.length <= 7) {
      return address;
    }
    return `${address.slice(0, 5)}...${address.slice(-3)}`;
  };

  export const blockExploreTxLink = (txHash: string): string => {
    return `https://sepolia.etherscan.io/tx/${txHash}`;
  };