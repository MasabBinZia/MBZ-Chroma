import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Users = [
  {
    User: "Abdullah",
    Badges: "30",
    Streaks: "5",
  },
  {
    User: "Fatima",
    Badges: "28",
    Streaks: "4",
  },
  {
    User: "Aisha",
    Badges: "27",
    Streaks: "6",
  },
  {
    User: "Bilal",
    Badges: "25 ",
    Streaks: "3",
  },
  {
    User: "Zainab",
    Badges: "24",
    Streaks: "2",
  },
];

export default function LeaderBoardTable() {
  return (
    <Table className="my-5 text-white px-2">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center text-primary">User</TableHead>
          <TableHead className="text-primary text-center">Streaks</TableHead>
          <TableHead className="text-center text-primary">Badges</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Users.map((User) => (
          <TableRow key={User.User}>
            <TableCell className="font-medium">{User.User}</TableCell>
            <TableCell>{User.Streaks} Days</TableCell>
            <TableCell>{User.Badges} Badges</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
