import React, { useState } from "react";

type Employee = {
  id: number;
  name: string;
  surname: string;
  avatar: string;
};

const employees: Employee[] = [
  { id: 1, name: "ნიკა", surname: "კვარაცხელია", avatar: "https://via.placeholder.com/30" },
  { id: 2, name: "ანა", surname: "გოგოლაძე", avatar: "https://via.placeholder.com/30" },
  { id: 3, name: "ლევანი", surname: "ჭანტურია", avatar: "https://via.placeholder.com/30" },
];

const departments = ["IT", "მარკეტინგი", "HR", "ფინანსები"];
const priorities = ["მაღალი", "საშუალო", "დაბალი"];

const Dropdown: React.FC = () => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const toggleSelection = (value: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div className="dropdown-container">
      <MultiSelectDropdown
        label="დეპარტამენტი"
        options={departments}
        selected={selectedDepartments}
        onSelect={(value) => toggleSelection(value, setSelectedDepartments)}
      />

      <MultiSelectDropdown
        label="პრიორიტეტი"
        options={priorities}
        selected={selectedPriorities}
        onSelect={(value) => toggleSelection(value, setSelectedPriorities)}
      />

      <SingleSelectDropdown
        label="თანამშრომელი"
        options={employees}
        selected={selectedEmployee}
        onSelect={setSelectedEmployee}
      />
    </div>
  );
};

const MultiSelectDropdown: React.FC<{
  label: string;
  options: string[];
  selected: string[];
  onSelect: (value: string) => void;
}> = ({ label, options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown" onBlur={() => setIsOpen(false)} tabIndex={0}>
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {label} <span className="arrow">▼</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option} onClick={() => onSelect(option)} className={selected.includes(option) ? "selected" : ""}>
              {selected.includes(option) ? "✅ " : ""}{option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


const SingleSelectDropdown: React.FC<{
  label: string;
  options: Employee[];
  selected: Employee | null;
  onSelect: (employee: Employee) => void;
}> = ({ label, options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown" onBlur={() => setIsOpen(false)} tabIndex={0}>
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {selected ? (
          <>
            <img src={selected.avatar} alt="avatar" className="avatar" /> {selected.name} {selected.surname}
          </>
        ) : (
          label
        )}
        <span className="arrow">▼</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((employee) => (
            <li key={employee.id} onClick={() => { onSelect(employee); setIsOpen(false); }}>
              <img src={employee.avatar} alt="avatar" className="avatar" /> {employee.name} {employee.surname}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
