import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

const EobSection = () => {
  const eobData = [
    { id: "EOB-2401", insurer: "Blue Cross Blue Shield", claimId: "CLM-45678", amount: 2500.00, paid: 2200.00, adjustment: 300.00, status: "Processed" },
    { id: "EOB-2402", insurer: "Aetna", claimId: "CLM-45679", amount: 1800.00, paid: 1800.00, adjustment: 0.00, status: "Processed" },
    { id: "EOB-2403", insurer: "UnitedHealthcare", claimId: "CLM-45680", amount: 3200.00, paid: 2850.00, adjustment: 350.00, status: "Processed" },
    { id: "EOB-2404", insurer: "Cigna", claimId: "CLM-45681", amount: 1450.00, paid: 1450.00, adjustment: 0.00, status: "Pending" },
    { id: "EOB-2405", insurer: "Humana", claimId: "CLM-45682", amount: 2100.00, paid: 1950.00, adjustment: 150.00, status: "Processed" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
          <FileText className="h-5 w-5 text-accent-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">EOB (Explanation of Benefits)</h2>
          <p className="text-sm text-muted-foreground">Insurance claim processing details</p>
        </div>
      </div>

      <Card className="shadow-[var(--shadow-card)]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>EOB ID</TableHead>
              <TableHead>Insurance Company</TableHead>
              <TableHead>Claim ID</TableHead>
              <TableHead>Billed Amount</TableHead>
              <TableHead>Paid Amount</TableHead>
              <TableHead>Adjustment</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {eobData.map((eob) => (
              <TableRow key={eob.id}>
                <TableCell className="font-medium">{eob.id}</TableCell>
                <TableCell>{eob.insurer}</TableCell>
                <TableCell className="text-muted-foreground">{eob.claimId}</TableCell>
                <TableCell>${eob.amount.toFixed(2)}</TableCell>
                <TableCell className="font-semibold text-success">
                  ${eob.paid.toFixed(2)}
                </TableCell>
                <TableCell className="text-destructive">
                  ${eob.adjustment.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={eob.status === "Processed" ? "default" : "secondary"}
                    className={eob.status === "Processed" ? "bg-success hover:bg-success/90" : ""}
                  >
                    {eob.status}
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

export default EobSection;
