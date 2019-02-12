
class Profile {
    constuctor({username, name, lastName, password}) {
        this.username = username;
        this.name = name;
        this.lastName = lastName;
        this.password = password;
    }

    createUser(
        {
            username,
            name: { firstName, lastName },
            password,
        },
        callback
    ) {
        return ApiConnector.createUser({username, name: { firstName, lastName }, password}, (err, data) => {
            callback(err, data);
        });
    }

    performLogin({ username, password }, callback) {
        return ApiConnector.performLogin({ username, password }, (err, data) => {
            callback(err, data);
        });
    }

    addMoney({ currency, amount }, callback) {
        return ApiConnector.addMoney({ currency, amount }, (err, data) => {
            callback(err, data);
        });
    }

    transferMoney({ to, amount }, callback) {
        return ApiConnector.transferMoney({ to, amount }, (err, data) => {
            callback(err, data);
        });
    }

    convertMoney({ fromCurrency, targetCurrency, targetAmount }, callback) {
        return ApiConnector.convertMoney({ fromCurrency, targetCurrency, targetAmount }, (err, data) => {
            callback(err, data);
        });
    }

    getStocks(callback) {
       return ApiConnector.getStocks((err, data) => {
            callback(err, data);
       });
    }
}


function main(){
    const Oleg = new Profile({
                    username: 'oleg',
                    name: { firstName: 'oleg', lastName: 'Chernyshev' },
                    password: 'done'
                });

    Oleg.createUser({
                    username: 'oleg',
                    name: { firstName: 'oleg', lastName: 'Chernyshev' },
                    password: 'done'
                    }, (err, data) => {
        if (err) {
            return Oleg.performLogin({ username: 'oleg', password: 'done' }, (err, data) => {
                if (err) {
                    console.error(err.code);
                } else {
                    console.log(`Creating user Oleg`);
                    console.log(`Oleg is authorizing`);
                    addMoneyOleg();
                }
            });
        }
        console.log(`Creating user Oleg`);
        console.log(`Oleg is creating`);
        addMoneyOleg();
    });

    const Ivan = new Profile({
                    username: 'djon',
                    name: { firstName: 'djon', lastName: 'Chernyshev' },
                    password: 'djonspass',
                });

    Ivan.createUser({
                    username: 'djon',
                    name: { firstName: 'djon', lastName: 'Chernyshev' },
                    password: 'djonspass',
                    }, (err, data) => {
        if (err) {
            return Ivan.performLogin({ username: 'djon', password: 'djonspass' }, (err, data) => {
                if (err) {
                    return console.error(err.code);
                }
                console.log(`Creating user Ivan`);
                console.log(`Ivan is authorizing`);
                addMoneyIvan();
            });
        }
        console.log(`Creating user Ivan`);
        console.log(`Ivan is creating`);
        addMoneyIvan();

    });


    function addMoneyIvan() {
        Ivan.addMoney({ currency: 'RUB', amount: 500000 }, (err, data) => {
            if (err) {
                return console.log('Error during adding money to Ivan');
            }
            console.log(`Added 500000 rub to Ivan`);
            drpMoneyIvan();
        });
    }

    function addMoneyOleg() {
        Oleg.addMoney({ currency: 'RUB', amount: 500000 }, (err, data) => {
            if (err) {
                return console.log('Error during adding money to Oleg');
            }
            console.log(`Added 500000 rub to Oleg`);
            drpMoneyOleg();
        });
    }

    function drpMoneyIvan() {
        Ivan.convertMoney({ fromCurrency: 'RUB', targetCurrency: 'NETCOIN', targetAmount: 100 }, (err, data) => {
            if (err) {
                console.log('Не удалось конвертировать');
            } else {
                console.log(`Converting RUB to 100 Netcoin`);
                Ivan.transferMoney({ to: 'oleg', amount: 100 }, (err, data) => {
                    if (err) {
                        return console.log('У вас недостаточно средств');
                    }
                       console.log(`transfering 100 to Oleg`);
                });

                Ivan.getStocks((err, data) => {
                    if(err) {
                        return console.error(err.message);
                    }
                    console.log('converting to coins ' + data[0]);
                });
            }
        });
    }  

    function drpMoneyOleg() {
        Oleg.convertMoney({ fromCurrency: 'RUB', targetCurrency: 'NETCOIN', targetAmount: 100 }, (err, data) => {
            if (err) {
                return console.log('Не удалось конвертировать');
            }
            console.log(`Converting RUB to 100 Netcoin`);
            Oleg.transferMoney({ to: 'djon', amount: 100 }, (err, data) => {
                if (err) {
                    return console.log('У вас недостаточно средств');
                }
                console.log(`transfering 100 to Ivan`);
            });

            Oleg.getStocks((err, data) => {
                if(err) {
                    return console.error(err.message);
                }
                console.log('converting to coins ' + data[0]);
            });
            }
        });
    } 
}
main();
