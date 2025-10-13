import DashboardHeader from "@/components/DashboardHeader";
import PatientCollections from "@/components/PatientCollections";
import EobSection from "@/components/EobSection";
import EraSection from "@/components/EraSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-8 space-y-8">
        <DashboardHeader />
        <div className="space-y-8">
          <PatientCollections />
          <EobSection />
          <EraSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
