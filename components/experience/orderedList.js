// components/OrderedList.js

export default function OrderedList({ items }) {
  return (
    <ol className="list-disc pl-5 space-y-2 text-sm pt-4">
      {items.map((item, index) => (
        <li key={index} className="text-white font-sans font-light">
          {item}
        </li>
      ))}
    </ol>
  );
}
