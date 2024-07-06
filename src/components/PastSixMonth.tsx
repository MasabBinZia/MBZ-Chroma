import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";


const chartData = [
  { month: "Sunday", prayers: 5 },
  { month: "Monday", prayers: 5 },
  { month: "Tuesday", prayers: 4 },
  { month: "Wednesday", prayers: 3 },
  { month: "Thrusday", prayers: 5 },
  { month: "Friday", prayers: 4 },
  { month: "Saturday", prayers: 2 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function PastSixMonth() {
  return (
    <Card className="w-full bg-[#333230] border-none">
      <CardHeader>
        <CardTitle className="text-white">Last Week Prayers</CardTitle>
        <CardDescription className="text-gray-400">
          Sunday - Saturday
        </CardDescription>
      </CardHeader>
      <CardContent className="mb-1">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="prayers" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="prayers" fill="var(--color-desktop)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
