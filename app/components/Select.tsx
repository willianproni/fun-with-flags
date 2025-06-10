type SelectProps = {
  options: string[];
  value: string;
  set: (value: string) => void;
};

export const Select = ({ options, value, set }: SelectProps) => {
  return (
    <div className="w-full md:w-1/3">
      <select
        id="selectCountry"
        className="border border-gray-300 px-4 py-2 rounded-xl shadow-sm w-full  focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-600"
        value={value}
        onChange={(event) => set(event.target.value)}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
