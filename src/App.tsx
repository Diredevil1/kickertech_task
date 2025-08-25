import { EuroBasket } from "./Tables/EuroBasket/EuroBasket";
import { Premier } from "./Tables/Premier/Premier";
import { Wimbledon } from "./Tables/Wimbledon/Wimbledon";

export const App = () => {
  return (
    <div className="flex  flex-wrap gap-4 justify-center items-center h-screen p-4 overflow-x-auto">
      <Premier />
      <EuroBasket />
      <Wimbledon />
    </div>
  );
};
