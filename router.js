const express = require("express");
const route = express.Router();
const accounts = require("./database");
route.get("/accounts", (req, res) => {
  res.json({ userData: accounts });
});

route.post("/accounts", (req, res) => {
  const incomingAccount = req.body;
  accounts.push(incomingAccount);
  res.json(accounts);
});

route.get('/accounts/:id', (req, res) => {
    const accountid = Number(req.params.id);
    const getAccount = accounts.find((account) => account.id === accountid)

    if (!getAccount) {
        res.status(500).send('Account not found');
    } else {
        res.json({userData: [getAccount]})
    }
})

route.put('/accounts/:id', (req, res) => {
    const accountid = Number(req.params.id)
    const body = req.body
    const account = accounts.find((account) => account.id === accountid)
    const index = accounts.indexOf(account)

    if (!account) {
        res.status(500).send('Account not found')
    } else {
        accounts[index] = updatedAccount
        res.end(updatedAccount)
    }
})


route.delete('/accounts/:id', (req, res) => {
    const accountid = Number(req.paarams.id);
    const newAccounts = accounts.filter((account) => (account.id !== accountid))
    
    if (!newAccounts) {
        res.status(500).send("Account not found")
    } else {
        accounts = newAccounts
        res.send(accounts)
    }
})

module.exports = route;
