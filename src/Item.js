import itemRawData from './itemRawData';
import { useSelector } from 'react-redux';

export default function Item() {
  const searchInput = useSelector((state) => state.searchInput.value);

  const rows = [];

  Object.entries(itemRawData).forEach(entry => {
    const [key, value] = entry;
    if(!key.includes(searchInput)) return;
    rows.push(<tr key={key}>
      <td>{key}</td>
      <td>{value}</td>
    </tr>)
  });

  return (
    <table>
      <thead>
        <tr>
          <th>名稱</th>
          <th>取得方式</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};