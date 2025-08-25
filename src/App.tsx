import { Button } from "./components/ui/button";
import { EuroBasket } from "./Tables/EuroBasket/EuroBasket";
import { Premier } from "./Tables/Premier/Premier";
import { Wimbledon } from "./Tables/Wimbledon/Wimbledon";

export const App = () => {
  const handleClearAll = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="flex  flex-wrap gap-4 justify-center items-center h-screen p-4 overflow-x-auto">
      <Button
        onClick={handleClearAll}
        variant="destructive"
        className="absolute top-4 left-4"
      >
        Clear All
      </Button>
      <Premier />
      <EuroBasket />
      <Wimbledon />
    </div>
  );
};
