import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DashboardHeader = () => {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground">RCM Collection Report</h1>
          <p className="text-muted-foreground mt-1 flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {today}
          </p>
        </div>
        <Button variant="outline" size="lg">
          <Calendar className="mr-2 h-4 w-4" />
          Select Date
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-6 shadow-[var(--shadow-card)]">
          <p className="text-sm font-medium text-muted-foreground">Total Collections</p>
          <p className="text-3xl font-bold text-foreground mt-2">$124,592.00</p>
          <p className="text-xs text-success mt-1">+12.5% from yesterday</p>
        </Card>
        
        <Card className="p-6 shadow-[var(--shadow-card)]">
          <p className="text-sm font-medium text-muted-foreground">Patient Payments</p>
          <p className="text-3xl font-bold text-foreground mt-2">$42,180.00</p>
          <p className="text-xs text-success mt-1">+8.2% from yesterday</p>
        </Card>
        
        <Card className="p-6 shadow-[var(--shadow-card)]">
          <p className="text-sm font-medium text-muted-foreground">Insurance (EOB)</p>
          <p className="text-3xl font-bold text-foreground mt-2">$58,912.00</p>
          <p className="text-xs text-success mt-1">+15.3% from yesterday</p>
        </Card>
        
        <Card className="p-6 shadow-[var(--shadow-card)]">
          <p className="text-sm font-medium text-muted-foreground">ERA Payments</p>
          <p className="text-3xl font-bold text-foreground mt-2">$23,500.00</p>
          <p className="text-xs text-success mt-1">+10.1% from yesterday</p>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHeader;
