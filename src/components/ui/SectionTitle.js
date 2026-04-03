export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-gold">{title}</h2>
      <p className="text-gray-400 mt-2">{subtitle}</p>
    </div>
  );
}