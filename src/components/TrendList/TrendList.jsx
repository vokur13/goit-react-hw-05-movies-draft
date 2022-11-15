export const TrendList = ({ data, onSelect }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id} onClick={() => onSelect(item.id)}>
          <a href={'/home/movies'}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};
