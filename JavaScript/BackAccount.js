function createBankAcoount(accountHolder, mobile, email, balance){
    
    return{
        accountHolder, mobile, email, balance,

        deposit(amount){
            if(amount > 0){
                this.balance += amount;
            }
        },
        withdraw(amount){
            if(amount > 0 && amount <= balance){
                this.balance -= amount;
            }
        },
        checkBalance(){
            console.log(`Account balance is: ${this.balance}`);

        },
        checkBankProfile(){
            console.log(`Account holder is ${this.accountHolder}`);
            console.log(`Email : ${this.email}`);
            console.log(`Phone number is: ${this.mobile}`);
            console.log(`Current balance: ${this.balance}`);
        },
        
    }
}

function sendWithdrawEmail(accountHolder, amount){
    return `To ${accountHolder}
    This to inform you that , the amount of Rs.${amount} is Withdrawn from your bank account.`
}

function sendDepositeEmail(accountHolder, amount){
    return `To ${accountHolder}
    This to inform you that , the amount of Rs.${amount} is Deposited to your bank account.`
}



const myAccount = createBankAcoount("Shilpa", 2344543, "shilpa@gmail.com", 123);
myAccount.deposit(1200);
myAccount.withdraw(20);
myAccount.checkBalance();
myAccount.checkBankProfile();

const bindWithdrawEmail = sendWithdrawEmail.bind(myAccount);
const bindDepositeEmail = sendDepositeEmail.bind(myAccount);

console.log(bindDepositeEmail("Shilpa",100));

