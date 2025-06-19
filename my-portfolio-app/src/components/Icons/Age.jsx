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
      <div className="flex flex-row items-center gap-2">
        <div className="bg-slate-200 p-2 rounded-full">
          <AiOutlineContacts />
        </div>
        <span>{age} years old</span>
      </div>
    </>
  );
};

export default Age;
