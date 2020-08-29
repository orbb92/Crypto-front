import React from 'react'

export default function Transaction(props) {
    console.log(props)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Tx hash</th>
                        <th>Block number</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Fees</th>
                        <th>Value</th>

                    </tr>
                </thead>
                <tbody>
                    {props.trx.map((item, index) => {
                        let address = props.wallet === item.to ? 'plus' : 'minus'
                        return <tr key={index}>

                            <td>{ (item.time)}</td>
                            <td title={item.hash}>{item.hash.slice(0, 14) + '...'}</td>
                            <td>{item.blockNumber}</td>
                            <td title={item.from}>{item.from.slice(0, 14) + '...'}</td>
                            <td title={item.to}>{item.to.slice(0, 14) + '...'}</td>
                            <td>{item.fee.toString().slice(0, 10)}</td>
                            <td className={address}>{item.value}</td>

                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
