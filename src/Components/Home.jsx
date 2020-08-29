import React, { Component } from 'react'

import Transaction from './Transaction'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Trx: [],
            WalletHash: '0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98'
        }
    }
    getTransactions = async () => {

        var items = await fetch(`http://localhost:5050/${this.state.WalletHash}`).then(result => result.json()).then(result => { return result })
        this.setState({
            Trx:items
        })

    }

    setWallet = (e) => {
        this.setState({
            WalletHash: e.target.value
        })
    }

    componentDidMount = () => {
        //  this.getTransactions()
    }
    render() {
        let address = '0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98'

        return (
            <div>

                <span>Wallet hash <input type='text' onBlur={this.setWallet} defaultValue={address}></input><button onClick={this.getTransactions}>check for transactions</button><select><option value='BTC'>BTC</option >ETH<option value='ETH'>ETH</option></select></span>
                
                    <Transaction wallet={this.state.WalletHash} trx={this.state.Trx}></Transaction>

            <button style={{position:'absolute',left:50 ,bottom:50}}>export to csv</button>
            </div>
        )
    }
}
