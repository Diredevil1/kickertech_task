import { EuroBasket } from "./Tables/EuroBasket/EuroBasker";
import { Premier } from "./Tables/Premier/Premier";
import { Wimbledon } from "./Tables/Wimbledon/Wimbledon";

export const App = () => {
  return (
    <div className="flex justify-center flex-wrap items-center h-screen p-4">
      <Premier />
      <EuroBasket />
      <Wimbledon />
    </div>
  );
};
