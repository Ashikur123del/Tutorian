import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const AuthorSelect = () => {
  const [open, setOpen] = useState(false);
  
  const [selected, setSelected] = useState({
    name: "সাইফুল ইসলাম",
    subtitle: "লেখক ও গবেষক",
    img: "https://i.pravatar.cc/40?img=3",
  });

  const authors = [
    {
      name: "সাইফুল ইসলাম",
      subtitle: "লেখক ও গবেষক",
      img: "https://i.pravatar.cc/40?img=3",
    },
    {
      name: "মাহমুদুল হাসান",
      subtitle: "প্রভাষক",
      img: "https://i.pravatar.cc/40?img=5",
    },
  ];

  return (
    <div className="w-full max-w-xl relative mt-10 bg-white p-4 shadow-sm rounded-sm">
      {/* Label */}
      <label className="block text-base  font-semibold text-gray-700 mb-1">
        বইটির লেখক
      </label>

      {/* Select Box */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between border shadow border-gray-300 rounded-md px-3 py-2 cursor-pointer bg-white hover:border-gray-400"
      >
        <div className="flex items-center gap-3">
          <img
            src={selected.img}
            alt="author"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">
              {selected.name}
            </p>
            <p className="text-xs text-gray-500">
              {selected.subtitle}
            </p>
          </div>
        </div>

        <FaChevronDown className="text-gray-500 text-sm" />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white  border border-gray-300 rounded-md shadow-md">
          {authors.map((author, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(author);
                setOpen(false);
              }}
              className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={author.img}
                alt="author"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">{author.name}</p>
                <p className="text-xs text-gray-500">
                  {author.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorSelect;
