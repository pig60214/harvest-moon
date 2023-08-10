import itemRawData from './itemRawData';
import { useSelector } from 'react-redux';

export default function Item() {
  const searchInput = useSelector((state) => state.searchInput.value);

  const rows = [];

  Object.entries(itemRawData).forEach(entry => {
    const [key, value] = entry;
    if(!key.includes(searchInput)) return;
    rows.push(<tr>
      <td>{key}</td>
      <td>{value}</td>
    </tr>)
  });

  return (
    <table>
      <tr>
        <th>名稱</th>
        <th>取得方式</th>
      </tr>
      {rows}
    </table>
  );
};