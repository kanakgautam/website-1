import React from 'react'
import './Table.css'

function Table() {
    return (
        <div className='table-container'>
            <table className='table-area'>
                <tr className='table-heading-row'>
                    <th className='table-heading'>
                        <h3>List Of Features</h3>
                    </th>
                    <th className='table-heading'>
                        <h1>$15.00</h1>
                        <h3>Basic Plan</h3>
                        <p>/Monthly</p>
                    </th>
                    <th className='table-heading'>
                        <h1>$35.00</h1>
                        <h3>Advanced Plan</h3>
                        <p>/Monthly</p>
                    </th>
                    <th className='table-heading'>
                        <h1>$65.00</h1>
                        <h3>Expert Plan</h3>
                        <p>/Monthly</p>
                    </th>
                </tr>
                <tr className='table-row'>
                    <td className='table-cell'>Number of feature</td>
                    <td className='table-cell'>6</td>
                    <td className='table-cell'>7</td>
                    <td className='table-cell'>8</td>
                </tr>
                <tr className='table-row'>
                <td className='table-cell'>5 GB Bandwidth</td>
                <td className='table-cell'>✔</td>
                <td className='table-cell'>✔</td>
                <td className='table-cell'>✔</td>
                </tr>
                <tr className='table-row'>
                <td className='table-cell'>Highest Speed</td>
                <td className='table-cell'>✔</td>
                <td className='table-cell'>✔</td>
                <td className='table-cell'>✔</td>
                </tr>
                <tr>
                <td className='table-cell'>1 GB Storage</td>
                <td className='table-cell'>✔</td>
                <td className='table-cell'>✔</td>
                <td className='table-cell'>✔</td>
                </tr>
                <tr className='table-row'>
                <td className='table-cell'>Unlimited Website </td>
                <td className='table-cell'>✔</td>
                <td className='table-cell'>✔</td>
                <td className='table-cell'>✔</td>
                </tr>
                <tr className='table-row'>
                <td className='table-cell'>Unlimited Users</td>
                <td className='table-cell'>✔</td>
                <td className='table-cell'>✔</td>
                <td className='table-cell'>✔</td>
                </tr>
                <tr className='table-row'>
                <td className='table-cell'>24X7 Great Support</td>
                <td className='table-cell'>✔</td>
                <td className='table-cell'>✔</td>
                <td className='table-cell'>✔</td>
                </tr>
                <tr className='table-row'>
                <td className='table-cell'>Data Security and Backup</td>
                <td className='table-cell'>✕</td>
                <td className='table-cell'>✔</td>
                <td className='table-cell'>✔</td>
                </tr>
                <tr className='table-row'>
                <td className='table-cell'>Monthly Reports and Analytics</td>
                <td className='table-cell'>✕</td>
                <td className='table-cell'>✕</td>
                <td className='table-cell'>✔</td>
                </tr>
            </table>
        </div>
    )
}

export default Table
