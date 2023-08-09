import { cropRawData } from './cropRawData';

export default function Crops({ searchInput }) {
  const tableRows = [];
  cropRawData.forEach(data => {
    if(!JSON.stringify(data).includes(searchInput)) return;
    tableRows.push(
      <tr key={data.name}>
        <td>{data.name}</td>
        <td className="text-center">{data.category}</td>
        <td>{data.season.join(', ')}</td>
        <td className="text-center">{data.hasVariant ? 'V' : ''}</td>
      </tr>
    );
  });

  return (
    <table>
      <tr>
        <th className="w-28">名稱</th>
        <th className="w-20">種類</th>
        <th className="w-32">季節</th>
        <th className="w-12">變種</th>
      </tr>
      {tableRows}
    </table>
  );
};