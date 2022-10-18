import { program } from "commander"
import { getBalance } from "./Balance"
import { sendETH } from "./Send"
import { checkTransaction } from "./Transaction"

    program
        .name ('ethers')
        .description ('CLI interact with ethers')
        .version ('0.1.0')

    program 
        .command ('Balance <address>')
        .description (' Check Balance ')
        .action (async (address)=>{
            const balance = await getBalance (address);
            console.log(`\nETH of ${address} : ${balance} of ETH`);
            
        });

    program
        .command ('Send <amount> <recipient>')
        .description ('Send Ether to another account')
        .action(async (amount, recipient) => {
            const tx = await sendETH(amount, recipient);

            console.log('Transaction Hash', tx.hash);
            
        });

    program
        .command (' CheckTx <hash>')
        .description (' Send the Transaction ')
        .action( async (hash) => {
            const checkTx = await checkTransaction(hash);
            console.log(`Recipt of ${hash}`, checkTx);
            
        });

        program.parse();