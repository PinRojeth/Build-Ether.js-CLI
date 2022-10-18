import { ethers } from "ethers";
import * as dotenv from 'dotenv'
dotenv.config();

// const provider = new ethers.providers.InfuraProvider("goerli", process.env.SECRET_KEY);

export const checkTransaction = async ( hash :string ): Promise<ethers.providers.TransactionReceipt> => {
    const provider = new ethers.providers.InfuraProvider("goerli", process.env.SECRET_KEY);
    const Recipient = await provider.getTransactionReceipt(hash) // Transaction HUSH

    // console.log(Recipient);
    return Recipient;
}
