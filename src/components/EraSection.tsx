import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Receipt } from "lucide-react";

const EraSection = () => {
  const eraData = [
    { id: "ERA-8901", payer: "Medicare", checkNumber: "CHK-001234", amount: 5200.00, claims: 8, date: "2024-01-15", status: "Posted" },
    { id: "ERA-8902", payer: "Medicaid", checkNumber: "CHK-001235", amount: 3800.00, claims: 6, date: "2024-01-15", status: "Posted" },
    { id: "ERA-8903", payer: "Blue Shield", checkNumber: "CHK-001236", amount: 4500.00, claims: 5, date: "2024-01-15", status: "Posted" },
    { id: "ERA-8904", payer: "Anthem", checkNumber: "CHK-001237", amount: 2900.00, claims: 4, date: "2024-01-15", status: "Pending" },
    { id: "ERA-8905", payer: "Kaiser", checkNumber: "CHK-001238", amount: 3600.00, claims: 7, date: "2024-01-15", status: "Posted" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
          <Receipt className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">ERA (Electronic Remittance Advice)</h2>
          <p className="text-sm text-muted-foreground">Electronic payment processing records</p>
        </div>
      </div>

      <Card className="shadow-[var(--shadow-card)]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ERA ID</TableHead>
              <TableHead>Payer Name</TableHead>
              <TableHead>Check Number</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Claims Count</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {eraData.map((era) => (
              <TableRow key={era.id}>
                <TableCell className="font-medium">{era.id}</TableCell>
                <TableCell>{era.payer}</TableCell>
                <TableCell className="text-muted-foreground">{era.checkNumber}</TableCell>
                <TableCell className="font-semibold text-success">
                  ${era.amount.toFixed(2)}
                </TableCell>
                <TableCell>{era.claims}</TableCell>
                <TableCell className="text-muted-foreground">{era.date}</TableCell>
                <TableCell>
                  <Badge 
                    variant={era.status === "Posted" ? "default" : "secondary"}
                    className={era.status === "Posted" ? "bg-success hover:bg-success/90" : ""}
                  >
                    {era.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default EraSection;
