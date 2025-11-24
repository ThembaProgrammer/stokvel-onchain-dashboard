"use client"

import { BarChart } from "@/components/BarChart"

const chartdata = [
  {
    date: "Jan 23",
    "Token recieved": 5.3,
  },
  {
    date: "Feb 23",
    "Token recieved": 9.2,
  },
  {
    date: "Mar 23",
    "Token recieved": 8.2,
  },
  {
    date: "Apr 23",
    "Token recieved": 8.5,
  },
  {
    date: "May 23",
    "Token recieved": 9,
  },
  {
    date: "Jun 23",
    "Token recieved": 8,
  },
  {
    date: "Jul 23",
    "Token recieved": 7.6,
  },
  {
    date: "Aug 23",
    "Token recieved": 6.5,
  },
  {
    date: "Sep 23",
    "Token recieved": 9.6,
  },
  {
    date: "Oct 23",
    "Token recieved": 6.5,
  },
  {
    date: "Nov 23",
    "Token recieved": 7.8,
  },
  {
    date: "Dec 23",
    "Token recieved": 8.1,
  },
]

export const BarChartAxisLabelsExample = () => (
  <BarChart
    className="h-80"
    data={chartdata}
    index="date"
    categories={["Token recieved"]}
    valueFormatter={(number: number) =>
      `${Intl.NumberFormat("us").format(number).toString()}`
    }
    onValueChange={(v) => console.log(v)}
    xAxisLabel="Month"
    yAxisLabel="# of token received"
  />
)