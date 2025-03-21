

const variables = [
  { value: 'first_name', label: 'First Name' },
  { value: 'last_name', label: 'Last Name' },
  { value: 'email', label: 'Email' },
];

const VariablePopover = ({ onSelect }: { onSelect: (variable: { value: string; label: string }) => void }) => {
  return (
    <div className="bg-white border shadow-md rounded p-2">
      {variables.map((variable) => (
        <div
          key={variable.value}
          className="p-2 hover:bg-gray-200 cursor-pointer rounded"
          onClick={() => onSelect(variable)}
        >
          {variable.label}
        </div>
      ))}
    </div>
  );
};

export default VariablePopover;
