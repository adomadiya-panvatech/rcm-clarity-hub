import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

const PatientCollections = () => {
  const patientData = [
    { id: "PT001", name: "John Smith", amount: 850.00, method: "Credit Card", status: "Completed", time: "09:15 AM" },
    { id: "PT002", name: "Sarah Johnson", amount: 1200.00, method: "Check", status: "Completed", time: "10:30 AM" },
    { id: "PT003", name: "Michael Brown", amount: 450.00, method: "Cash", status: "Completed", time: "11:45 AM" },
    { id: "PT004", name: "Emily Davis", amount: 675.00, method: "Credit Card", status: "Pending", time: "01:20 PM" },
    { id: "PT005", name: "Robert Wilson", amount: 920.00, method: "Debit Card", status: "Completed", time: "02:15 PM" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
          <User className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Patient Collections</h2>
          <p className="text-sm text-muted-foreground">Direct patient payment activity</p>
        </div>
      </div>

      <Card className="shadow-[var(--shadow-card)]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient ID</TableHead>
              <TableHead>Patient Name</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patientData.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">{patient.id}</TableCell>
                <TableCell>{patient.name}</TableCell>
                <TableCell className="font-semibold text-success">
                  ${patient.amount.toFixed(2)}
                </TableCell>
                <TableCell>{patient.method}</TableCell>
                <TableCell>
                  <Badge 
                    variant={patient.status === "Completed" ? "default" : "secondary"}
                    className={patient.status === "Completed" ? "bg-success hover:bg-success/90" : ""}
                  >
                    {patient.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{patient.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default PatientCollections;
