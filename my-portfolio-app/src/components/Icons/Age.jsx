import { AiOutlineContacts } from "react-icons/ai";

const Age = () => {
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age;
  };

  const age = calculateAge("2002-07-09");

  return (
    <>
      <div className="flex flex-row items-center bg-transparent border border-gray-300 text-sm hover:shadow-md transition">
        <div className="p-2 border-r-[1px] border-gray-300">
          <AiOutlineContacts />
        </div>
        <div className="px-2">{age} years old</div>
      </div>
    </>
  );
};

export default Age;
