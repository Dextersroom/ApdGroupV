import useCountUp from '../hooks/useCountUp';

export default function Stat({ value, suffix = '', label }) {
  const [ref, n] = useCountUp(value);
  return (
    <div className="stat" ref={ref}>
      <span className="stat__value">{n}<span className="stat__suffix">{suffix}</span></span>
      <span className="stat__label">{label}</span>
    </div>
  );
}
