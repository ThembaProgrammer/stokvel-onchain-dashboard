// 'use client';

import { blockExploreTxLink, formatAddress } from '@/lib/utils/format';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const data = [
    {
        txHash: '0xf4f7b3cf4e2ff5e1652edb87b49291cfc0dd36c4d60211e30e28802a627dadd6',
        from: 'Stokvel onchain',
        txType: 'Coin purchase',
        zarAmount: 'R6,000.00',
        recipient: 'Stokvel Gold',
        tokenAmount: '5.6',
        dateTime: '23/09/2023 13:00',
    },
    {
        txHash: '0xe52bcfdae714fb342e25f0a06877d61372d450734d783288f8b914eee5bac842',
        from: 'SCA121R078',
        txType: 'Contribution',
        zarAmount: 'R950.00',
        recipient: 'Stokvel onchain',
        tokenAmount: '-',
        dateTime: '22/09/2023 10:45',
    },
    {
        txHash: '0x2bfbdf0670ab7bb420256ec64c1b2178a1e3e6ac9d717aa8e5dfba59b97f7cf0',
        from: 'SCCY1D0E60',
        txType: 'Contribution',
        zarAmount: 'R950.00',
        recipient: 'Stokvel onchain',
        tokenAmount: '-',
        dateTime: '25/09/2023 16:20',
    },
    {
        txHash: '0x3ecd7201639b062d2cc72b76b6d094f65232edcd2b80c5c1a52fe3a23488d396',
        from: 'SCJPG6D010',
        txType: 'Contribution',
        zarAmount: 'R950.00',
        recipient: 'Stokvel onchain',
        tokenAmount: '-',
        dateTime: '22/09/2023 10:45',
    },
    {
        txHash: '0x89753284601f9e882c28e485e588222257297004a422cf64696bfcb8d1e7c41b',
        from: 'SCAZ622JR8',
        txType: 'Contribution',
        zarAmount: 'R950.00',
        recipient: 'Stokvel onchain',
        tokenAmount: '-',
        dateTime: '21/09/2023 14:30',
    },
    {
        txHash: '0x25b7bbcc60c56c1801e06e09156e470b9851da99b85574794f974b4c5caf5ebf',
        from: 'SCAEE1D0E6',
        txType: 'Contribution',
        zarAmount: 'R950.00',
        recipient: 'Stokvel onchain',
        tokenAmount: '-',
        dateTime: '24/09/2023 09:15',
    }, {
        txHash: '0x3ecd7201639b062d2cc72b76b6d094f65232edcd2b80c5c1a52fe3a23488d396',
        from: 'SCBC7D0VC1',
        txType: 'Contribution',
        zarAmount: 'R950.00',
        recipient: 'Stokvel onchain',
        tokenAmount: '-',
        dateTime: '22/09/2023 10:45',
    },
    {
        txHash: '0x89753284601f9e882c28e485e588222257297004a422cf64696bfcb8d1e7c41b',
        from: 'SCAZ68UIR8',
        txType: 'Contribution',
        zarAmount: 'R950.00',
        recipient: 'Stokvel onchain',
        tokenAmount: '-',
        dateTime: '21/09/2023 14:30',
    },
    {
        txHash: '0x25b7bbcc60c56c1801e06e09156e470b9851da99b85574794f974b4c5caf5ebf',
        from: 'SCUIO6T1IU2',
        txType: 'Contribution',
        zarAmount: 'R950.00',
        recipient: 'Stokvel onchain',
        tokenAmount: '-',
        dateTime: '24/09/2023 09:15',
    },
];

export default function Example() {
    return (
        <>
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
                <div>
                    <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                        Recent Transactions
                    </h3>
                    <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
                        Show recent transaction.
                    </p>
                </div>
                <button
                    type="button"
                    className="mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
                >
                    filter
                </button>
            </div>
            <Table className="mt-8">
                <TableHead>
                    <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
                        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Transaction ID
                        </TableHeaderCell>
                        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            From
                        </TableHeaderCell>
                        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            To
                        </TableHeaderCell>
                        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Transaction type
                        </TableHeaderCell>
                        <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Amount
                        </TableHeaderCell>
                        <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Token received
                        </TableHeaderCell>
                        <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            Date & time
                        </TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.txHash}>
                            <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                <a className='text-blue-500 hover:text-blue-700' href={blockExploreTxLink(item.txHash)} target='_blank'>{formatAddress(item.txHash)}</a>
                            </TableCell>
                            <TableCell>{item.from}</TableCell>
                            <TableCell>{item.recipient}</TableCell>
                            <TableCell>
                                <span
                                    className={classNames(
                                        item.txType === 'Coin purchase'
                                            ? 'bg-gold-100 text-gold-800 ring-gold-600/10 dark:bg-gold-500/20 dark:text-gold-500 dark:ring-gold-400/20'
                                            : 'bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-500/20 dark:text-emerald-500 dark:ring-emerald-400/20',
                                        'inline-flex items-center rounded-tremor-small px-2 py-0.5 text-tremor-label font-medium ring-1 ring-inset',
                                    )}
                                >
                                    {item.txType}
                                </span>
                            </TableCell>
                            <TableCell>{item.zarAmount}</TableCell>
                            <TableCell className="text-center">{item.tokenAmount}</TableCell>
                            <TableCell className="text-right">{item.dateTime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}