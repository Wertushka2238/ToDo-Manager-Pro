export default function Filters({ value, onChange }) {
  return (
    <select className="filter" value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="all">Усі категорії</option>
      <option value="general">Загальне</option>
      <option value="study">Навчання</option>
      <option value="work">Робота</option>
      <option value="personal">Особисте</option>
    </select>
  );
}