import { cropRawData } from './cropRawData';
import { useSelector } from 'react-redux';

export default function Crops() {
  const searchInput = useSelector((state) => state.searchInput.value);

  const tableRows = [];
  cropRawData.forEach(data => {
    if(!JSON.stringify(data).includes(searchInput)) return;
    let image;
    try {
      image = <img src={require(`./assets/images/crops/${data.name}.jpg`)} alt={data.name}/>;
    } catch (error) {
      image = <></>;
    }
    tableRows.push(
      <tr key={data.name}>
        <td>{image}</td>
        <td>{data.name}{ data.topPrice ? '💰' : ''}</td>
        <td className="text-center">{data.category}</td>
        <td>{data.season.join(', ')}</td>
        <td className="text-center">{data.hasVariant ? 'V' : ''}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th className="w-12">圖片</th>
          <th className="w-28">名稱</th>
          <th className="w-20">種類</th>
          <th className="w-32">季節</th>
          <th className="w-12">變種</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};