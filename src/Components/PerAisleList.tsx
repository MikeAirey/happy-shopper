import { Aisle } from "../Types/Aisle";
import { QuantityOfItem } from "../Types/Item";

export type PerAisleListProps = {
  aisle?: Aisle;
  items: QuantityOfItem[];
};

const PerAisleList: React.VFC<PerAisleListProps> = ({ aisle, items }) =>
  items.length > 0 ? (
    <div>
      <h4>{aisle?.name}</h4>
      <ul>
        {items.map((i) => (
          <li key={i.item.id}>
            {i.item.name}
            {i.quantity > 1 ? ` (x${i.quantity})` : ""}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div></div>
  );

export default PerAisleList;
