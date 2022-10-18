import { ethers, providers } from "ethers";
require ('dotenv').config()


export const getBalance = async (address: string): Promise<string> => {
    const provider = new ethers.providers.InfuraProvider(
        "goerli",
        process.env.SECRET_KEY
    );

    const balance = await provider.getBalance (address);
    const formatted = ethers.utils.formatEther(balance);

    return formatted;
}


