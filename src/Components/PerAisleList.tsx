import { Aisle } from "../Types/Aisle";
import { QuantityOfItem } from "../Types/Item";

export type PerAisleListProps = {
    aisle: Aisle;
    items: QuantityOfItem[];
};

const PerAisleList: React.VFC<PerAisleListProps> = ({ aisle, items }) => (
    <div>
      <div>{aisle.name}</div>
      TODO.
      </div>
);

export default PerAisleList;
